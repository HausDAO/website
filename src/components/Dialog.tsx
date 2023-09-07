import Button from './Button';
import Card from './Card';

const Dialog = () => {
  return (
    <section className="bg-brandRed px-12 pb-24 text-white">
      <div className="py-12 md:container md:mx-auto">
        <Card>
          <div className="bg-fire bg-cover bg-top bg-no-repeat md:bg-contain md:py-48">
            <div className="w-1/2">
              <h2 className="text-4xl font-light uppercase text-white lg:text-6xl">
                Have Thy
                <br />
                Dialog
              </h2>
              <p className="mt-1 max-w-md font-bold uppercase">
                Get support building the dao of your community&apos;s dreams.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="mb-8">
              <h4 className="mb-4 text-xl uppercase md:text-3xl">1 on 1 Consultation</h4>
              <p>
                Discover answers to the challenges in your organization. Get a custom DAO
                application, unique for your needs.
              </p>
            </div>
            <div className="mb-8">
              <h4 className="mb-4 text-xl uppercase md:text-3xl">Team/Community Education</h4>
              <p>
                You don&apos;t have to be a member of a DAO to take advantage of wisdom from the
                DAOhaus community.
              </p>
            </div>
            <div className="mb-8">
              <h4 className="mb-4 text-xl uppercase md:text-3xl">Custom Build</h4>
              <p>
                DAOhaus encourages builders to collaborate. Everyone learns together and supports
                each other, as the ecosystem evolves.
              </p>
            </div>
          </div>
        </Card>
        <div className="pt-6 text-center">
          <a href="https://discord.gg/HNXHfN8ZUJ" target="_blank" rel="noreferrer">
            <Button bgColor="white" borderColor="white" textColor="primary">
              Reach Out
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Dialog;
