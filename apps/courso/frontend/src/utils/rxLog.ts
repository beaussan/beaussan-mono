import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export const log = (name: string) => <T>(
  source$: Observable<T>,
): Observable<T> =>
  source$.pipe(
    tap((value) =>
      console.log(
        `%cLog rxjs : ${name}`,
        'color: blue; font-size: 1rem',
        value,
      ),
    ),
  );
