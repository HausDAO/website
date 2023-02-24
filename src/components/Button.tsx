import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// TODO: Make Colors and style dynamic. Need props for inverse, and color
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, disabled = false, onClick, className, children, ...props }, ref) => {
    return (
      <button
        type={type}
        className={`mr-2 mb-2 border border-solid border-blue-700 bg-white px-5 py-2.5 text-sm font-medium text-blue-700 shadow-[-5px_5px_0px_0px_rgba(30,30,30)] hover:border-blue-400 focus:ring-1 ${
          disabled && 'opacity-25'
        } ${className}`}
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
