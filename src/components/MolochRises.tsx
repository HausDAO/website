import React from 'react';
import { Button } from './Button';
import Card from './Card';

const MolochRises = () => {
  return (
    <section className="bg-black text-brandRed">
      <div className="mx-8 text-center md:mx-40">
        <div className="">
          <h2 className="text-xl font-light">2022</h2>
          <h3>MOLOCH III RISES</h3>
        </div>
        <Card className="border-2 border-brandRed">
          <div className="gap-8 p-8 md:columns-1 lg:columns-3">
            <div className="mb-8 flex flex-col items-center">
              <h4 className="uppercase">Open Source</h4>
              <p>
                Free and open, the DAOhaus code repository is available to read, improve upon, and
                fork.
              </p>
            </div>
            <div className="mb-8 flex flex-col items-center">
              <h4 className="uppercase">Community Owned</h4>
              <p>
                DAOhaus is governed by shareholders, consisting of users and builders of the
                protocol, in other words, you.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="uppercase">Public Goods</h4>
              <p>
                DAOhaus provides communities the capabilities to decentrally coordinate and govern
                around their values and mission.
              </p>
            </div>
          </div>
        </Card>
        <Button>Read Docs</Button>
      </div>
    </section>
  );
};

export default MolochRises;
