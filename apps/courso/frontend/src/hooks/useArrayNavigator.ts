import { useCallback, useState } from 'react';

export function useArrayNavigator<T>(data: Array<T> | undefined): {
  position: number;
  item: T | undefined;
  goNext: () => void;
  goPrev: () => void;
  goFirst: () => void;
  goLast: () => void;
  isFirst: boolean;
  isLast: boolean;
} {
  const [position, setPos] = useState<number>(0);
  const goNext = useCallback(() => {
    if (!data) {
      return;
    }
    if (position < data.length - 1) {
      setPos(position + 1);
    }
  }, [data, position]);
  const goPrev = useCallback(() => {
    if (!data) {
      return;
    }
    if (position !== 0) {
      setPos(position - 1);
    }
  }, [data, position]);

  const goFirst = useCallback(() => {
    setPos(0);
  }, []);

  const goLast = useCallback(() => {
    if (!data) {
      return;
    }
    setPos(data.length - 1);
  }, [data]);

  const isFirst = position === 0;
  const isLast = !!data && position === data.length - 1;

  return {
    position,
    item: data?.[position],
    goNext,
    goPrev,
    isFirst,
    isLast,
    goFirst,
    goLast,
  };
}
