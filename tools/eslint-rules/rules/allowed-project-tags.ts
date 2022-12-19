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

import type { AST } from 'jsonc-eslint-parser';
import { ESLintUtils } from '@typescript-eslint/utils';

// NOTE: The rule will be available in ESLint configs as "@nrwl/nx/workspace/allowed-project-tags"
export const RULE_NAME = 'allowed-project-tags';
type MessageIds =
  | 'disallow'
  | 'scopeRequired'
  | 'typeRequired'
  | 'onlyOneScope'
  | 'onlyOneType'
  | 'typeUnknown'
  | 'scopeUnknown';

type Options = [
  {
    scopeTags: string[];
    typeTags: string[];
    allowMultipleScope: boolean;
  }
];

export const rule = ESLintUtils.RuleCreator(() => __filename)<
  Options,
  MessageIds
>({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: ``,
      recommended: 'error',
    },
    schema: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          scopeTags: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          typeTags: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          allowMultipleScope: {
            type: 'boolean',
          },
        },
      },
    ],
    messages: {
      disallow: 'Not good value',
      scopeRequired:
        'A scope tag is required. It must be one of {{possibilities}}.',
      typeRequired:
        'A type tag is required. It must be one of {{possibilities}}.',
      onlyOneScope: 'Only one scope tag should be applied',
      onlyOneType: 'Only one type tag should be applied',
      typeUnknown:
        'Type "{{found}}" is not in the list of possible types. Possible types are {{possibilities}}',
      scopeUnknown:
        'Scope "{{found}}" is not in the list of possible scopes. Possible types are {{possibilities}}',
    },
  },
  defaultOptions: [
    {
      scopeTags: ['shared'],
      typeTags: ['ui', 'utils', 'data-access', 'feature', 'app'],
      allowMultipleScope: false,
    },
  ],
  create(context, options) {
    if (
      !(context.parserServices as any).isJSON ||
      !context.getFilename().endsWith('/project.json')
    ) {
      return {};
    }

    return {
      ['JSONExpressionStatement > JSONObjectExpression'](
        node: AST.JSONObjectExpression
      ) {
        for (let property of node.properties) {
          if (!isTagJsonObjectExpression(property)) {
            continue;
          }
          const tags = extractStringArrayFromAst(property);
          // console.log('found tags: ', tags);

          const reporter: ReportError = (code, data) =>
            context.report({
              loc: property.value.loc,
              messageId: code,
              data,
            });

          validateTags(tags, context.options[0], reporter);
        }
      },
    };
  },
});

type ReportError = (
  message: MessageIds,
  data?: Record<string, unknown>
) => void;

function formatPrettyList(items: string[]): string {
  return items.map((tag) => `"${tag}"`).join(', ');
}

function validateTags(
  tags: string[],
  options: Options[0],
  reporter: ReportError
) {
  const scopeTags = tags
    .filter((it) => it.startsWith('scope:'))
    .map((scope) => scope.substring(6));
  const typeTags = tags
    .filter((it) => it.startsWith('type:'))
    .map((scope) => scope.substring(5));

  if (scopeTags.length === 0) {
    reporter('scopeRequired', {
      possibilities: formatPrettyList(options.scopeTags),
    });
  }

  if (typeTags.length === 0) {
    reporter('typeRequired', {
      possibilities: formatPrettyList(options.typeTags),
    });
  }

  if (!options.allowMultipleScope) {
    if (scopeTags.length > 1) {
      reporter('onlyOneScope');
    }

    if (typeTags.length > 1) {
      reporter('onlyOneType');
    }
  }

  checkIfAllTagsExists(scopeTags, options.scopeTags, reporter, 'scopeUnknown');
  checkIfAllTagsExists(typeTags, options.typeTags, reporter, 'typeUnknown');

  // console.log(tags);
  // reporter('disallow');
}

function checkIfAllTagsExists(
  tags: string[],
  allowedTags: string[],
  reporter: ReportError,
  messageId: MessageIds
) {
  if (!tags.every((tag) => allowedTags.includes(tag))) {
    const unknownTags = tags.filter((tag) => !allowedTags.includes(tag));

    for (let tag of unknownTags) {
      reporter(messageId, {
        found: tag,
        possibilities: formatPrettyList(allowedTags),
      });
    }
  }
}

function extractStringArrayFromAst(node: AST.JSONProperty): string[] {
  if (node.value.type !== 'JSONArrayExpression') {
    return [];
  }

  return node.value.elements.map((element) => {
    if (element.type !== 'JSONLiteral') {
      return undefined;
    }
    return `${element.value}`;
  });
}

function isTagJsonObjectExpression(node: AST.JSONProperty): boolean {
  return node.key.type === 'JSONLiteral' && node.key.value === 'tags';
}
