import { Transition } from '@headlessui/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import React, { Fragment, PropsWithChildren } from 'react';
import { RxCross1 } from 'react-icons/rx';
import clsx from 'clsx';
import Button, { ButtonProps } from '../button/button';
import { DialogContextProvider, useDialogContext } from './DialogContext';

const CloseIcon = () => {
  return (
    <DialogPrimitive.Close
      className={clsx(
        'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
      )}
    >
      <RxCross1 className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
    </DialogPrimitive.Close>
  );
};

const DialogContent = React.forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    const { isOpen } = useDialogContext();
    return (
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              forceMount
              ref={ref}
              className={clsx(
                'fixed z-50',
                'w-[95vw] max-w-md rounded-lg p-4 md:w-full',
                'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
                'bg-white dark:bg-gray-800',
                'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
              )}
            >
              {children}

              <CloseIcon />
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    );
  }
);

const ProvidedRoot = ({ children }: PropsWithChildren) => {
  const { setIsOpen, isOpen } = useDialogContext();

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </DialogPrimitive.Root>
  );
};

const DialogRoot = ({ children }: PropsWithChildren) => {
  return (
    <DialogContextProvider>
      <ProvidedRoot>{children}</ProvidedRoot>
    </DialogContextProvider>
  );
};

const Title = ({ children }: PropsWithChildren) => (
  <DialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
    {children}
  </DialogPrimitive.Title>
);

const Description = ({ children }: PropsWithChildren) => (
  <DialogPrimitive.Title className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
    {children}
  </DialogPrimitive.Title>
);

const ActionGroup = ({ children }: PropsWithChildren) => (
  <div className="mt-4 flex justify-end space-x-2">{children}</div>
);

const Trigger = ({ children }: PropsWithChildren) => (
  <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
);

const CloseButton = (props: ButtonProps) => (
  <DialogPrimitive.Close asChild>
    <Button {...props} />
  </DialogPrimitive.Close>
);

export const Dialog = {
  Root: DialogRoot,
  Trigger,
  Content: DialogContent,
  Title,
  Description,
  ActionGroup,
  CloseButton,
};
