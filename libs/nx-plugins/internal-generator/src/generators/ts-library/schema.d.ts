import { TagScope, TagType } from '../../utils/consts';

export interface TsLibraryGeneratorSchema {
  name: string;
  tags?: string;
  directory?: string;
  type: TagType;
  scope: TagScope;

  publishable?: boolean;
  testEnvironment?: 'jsdom' | 'node';
}
