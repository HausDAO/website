import React from 'react';

import Dialog from 'components/Dialog';
import MolochHistory from 'components/MolochHistory';
import MolochAnatomy from 'components/MolochAnatomy';
import MolochRises from 'components/MolochRises';

const Moloch = () => {
  return (
    <main>
      <section className="flex flex-col bg-black text-center text-white">
        <div className="mx-8 my-24 flex items-center md:mx-40">
          <div className="">MOLOCH LOGO</div>
          <div className="text-left">
            <h1 className="text-4xl font-light uppercase text-white sm:text-6xl md:text-6xl">
              Moloch V3 is here
            </h1>
            <h2 className="text-xl font-light md:text-6xl">
              DAOHaus V3 delivers it as a governance toolkit
            </h2>
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
