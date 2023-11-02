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
                className="group relative inline-flex h-[35px] w-[35px] items-center justify-center rounded-sm bg-brandRed font-heading text-white outline-none transition focus:outline-none data-[state=open]:-translate-x-2 data-[state=open]:translate-y-2"
                aria-label="Menu Button"
              >
                <FaBars />
                <div className="absolute top-2 right-2 h-full w-full border-2 border-brandRed transition group-data-[state=open]:translate-x-2 group-data-[state=open]:-translate-y-2"></div>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[160px] bg-brandRed p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
                align="end"
              >
                <div className="absolute top-2 right-2 h-full w-full border-2 border-brandRed transition group-data-[state=open]:translate-x-2 group-data-[state=open]:-translate-y-2"></div>
                <DropdownMenu.Item className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-white outline-none data-[disabled]:pointer-events-none">
                  <Link to="/">Home</Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-white outline-none data-[disabled]:pointer-events-none">
                  <a href="https://summon.daohaus.club/" target="_blank" rel="noreferrer">
                    Summon
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-white outline-none data-[disabled]:pointer-events-none">
                  <a href="https://admin.daohaus.club/" target="_blank" rel="noreferrer">
                    Admin
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-white outline-none data-[disabled]:pointer-events-none">
                  <a href="https://guide.daohaus.club/" target="_blank" rel="noreferrer">
                    Guide
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-white outline-none data-[disabled]:pointer-events-none">
                  <a href="https://docs.daohaus.club/" target="_blank" rel="noreferrer">
                    Docs
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none text-white outline-none data-[disabled]:pointer-events-none">
                  <Link to="/moloch">v3</Link>
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
              <a
                href="https://summon.daohaus.club/"
                target="_blank"
                rel="noreferrer"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                Summon
              </a>
            </li>
            <li>
              <a
                href="https://admin.daohaus.club/"
                target="_blank"
                rel="noreferrer"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                Admin
              </a>
            </li>
            <li>
              <a
                href="https://guide.daohaus.club/"
                target="_blank"
                rel="noreferrer"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                Guide
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
              <Link
                to="/moloch"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                v3
              </Link>
            </li>
            <li>
              <a
                href="https://discord.gg/daohaus"
                target="_blank"
                rel="noreferrer"
                className="block rounded py-2 pl-3 pr-4 text-brandBlue hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-800"
              >
                <FaDiscord />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/daohaus"
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
