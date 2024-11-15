import { defer, Observable, of, timer } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

/**
 * An observable that starts polling for the leaflet instance.
 * When the instance is available it is returned.
 */
function waitForElement$({
  root = document,
  ticks = 10,
  refreshInterval = 100,
  query,
}: {
  /** The root element to search in. */
  root?: Document;
  /** The number of ticks to wait before giving up. */
  ticks?: number;
  /** The interval between ticks. */
  refreshInterval?: number;
  /** The query to search for. */
  query: string;
}): Observable<Element | null> {
  const el$ = defer(() => of(root.querySelector(query)));
  return timer(0, refreshInterval).pipe(
    switchMap((tick) => {
      if (tick > ticks) {
        throw Error(`Waiting for ${query} resulted in a timeout!`);
      } return el$;
    }),
    first()
  );
}

export default waitForElement$;
