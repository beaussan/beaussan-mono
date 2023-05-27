import ThirdPartyPasswordlessNode, {
  TypeProvider,
  User,
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

  postSignUp?: (user: User) => Promise<void>;

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
        override: () => ({
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

            if (result.status !== 'OK' || !result.user) {
              return result;
            }

            await UserRoles.createNewRoleOrAddPermissions(defaultRole, []);
            await UserRoles.addRoleToUser(result.user.id, defaultRole);

            if (input.postSignUp) {
              await input.postSignUp(result.user);
            }
            return result;
          },

          async thirdPartySignInUp(data) {
            const result = await originalImplementation.thirdPartySignInUp(
              data
            );

            await UserRoles.createNewRoleOrAddPermissions(defaultRole, []);
            await UserRoles.addRoleToUser(result.user.id, defaultRole);

            if (input.postSignUp) {
              await input.postSignUp(result.user);
            }

            return result;
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
              console.log('step 1', input);
              const { roles } = await UserRoles.getRolesForUser(input.userId);

              console.log('step 2', roles);
              input.accessTokenPayload = {
                ...input.accessTokenPayload,
                'https://hasura.io/jwt/claims': {
                  'x-hasura-user-id': input.userId,
                  'x-hasura-default-role': roles[0],
                  'x-hasura-allowed-roles': roles,
                },
              };
              console.log('step 3');

              try {
                const result = await originalImplementation.createNewSession(
                  input
                );

                console.log('step 4', result);
                return result;
              } catch (e) {
                console.error(e);
                throw e;
              }
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
