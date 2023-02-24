import React from 'react';
import { Button } from './Button';
import Card from './Card';
import fullStack from '../assets/fullstack.png';
import bgCoderedUp from '../assets/bg_codered-up.png';
import bgCodeblueDown from '../assets/bg_codeblue-down.png';
import bgCodeblueUp from '../assets/bg_codeblue-up.png';
import HausApp from './HausApp';

const appData = [
  {
    title: 'The Summoner',
    description:
      'When you first put the specifics of your decentralized and autonomous governance on chain',
    buttonText: 'Launch App',
    href: 'https://summon.daohaus.fun/',
  },
  {
    title: 'Mission Control',
    description:
      'While challenging, anyone can bring together autonomous contributors for decentralized collaborations and governance.',
    buttonText: 'Launch App',
    href: 'https://admin.daohaus.fun/',
  },
  {
    title: 'HUB',
    description:
      'Vote and make proposals for the DAOs that you are a member of. Check out new DAOs and DAOs you have been curious about.',
    buttonText: 'Launch App',
    href: 'https://hub.daohaus.fun/',
  },
];

const Ecosystem = () => {
  return (
    <section className="bg-black text-brandGreen ">
      <img src={bgCodeblueDown} />
      <div className="mx-8 py-12 md:mx-40">
        <div className="text-center">
          <h2 className="text-4xl font-light uppercase lg:text-6xl">
            Ecosystem
            <br />
            of apps
          </h2>
          <h3 className="my-4 font-sans text-xl font-extrabold uppercase lg:text-3xl">
            Using the DAOHaus SDK
          </h3>
          <p className="font-heading font-light">
            Various applications built on the DAOhaus protocol, by and for the broader community,
            are available for any organization.
          </p>
          <div className="my-12 columns-1 text-left md:columns-3">
            {appData.map((app, index) => (
              <HausApp key={index} {...app} />
            ))}
          </div>
        </div>
        <Card className="border-dotted border-brandGreen p-8">
          <h4 className="text-3xl font-light">Build your own purpose-driven DAO or APP</h4>
          <p className="my-8">
            Do you have an idea for a DAO tool? DAOhaus encourages development on top of the
            protocol and is available for support.
          </p>
          <Button>Read More</Button>
        </Card>
        <div className="text-center">
          <h2 className="mt-24 text-4xl font-light uppercase lg:text-6xl">
            Governance &
            <br />
            App Legos
          </h2>
          <h3 className="my-4 font-sans text-xl font-extrabold uppercase">Built for Developers</h3>
          <p className="">
            Various applications built on the DAOhaus protocol, by and for the broader community,
            are available for any organization.
          </p>
          <div className="my-12 mx-auto flex max-w-6xl flex-row flex-wrap text-left md:flex-nowrap">
            <div className="align-center align-center flex max-w-md flex-col self-center">
              <h2 className="pb-6 text-3xl">Full Stack SDK</h2>
              <p>
                vivamus condimentu, velit nec vulputate elefiend, torar elit molis felis. id
                trisique neque dolor efficitoru nullo.
              </p>
              <div className="mt-8 flex max-w-xl flex-row">
                <Button>
                  <a href="https://docs.daohaus.club/" target="_blank">
                    Docs
                  </a>
                </Button>
                <Button>Support</Button>
              </div>
            </div>
            <div className="max-w-3xl pt-12">
              <img src={fullStack} className="md:pl-24 lg:pl-72" />
            </div>
          </div>
        </div>
      </div>
      <img src={bgCoderedUp} />
    </section>
  );
};

export default Ecosystem;
