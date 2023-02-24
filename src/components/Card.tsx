import React, { PropsWithChildren } from 'react';

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {}

const Card = (props: CardProps) => {
  const { children, className } = props;

  return (
    <div
      className={`border bg-transparent p-8 dark:border dark:bg-transparent md:p-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
