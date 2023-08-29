import React, { PropsWithChildren, ReactNode } from 'react';
import { Nav } from '../components/Nav';
import { useAuthContext } from '../hooks/useAuthContext';
import { getLoggedLayout } from '../layouts/WithUserLogged';
import { BookOpenIcon, LibraryIcon } from '@heroicons/react/outline';
import { routes } from '../routGetters';

const links = [
  /*
  {
    icon: HomeIcon,
    label: 'Dashboard',
    url: routes.dash(),
    roles: ['teacher', 'student'],
  },
   */
  {
    icon: BookOpenIcon,
    label: 'Practice',
    url: routes.practice(),
    roles: ['teacher'],
  },
  {
    icon: LibraryIcon,
    label: 'Course',
    url: routes.courseList(),
    roles: ['teacher'],
  },
  // { icon: Book, label: 'Students', url: '/app/students', roles: ['teacher'] },
  {
    icon: BookOpenIcon,
    label: 'Handoff',
    url: routes.handoff(),
    roles: ['student'],
  },
];

export const NavBar = ({ children }: PropsWithChildren<{}>) => {
  const { userRole } = useAuthContext();

  const finalRoles =
    typeof userRole === 'string'
      ? links.filter((item) => item.roles.includes(userRole))
      : [];

  return <Nav links={finalRoles}>{children}</Nav>;
};
export const getNavLayout = (page: ReactNode) =>
  getLoggedLayout(<NavBar>{page}</NavBar>);

export default NavBar;
