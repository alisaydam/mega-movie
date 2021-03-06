var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["bg.jpg", "favicon.png", "heart.png", "heart.svg", "hidden.png", "hidden.svg", "logo.png", "logom.png", "profile.png", "visible.png", "visible.svg"]),
  _: {
    mime: { ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml" },
    entry: { "file": "start-5a6446ad.js", "js": ["start-5a6446ad.js", "chunks/vendor-b49f184f.js", "chunks/singletons-a6a7384f.js"], "css": ["assets/vendor-b0ab0215.css"] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/favmovies\/?$/,
        params: null,
        path: "/favmovies",
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/movieprev\/([^/]+?)\/?$/,
        params: (m) => ({ id: m[1] }),
        path: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/facebook\/?$/,
        params: null,
        path: "/facebook",
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/profile\/profile\/?$/,
        params: null,
        path: "/profile/profile",
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/search\/([^/]+?)\/?$/,
        params: (m) => ({ id: m[1] }),
        path: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/movie\/([^/]+?)\/?$/,
        params: (m) => ({ id: m[1] }),
        path: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/auth\/signin\/?$/,
        params: null,
        path: "/auth/signin",
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/auth\/signup\/?$/,
        params: null,
        path: "/auth/signup",
        a: [0, 10],
        b: [1]
      }
    ]
  }
};
module.exports = __toCommonJS(stdin_exports);
