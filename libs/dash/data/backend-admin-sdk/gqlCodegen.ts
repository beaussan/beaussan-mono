import { CodegenConfig } from '@graphql-codegen/cli';
import { codegen } from '../../gqlCodegen';

const config: CodegenConfig = codegen.backend(__dirname);

export default config;
