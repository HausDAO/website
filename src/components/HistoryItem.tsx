import React from 'react';
import Card from './Card';

interface HistoryItemProps {
  year: string;
  title: string;
  description: string;
  highlights: string[];
  className?: string;
}

const HistoryItem = (props: HistoryItemProps) => {
  const { year, title, description, highlights, className } = props;
  return (
    <Card className={'flex ' + className}>
      <div className="max-w-xl flex-col">
        <h3 className="font-mono text-xl font-light">{year}</h3>
        <h4 className="mb-6 uppercase">{title}</h4>
        <p>{description}</p>
      </div>
      <div className="ml-auto">
        <h5 className="mb-6">Highlights</h5>
        <ul>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default HistoryItem;
