import { Link } from 'react-router-dom';

import Button from './Button';
import Card from 'components/Card';
import { ReactComponent as OpenSourceSVG } from 'assets/dh_opensource.svg';
import { ReactComponent as CommunityOwnedSVG } from 'assets/dh_communityowned.svg';
import { ReactComponent as PublicGoodSVG } from 'assets/dh_publicgood.svg';

const PublicGoods = () => {
  return (
    <section className="static mx-auto pt-24 pb-72 text-center text-brandRed md:container">
      <div className="mx-8 text-center md:my-24">
        <h2 className="text-3xl uppercase md:text-5xl">
          Infinite
          <br />
          Composable
          <br />
          Moloch
        </h2>
        <p className="my-3 text-2xl font-extrabold uppercase md:text-4xl">for the public good</p>
        <Card className="mt-12 mb-4 border-brandRed px-8">
          <div className="gap-8 p-4 md:columns-1 lg:columns-3">
            <div className="mb-8 flex flex-col items-center">
              <OpenSourceSVG className="h-24 w-auto pb-4 md:h-32" />
              <h4 className="uppercase">Open Source</h4>
              <p>Free and open, all DAOhaus code is available to read, improve, and fork.</p>
            </div>
            <div className="mb-8 flex flex-col items-center">
              <CommunityOwnedSVG className="h-24 w-auto pb-4 md:h-32" />
              <h4 className="uppercase">Community Owned</h4>
              <p>
                DAOhaus is governed by shareholders, consisting of users and builders of the
                protocol, in other words, you.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <PublicGoodSVG className="h-24 w-auto pb-4 md:h-32" />
              <h4 className="uppercase">Public Goods</h4>
              <p>
                DAOhaus provides communities the capabilities to decentrally coordinate and govern
                around their values and mission.
              </p>
            </div>
          </div>
        </Card>
        <div className="flex justify-center space-x-6">
          <Link to="/moloch">
            <Button>Moloch & DAOhaus V3</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublicGoods;
