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
    highlights: ['Ragequit', 'Simple treasury', 'Grants, Guilds & Social Daos'],
  },
  {
    year: '2020',
    title: 'V2: Introduces LOOT',
    description:
      'First and foremost, Moloch v2 was designed to enhance coordination on a technical level. A second class of token called Loot was added with only exit, no voting, rights. The Treasury could now hold many tokens. Guildkick introduced as a forced exit to remove members while distributing their fair share.',
    highlights: [
      'Loot Token (Exit only)',
      'Treasury can hold many tokens',
      'Guildkick (forced Ragequit)',
      'Investment DAOs, Project DAOs',
    ],
  },
  {
    year: '2021',
    title: 'V2.5: Minions allow for arbitrary execution',
    description:
      'Minions were smart contracts that enabled interaction with arbitrary smart contracts (dapps, daos, cross-chain) as well multiple transactions in one proposal. These smart contracts were called Minions.',
    highlights: ['Arbitrary Transactions', 'Dapps', 'Cross-chain', 'DAO to DAO'],
  },
];

const MolochHistory = () => {
  return (
    <section className="bg-brandRed text-white">
      <img src={bgCodeblackDown} className="bg-red" />
      <div className="mx-8 max-w-6xl py-8 md:mx-auto">
        <div className="mb-24 text-center">
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
