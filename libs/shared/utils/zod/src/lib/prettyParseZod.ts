import { z, ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

export function prettyParseZod<T extends z.Schema>(
  schema: T,
  data: unknown
): z.infer<T> {
  try {
    return schema.parse(data);
  } catch (e) {
    if (e instanceof ZodError) {
      throw fromZodError(e);
    }
    throw e;
  }
}
