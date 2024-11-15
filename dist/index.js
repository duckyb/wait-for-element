"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_rxjs = require("rxjs");
var import_operators = require("rxjs/operators");
function waitForElement$({
  root = document,
  ticks = 10,
  refreshInterval = 100,
  query
}) {
  const el$ = (0, import_rxjs.defer)(() => (0, import_rxjs.of)(root.querySelector(query)));
  return (0, import_rxjs.timer)(0, refreshInterval).pipe(
    (0, import_operators.switchMap)((tick) => {
      if (tick > ticks) {
        throw Error(`Waiting for ${query} resulted in a timeout!`);
      }
      return el$;
    }),
    (0, import_operators.first)()
  );
}
var src_default = waitForElement$;
//# sourceMappingURL=index.js.map