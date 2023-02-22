import React from 'react';
import Card from './Card';

const PublicGoods = () => {
  return (
    <section className="m-6 text-center">
      <h2>Infinite Composable Moloch</h2>
      <p>for the public good</p>
      <Card>
        <div className="columns-3">
          <div className="">
            <h4>Open Source</h4>
            <p>
              Free and open, the DAOhaus code repository is available to read, improve upon, and
              fork.
            </p>
          </div>
          <div className="">
            <h4>Community Owned</h4>
            <p>
              DAOhaus is governed by shareholders, consisting of users and builders of the protocol,
              in other words, you.
            </p>
          </div>
          <div className="">
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
