import { TagScope, TagType } from '../../utils/consts';

export interface ReactLibraryGeneratorSchema {
  name: string;
  tags?: string;
  directory?: string;
  type: TagType;
  scope: TagScope;
}
