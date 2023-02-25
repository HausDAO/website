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
    border: 'solid',
  },
  {
    title: 'Mission Control',
    description:
      'Vote and make proposals for the DAOs that you are a member of. Check out new DAOs and DAOs you have been curious about.',
    buttonText: 'Launch App',
    href: 'https://admin.daohaus.fun/',
    border: 'solid',
  },
  {
    title: 'Build Your Own',
    description:
      'Do you have an idea for a DAO tool? DAOhaus encourages development on top of the protocol and is available for support.',
    buttonText: 'Read More',
    href: 'https://hub.daohaus.fun/',
    border: 'dashed',
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
          <div className="md-container my-12 mx-auto max-w-6xl columns-1 text-left md:columns-3">
            {appData.map((app, index) => (
              <HausApp key={index} {...app} />
            ))}
          </div>
        </div>
        <div className="text-center">
          <h2 className="mt-24 text-4xl font-light uppercase lg:text-6xl">
            Governance &
            <br />
            App Legos
          </h2>
          <h3 className="my-4 font-sans text-xl font-extrabold uppercase">Built for Developers</h3>
          <p className="mx-auto max-w-xl">
            Free to use and open source, DAOhaus is available to read, improve, and fork. Send in
            bug reports and tackle an issue. DAOhaus components can be selected and assembled in
            various combinations to support unique organizational needs. When building on DAOhaus,
            you don’t have to begin at the beginning. Start building with blocks that fit together.
          </p>
          <div className="my-12 mx-auto flex max-w-6xl flex-row flex-wrap text-left md:flex-nowrap">
            <div className="flex max-w-md flex-col">
              <h2 className="pb-6 text-3xl">Full Stack SDK</h2>
              <img src={fullStack} className="pr-24" />
              <div className="mt-8 flex max-w-xl flex-row">
                <Button>
                  <a href="https://docs.daohaus.club/" target="_blank">
                    Docs
                  </a>
                </Button>
                <Button>Support</Button>
              </div>
            </div>
            <div className="mx-auto max-w-md pt-12">
              <h5>Reduced Code</h5>
              <p>
                Packages enable use of the functionality you need to focus on the logic of your
                organization.
              </p>
              <h5 className="mt-4">Build Faster</h5>
              <p>Forms and transactions reduce the time required to read and write DAO data.</p>
              <h5 className="mt-4">Buid Focused</h5>
              <p>
                Tools allow you to solve problems for your community rather than wasting time on the
                technology.
              </p>
              <h5 className="mt-4">Contribute Legos</h5>
              <p>
                Enhancements you make and tools that you build could benefit the entire ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={bgCoderedUp} />
    </section>
  );
};

export default Ecosystem;
