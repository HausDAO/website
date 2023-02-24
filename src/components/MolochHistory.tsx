import React from 'react';
import bgCoderedUp from '../assets/bg_codered-up.png';
import bgCoderedDown from '../assets/bg_codered-down.png';

const MolochHistory = () => {
  return (
    <section>
      <img src={bgCoderedDown} alt="" />
      <h2>A brief history of moloch DAO</h2>
      <img src={bgCoderedUp} />
    </section>
  );
};

export default MolochHistory;
