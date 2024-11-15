// src/index.ts
import { defer, of, timer } from "rxjs";
import { switchMap, first } from "rxjs/operators";
function waitForElement$({
  root = document,
  ticks = 10,
  refreshInterval = 100,
  query
}) {
  const el$ = defer(() => of(root.querySelector(query)));
  return timer(0, refreshInterval).pipe(
    switchMap((tick) => {
      if (tick > ticks) {
        throw Error(`Waiting for ${query} resulted in a timeout!`);
      }
      return el$;
    }),
    first()
  );
}
var src_default = waitForElement$;
export {
  src_default as default
};
//# sourceMappingURL=index.mjs.map