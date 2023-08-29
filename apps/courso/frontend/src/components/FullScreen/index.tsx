import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';
import { CloseButton } from '../../components/CloseButton';
import { Portal } from 'react-portal';

interface FullScreenContextType {
  isOpen: boolean;
  toggle: () => void;
}

const FullScreenContext = createContext<FullScreenContextType>({
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
});

export function useFullScreenContext() {
  const context = useContext(FullScreenContext);
  if (!context) {
    throw new Error(
      `FullScreen compound components cannot be rendered outside the FullScreen component`
    );
  }
  return context;
}

const Trigger = ({ children }: { children: ReactNode }): ReactElement => {
  const { toggle } = useFullScreenContext();
  if (!children) {
    throw new Error('No component to render in trigger');
  }

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // @ts-expect-error we are forcing on click on components, even if they don't have it
          return React.cloneElement(child, { onClick: () => toggle() });
        }
        return child;
      })}
    </>
  );
};

const Body: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { toggle, isOpen } = useFullScreenContext();
  if (!children) {
    throw new Error('No component to render in fullscreen');
  }

  if (!isOpen) {
    return null;
  }

  return (
    <Portal node={document && document.getElementById('fullscreen-container')}>
      <div className="fixed top-0 left-0 bottom-0 right-0 h-screen w-screen">
        <div className="h-screen w-screen relative p-4 bg-gray-100">
          <div className="z-10 absolute right-2 top-2 bg-white h-8 w-8 inline-flex items-center justify-center rounded-full">
            <CloseButton onClick={() => toggle()} />
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export const FullScreen = ({
  children,
  onStateChange,
}: {
  children: ReactNode;
  onStateChange?: (newValue: boolean) => void;
}): ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = React.useCallback(() => {
    setIsOpen((oldOn) => !oldOn);
    onStateChange?.(isOpen);
  }, [isOpen, onStateChange]);
  const value = React.useMemo(() => ({ isOpen, toggle }), [isOpen, toggle]);

  return (
    <FullScreenContext.Provider value={value}>
      {children}
    </FullScreenContext.Provider>
  );
};

FullScreen.Trigger = Trigger;
FullScreen.Body = Body;
