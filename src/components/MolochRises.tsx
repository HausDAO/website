import Button from './Button';
import Card from './Card';
import molochRises from '../assets/molochiii_rises.svg';

const MolochRises = () => {
  return (
    <section className="bg-black text-brandRed">
      <div className="mx-auto pb-32 text-center md:container">
        <Card className="mx-auto max-w-6xl border-2 border-brandRed">
          <div className="">
            <h2 className="font-mono text-2xl font-light">2022</h2>
            <img className="mx-auto mb-8" src={molochRises} alt="Multiple suns rising" />
            <p>
              Moloch V3 (codename: Baal) is a radical simplification and composition of industry
              standards. Baal offloads all vault and transaction logic to Safe and Zodiac. DAO
              tokens are simply erc-20 compatible. Proposals are multicall by default, allowing
              literally any transaction to executed on-chain. One can start with a Moloch V3 and add
              a safe as vault. Or start with Safe, and simply add Moloch V3 as a module to enable
              more nuanced governance.
            </p>
          </div>
          <div className="gap-8 p-8 md:columns-1 lg:columns-3">
            <div className="mb-8 flex flex-col items-center">
              <h4 className="mb-4 text-2xl uppercase">Governance Focus</h4>
              <p>
                Radical simplification enabling a focus as the Governance layer. Proposals are
                multicall by default, allowing literally any transaction to executed on-chain.
              </p>
            </div>
            <div className="mb-8 flex flex-col items-center">
              <h4 className="mb-4 text-2xl uppercase">Open Standards</h4>
              <p>
                Shares and Loot are now simple ERC-20, enabling finer integration with apps and
                protocols. Use a Safe, or many, as your vault.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="mb-4 text-2xl uppercase">Programmable Shamans</h4>
              <p>
                Shamans are smart contracts that can be granted roles, allowing DAOs to automate any
                governance process.{' '}
              </p>
            </div>
          </div>
        </Card>
        <a href="https://moloch.daohaus.fun" target="_blank">
          <Button className="mt-8">Read Docs</Button>
        </a>
      </div>
    </section>
  );
};

export default MolochRises;
