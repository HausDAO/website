import React from 'react';
import { Button } from './Button';
import Card from './Card';

const Dialog = () => {
  return (
    <section className="bg-brandRed pb-24 text-white">
      <div className="bg-fire bg-cover bg-top bg-no-repeat py-12 md:bg-contain md:py-48">
        <div className="mx-8 w-1/2 md:mx-40">
          <h2 className="text-4xl font-light uppercase text-white lg:text-6xl">
            Have Thy
            <br />
            Dialog
          </h2>
          <p className="mt-1 font-bold uppercase">
            Get support building the dao of your community's dreams.
          </p>
        </div>
      </div>

      <div className="mx-8 mt-4 md:mx-40">
        <Card>
          <div className="gap-16 md:columns-1 lg:columns-3">
            <div className="my-8">
              <h4 className="mb-4 text-3xl uppercase">1 on 1 Consultation</h4>
              <p>
                Discover answers to the challenges in your organization. Get a custom DAO
                application, unique for your needs.
              </p>
            </div>
            <div className="my-8">
              <h4 className="mb-4 text-3xl uppercase">Education</h4>
              <p>
                You don’t have to be a member of a DAO to take advantage of wisdom from the DAOhaus
                community.
              </p>
            </div>
            <div className="my-8">
              <h4 className="mb-4 text-3xl uppercase">Custom Build</h4>
              <p>
                DAOhaus encourages builders to collaborate. Everyone learns together and supports
                each other, as the ecosystem evolves.
              </p>
            </div>
          </div>
        </Card>
        <div className="text-center">
          <Button className="my-4">Reach Out</Button>
        </div>
      </div>
    </section>
  );
};

export default Dialog;
