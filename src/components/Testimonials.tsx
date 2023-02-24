import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <section className="bg-brandBlue">
      <div className="bg-aurora bg-contain bg-top bg-no-repeat">
        <div className="pt-52 text-center">
          <h2 className="text-2xl font-bold uppercase text-white">DAOHaus</h2>
          <h3 className="text-4xl text-white">In the Wild</h3>
        </div>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
