/**
 * This file sets you up with with structure needed for an ESLint rule.
 *
 * It leverages utilities from @typescript-eslint to allow TypeScript to
 * provide autocompletions etc for the configuration.
 *
 * Your rule's custom logic will live within the create() method below
 * and you can learn more about writing ESLint rules on the official guide:
 *
 * https://eslint.org/docs/developer-guide/working-with-rules
 *
 * You can also view many examples of existing rules here:
 *
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/rules
 */

import type { Rule } from 'eslint';

import type { AST } from 'jsonc-eslint-parser';
import { ESLintUtils } from '@typescript-eslint/utils';

// May3
interface RuleModule {
  meta: Rule.RuleMetaData;
  create(context: Rule.RuleContext): Rule.RuleListener;
}

// NOTE: The rule will be available in ESLint configs as "@nrwl/nx/workspace/allowed-project-tags"
export const RULE_NAME = 'allowed-project-tags';

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: ``,
      recommended: 'error',
    },
    schema: [],
    messages: {
      disallow: 'Not good value',
    },
  },
  defaultOptions: [],
  create(context) {
    console.error('FILENAME:', context.getFilename());
    /*

    if (
      !(context.parserServices as any).isJSON
    ) {
      return {};
    }

     */
    return {
      JSONLiteral(node: AST.JSONLiteral) {
        // console.log(context.getFilename());
        // console.log(node);
        context.report({
          loc: node.loc,
          messageId: 'disallow',
        });
      },
    };
  },
});

/*

export const rule = {
  name: RULE_NAME,
  meta: {},
  create(context) {
    if (!context.parserServices.isJSON) {
      return {};
    }
    return {
      JSONLiteral(node: AST.JSONLiteral) {
        context.report({
          loc: node.loc,
          messageId: 'disallow',
          fix: (fixer) => {
            return fixer.replaceTextRange(node.range, `${node.value}`);
          },
        });
      },
    };
  },
};
 */
