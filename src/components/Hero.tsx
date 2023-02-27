import Button from './Button';

const Hero = () => {
  return (
    <section className="min-h-[600px] w-full bg-hero bg-cover bg-right-top bg-no-repeat md:min-h-[1200px] md:bg-right-top">
      <div className="mx-auto flex px-6 pt-12 text-left md:container md:bg-transparent md:pt-48">
        <div className="flex-col pb-24">
          <h1 className="text-xl font-light uppercase text-brandRed md:text-4xl lg:text-6xl">
            DAOHaus is
            <br /> the protocol for
            <br /> purpose-driven <br />
            governance
          </h1>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="https://summon.daohaus.fun" target="_blank" rel="noreferrer">
              <Button>Summon a DAO</Button>
            </a>
          </div>
        </div>
        <div className="ml-auto flex-col" />
      </div>
    </section>
  );
};

export default Hero;
