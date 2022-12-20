import { TSESLint } from '@typescript-eslint/utils';
import { rule, RULE_NAME } from './allowed-project-tags';

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('jsonc-eslint-parser'),
});

ruleTester.run(RULE_NAME, rule, {
  valid: [`{ "value": true }`],
  invalid: [],
});
