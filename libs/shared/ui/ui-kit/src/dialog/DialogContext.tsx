import { createContext, useState, useContext, PropsWithChildren } from 'react';

function useDialogContextValue() {
  const [isOpen, setIsOpen] = useState(false);

  return { isOpen, setIsOpen };
}

export type DialogContext = ReturnType<typeof useDialogContextValue>;

const Context = createContext<DialogContext | undefined>(undefined);

export const DialogContextProvider = ({ children }: PropsWithChildren) => {
  const value = useDialogContextValue();
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export function useDialogContext() {
  const ctx = useContext(Context);
  if (ctx === undefined) {
    throw new Error(
      `useDialogContext must be used within a DialogContextProvider`
    );
  }
  return {
    ...ctx,
  };
}
