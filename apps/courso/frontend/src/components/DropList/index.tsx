import React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Field } from 'formik';
import { FieldProps } from 'formik/dist/Field';
import clsx from 'clsx';
import { usePopper } from 'react-popper';
import { Portal } from 'react-portal';

const FirstSvg = () => (
  <svg
    className="h-5 w-5 text-gray-400"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
  >
    <path
      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckSvg = () => (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const defaultItemToString = (item: any): string => {
  if (item === null || item === undefined) {
    return '';
  }
  if (typeof item !== 'string' && typeof item !== 'number') {
    throw Error(`An item in a Select was not a string or a number but still used the defaultItemToString. This is not allowed, please supply a itemToString and itemToKey prop to the DropList
item: ${JSON.stringify(item, null, 2)}`);
  }
  return item + ''; // convert number to string - does not affect strings
};
type DropListProps<T> = {
  label: string;
  name: string;
  values: T[];
  itemToString?: (item: T) => string;
};

// eslint-disable-next-line
export const DropList = <T extends unknown>({
  label,
  name,
  values,
  itemToString = defaultItemToString,
}: DropListProps<T>) => {
  const popperElRef = React.useRef(null);
  const [targetElement, setTargetElement] = React.useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(
    null
  );
  const { styles, attributes } = usePopper(targetElement, popperElement, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 4],
        },
      },
    ],
  });

  return (
    <Field name={name} type="string">
      {({
        field: { value },
        form: { setFieldValue },
        meta: { error, touched },
      }: FieldProps<T>) => {
        const hasError = touched && error;
        return (
          <div className="">
            <div className="w-full mx-auto">
              <Listbox<any, T>
                as="div"
                className="space-y-1 group"
                value={value}
                onChange={(value) => {
                  setFieldValue(name, value);
                }}
              >
                {({ open }) => (
                  <>
                    <Listbox.Label className="block text-sm leading-5 font-semibold text-gray-700">
                      {label}
                    </Listbox.Label>
                    <div className="min-w-32">
                      <span className="inline-block w-full rounded-md shadow-sm cursor-pointer min-w-32">
                        <Listbox.Button
                          ref={setTargetElement}
                          className={clsx(
                            'cursor-default relative w-full rounded-md cursor-pointer border border-gray-300 bg-white pl-3 pr-10 py-3 text-left focus:outline-none focus:ring-blue focus:border-blue-300 transition ease-in-out duration-150 min-w-32',
                            {
                              'group-hover:border-red-500  border-red-500':
                                hasError,
                              'group-hover:border-blue-500 border-gray-300':
                                !hasError,
                            }
                          )}
                        >
                          <span className="block truncate min-w-32  min-h-6">
                            {itemToString(value) ?? ' '}
                          </span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <FirstSvg />
                          </span>
                        </Listbox.Button>
                        {hasError ? (
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg
                              className="h-5 w-5 text-red-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        ) : null}
                      </span>

                      <Portal>
                        <div
                          className="z-50"
                          ref={popperElRef}
                          style={styles.popper}
                          {...attributes.popper}
                        >
                          <Transition
                            show={open}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            className="z-50 w-full rounded-md bg-white shadow-lg"
                            beforeEnter={() =>
                              setPopperElement(popperElRef.current)
                            }
                            afterLeave={() => setPopperElement(null)}
                          >
                            <Listbox.Options
                              static
                              className="z-50 max-h-60 rounded-md py-1 text-base leading-6 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                            >
                              {values.map((value, index) => (
                                <Listbox.Option<any, T>
                                  key={index}
                                  value={value}
                                >
                                  {({ selected, active }) => (
                                    <div
                                      className={`${
                                        active
                                          ? 'text-white bg-blue-600'
                                          : 'text-gray-900'
                                      } cursor-default select-none relative py-2 pl-8 pr-4`}
                                    >
                                      <span
                                        className={`${
                                          selected
                                            ? 'font-semibold'
                                            : 'font-normal'
                                        } block truncate`}
                                      >
                                        {itemToString(value)}
                                      </span>
                                      {selected && (
                                        <span
                                          className={`${
                                            active
                                              ? 'text-white'
                                              : 'text-blue-600'
                                          } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                        >
                                          <CheckSvg />
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Portal>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
          </div>
        );
      }}
    </Field>
  );
};
