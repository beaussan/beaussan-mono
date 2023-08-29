import React, { ReactNode, useCallback, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { CloseButton } from '../../components/CloseButton';
import { Portal } from 'react-portal';
import {
  ExclamationIcon,
  InformationCircleIcon,
  PencilIcon,
  PlusIcon,
} from '@heroicons/react/outline';

const Warn = () => (
  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
    <ExclamationIcon className="w-6 h-6 text-red-600" />
  </div>
);
const Edit = () => (
  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
    <PencilIcon className="w-6 h-6 text-green-600" />
  </div>
);
const Info = () => (
  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-blue-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
    <InformationCircleIcon className="w-6 h-6 text-blue-600" />
  </div>
);
const Add = () => (
  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-blue-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
    <PlusIcon className="w-6 h-6 text-blue-600" />
  </div>
);

const ModalTitle: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3
    className="text-lg font-medium leading-6 text-gray-900"
    id="modal-headline"
  >
    {children}
  </h3>
);

const ModalButtonWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <span className="flex sm:flex-1  w-full rounded-md shadow-sm sm:w-auto flex flex-col">
      {children}
    </span>
  );
};

const icons = {
  info: Info,
  add: Add,
  edit: Edit,
  warning: Warn,
};

export type ModalIcons = keyof typeof icons;

export const ModalFooter: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <div className="px-4 py-3 bg-gray-50 space-y-3 sm:space-y-0 sm:space-x-3 sm:px-6 sm:flex sm:justify-end">
    {children}
  </div>
);

const ModalBody: React.FC<
  React.PropsWithChildren<{
    icon?: ModalIcons;
    onClose: () => void;
  }>
> = ({ onClose, children, icon }) => {
  const Icon = icon && icons[icon];
  return (
    <div
      className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 text-left overflow-hidden transform transition-all sm:align-middle sm:max-w-lg sm:w-full sm:p-6 sm:pb-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div className="block absolute top-0 right-0 pt-4 pr-4">
        <CloseButton onClick={() => onClose()} />
      </div>
      <div className="sm:flex sm:items-start">
        {Icon && <Icon />}
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          {children}
        </div>
      </div>
    </div>
  );
};

export interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  return (
    <Portal node={document && document.getElementById('modal-container')}>
      <Transition show={isOpen} className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-gray-500 opacity-75"
                onClick={() => onClose()}
              />
            </div>
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
          &#8203;
          <Transition.Child
            className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {children}
          </Transition.Child>
        </div>
      </Transition>
    </Portal>
  );
};

Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;
Modal.ButtonWrapper = ModalButtonWrapper;
