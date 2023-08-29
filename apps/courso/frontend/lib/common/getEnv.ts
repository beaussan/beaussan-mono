export const getEnvVariable = (name: string): string => {
  const maybeVar = process.env[name];
  if (!maybeVar) {
    const errorMessage = `Variable ${name} is not present`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  return maybeVar;
};
