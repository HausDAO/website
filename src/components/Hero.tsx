import React from 'react';
import { Button } from './Button';

const Hero = (props: any) => {
  return (
    <section className="bg-hero bg-cover">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-light uppercase text-brandRed sm:text-6xl md:text-6xl">
              DAOHaus is the protocol for purpose-driven governance
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
