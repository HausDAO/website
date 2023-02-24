import React from 'react';
import { Button } from './Button';
import Card from './Card';
import fullStack from '../assets/fullstack.png';
import bgCoderedUp from '../assets/bg_codered-up.png';
import bgCodeblueDown from '../assets/bg_codeblue-down.png';

const Ecosystem = () => {
  return (
    <section className="bg-black text-brandGreen">
      <img src={bgCodeblueDown} />
      <div className="py-12 md:container md:mx-auto">
        <div className="text-center">
          <h2 className="text-4xl uppercase lg:text-6xl">
            Ecosystem
            <br />
            of apps
          </h2>
          <h3 className="my-4 font-sans text-xl font-extrabold uppercase lg:text-3xl">
            Using the DAOHaus SDK
          </h3>
          <p className="mx-auto mb-24 max-w-sm text-xl">
            Various applications built on the DAOhaus protocol, by and for the broader community,
            are available for any organization.
          </p>
          <div className="my-12 text-left md:columns-3">
            <Card className="border-brandGreen">
              <h2 className="pt-24 text-3xl">Summoner</h2>
              <p className="my-8">
                When you first put the specifics of your decentralized and autonomous governance on
                chain, you’ve summoned a DAO.
              </p>
              <Button>Open App</Button>
            </Card>
            <Card className="border-brandGreen">
              <h2 className="pt-24 text-3xl">Mission Control</h2>
              <p className="my-8">
                While challenging, anyone can bring together autonomous contributors for
                decentralized collaborations and governance.
              </p>
              <Button>Open App</Button>
            </Card>
            <Card className="border-brandGreen">
              <h2 className="pt-24 text-3xl">Hub</h2>
              <p className="my-8">
                Vote and make proposals for the DAOs that you're a member of. Check out new DAOs and
                DAOs you’ve been curious about.
              </p>
              <Button>Open App</Button>
            </Card>
          </div>
        </div>
        <Card className="border-brandGreen">
          <h4 className="text-3xl">Build your own purpose-driven DAO or APP</h4>
          <p className="my-8">
            Do you have an idea for a DAO tool? DAOhaus encourages development on top of the
            protocol and is available for support.
          </p>
          <Button>Read More</Button>
        </Card>
      </div>
      <div className="px-12 md:container md:mx-auto">
        <div className="text-center">
          <h2 className="mt-24 text-4xl uppercase lg:text-6xl">
            Governance &
            <br />
            App Legos
          </h2>
          <h3 className="my-4 font-sans text-3xl font-extrabold uppercase">Built for Developers</h3>
          <p className="mx-auto mb-24 max-w-sm text-xl">
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
                <Button>Docs</Button>
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
