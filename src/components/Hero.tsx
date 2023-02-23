import React from 'react';
import { Button } from './Button';

const Hero = (props: any) => {
  return (
    <div className="relative bg-hero bg-cover bg-bottom py-8">
      <div className="lg:py-100 sm:py-120 mx-auto max-w-2xl py-96">
        <div className="text-center">
          <h1 className="text-4xl text-red sm:text-6xl">
            DAOHaus is the protocol for purpose-driven governance
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
