import React from 'react';
import { Button } from './Button';
import Card from './Card';
import openSource from '../assets/dh_opensource.svg';
import bgCoderedDown from '../assets/bg_codered-down.png';
import bgCodeblueUp from '../assets/bg_codeblue-up.png';

const Governance = () => {
  return (
    <div className="bg-white-900/100">
      <img src={bgCoderedDown} />
      <div className="mx-auto p-12 text-center text-blue md:container">
        <h2 className="text-3xl lg:text-6xl">
          Govern in
          <br /> Public Haus
        </h2>
        <h3 className="my-6 font-sans text-xl font-extrabold uppercase">DAOhaus Ecosystem DAO</h3>
        <p className="">DAOhaus is a Public Good and you should help govern it.</p>
        <div className="mx-auto my-8 w-48 text-center">
          {/* <img src={openSource} className="text-center" /> */}
        </div>
        <Button>Join</Button>
        <Button className="bg-blue text-red">Read More</Button>
      </div>
      <img src={bgCodeblueUp} />
    </div>
  );
};

export default Governance;
