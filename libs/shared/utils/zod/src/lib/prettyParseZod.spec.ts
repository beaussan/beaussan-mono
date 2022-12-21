import { z } from 'zod';
import { ValidationError } from 'zod-validation-error';
import { prettyParseZod } from './prettyParseZod';

describe('prettyParseZod', () => {
  const schema = z.string();

  it('should return the value provided if the schema is valid', () => {
    expect(prettyParseZod(schema, 'A')).toEqual('A');
  });

  it('should throw a pretty error when the schema is not matching', () => {
    expect(() => prettyParseZod(schema, [])).toThrowError(ValidationError);
  });
});
