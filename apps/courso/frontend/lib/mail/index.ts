import { ServerClient } from 'postmark';
import { serverEnv } from '../env';

const client = new ServerClient(serverEnv.POSTMARK_API_TOKEN);

const baseTemplateParams = {
  product_url: serverEnv.NEXTAUTH_URL,
  support_mail: serverEnv.POSTMARK_SUPPORT_EMAIL,
};

const From = serverEnv.POSTMARK_FROM_EMAIL;

const aliasNames = {
  emailLogin: serverEnv.POSTMARK_MAIL_LOGIN_ALIAS,
};

const sendEmail = (to: string, templateName: string, templateParams: any) => {
  return client.sendEmailWithTemplate({
    From,
    To: to,
    TemplateAlias: templateName,
    TemplateModel: {
      ...baseTemplateParams,
      ...templateParams,
    },
  });
};

export const sendLoginEmail = (to: string, actionUrl: string) => {
  return sendEmail(to, aliasNames.emailLogin, { action_url: actionUrl });
};
