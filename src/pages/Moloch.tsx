import React from 'react';

import Dialog from 'components/Dialog';
import MolochHistory from 'components/MolochHistory';
import MolochAnatomy from 'components/MolochAnatomy';
import MolochRises from 'components/MolochRises';

const Moloch = () => {
  return (
    <main>
      <div className="flex items-center justify-center bg-black px-8 py-24 text-center text-white">
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
      <MolochHistory />
      <MolochRises />
      <MolochAnatomy />
      <Dialog />
    </main>
  );
};

export default Moloch;
