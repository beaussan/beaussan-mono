import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import libraryGenerator from '../library/generator';
import { ReactContextGeneratorSchema } from './schema';

describe('react-context generator', () => {
  let appTree: Tree;
  const options: ReactContextGeneratorSchema = {
    name: 'userData',
    project: 'shared-data-test',
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
  });

  it('should run successfully', async () => {
    await libraryGenerator(appTree, {
      name: 'test',
      type: 'data',
      scope: 'shared',
    });
    await generator(appTree, options);
    const result = appTree
      .read('libs/shared/data/test/src/lib/UserData.tsx')
      .toString();
    expect(result).toMatchInlineSnapshot(`
      "import React, { createContext } from 'react';


      const useUserDataValue = () => {
        return { data: 1 };
      };

      export type UserDataContextType = ReturnType<
        typeof useUserDataValue
      >;

      const UseUserData = createContext<
        UserDataContextType | undefined
      >(undefined);

      export const UserDataProvider = ({
        children,
      }: {
        children: React.ReactNode;
      }) => {
        const value = useUserDataValue();

        return (
          <UseUserData.Provider value={value}>
            {children}
          </UseUserData.Provider>
        );
      };

      export const MockUserDataContextProvider = (
        props: React.PropsWithChildren<{
          params: UserDataContextType;
        }>
      ) => {
        return <UseUserData.Provider value={props.params} {...props} />;
      };


      export const useUserData = () => {
        const context = React.useContext(UseUserData);
        if (context === undefined) {
          throw new Error('useCount must be used within a UserDataProvider');
        }
        return context;
      };
      "
    `);
  });
});
