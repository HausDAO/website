import React from 'react';
import bgCoderedUp from '../assets/bg_codered-up.png';
import bgCodeblackDown from '../assets/bg_codeblack-down.png';
import Card from './Card';
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
        <Card>
          <div className="display flex justify-between">
            <div className="flex-col">
              <h2 className="mb-4 text-2xl">
                Governance
                <br />
                Layer
              </h2>
              <h4>Moloch V3</h4>
              <p>Member Management</p>
              <p>General Governance</p>
              <p>Token Governance</p>
              <p>DAO Configuration</p>
              <p>Arbitrary Execution</p>
            </div>
            <div className="flex-col">img</div>
          </div>
        </Card>
        <Card>
          <div className="display flex justify-between">
            <div className="flex-col">
              <h2 className="mb-4 text-2xl">
                Transaction
                <br />
                Layer
              </h2>
              <h4>Safe and Zodiac</h4>
              <p>General Governance</p>
              <p>Token Governance</p>
              <p>DAO Configuration</p>
              <p>Arbitrary Execution</p>
            </div>
            <div className="flex-col">img</div>
          </div>
        </Card>
        <Card>
          <div className="display flex justify-between">
            <div>logo</div>
            <div className="">
              <h2 className="mb-4 text-2xl">
                Execution
                <br />
                Layer
              </h2>
              <h4>Ethereum</h4>
              <p>
                Execute any transaction in any contract on any EVM-compatible chain. (cross-chain,
                dao to dao, dao to dapp, etc)
              </p>
            </div>
            <div className="">img</div>
          </div>
        </Card>

        {/* <div className="flex flex-col space-y-4">
          {anatomyData.map((anatomyItem) => (
            <AnatomyItem key={anatomyItem.title} {...anatomyItem} />
          ))}
        </div> */}
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
