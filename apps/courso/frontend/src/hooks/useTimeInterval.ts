import { useEffect, useState } from 'react';

export const useTimeInterval = (seconds: number): number => {
  const [secs, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((secs) => secs + 1);
    }, seconds * 1000);
    return () => clearInterval(interval);
  }, [seconds]);
  return secs;
};
