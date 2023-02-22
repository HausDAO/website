import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <section className="bg-blue">
      <div className="py-48 text-[white] md:container md:mx-auto">
        <div className="my-24 text-center">
          <h2 className="text-2xl">DAOHaus</h2>
          <h3 className="text-4xl">In the Wild</h3>
        </div>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
