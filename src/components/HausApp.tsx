import React from 'react';
import { Button } from './Button';
import Card from './Card';

interface HausAppProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  className?: string;
  border: string;
}

const HausApp = (props: HausAppProps) => {
  const { border, title, description, buttonText, href, className } = props;
  return (
    <Card className={`border-brandGreen ${'border-' + border}`}>
      <h4 className="pt-24 text-2xl font-light uppercase">{title}</h4>
      <p className="my-8">{description}</p>
      <Button>
        <a href={href} target="_blank">
          {buttonText}
        </a>
      </Button>
    </Card>
  );
};

export default HausApp;
