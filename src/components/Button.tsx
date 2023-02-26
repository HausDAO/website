import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'black' | 'transparent';
  borderColor?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'black' | 'transparent';
  textColor?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'black' | 'transparent';
}

const buttonClasses = {
  disabled: 'opacity-50 cursor-not-allowed',
  bgColor: {
    primary: 'bg-brandRed',
    secondary: 'bg-brandBlue',
    tertiary: 'bg-brandGreen',
    black: 'bg-black',
    white: 'bg-white',
    transparent: 'bg-transparent',
  },
  borderColor: {
    primary: 'border-brandRed',
    secondary: 'border-brandBlue',
    tertiary: 'border-brandGreen',
    black: 'border-black',
    white: 'border-white',
    transparent: 'border-transparent',
  },
  textColor: {
    primary: 'text-brandRed',
    secondary: 'text-brandBlue',
    tertiary: 'text-brandGreen',
    black: 'text-black',
    white: 'text-white',
    transparent: 'text-transparent',
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type,
      bgColor = 'primary',
      borderColor = 'primary',
      textColor = 'white',
      disabled = false,
      className,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const base = `group relative p-4 transition active:-translate-x-2 active:translate-y-2 font-heading`;
    const borderBase = `absolute top-2 right-2 h-full w-full border-2 transition group-active:translate-x-2 group-active:-translate-y-2`;
    const btnClasses = clsx(`
      ${base}
      ${buttonClasses.bgColor[bgColor]}
      ${buttonClasses.textColor[textColor]}
      ${disabled && buttonClasses.disabled}
      ${className}
    `);
    const borderClasses = clsx(`
      ${borderBase}
      ${buttonClasses.borderColor[borderColor]}
      ${disabled && buttonClasses.disabled}
    `);
    return (
      <button
        className={btnClasses}
        type={type}
        disabled={disabled}
        onClick={onClick}
        {...props}
        ref={ref}
      >
        {children}
        <div className={borderClasses} />
      </button>
    );
  }
);
export default Button;

Button.displayName = 'Button';
