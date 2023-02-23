import React from 'react';

import Card from 'components/Card';
import { ReactComponent as OpenSourceSVG } from 'assets/dh_opensource.svg';
import { ReactComponent as CommunityOwnedSVG } from 'assets/dh_communityowned.svg';
import { ReactComponent as PublicGoodSVG } from 'assets/dh_publicgood.svg';

const PublicGoods = () => {
  return (
    <section className="text-center text-red md:container md:mx-auto md:py-48">
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
      <Card>
        <div className="gap-8 md:columns-1 lg:columns-3">
          <OpenSourceSVG />
          <div className="">
            <h4>Open Source</h4>
            <p>
              Free and open, the DAOhaus code repository is available to read, improve upon, and
              fork.
            </p>
          </div>
          <div className="sm:my-8">
            <CommunityOwnedSVG />
            <h4>Community Owned</h4>
            <p>
              DAOhaus is governed by shareholders, consisting of users and builders of the protocol,
              in other words, you.
            </p>
          </div>
          <div className="justify-items-center sm:my-8">
            <PublicGoodSVG className="h-12 w-auto" />
            <h4>Public Goods</h4>
            <p>
              DAOhaus provides communities the capabilities to decentrally coordinate and govern
              around their values and mission.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default PublicGoods;
