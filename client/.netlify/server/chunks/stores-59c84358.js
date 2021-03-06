var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  a: () => allMovies,
  b: () => commentMovieId,
  c: () => commentsByMovie,
  f: () => favMovies,
  i: () => isAuth,
  p: () => popular,
  u: () => userData
});
var import_index_bb3f10a7 = require("./index-bb3f10a7.js");
const browser = false;
const subscriber_queue = [];
function writable(value, start = import_index_bb3f10a7.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_bb3f10a7.d)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = import_index_bb3f10a7.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_bb3f10a7.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const localAuth = browser;
const isAuth = writable(localAuth);
isAuth.subscribe((value) => {
});
const localUser = browser;
let userData = writable(JSON.parse(localUser));
userData.subscribe((value) => {
});
let localMovies = browser;
let favMovies = writable(JSON.parse(localMovies));
favMovies.subscribe((value) => {
});
let allLocalMovies = browser;
let allMovies = writable(JSON.parse(allLocalMovies));
allMovies.subscribe((value) => {
});
let allLocalMoviesByUser = browser;
let popular = writable(JSON.parse(allLocalMoviesByUser));
popular.subscribe((value) => {
});
let commentMovieIdLocal = browser;
let commentMovieId = writable(JSON.parse(commentMovieIdLocal));
commentMovieId.subscribe((value) => {
});
let commentsByMovieLocal = browser;
let commentsByMovie = writable(JSON.parse(commentsByMovieLocal));
commentsByMovie.subscribe((value) => {
});
module.exports = __toCommonJS(stdin_exports);
