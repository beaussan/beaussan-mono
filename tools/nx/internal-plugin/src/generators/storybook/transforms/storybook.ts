import * as ts from 'typescript';
import { Tree } from '@nx/devkit';
import * as path from 'path';
import { tsquery } from '@phenomnomnominal/tsquery';
import { NormalizedSchema } from '../generator';

function getNewArrayDefForStories(
  identifier: ts.Identifier,
  arrayVal: ts.ArrayLiteralExpression
): ts.PropertyAssignment {
  const valuesWeKeep = arrayVal.elements.filter(
    (item) =>
      ts.isSpreadElement(item) ||
      (ts.isStringLiteral(item) &&
        ![
          '../src/lib/**/*.stories.mdx',
          '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
        ].includes(item.text))
  );

  return ts.factory.createPropertyAssignment(
    identifier,
    ts.factory.createArrayLiteralExpression([
      ...valuesWeKeep,
      ts.factory.createStringLiteral('../../**/*.stories.mdx', true),
      ts.factory.createStringLiteral(
        '../../**/*.stories.@(js|jsx|ts|tsx)',
        true
      ),
    ])
  );
}

export async function tweakMainTsStorybookConfig(
  tree: Tree,
  options: NormalizedSchema
) {
  const filePath = path.join(options.projectRoot, '.storybook', 'main.ts');
  const source = tree.read(filePath).toString();

  let ast = tsquery.ast(source);
  ast = tsquery.map(
    ast,
    'VariableDeclaration > ObjectLiteralExpression',
    (node) => {
      if (!ts.isObjectLiteralExpression(node)) {
        return node;
      }
      const maybeStaticDirs = node.properties.find((item) => {
        if (!ts.isPropertyAssignment(item)) {
          return false;
        }
        const name = item.name;
        if (!ts.isIdentifier(name)) {
          return false;
        }
        return name.text === 'staticDirs';
      });
      if (maybeStaticDirs) {
        throw new Error('Don t know how to deal with that yet.');
      }
      return ts.factory.updateObjectLiteralExpression(node, [
        ts.factory.createPropertyAssignment(
          ts.factory.createIdentifier('staticDirs'),
          ts.factory.createArrayLiteralExpression([
            ts.factory.createStringLiteral('../../../../tools/msw', true),
          ])
        ),
        ...node.properties,
      ]);
    }
  );

  ast = tsquery.map(
    ast,
    'ObjectLiteralExpression PropertyAssignment',
    (node) => {
      if (!ts.isPropertyAssignment(node)) {
        return node;
      }
      const identifier = node.name;
      if (!ts.isIdentifier(identifier)) {
        return node;
      }

      if (identifier.text !== 'stories') {
        return node;
      }

      // Child 0 is the identifier, 1 is the ':' and 2 is the array expression
      const arrayVal = node.getChildAt(2);

      if (!ts.isArrayLiteralExpression(arrayVal)) {
        throw new Error('Not an array was found, error !');
      }

      return getNewArrayDefForStories(identifier, arrayVal);
    }
  );

  const result = ts.createPrinter().printFile(ast);

  tree.write(filePath, result);
}
