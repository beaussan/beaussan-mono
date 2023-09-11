import { useFormikFieldValue } from '../../hooks/useFormikFieldValue';
import { FieldArray } from 'formik';
import React from 'react';
import { Button } from '../../components/Button';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { ArrayHelpers } from 'formik/dist/FieldArray';

interface TArrayInput<T> {
  children: (
    name: string,
    removeSelf: () => void,
    t: T,
    index: number,
    array: T[]
  ) => React.ReactNode;
  name: string;
  labelAdd: string;
  label: string;
  defaultNewItem: () => T;
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const ArrayInput = <T extends unknown>({
  children,
  name,
  labelAdd,
  label,
  defaultNewItem,
}: TArrayInput<T>) => {
  const value = useFormikFieldValue<T[]>(name);
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers: ArrayHelpers<string[]>) => {
        return (
          <div className="space-y-4">
            <div className="flex content-between font-bold justify-between items-center">
              <div className="text-xl font-bold">{label}</div>
            </div>
            {(value || []).map((data, idx, array) =>
              children(
                `${name}.${idx}`,
                () => arrayHelpers.remove(idx),
                data,
                idx,
                array
              )
            )}
            <div className="flex justify-end">
              <Button
                onClick={() => {
                  arrayHelpers.push(defaultNewItem());
                }}
                Icon={PlusIcon}
                type="button"
                variant="secondary"
              >
                {labelAdd}
              </Button>
            </div>
          </div>
        );
      }}
    />
  );
};

ArrayInput.RemoveIcon = MinusIcon;
