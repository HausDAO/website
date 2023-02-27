import bgCoderedUp from '../assets/bg_codered-up.png';
import bgCodeblackDown from '../assets/bg_codeblack-down.png';
import Card from './Card';
import m3Governance from '../assets/m3_governance.svg';
import m3Tx from '../assets/m3_transaction.svg';
import m3Execution from '../assets/m3_execution.svg';

const MolochAnatomy = () => {
  return (
    <section className="text-brandRed" id="daohaus-v3">
      <img src={bgCodeblackDown} className="h-auto w-full" alt="Black code pixels cascading up" />
      <div className="mx-auto -mt-48 max-w-6xl md:mx-auto">
        <div className="p-12 px-8 pt-48">
          <div className="mx-auto my-12 max-w-xl text-center">
            <h4 className="text-lg uppercase lg:text-3xl">ANATOMY OF a</h4>
            <h2 className="text-2xl uppercase lg:text-5xl">Moloch V3 DAO</h2>
            <h3 className="text-lg uppercase lg:text-3xl">in DAOhaus</h3>
            <p className="text-md mt-4 text-center"></p>
          </div>
        </div>
        <Card className="border-t-2 border-l-0 border-r-0 border-b-0 border-brandRed">
          <div className="flex flex-col flex-wrap justify-between md:flex-row">
            <div className="max-w-xs flex-col">
              <h2 className="mb-4 text-3xl">
                Governance
                <br />
                Layer
              </h2>
              <h4 className="mb-4 text-xl">Moloch V3</h4>
              <p>
                Moloch V3 focuses on the governance layer, importing standards such as erc-20 shares
                and offloading treasury and transaction logic to Safe(s). This allows for much more
                composability and opportunities for purpose-driven coordination.
              </p>
              <p className="pt-4">- Member Management</p>
              <p>- General Governance</p>
              <p>- Token Governance</p>
              <p>- DAO Configuration</p>
              <p>- Arbitrary Execution</p>
            </div>
            <div className="flex-col">
              <img
                className="mt-8 w-[700px]"
                src={m3Governance}
                alt="Diagram of moloch governance system"
              />
            </div>
          </div>
        </Card>
        <Card className="border-t-2 border-l-0 border-r-0 border-b-0 border-brandRed">
          <div className="flex flex-col flex-wrap justify-between md:flex-row">
            <div className="max-w-xs flex-col">
              <h2 className="mb-4 text-3xl">
                Transaction
                <br />
                Layer
              </h2>
              <h4 className="mb-4 text-xl">Safe and Zodiac</h4>
              <p>
                When you summon a Moloch V3, one can attach an existing Safe or deploy a new one.
                More Safes can be added as desired, governed by the same Moloch, or even shared by
                many.
              </p>
              <p className="pt-4">
                Zodiac carries the transaction data to the Safe(s) hold any tokenized assets and
                sends transaction data to execution layer.
              </p>
            </div>
            <div className="flex-col">
              <img
                src={m3Tx}
                className="mt-8 w-[600px]"
                alt="Diagram of Transaction layer for Moloch DAO"
              />
            </div>
          </div>
        </Card>
        <Card className="border-t-2 border-l-0 border-r-0 border-b-2 border-brandRed">
          <div className="flex flex-col flex-wrap justify-between md:flex-row">
            <div className="max-w-xs flex-col">
              <h2 className="mb-4 text-3xl">
                Execution
                <br />
                Layer
              </h2>
              <h4 className="mb-4 text-xl">Ethereum</h4>
              <p>
                Execute any transaction in any contract on any EVM-compatible chain. (cross-chain,
                dao to dao, dao to dapp, etc)
              </p>
            </div>
            <div>
              <img
                src={m3Execution}
                className="mt-8 w-[600px]"
                alt="Diagram of Moloch DAO execution Layer"
              />
            </div>
          </div>
        </Card>

        {/* <div className="flex flex-col space-y-4">
          {anatomyData.map((anatomyItem) => (
            <AnatomyItem key={anatomyItem.title} {...anatomyItem} />
          ))}
        </div> */}
        {/* <div className="my-24 mx-auto flex max-w-xl flex-col justify-center text-center">
          <h3 className="mb-4 text-3xl">Endless possibilities</h3>
          <h4>Common Integrations</h4>
          <p>Coordinape</p>
          <p>Snapshot</p>
          <p>Safe</p>
          <p>Hedgey</p>
          <p>Swapr</p>
          <p>Disperse</p>
        </div> */}
      </div>
      <img src={bgCoderedUp} alt="Red code pixels cascading up" />
    </section>
  );
};

export default MolochAnatomy;
