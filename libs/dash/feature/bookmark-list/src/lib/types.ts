import {
  BookmarkItemFragment,
  TraefikRoutesFragment,
} from './requests.generated';

export type TraefikDisplay = Omit<
  TraefikRoutesFragment,
  'friendlyName' | 'name' | '__typename'
> & { type: 'traefik'; displayName: string };

export type BookmarkDisplay = Omit<BookmarkItemFragment, '__typename'> & {
  type: 'bookmark';
};

export type SearchDisplay = {
  displayName: string;
  link: string;
  faviconUrl?: string;
  type: 'search';
};

export type UnifiedDisplay = TraefikDisplay | BookmarkDisplay | SearchDisplay;
