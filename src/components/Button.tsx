import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnColor?: 'primary' | 'secondary' | 'tertiary';
  invertColor?: boolean;
}

const buttonClasses = {
  disabled: 'opacity-50 cursor-not-allowed',
  primary: {
    bgColor: 'bg-brandRed',
    color: 'text-white',
    border: 'border-brandRed',
  },
  secondary: {
    bgColor: 'bg-brandBlue',
    color: 'text-white',
    border: 'border-brandBlue',
  },
  tertiary: {
    bgColor: 'bg-brandGreen',
    color: 'text-black',
    border: 'border-brandGreen',
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type,
      btnColor = 'primary',
      invertColor = false,
      disabled = false,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const base = `group relative p-4 transition active:-translate-x-2 active:translate-y-2`;
    const borderBase = `absolute top-2 right-2 h-full w-full border-2 transition group-active:translate-x-2 group-active:-translate-y-2`;
    const btnClasses = clsx(`
      ${base}
      ${invertColor ? buttonClasses[btnColor].bgColor : buttonClasses[btnColor].color}
      ${invertColor ? buttonClasses[btnColor].color : buttonClasses[btnColor].bgColor}
    `);
    const borderClasses = clsx(`
      ${borderBase}
      ${buttonClasses[btnColor].border}
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
