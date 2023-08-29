import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export function useObservable<T>(observable: Observable<T>): T | undefined {
  const [state, setState] = useState<T>();
  useEffect(() => {
    const sub = observable.subscribe((val) => setState(val));
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
}
