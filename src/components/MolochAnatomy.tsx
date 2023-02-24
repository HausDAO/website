import React from 'react';
import bgCoderedUp from '../assets/bg_codered-up.png';
import bgCodeblackDown from '../assets/bg_codeblack-down.png';
import Card from './Card';
import AnatomyItem from './AnatomyItem';
import m3Governance from '../assets/m3_governance.svg';
import m3Tx from '../assets/m3_transaction.svg';
import m3Execution from '../assets/m3_execution.svg';

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
      <img src={bgCodeblackDown} className="absolute h-auto max-h-96 w-full" />
      <div className="mx-8 md:mx-40">
        <div className="py-48">
          <div className="mx-auto my-12 max-w-xl text-center">
            <h4 className="text-lg uppercase lg:text-3xl">ANATOMY OF a</h4>
            <h2 className="text-2xl uppercase lg:text-5xl">Moloch V3 DAO</h2>
            <h3 className="text-lg uppercase lg:text-3xl">in DAOhaus</h3>
            <p className="text-md mt-4 text-center">
              With Safes used as vaults, Moloch V3 focuses on the governance layer. Allowing for
              much more extensible decision-making.
            </p>
          </div>
        </div>
        <Card className="border-t-2 border-l-0 border-r-0 border-b-0 border-brandRed">
          <div className="flex flex-col flex-wrap justify-between md:flex-row">
            <div className="flex-col">
              <h2 className="mb-4 text-3xl">
                Governance
                <br />
                Layer
              </h2>
              <h4 className="mb-4 text-xl">Moloch V3</h4>
              <p>Member Management</p>
              <p>General Governance</p>
              <p>Token Governance</p>
              <p>DAO Configuration</p>
              <p>Arbitrary Execution</p>
            </div>
            <div className="flex-col">
              <img className="w-[800px]" src={m3Governance} />
            </div>
          </div>
        </Card>
        <Card className="border-t-2 border-l-0 border-r-0 border-b-0 border-brandRed">
          <div className="flex flex-col flex-wrap justify-between md:flex-row">
            <div className="flex-col">
              <h2 className="mb-4 text-3xl">
                Transaction
                <br />
                Layer
              </h2>
              <h4 className="mb-4 text-xl">Safe and Zodiac</h4>
              <p>General Governance</p>
              <p>Token Governance</p>
              <p>DAO Configuration</p>
              <p>Arbitrary Execution</p>
            </div>
            <div className="flex-col">
              <img src={m3Tx} className="mt-8 w-[600px]" />
            </div>
          </div>
        </Card>
        <Card className="border-t-2 border-l-0 border-r-0 border-b-2 border-brandRed">
          <div className="flex flex-col flex-wrap justify-between md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 text-3xl">
                Execution
                <br />
                Layer
              </h2>
              <h4 className="mb-4 text-xl">Ethereum</h4>
              <p>
                Execute any transaction in any contract on any EVM-compatible chain. (cross-chain,
                dao to dao, dao to dapp, etc)
              </p>
            </div>
            <div>
              <img src={m3Execution} className="w-[600px]" />
            </div>
          </div>
        </Card>

        {/* <div className="flex flex-col space-y-4">
          {anatomyData.map((anatomyItem) => (
            <AnatomyItem key={anatomyItem.title} {...anatomyItem} />
          ))}
        </div> */}
        <div className="my-24 mx-auto flex max-w-xl flex-col justify-center text-center">
          <h3 className="mb-4 text-3xl">Endless possibilities</h3>
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
