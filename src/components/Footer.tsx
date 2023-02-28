import { Link } from 'react-router-dom';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brandBlue text-white">
      <div className="grid grid-cols-2 gap-8 px-6 py-24 md:container md:mx-auto md:grid-cols-4">
        <div>
          <h2 className="mb-6 text-sm uppercase text-white dark:text-white">DAOHaus</h2>
          <ul className="text-white dark:text-white">
            <li className="mb-4">
              <Link to="/" className=" hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-4">
              <a href="/moloch" className="hover:underline">
                DAOHaus V3
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://discord.gg/daohaus"
                target="_blank"
                className="hover:underline"
                rel="noreferrer"
              >
                Get Support
              </a>
            </li>
          </ul>
          <div className="flex gap-4">
            <a
              href="https://discord.gg/daohaus"
              target="_blank"
              className="hover:cursor-pointer"
              rel="noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              href="https://twitter.com/nowdaoit"
              target="_blank"
              className="hover:cursor-pointer"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-sm uppercase text-white dark:text-white">Apps</h2>
          <ul className="text-white dark:text-white">
            <li className="mb-4">
              <a
                href="https://summon.daohaus.fun/"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Summoner
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://admin.daohaus.fun/"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Mission CTRL
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://docs.daohaus.club/user"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                DOCS/Users
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm uppercase text-white dark:text-white">Docs</h2>
          <ul className="text-white dark:text-white">
            <li className="mb-4">
              <a
                href="https://docs.daohaus.club/developer"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                DOCS/DAOHaus
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://moloch.daohaus.fun"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                DOCS/Moloch V3
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm uppercase text-white dark:text-white">Governance</h2>
          <ul className="text-white dark:text-white">
            <li className="mb-4">
              <a
                href="https://publichaus.club"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Public Haus
              </a>
            </li>
            <li className="mb-4">
              <a
                href="https://docs.publichaus.club"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                DOCS/Public Haus
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
