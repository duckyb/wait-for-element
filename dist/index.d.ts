import { Observable } from 'rxjs';

/**
 * An observable that starts polling for the leaflet instance.
 * When the instance is available it is returned.
 */
declare function waitForElement$({ root, ticks, refreshInterval, query, }: {
    /** The root element to search in. */
    root?: Document;
    /** The number of ticks to wait before giving up. */
    ticks?: number;
    /** The interval between ticks. */
    refreshInterval?: number;
    /** The query to search for. */
    query: string;
}): Observable<Element | null>;

export { waitForElement$ as default };
