import Button from './Button';

const Hero = () => {
  const executeScroll = (offsetTop: number) => window.scrollTo(0, offsetTop);
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
            <Button onClick={() => executeScroll(4500)}>
              <Button>Get Started</Button>
            </Button>
          </div>
        </div>
        <div className="ml-auto flex-col" />
      </div>
    </section>
  );
};

export default Hero;
