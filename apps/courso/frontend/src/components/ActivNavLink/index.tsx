import React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

export interface NavLinkProps extends LinkProps {
  className?: string;
  style?: object;
  activeClassName?: string;
  activeStyle?: object;
  inactiveClassName?: string;
  inactiveStyle?: object;
  caseSensitive?: boolean;
  end?: boolean;
  exact?: boolean;
  children?: React.ReactNode;
}

export const NavLink = ({
  activeClassName = 'text-blue-500',
  activeStyle,
  className: classNameProp = '',
  style: styleProp,
  inactiveClassName = 'text-gray-500',
  inactiveStyle,
  href,
  as,
  exact,
  children,
  ...props
}: NavLinkProps) => {
  const { asPath } = useRouter();
  // Normalize and split paths into their segments
  const segment = (p: string | undefined) =>
    new URL(p ?? '', 'http://example.com').pathname.split('/').filter((s) => s);
  const currentPath = segment(asPath);
  const targetPath = segment((as || href) as string);
  // The route is active if all of the following are true:
  //   1. There are at least as many segments in the current route as in the destination route
  //   2. The current route matches the destination route
  //   3. If we're in “exact" mode, there are no extra path segments at the end
  const isActive =
    currentPath.length >= targetPath.length &&
    targetPath.every((p, i) => currentPath[i] === p) &&
    (!exact || targetPath.length === currentPath.length);

  const className = [
    classNameProp,
    isActive ? activeClassName : inactiveClassName,
  ]
    .filter(Boolean)
    .join(' ');
  const style = { ...styleProp, ...(isActive ? activeStyle : inactiveStyle) };

  return (
    <Link href={href} as={as} {...props} legacyBehavior>
      <a className={className} style={style}>
        {children}
      </a>
    </Link>
  );
};
