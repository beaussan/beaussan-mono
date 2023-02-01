import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef, ReactElement } from 'react';
import clsx from 'clsx';
import { CgSpinner } from 'react-icons/cg';

const buttonStyles = cva(
  'whitespace-nowrap inline-flex items-center border border-transparent rounded-lg focus:outline-none px-4 py-2 max-h-10 min-h-10 text-base font-medium font-sans cursor-pointer leading-normal align-middle justify-center items-center min-h-10 transition transition-all ease-in-out duration-400',
  {
    variants: {
      intent: {
        primary:
          'text-white bg-violet-600 hover:bg-violet-500 focus:outline-none focus:border-violet-700 focus:ring-violet active:bg-violet-700',
        secondary:
          'text-violet-700 bg-violet-100 hover:bg-violet-200 focus:outline-none focus:border-violet-300 focus:ring-violet active:bg-violet-200',
        ghost:
          'text-black bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-300 focus:ring-indigo active:bg-gray-100 border border-1 border-gray-200',
        warn: 'text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring-red active:bg-red-700',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none cursor-not-allowed',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

type ButtonVariantProps = VariantProps<typeof buttonStyles>;

export type ButtonProps = React.PropsWithChildren<
  ButtonVariantProps & {
    /**
     * The button type
     */
    type?: 'submit' | 'reset' | 'button';
    /**
     * The button icon
     */
    icon?: ReactElement;
    /**
     * The button icon position
     */
    iconPosition?: 'start' | 'end';

    /**
     * The button label when in loading state
     */
    loadingText?: string;
    /**
     * Flag indicating whether the button is in loading state
     */
    isLoading?: boolean;
  } & Pick<React.HtmlHTMLAttributes<HTMLButtonElement>, 'onClick'>
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      icon,
      iconPosition = 'start',
      isLoading,
      loadingText,
      type = 'button',
      disabled,
      fullWidth,
      intent,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <button
        type={type}
        className={buttonStyles({ disabled, fullWidth, intent })}
        disabled={!!disabled || isLoading}
        ref={forwardedRef}
        aria-busy={isLoading}
        {...rest}
      >
        {isLoading ? (
          <>
            <CgSpinner className={`animate-spin w-5 h-5`} />
            {loadingText ? (
              <span className="whitespace-nowrap mr-2">{loadingText}</span>
            ) : (
              <span className="sr-only">Loading...</span>
            )}
          </>
        ) : (
          <>
            {iconPosition === 'start' && icon && (
              <ButtonIcon
                icon={icon}
                iconPosition={iconPosition}
                buttonHasChildren={!!children}
              />
            )}

            <span className="whitespace-nowrap max-w-full">{children}</span>

            {iconPosition === 'end' && icon && (
              <ButtonIcon
                icon={icon}
                iconPosition={iconPosition}
                buttonHasChildren={!!children}
              />
            )}
          </>
        )}
      </button>
    );
  }
);

function ButtonIcon(props: {
  icon: ReactElement;
  buttonHasChildren: boolean;
  iconPosition?: 'start' | 'end';
}) {
  const { icon, iconPosition, buttonHasChildren } = props;

  const className = clsx(
    'inline-flex',
    {
      'mr-2': buttonHasChildren && iconPosition === 'start',
      'ml-2': buttonHasChildren && iconPosition === 'end',
    },
    icon.props.className
  );

  return React.cloneElement(icon, { className });
}

export default Button;
