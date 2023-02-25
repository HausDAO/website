import React from 'react';
import { Button } from './Button';
import bgNorthStar from '../assets/bg_northStar.png';

const Hero = (props: any) => {
  return (
    <section className="min-h-[1200px] w-full bg-hero bg-cover bg-right-top bg-no-repeat md:bg-right-top">
      <div className="mx-auto flex px-6 pt-48 text-left md:container md:bg-transparent">
        <div className="flex-col pb-24">
          <h1 className="text-4xl font-light uppercase text-brandRed md:text-[69px] lg:text-6xl">
            DAOHaus is
            <br /> the protocol for
            <br /> purpose-driven <br />
            governance
          </h1>
          <div className="mt-10 flex items-center gap-x-6">
            <Button>Read More</Button>
          </div>
        </div>
        <div className="ml-auto flex" />
      </div>
    </section>
  );
};

export default Hero;
