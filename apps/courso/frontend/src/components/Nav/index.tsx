import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { Logo } from '../../components/Logo';
import { NavLink } from '../../components/ActivNavLink';
import { MenuIcon } from '@heroicons/react/outline';
import { signOut } from 'next-auth/react';

export interface NavItem {
  icon: React.ElementType;
  label: string;
  url: string;
}

export interface NavProps {
  links: NavItem[];
}

export interface NavBodyProps {
  links: NavItem[];
}

const Profile = () => {
  const { user } = useCurrentUser();

  const logout = async () => {
    await signOut();
  };
  return (
    <div className="flex-shrink-0 block border-t border-indigo-800 p-4 break-all">
      <div className="flex-shrink-0 block focus:outline-none break-words">
        <div className="flex items-center">
          <div className="break-words">
            <p className="text-base font-medium text-white break-words">
              {user?.email}
            </p>
            <button
              onClick={logout}
              className="text-sm font-medium text-indigo-200 hover:text-white focus:underline transition ease-in-out duration-150"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBody: React.FC<NavBodyProps> = ({ links }) => {
  return (
    <nav className="mt-5 flex-1 px-2 bg-indigo-700 space-y-1">
      {links.map(({ label, icon: Icon, url }) => (
        <NavLink
          href={url}
          key={url}
          className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-white transition"
          activeClassName="bg-indigo-800"
          inactiveClassName="hover:bg-indigo-600 hover:bg-opacity-75"
          activeStyle={{ color: 'white' }}
        >
          <Icon className="mr-3 h-6 w-6 text-indigo-400 group-focus:text-indigo-300 transition ease-in-out duration-150" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

const NavBarLogo: React.FC = () => (
  <div className="flex items-center flex-shrink-0 px-4 ">
    <Logo className="h-8 w-auto" variant="horizontal" textVariant="textWhite" />
  </div>
);

export const Nav: React.FC<React.PropsWithChildren<NavProps>> = ({
  links,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
      <Transition
        show={isOpen}
        enter="transition-opacity ease-linear duration-500"
        leave="transition-opacity ease-linear duration-500"
      >
        {(ref: React.MutableRefObject<HTMLDivElement>) => (
          <div ref={ref} className="md:hidden">
            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {(ref: React.MutableRefObject<HTMLDivElement>) => (
                  <div ref={ref} className="fixed inset-0">
                    <div className="absolute inset-0 bg-gray-600 opacity-75" />
                  </div>
                )}
              </Transition.Child>
              <Transition.Child
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                {(ref: React.MutableRefObject<HTMLDivElement>) => (
                  <div
                    ref={ref}
                    className="relative flex-1 flex flex-col max-w-xs h-full w-full bg-indigo-700"
                  >
                    <div className="absolute top-0 right-0 -mr-14 p-1">
                      <button
                        className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                        aria-label="Close sidebar"
                        onClick={() => setIsOpen(false)}
                      >
                        <svg
                          className="h-6 w-6 text-white"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                      <NavBarLogo />
                      <NavBody links={links} />
                    </div>
                    <Profile />
                  </div>
                )}
              </Transition.Child>
              <div className="flex-shrink-0 w-14">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </div>
        )}
      </Transition>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 bg-indigo-700">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <NavBarLogo />
              <NavBody links={links} />
            </div>
            <Profile />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
            aria-label="Open sidebar"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabIndex={0}
        >
          <div className="pt-2 pb-6 md:py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
