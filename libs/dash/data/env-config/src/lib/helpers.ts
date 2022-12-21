export const getHasuraUrls = (baseUrl: string, isHttps: boolean) => {
  const baseUrlHasura = `${baseUrl}/v1/graphql`;

  const httpHasuraUrl = `${isHttps ? 'https' : 'http'}://${baseUrlHasura}`;
  const wsHasuraUrl = `${isHttps ? 'wss' : 'ws'}://${baseUrlHasura}`;

  return {
    NEXT_PUBLIC_HASURA_GRAPHQL_HTTP_URL: httpHasuraUrl,
    NEXT_PUBLIC_HASURA_GRAPHQL_WS_URL: wsHasuraUrl,
  };
};
