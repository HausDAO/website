import React from 'react';
import { Button } from './Button';
import Card from './Card';

const Ecosystem = () => {
  return (
    <section className="m-6">
      <div className="">
        <h2>Ecosystem of apps</h2>
        <h3>Using the DAOHaus SDK</h3>
        <p>
          Various applications built on the DAOhaus protocol, by and for the broader community, are
          available for any organization.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">3 cards</div>
      <Card>
        <h4>Build your own purpose-driven DAO or APP</h4>
        <p>Launch a Moloch V3 DAO</p>
        <Button>Read More</Button>
      </Card>
    </section>
  );
};

export default Ecosystem;
