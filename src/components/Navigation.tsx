import { FaDiscord, FaTwitter, FaBars } from 'react-icons/fa';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactComponent as HausLogo } from 'assets/haus-logo.svg';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="https://daohaus.club/" className="flex items-center">
          <HausLogo height={40} width="auto" />
        </a>
        <div className="md:hidden">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                className="shadow-blackA7 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-sm bg-white text-brandRed shadow-[-5px_5px_rgba(254,_29,_91,_0.4),_-10px_10px_rgba(254,_29,_91,_0.3),_-15px_15px_rgba(254,_29,_91,_0.2),_-20px_20px_rgba(254,_29,_91,_0.1),_-25px_25px_rgba(254,_29,_91,_0.05)] outline-none focus:outline-none"
                aria-label="Menu Button"
              >
                <FaBars />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[200px] rounded-sm bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
                align="end"
              >
                <DropdownMenu.Item className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-brandBlue outline-none data-[disabled]:pointer-events-none">
                  <Link to="/">Home</Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-brandBlue outline-none data-[disabled]:pointer-events-none">
                  <Link to="/moloch">V3</Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-brandBlue outline-none data-[disabled]:pointer-events-none">
                  <a href="https://summon.daohaus.fun/" target="_blank" rel="noreferrer">
                    Summoner
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-brandBlue outline-none data-[disabled]:pointer-events-none">
                  <a href="https://admin.daohaus.fun/" target="_blank" rel="noreferrer">
                    Mission CTRL
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-brandBlue outline-none data-[disabled]:pointer-events-none">
                  <a href="https://docs.daohaus.club/" target="_blank" rel="noreferrer">
                    Docs
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-brandBlue outline-none data-[disabled]:pointer-events-none">
                  <a href="https://publichaus.club/" target="_blank" rel="noreferrer">
                    Governance
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="bg-violet6 m-[5px] h-[1px]" />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="md mt-4 flex flex-col rounded-lg border border-gray-100 bg-white p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/moloch"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                V3
              </Link>
            </li>
            <li>
              <a
                href="https://summon.daohaus.fun/"
                target="_blank"
                rel="noreferrer"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                Summoner
              </a>
            </li>
            <li>
              <a
                href="https://admin.daohaus.fun/"
                target="_blank"
                rel="noreferrer"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                Mission CTRL
              </a>
            </li>
            <li>
              <a
                href="https://docs.daohaus.club/"
                target="_blank"
                rel="noreferrer"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="https://publichaus.club/"
                target="_blank"
                rel="noreferrer"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                Governance
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/channels/709210493549674598/735524730328711188"
                target="_blank"
                rel="noreferrer"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                <FaDiscord />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/nowdaoit"
                target="_blank"
                rel="noreferrer"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
