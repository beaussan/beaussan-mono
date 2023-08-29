import { ServerClient } from 'postmark';
import { getEnvVariable } from '../common/getEnv';

const client = new ServerClient(getEnvVariable('POSTMARK_KEY'));

const baseTemplateParams = {
  product_url: getEnvVariable('POSTMARK_APP_URL'),
  support_mail: getEnvVariable('POSTMARK_SUPPORT_EMAIL'),
};

const From = getEnvVariable('POSTMARK_FROM_EMAIL');

const aliasNames = {
  emailLogin: getEnvVariable('POSTMARK_MAIL_LOGIN_ALIAS'),
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
