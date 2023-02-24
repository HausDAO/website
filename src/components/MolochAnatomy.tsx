import React from 'react';
import bgCoderedUp from '../assets/bg_codered-up.png';
import AnatomyItem from './AnatomyItem';

const anatomyData = [
  {
    title: 'Governance Layer',
    subtitle: 'Moloch V3',
    description: 'Member Management',
  },
  {
    title: 'Transaction Layer',
    subtitle: 'Safe & Zodiac',
    description: 'Zodiac carries the transactin data. Safe(s) hold any tokenized assets',
  },
  {
    title: 'Execution Layer',
    subtitle: 'Ethereum virtual machine',
    description:
      'Can interact with any contract on ethereum and evm-compatible chains (even cross-chain). Send assets from Safe(s)',
  },
];

const MolochAnatomy = () => {
  return (
    <section className=" text-brandRed">
      <img src={bgCoderedUp} className="bg-black" />
      <div className="mx-8">
        <div className="my-8">
          <h2 className="mb-6 flex justify-center text-center text-2xl font-light uppercase lg:text-6xl">
            ANATOMY OF a moloch v3 dao in DAOHaus
          </h2>
          <p className="flex justify-center text-center text-sm">
            With Safes used as vaults, Moloch V3 focuses on the governance layer. Allowing for much
            more extensible decision-making.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          {anatomyData.map((anatomyItem) => (
            <AnatomyItem key={anatomyItem.title} {...anatomyItem} />
          ))}
        </div>
        <div className="my-6 flex flex-col justify-center text-center">
          <h5>Endless possibilities</h5>
          <p>
            With Safes used as vaults, Moloch V3 focuses on the governance layer. Allowing for much
            more extensible decision-making.
          </p>
        </div>
      </div>
      <img src={bgCoderedUp} />
    </section>
  );
};

export default MolochAnatomy;
