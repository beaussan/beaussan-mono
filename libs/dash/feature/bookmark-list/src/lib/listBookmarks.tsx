import { useFuse } from '@beaussan/shared/utils/fuzy-search';
import { useEffect, useRef } from 'react';
import {
  BookmarkItemFragment,
  TraefikRoutesFragment,
  useDeleteBookmarkByIdMutation,
  useGetListOfBookmarksQuery,
} from './requests.generated';
import { ReturnDataFromQuery } from '@beaussan/shared/utils/urql-utils';
import clsx from 'clsx';
import {
  BookmarkDisplay,
  SearchDisplay,
  TraefikDisplay,
  UnifiedDisplay,
} from './types';
import { Trash } from 'lucide-react';
import { AddBookmark } from './addBookmark';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@beaussan/shared/ui/ui-kit';
import toast from 'react-hot-toast';

export const Link = ({ item }: { item: UnifiedDisplay }) => {
  const url = new URL(item.link).hostname;
  const [, deleteBookmarkById] = useDeleteBookmarkByIdMutation();
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="focus:outline-zinc-700 ">
          <a
            href={item.link}
            rel="nofollow noopener"
            className="flex bg-opacity-90 bg-gray-700 text-white px-2 py-3 focus:bg-opacity-100  rounded-lg  "
          >
            <img
              className="w-6 h-6 mr-5"
              src={
                item.faviconUrl
                  ? item.faviconUrl
                  : `https://www.google.com/s2/favicons?domain=${url}`
              }
              alt={`favicon`}
            />
            <div className="flex align-middle justify-between items-center w-full">
              {item.displayName}
              {item.type === 'traefik' ? (
                <div
                  className={clsx(
                    'w-4 h-4 rounded-full',
                    item.isUp ? 'bg-green-500' : 'bg-red-500'
                  )}
                />
              ) : null}
            </div>
          </a>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem
          destructive
          disabled={item.type !== 'bookmark'}
          icon={<Trash />}
          onClick={() => {
            if (item.type !== 'bookmark') {
              return;
            }
            deleteBookmarkById({ id: item.id })
              .then(() => {
                toast.success('Bookmark deleted !');
              })
              .catch(() => {
                toast.error('An error occurred while deleting the toast.');
              });
          }}
        >
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

const getDisplayNameFromTraefik = (input: TraefikRoutesFragment): string => {
  console.log('input : ', input);
  if (input.friendlyName) {
    return input.friendlyName;
  }

  if (/cl\w+-\d+-\/-secure@http/.test(input.name)) {
    return 'CL - ' + input.link;
  }

  return input.name;
};

const mapFromTraefikRoutesToInternalView = (
  input: TraefikRoutesFragment
): TraefikDisplay => {
  const { __typename, name, friendlyName, ...rest } = input;

  return {
    type: 'traefik',
    displayName: getDisplayNameFromTraefik(input),
    ...rest,
  };
};
const mapFromBookmarkToInternalView = (
  input: BookmarkItemFragment
): BookmarkDisplay => {
  const { __typename, ...rest } = input;
  return {
    type: 'bookmark',
    ...rest,
  };
};

const getContentFromData = (
  input: ReturnDataFromQuery<typeof useGetListOfBookmarksQuery>
): UnifiedDisplay[] => {
  return [
    ...input.bookmarks.map(mapFromBookmarkToInternalView),
    ...input.traefikRoutes.map(mapFromTraefikRoutesToInternalView),
  ];
};

function ListBookmarkWithData({
  content,
}: {
  content: ReturnDataFromQuery<typeof useGetListOfBookmarksQuery>;
}) {
  const finalContent = getContentFromData(content);
  const inputElement = useRef<HTMLInputElement>(null);
  const { search, term, result } = useFuse(finalContent, {
    keys: ['displayName'],
  });

  const queryParam = new URLSearchParams();
  queryParam.append('q', term);
  const searchUrl = `https://www.google.com/search?${queryParam.toString()}`;

  const googleSearch: SearchDisplay = {
    link: searchUrl,
    displayName: 'Google it !',
    type: 'search',
  };

  const dataWithSearch: UnifiedDisplay[] = [...result, googleSearch];

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  return (
    <div className="">
      <h2 className="text-xl font-bold">Bookmarks</h2>
      <div className="w-full flex py-2">
        <input
          onChange={(e) => search(e.target.value)}
          value={term}
          placeholder="Search for a link..."
          type="text"
          ref={inputElement}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              window.location.href = dataWithSearch[0].link;
            }
          }}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <div className="ml-4">
          <AddBookmark />
        </div>
      </div>
      <main className="overflow-y-auto py-2 space-y-1">
        <ul className="space-y-1">
          {dataWithSearch.map((link) => (
            <li key={link.link}>
              <Link key={link.link} item={link} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export function ListBookmarks() {
  const [{ data, error, fetching }] = useGetListOfBookmarksQuery();

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Something went wrong. Please try again</div>;
  }

  return <ListBookmarkWithData content={data} />;
}
