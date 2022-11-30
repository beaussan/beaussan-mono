import ThirdPartyPasswordlessNode, {
  TypeProvider,
} from 'supertokens-node/recipe/thirdpartypasswordless';
import SessionNode from 'supertokens-node/recipe/session';
import Dashboard from 'supertokens-node/recipe/dashboard';
import UserRoles from 'supertokens-node/recipe/userroles';
import { Client } from 'postmark';
import { RecipeListFunction } from 'supertokens-node/types';

interface InputGetRecipes {
  providers: {
    github?: {
      clientSecret?: string;
      clientId?: string;
    };
  };
  defaultRole?: string;
  dashboardAPiKey?: string;

  // Todo: make own wrapper around postmark to have the send email prefilled
  mail: {
    from: string;
    templateName: string;
    extraTemplateModel: Record<string, string>;
    postmarkClient: Client;
    doNotSendMail: boolean;
  };
}

export function getServerRecipes(input: InputGetRecipes): RecipeListFunction[] {
  const defaultRole = input.defaultRole ?? 'user';

  const providers: TypeProvider[] = [];
  if (
    input?.providers?.github?.clientId &&
    input?.providers?.github?.clientSecret
  ) {
    providers.push(
      ThirdPartyPasswordlessNode.Github({
        clientSecret: input.providers.github.clientSecret,
        clientId: input.providers.github.clientId,
      })
    );
  }

  const recipies = [
    ThirdPartyPasswordlessNode.init({
      providers,
      flowType: 'MAGIC_LINK',
      contactMethod: 'EMAIL',

      emailDelivery: {
        override: (originalImplementation) => ({
          sendEmail: async (mailInput) => {
            if (input.mail.doNotSendMail) {
              console.log('Sending login link', mailInput.urlWithLinkCode);
              console.log('To this email', mailInput.email);
              return;
            }
            await input.mail.postmarkClient.sendEmailWithTemplate({
              To: mailInput.email,
              From: input.mail.from,
              TemplateAlias: input.mail.templateName,
              TemplateModel: {
                loginLink: mailInput.urlWithLinkCode,
                ...input.mail.extraTemplateModel,
              },
            });
          },
        }),
      },

      override: {
        functions: (originalImplementation) => ({
          ...originalImplementation,

          async consumeCode(data) {
            const result = await originalImplementation.consumeCode(data);

            if (result.status === 'OK' && result.user) {
              await UserRoles.createNewRoleOrAddPermissions(defaultRole, []);
              await UserRoles.addRoleToUser(result.user.id, defaultRole);
            }
            return result;
          },

          async thirdPartySignInUp(input) {
            const data = await originalImplementation.thirdPartySignInUp(input);

            await UserRoles.createNewRoleOrAddPermissions(defaultRole, []);
            await UserRoles.addRoleToUser(data.user.id, defaultRole);

            return data;
          },
        }),
      },
    }),
    UserRoles.init(),
    SessionNode.init({
      jwt: {
        enable: true,
      },
      override: {
        functions: function (originalImplementation) {
          return {
            ...originalImplementation,

            createNewSession: async function (input) {
              const { roles } = await UserRoles.getRolesForUser(input.userId);

              input.accessTokenPayload = {
                ...input.accessTokenPayload,
                'https://hasura.io/jwt/claims': {
                  'x-hasura-user-id': input.userId,
                  'x-hasura-default-role': roles[0],
                  'x-hasura-allowed-roles': roles,
                },
              };

              return originalImplementation.createNewSession(input);
            },
          };
        },
      },
    }),
  ];

  if (input.dashboardAPiKey) {
    recipies.push(
      Dashboard.init({
        apiKey: input.dashboardAPiKey,
      })
    );
  }

  return recipies;
}
