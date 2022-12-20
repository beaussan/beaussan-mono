import { StandardOptions } from '../../utils/normalizedOptions';

export type TsLibraryGeneratorSchema = StandardOptions & {
  publishable?: boolean;
  testEnvironment?: 'jsdom' | 'node';
};
