import React from 'react';
import { Button } from './Button';
import Card from './Card';

const Ecosystem = () => {
  return (
    <section className="bg-black py-48 text-green">
      <div className="md:container md:mx-auto">
        <div className="text-center">
          <h2 className="text-4xl uppercase">
            Ecosystem
            <br />
            of apps
          </h2>
          <h3 className="font-sans text-2xl font-extrabold uppercase">Using the DAOHaus SDK</h3>
          <p>
            Various applications built on the DAOhaus protocol, by and for the broader community,
            are available for any organization.
          </p>
          <div className="text-left md:columns-3">
            <Card>
              <h2>Summoner</h2>
              <p>Launch a DAO with no code</p>
              <Button>Open App</Button>
            </Card>
            <Card>
              <h2>Mission Control</h2>
              <p>Tools to coordinate</p>
              <Button>Open App</Button>
            </Card>
            <Card>
              <h2>Hub</h2>
              <p>All your molochs in one place</p>
              <Button>Open App</Button>
            </Card>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">3 cards</div>
        <Card>
          <h4>Build your own purpose-driven DAO or APP</h4>
          <p>Launch a Moloch V3 DAO</p>
          <Button>Read More</Button>
        </Card>
      </div>
    </section>
  );
};

export default Ecosystem;
