import React from 'react';
import { Button } from './Button';

const Card = () => {
  return (
    <div className="max-w-sm p-6 bg-transparent border border-gray-200 shadow dark:bg-transparent dark:border-blue-400">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-400">
        Protocol Guild
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-blue-400">
        Consisting of core Ethereum developers, Protocol Guild prioritizes minimal governance for
        the most member engagement.
      </p>
      <Button className="object-right-bottom">Read More</Button>
    </div>
  );
};

export default Card;
