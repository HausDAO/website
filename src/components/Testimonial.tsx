import React from 'react';
import { Button } from './Button';
import Card from './Card';

interface TestimonialProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  className?: string;
}

const Testimonial = (props: TestimonialProps) => {
  const { title, description, buttonText, href, className } = props;
  return (
    <Card className={className}>
      <div className="columns-1 gap-8 md:columns-2">
        <h4 className="mb-2 text-2xl text-white">{title}</h4>
        <p className="mb-3 text-white">{description}</p>
        <div className="text-right">
          <Button className="object-right-bottom">
            <a href={href}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
