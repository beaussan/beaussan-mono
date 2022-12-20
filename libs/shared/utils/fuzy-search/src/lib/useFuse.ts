import { useState } from 'react';
import Fuse from 'fuse.js';

/**
 *
 *
 * A custom React Hook to do an in-memory fuzzy text search
 * using Fuse.js.
 * @param data The data to do search
 * @param options Options to pass to the fuse search
 */
export function useFuse<T>(
  data: T[],
  options?: Fuse.IFuseOptions<T>
): {
  result: T[];
  search: (newSearch: string) => void;
  term: string;
  reset: () => void;
} {
  const [term, setTerm] = useState('');

  const fuseOptions = {
    threshold: 0.5,
    ...options,
  };

  const fuse = new Fuse<T>(data, fuseOptions);

  const result = fuse.search(`${term}`);
  const finalValue = term ? result.map((res) => res.item) : data;

  const reset = () => setTerm('');

  return { result: finalValue, search: setTerm, term, reset };
}
