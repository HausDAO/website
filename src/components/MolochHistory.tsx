import React from 'react';
import bgCoderedUp from '../assets/bg_codered-up.png';
import bgCoderedDown from '../assets/bg_codered-down.png';
import bgCodeblackDown from '../assets/bg_codeblack-down.png';
import Card from './Card';
import HistoryItem from './HistoryItem';

const historyData = [
  {
    year: '2019',
    title: 'V1: MVP Fix to The DAO Hack',
    description:
      'MVP fix to ‘The DAO’ hack. The original MolochDAO gave members a way to exit if anything went wrong, or if a member disagreed with choices being made by the DAO. This novel mechanic was called ragequit.',
    highlights: ['Ragequit', 'Grants Daos', 'Social DAOs'],
  },
  {
    year: '2020',
    title: 'V2: Introduces LOOT',
    description:
      'The second version of Moloch DAOs provided two types of shareholder, one with voting and economic power and the other with only economic power. The share without voting power was called loot.',
    highlights: ['Investment DAO', 'Loot'],
  },
  {
    year: '2021',
    title: 'V2.5: Minions allow for arbitrary execution',
    description:
      'To automate some of the regular governance operations, smart contracts were added to support things like multiple transactions in one proposal. These smart contracts were called Minions.',
    highlights: ['arbitrary tx', 'Cross-chain', 'dao to dao'],
  },
];

const MolochHistory = () => {
  return (
    <section className="bg-brandRed text-white">
      <img src={bgCodeblackDown} className="bg-red" />
      <div className="mx-8 py-8 md:mx-40">
        <div className="my-24 text-center">
          <h3 className="flex justify-center text-center text-2xl font-light uppercase lg:text-4xl">
            A brief history of
          </h3>
          <h2 className="text-center text-4xl lg:text-6xl">Moloch DAOs</h2>
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
