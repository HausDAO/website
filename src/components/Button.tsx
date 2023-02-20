import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, disabled = false, onClick, className, children, ...props }, ref) => {
    return (
      <button
        type={type}
        className={
          `text-blue-700 border border-solid border-blue-700 hover:border-blue-400 focus:ring-1 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:border-blue-700 dark:hover:border-blue-400 shadow-[-5px_5px_0px_0px_rgba(30,30,30)] ${
            disabled && 'opacity-25'
          } ` + className
        }
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
