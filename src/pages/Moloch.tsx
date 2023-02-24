import React from 'react';

import Dialog from 'components/Dialog';
import MolochHistory from 'components/MolochHistory';
import MolochAnatomy from 'components/MolochAnatomy';
import MolochRises from 'components/MolochRises';
import molochLogoStack from '../assets/molochiii_logostack.svg';

const Moloch = () => {
  return (
    <main>
      <section className="flex flex-col bg-black text-center text-white">
        <div className="mx-8 flex flex-wrap items-center py-72 md:container md:mx-auto md:flex-nowrap">
          <div className="min-w-96">
            <img src={molochLogoStack} className="pb-24 md:pl-24" />
          </div>
          <div className="text-left">
            <h1 className="mb-8 text-4xl font-light uppercase text-white sm:text-6xl md:text-6xl">
              Moloch V3
              <br />
              is here
            </h1>
            <p className="text-xl font-light md:text-4xl">
              DAOHaus V3 delivers it
              <br /> as a governance toolkit
            </p>
          </div>
        </div>
      </section>
      <MolochHistory />
      <MolochRises />
      <MolochAnatomy />
      <Dialog />
    </main>
  );
};

export default Moloch;
