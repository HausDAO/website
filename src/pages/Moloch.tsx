import React from 'react';

import Dialog from 'components/Dialog';
import MolochHistory from 'components/MolochHistory';
import MolochAnatomy from 'components/MolochAnatomy';
import MolochRises from 'components/MolochRises';

const Moloch = () => {
  return (
    <main>
      <div className="">
        <div className="">
          <h1>Moloch V3 is here.</h1>
          <p>DAOHaus V3 delivers it as a governance toolkit</p>
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
