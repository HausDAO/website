import React, { PropsWithChildren } from 'react';

export interface CardProps extends React.ComponentPropsWithRef<'div'> {}

const Card = (props: CardProps) => {
  const { children, className } = props;

  return (
    <div className={`bg-transparent dark:bg-transparent border dark:border md:p-12 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
