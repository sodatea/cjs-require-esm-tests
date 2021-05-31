var __defProp = Object.defineProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};

// dep.mjs
var dep_exports = {};
__export(dep_exports, {
  default: () => dep_default,
  name: () => name
});
var name, dep_default;
var init_dep = __esm({
  "dep.mjs"() {
    name = "dep";
    dep_default = name;
  }
});

// main.cjs
var require_main = __commonJS({
  "main.cjs"(exports) {
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var dep = __importDefault((init_dep(), dep_exports));
    console.log("dep", dep);
    console.log("dep.default", dep.default);
    console.log("dep.name", dep.name);
    console.log();
  }
});
export default require_main();
