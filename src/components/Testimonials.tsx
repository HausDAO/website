import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <section className="relative bg-blue">
      <div className="absolute h-[720px] w-full bg-aurora bg-cover bg-bottom" />
      <div className="relative max-w-3xl pb-24 text-[white] md:mx-auto">
        <div className="pt-[540px] pb-12 text-center text-red">
          <h2 className="text-3xl">DAOHaus</h2>
          <h3 className="text-6xl">In the Wild</h3>
        </div>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;
