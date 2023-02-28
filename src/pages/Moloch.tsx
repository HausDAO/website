import Button from 'components/Button';
import Dialog from 'components/Dialog';
import MolochHistory from 'components/MolochHistory';
import MolochAnatomy from 'components/MolochAnatomy';
import MolochRises from 'components/MolochRises';

import molochLogoStack from '../assets/molochiii_logostack.svg';

const Moloch = () => {
  return (
    <main>
      <section className="flex flex-col bg-black text-center text-white">
        <div className="flex flex-wrap items-center px-24 py-72 md:container md:mx-auto md:flex-nowrap">
          <div className="max-w-2xl">
            <img
              src={molochLogoStack}
              className="pb-24 md:pr-24 md:pb-0"
              alt="Multiple Moloch logos stacked on top of each other"
            />
          </div>
          <div className="text-left">
            <h1 className="mb-8 text-4xl font-light uppercase text-white sm:text-6xl md:text-6xl">
              Moloch V3
              <br />
              is here
            </h1>
            <p className="text-xl font-light md:text-4xl">
              DAOHaus V3 delivers it
              <br /> as a governance toolkit
            </p>
            <a href="https://docs.daohaus.club/developer" target="_noblank">
              <Button className="mt-8">Read More</Button>
            </a>
          </div>
        </div>
      </section>
      <MolochHistory />
      <MolochRises />
      <MolochAnatomy />
      <Dialog />
    </main>
  );
};

export default Moloch;
