import React from 'react';
import { Button } from './Button';
import Card from './Card';
import molochRises from '../assets/molochiii_rises.svg';

const MolochRises = () => {
  return (
    <section className="bg-black text-brandRed">
      <div className="mx-8 text-center md:mx-40">
        <div className="">
          <h2 className="font-mono text-2xl font-light">2022</h2>
          <img className="mx-auto" src={molochRises} />
        </div>
        <Card className="border-2 border-brandRed">
          <div className="gap-8 p-8 md:columns-1 lg:columns-3">
            <div className="mb-8 flex flex-col items-center">
              <h4 className="mb-4 text-2xl uppercase">Governance Focus</h4>
              <p>
                Governance layer using Gnosis Zodiac standards to interface with multisig
                treasuries.
              </p>
            </div>
            <div className="mb-8 flex flex-col items-center">
              <h4 className="mb-4 text-2xl uppercase">Shares & Loot ERC-20</h4>
              <p>Shares are ERC-20 tokens creating composability with apps and protocols.</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="mb-4 text-2xl uppercase">Programmable Shamans</h4>
              <p>Shamans grant roles to contracts allowing DAOs to automate functionality.</p>
            </div>
          </div>
        </Card>
        <Button className="mt-8">Read Docs</Button>
      </div>
    </section>
  );
};

export default MolochRises;
