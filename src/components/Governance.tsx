import Button from './Button';
import bgCoderedDown from '../assets/bg_codered-down.png';
import bgCodeblueUp from '../assets/bg_codeblue-up.png';

const Governance = () => {
  return (
    <section className="bg-white text-brandBlue">
      <img src={bgCoderedDown} alt="Red code pixels cascading down" />
      <div className="mx-auto w-1/2 flex-col">
        <h2 className="mb-4 text-3xl uppercase">Govern in Public Haus</h2>
        <h3 className="mb-4 font-sans text-xl">DAOhaus Ecosystem DAO</h3>
        <p className="mb-6 text-sm">DAOhaus is a Public Good and you should help govern it.</p>
        <div className="flex w-48 space-x-4">
          <a href="https://join.daohaus.fun/" target="_blank" rel="noreferrer">
            <Button bgColor="secondary" borderColor="secondary">
              Join
            </Button>
          </a>
        </div>
      </div>
      <img src={bgCodeblueUp} alt="Blue code pixels cascading up" />
    </section>
  );
};

export default Governance;
