import { tsquery } from '@phenomnomnominal/tsquery';
import * as ts from 'typescript';
import { Tree } from '@nrwl/devkit';

export const appendJestConfigOption = (
  tree: Tree,
  jestPath: string,
  ...properties: ts.PropertyAssignment[]
) => {
  const source = tree.read(jestPath);
  const content = source.toString();

  const ast = tsquery.ast(content);
  const newValueSimpler = tsquery.map(
    ast,
    'ExportAssignment > ObjectLiteralExpression',
    (node) => {
      if (ts.isObjectLiteralExpression(node)) {
        return ts.factory.updateObjectLiteralExpression(node, [
          ...node.properties,
          ...properties,
        ]);
      }
    }
  );

  const result = ts.createPrinter().printFile(newValueSimpler);

  tree.write(jestPath, result);
};
