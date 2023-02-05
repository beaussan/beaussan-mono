import { codegen } from '../../gqlCodegen';
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = codegen.frontend(__dirname);

export default config;
