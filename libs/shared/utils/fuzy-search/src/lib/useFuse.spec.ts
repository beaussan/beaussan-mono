import { act, renderHook } from '@testing-library/react';
import { useFuse } from './useFuse';

const initialValues = [
  {
    title: 'AAAAAAAA',
  },
  {
    title: 'BBBBBBBB',
  },
  {
    title: 'CCCCCCCC',
  },
];

describe('useFuse', () => {
  it('should return the initial values on init', () => {
    const { result } = renderHook(() => useFuse(initialValues));

    expect(result.current.result).toEqual(initialValues);
  });

  it('should update the data on search', () => {
    const { result } = renderHook(() =>
      useFuse(initialValues, { keys: ['title'], ignoreLocation: true })
    );

    act(() => {
      result.current.search('AA');
    });

    expect(result.current.result).toEqual([
      {
        title: 'AAAAAAAA',
      },
    ]);
  });

  it('should store the search term in the hook', () => {
    const { result } = renderHook(() =>
      useFuse(initialValues, { keys: ['title'], ignoreLocation: true })
    );

    act(() => {
      result.current.search('AA');
    });

    expect(result.current.term).toEqual('AA');
  });

  it('should reset on the reset call', () => {
    const { result } = renderHook(() =>
      useFuse(initialValues, { keys: ['title'], ignoreLocation: true })
    );

    act(() => {
      result.current.search('AA');
    });

    expect(result.current.result).toEqual([
      {
        title: 'AAAAAAAA',
      },
    ]);

    act(() => {
      result.current.reset();
    });

    expect(result.current.result).toEqual(initialValues);
  });
});
