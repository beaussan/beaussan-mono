import pino from 'pino';

const mainLogger = pino({
  hooks: {
    logMethod(args, method) {
      if (args.length === 2) {
        args[0] = `${args[0]} %j`;
      }
      method.apply(this, args as any);
    },
  },
});

mainLogger.level = 'trace';

export const createLogger = ({ component }: { component: string }) => {
  return mainLogger.child({ component });
};
