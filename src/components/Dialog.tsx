import React from 'react';
import { Button } from './Button';
import Card from './Card';

const Dialog = () => {
  return (
    <section className="bg-brandRed">
      <div className="bg-fire bg-contain bg-top bg-no-repeat dark:text-white md:container md:mx-auto lg:max-w-6xl ">
        <div className="my-24 mx-auto flex max-w-6xl flex-row text-left">
          <div className="md:w-md w-full">
            <h2 className="text-6xl uppercase">
              Have
              <br />
              Thy
              <br />
              Dialog
            </h2>
            <p className="mt-3 text-2xl font-extrabold uppercase">
              Get support building the dao of your community's dreams.
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <Card>
            <div className="gap-16 md:columns-1 lg:columns-3">
              <div className="">
                <h4 className="my-8 text-center text-3xl">1 on 1 Consultation</h4>
                <p>
                  Discover answers to the challenges in your organization. Get a custom DAO
                  application, unique for your needs.
                </p>
              </div>
              <div className="sm:my-8">
                <h4 className="my-8 text-center text-3xl">Education</h4>
                <p>
                  You don’t have to be a member of a DAO to take advantage of wisdom from the
                  DAOhaus community.
                </p>
              </div>
              <div className="sm:my-8">
                <h4 className="my-8 text-center text-3xl">Custom Build</h4>
                <p>
                  DAOhaus encourages builders to collaborate. Everyone learns together and supports
                  each other, as the ecosystem evolves.
                </p>
              </div>
            </div>
          </Card>
        </div>
        <Button className="my-8">Reach Out</Button>
      </div>
    </section>
  );
};

export default Dialog;
