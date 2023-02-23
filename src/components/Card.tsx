import React, { PropsWithChildren } from 'react';

const Card = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="bg-transparent border-blue-400 dark:bg-transparent dark:border-blue-400 border p-6">
      {children}
    </div>
  );
};

export default Card;
