import React from 'react';
import bgCoderedUp from '../assets/bg_codered-up.png';
import bgCoderedDown from '../assets/bg_codered-down.png';
import Card from './Card';
import HistoryItem from './HistoryItem';

const historyData = [
  {
    year: '2019',
    title: 'v1: Moloch! Ragequit!',
    description:
      'MVP fix to ‘The DAO’ hack. Ethereum supporters started self-organizing into grants and social daos i.e. Moloch DAO',
    highlights: ['Ragequit', 'Grants Daos', 'Social DAOs'],
  },
  {
    year: '2020',
    title: 'v2: rise of loot',
    description:
      'Vivamus condimentum, velit nec vulputate eleifend, tortor elit mollis felis, id tristique neque dolor efficitur nulla.',
    highlights: ['Investment DAO', 'Loot'],
  },
  {
    year: '2021',
    title: 'v2.5: Minions allow for arbitrary execution',
    description:
      'Vivamus condimentum, velit nec vulputate eleifend, tortor elit mollis felis, id tristique neque dolor efficitur nulla.',
    highlights: ['arbitrary tx', 'Cross-chain', 'dao to dao'],
  },
];

const MolochHistory = () => {
  return (
    <section className="bg-brandRed text-white">
      <img src={bgCoderedUp} className="bg-black" />
      <div className="mx-8 py-8">
        <h2 className="flex justify-center text-center text-2xl font-light uppercase lg:text-6xl">
          A brief history of moloch DAO
        </h2>
        <div className="my-6 flex">
          <Card className="w-1/2 border-none text-left">
            <h3 className="text-xl font-light">2016</h3>
            <p className="uppercase">'The dao hack'</p>
          </Card>
          <Card className="w-1/2">
            <h3 className="mb-3 text-left text-xl font-light">PTSDAO</h3>
            <p className="text-left text-sm">
              Following ‘The DAO’ hack, much maligned sentiment around DAOs for 2 years
            </p>
          </Card>
        </div>
        <div className="flex flex-col space-y-4">
          {historyData.map((historyItem) => (
            <HistoryItem key={historyItem.title} {...historyItem} />
          ))}
        </div>
      </div>
      <img src={bgCoderedDown} alt="" className="bg-black" />
    </section>
  );
};

export default MolochHistory;
