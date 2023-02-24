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
    <Card className={className}>
      <div className="display flex flex-col">
        <h3 className="text-xl font-light">{year}</h3>
        <h4 className="mb-6 uppercase">{title}</h4>
        <p>{description}</p>
      </div>
      <div className="">
        <h5 className="mb-6">Hightlights</h5>
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
