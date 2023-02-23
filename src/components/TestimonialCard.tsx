import React from 'react';
import { Button } from './Button';
import Card from './Card';

const TestimonialCard = () => {
  return (
    <Card>
      <div className="columns-2 gap-8">
        <div>
          <h5 className="text-gray-900 dark:text-blue-400 mb-2 text-2xl">Protocol Guild</h5>
          <p className="text-gray-700 dark:text-blue-400 mb-3">
            Consisting of core Ethereum developers, Protocol Guild prioritizes minimal governance
            for the most member engagement.
          </p>
        </div>
        <div className="text-right">
          <Button className="object-right-bottom">Read More</Button>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
