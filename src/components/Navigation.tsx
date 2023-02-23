import React from 'react';

import { ReactComponent as HausLogo } from 'assets/haus-logo.svg';

const Navigation = () => {
  return (
    <nav className="bg-white px-2 py-2.5 dark:bg-white sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="https://daohaus.club/" className="flex items-center">
          <HausLogo height={40} width={'auto'} className="fill-blue" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:hover:bg-blue-700 dark:focus:ring-blue-300 ml-3 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 dark:text-white md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="border-gray-100 dark:border-gray-700 mt-4 flex flex-col rounded-lg border bg-white p-4 dark:bg-white md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-white">
            <li>
              <a
                href="#"
                className="bg-blue-700 md:bg-transparent md:text-blue-700 block rounded py-2 pl-3 pr-4 text-white dark:text-white md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 dark:text-blue-700 md:dark:hover:text-blue-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent block rounded py-2 pl-3 pr-4 dark:hover:text-white md:border-0 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 dark:text-blue-700 md:dark:hover:text-blue-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent block rounded py-2 pl-3 pr-4 dark:hover:text-white md:border-0 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 dark:text-blue-700 md:dark:hover:text-blue-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent block rounded py-2 pl-3 pr-4 dark:hover:text-white md:border-0 md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 dark:text-blue-700 md:dark:hover:text-blue-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent block rounded py-2 pl-3 pr-4 dark:hover:text-white md:border-0 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
