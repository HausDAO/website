import React from 'react';
import Card from './Card';
import openSource from '../assets/dh_opensource.svg';
import communityOwned from '../assets/dh_communityowned.svg';
import publicGood from '../assets/dh_publicgood.svg';

const PublicGoods = () => {
  return (
    <section className="py-48 text-red md:container md:mx-auto lg:max-w-6xl">
      <div className="my-24 text-center">
        <h2 className="text-6xl uppercase">
          Infinite
          <br />
          Composable
          <br />
          Moloch
        </h2>
        <p className="mt-3 text-4xl font-extrabold uppercase">for the public good</p>
      </div>
      <div>
        <Card>
          <div className="gap-16 md:columns-1 lg:columns-3">
            <div className="">
              <img src={openSource} width="120px" className="mx-auto mt-8" />
              <h4 className="my-8 text-center text-3xl">Open Source</h4>
              <p>
                Free and open, the DAOhaus code repository is available to read, improve upon, and
                fork.
              </p>
            </div>
            <div className="sm:my-8">
              <img src={communityOwned} width="120px" className="mx-auto mt-8" />
              <h4 className="my-8 text-center text-3xl">Community Owned</h4>
              <p>
                DAOhaus is governed by shareholders, consisting of users and builders of the
                protocol, in other words, you.
              </p>
            </div>
            <div className="sm:my-8">
              <img src={publicGood} width="120px" className="mx-auto mt-8" />
              <h4 className="my-8 text-center text-3xl">Public Goods</h4>
              <p>
                DAOhaus provides communities the capabilities to decentrally coordinate and govern
                around their values and mission.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PublicGoods;
