import { useFuse } from '@beaussan/shared/utils/fuzy-search';
import { useRef } from 'react';
import {
  BookmarkItemFragment,
  useGetListOfBookmarksQuery,
} from './requests.generated';
import { ReturnDataFromQuery } from '@beaussan/shared/utils/urql-utils';

const Link = ({ item }: { item: BookmarkItemFragment }) => {
  const url = new URL(item.link).hostname;
  return (
    <div className=" ">
      <a
        href={item.link}
        rel="nofollow noopener"
        className="flex bg-opacity-100 bg-opacity-90 bg-gray-700 text-white px-2 py-3 hover:bg-gray-600 rounded-lg  "
      >
        <img
          className="w-6 h-6 mr-5"
          src={
            item.faviconUrl
              ? item.faviconUrl
              : `https://www.google.com/s2/favicons?domain=${url}`
          }
          alt={`favicon of ${item.displayName}`}
        />
        {item.displayName}
      </a>
    </div>
  );
};

function ListBookmarkWithData({
  content: { bookmarks },
}: {
  content: ReturnDataFromQuery<typeof useGetListOfBookmarksQuery>;
}) {
  const inputElement = useRef(null);
  const { search, term, result } = useFuse(bookmarks, {
    keys: ['displayName'],
  });

  const queryParam = new URLSearchParams();
  queryParam.append('q', term);
  const searchUrl = `https://www.google.com/search?${queryParam.toString()}`;

  const dataWithSearch: BookmarkItemFragment[] = [
    ...result,
    { link: searchUrl, displayName: 'Google it !', id: '', position: 200 },
  ];

  return (
    <div>
      <div className="w-full px-4 py-2">
        <input
          onChange={(e) => search(e.target.value)}
          value={term}
          placeholder="Search for a customer..."
          type="text"
          ref={inputElement}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              window.location.href = dataWithSearch[0].link;
            }
          }}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <main className="h-full overflow-y-auto px-4 py-2 space-y-1">
        {dataWithSearch.map((link) => (
          <Link key={link.link} item={link} />
        ))}
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
