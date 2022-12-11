import ThirdPartyPasswordlessReact from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import SessionReact from 'supertokens-auth-react/recipe/session';
import { appInfo } from './appInfo';
import Router from 'next/router';
import process from 'process';

export const frontendConfig = () => {
  return {
    appInfo,
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
      ThirdPartyPasswordlessReact.init({
        signInUpFeature: {
          providers: [ThirdPartyPasswordlessReact.Github.init()],
        },
        contactMethod: 'EMAIL',
      }),
      SessionReact.init(),
    ],
    windowHandler: (oI: any) => {
      return {
        ...oI,
        location: {
          ...oI.location,
          setHref: (href: string) => {
            Router.push(href);
          },
        },
      };
    },
  };
};
