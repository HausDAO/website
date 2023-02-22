import React, { PropsWithChildren } from 'react';

const Card = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="max-w-sm p-6 bg-transparent border border-blue-400 dark:bg-transparent dark:border-blue-400">
      {children}
    </div>
  );
};

export default Card;
