import React from 'react';

import Card from 'components/Card';
import { ReactComponent as OpenSourceSVG } from 'assets/dh_opensource.svg';
import { ReactComponent as CommunityOwnedSVG } from 'assets/dh_communityowned.svg';
import { ReactComponent as PublicGoodSVG } from 'assets/dh_publicgood.svg';
import { Button } from './Button';

const PublicGoods = () => {
  return (
    <section className="container mx-auto my-12 px-6 text-center text-red md:py-48">
      <div className="my-12 text-center md:my-24">
        <h2 className="text-3xl uppercase md:text-5xl">
          Infinite
          <br />
          Composable
          <br />
          Moloch
        </h2>
        <p className="mt-3 text-2xl font-extrabold uppercase md:text-4xl">for the public good</p>
      </div>
      <Card className="my-4 px-8">
        <div className="gap-8 p-8 md:columns-1 lg:columns-3">
          <div className="mb-8 flex flex-col items-center">
            <OpenSourceSVG className="h-24 w-auto pb-4 md:h-32" />
            <h4>Open Source</h4>
            <p>
              Free and open, the DAOhaus code repository is available to read, improve upon, and
              fork.
            </p>
          </div>
          <div className="mb-8 flex flex-col items-center">
            <CommunityOwnedSVG className="h-24 w-auto pb-4 md:h-32" />
            <h4>Community Owned</h4>
            <p>
              DAOhaus is governed by shareholders, consisting of users and builders of the protocol,
              in other words, you.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <PublicGoodSVG className="h-24 w-auto pb-4 md:h-32" />
            <h4>Public Goods</h4>
            <p>
              DAOhaus provides communities the capabilities to decentrally coordinate and govern
              around their values and mission.
            </p>
          </div>
        </div>
      </Card>
      <div>
        <Button>Moloch V3</Button>
        <Button>DAOHaus V3</Button>
      </div>
    </section>
  );
};

export default PublicGoods;
