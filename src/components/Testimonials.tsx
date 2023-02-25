import React from 'react';
import Testimonial from './Testimonial';
import bgAurora from '../assets/bg_aurora.png';

const testimonialData = [
  {
    title: 'Protocol Guild',
    description:
      'Consisting of core Ethereum developers, Protocol Guild prioritizes minimal governance for the most member engagement.',
    buttonText: 'Read More',
    href: 'https://summon.daohaus.fun/',
  },
  {
    title: 'Gitcoin FDD',
    description:
      'As a sub-group within Gitcoin, the Fraud Detection team allows for active and inactive status that adjusts individual voting power.',
    buttonText: 'Read More',
    href: 'https://admin.daohaus.fun/',
  },
  {
    title: 'Raid Brood',
    description: 'Who could it be? Buy beer, drink beer, get nft, get shares.',
    buttonText: 'Read More',
    href: 'https://hub.daohaus.fun/',
  },
];

const Testimonials = () => {
  return (
    <section className="h-full bg-brandBlue">
      <div className="static">
        <img src={bgAurora} className="" />
      </div>
      <div className="mx-auto -mt-24 h-full max-w-xl px-4 text-center md:-mt-48">
        <h2 className="font-heading text-2xl uppercase text-white">DAOHaus</h2>
        <h3 className="mb-12 font-heading text-4xl uppercase text-white">In the Wild</h3>
        <div className="flex flex-col space-y-4">
          {testimonialData.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
