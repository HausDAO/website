import React from 'react';
import { Button } from './Button';
import Card from './Card';
import openSource from '/public/img/dh_opensource.svg';

const Governance = () => {
  return (
    <div className="bg-blue">
      <div className="">
        <h2 className="text-white-500/100 text-3xl">Govern in Public Haus</h2>
        <p className="dark:text-white-900 light:text-white-500/100">
          DAOhaus is a Public Good and you should help govern it.
        </p>
        <img src={openSource} />
      </div>
    </div>
  );
};

export default Governance;
