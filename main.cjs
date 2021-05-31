// importDefaultHelper from TypeScript
// https://github.com/microsoft/TypeScript/blob/663b19fe4a7c4d4ddaa61aedadd28da06acd27b6/src/compiler/factory/emitHelpers.ts#L810-L819
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var dep = __importDefault(require("./dep.mjs"));

console.log('dep', dep)
console.log('dep.default', dep.default)
console.log('dep.name', dep.name)
console.log()
