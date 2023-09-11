import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'warn';

export type ButtonProps = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'className'
> & {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  Icon?: React.ElementType;
  /**
   * This is deprecated
   * @deprecated
   */
  isFull?: boolean;
  /**
   * This is deprecated
   * @deprecated
   */
  className?: string;
  as?: string;
};

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      disabled,
      Icon,
      className,
      as: Comp = 'button',
      ...rest
    },
    forwardedRef
  ) => {
    const variants = {
      primary:
        'text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo active:bg-indigo-700 ',
      secondary:
        'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:border-indigo-300 focus:ring-indigo active:bg-indigo-200',
      ghost:
        'text-black bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-300 focus:ring-indigo active:bg-gray-100 border border-1 border-gray-200',
      warn: 'text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring-red active:bg-red-700 ',
    };
    const defaultStyle =
      'whitespace-nowrap inline-flex items-center border border-transparent rounded-lg focus:outline-none px-4 py-2 text-base font-medium font-sans cursor-pointer leading-normal align-middle justify-center items-center min-h-10 transition transition-all ease-in-out duration-400';

    const classes = clsx(
      defaultStyle,
      variants[variant],
      {
        'opacity-50 pointer-events-none': disabled,
      },
      className
    );

    return (
      <button
        ref={forwardedRef}
        className={classes}
        disabled={disabled}
        {...rest}
      >
        {Icon && (
          <Icon
            className={clsx('h-5 w-5', { 'mr-2': !!children })}
            aria-hidden="true"
            focusable="false"
          />
        )}
        {children}
      </button>
    );
  }
);
