import React from 'react';
import { Button } from './Button';
import bgCoderedDown from '../assets/bg_codered-down.png';
import bgCodeblueUp from '../assets/bg_codeblue-up.png';

const Governance = () => {
  return (
    <section className="bg-white text-brandBlue">
      <img src={bgCoderedDown} />
      <div className="mx-auto w-1/2 flex-col">
        <h2 className="mb-4 text-3xl uppercase">Govern in Public Haus</h2>
        <h3 className="mb-4 font-sans text-xl">DAOhaus Ecosystem DAO</h3>
        <p className="mb-6 text-sm">DAOhaus is a Public Good and you should help govern it.</p>
        <Button>Join</Button>
        <Button>Docs</Button>
      </div>
      <img src={bgCodeblueUp} />
    </section>
  );
};

export default Governance;
