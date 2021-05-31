var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var main = {};

const name = 'dep';

var dep$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	name: name,
	'default': name
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(dep$1);

var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var dep = __importDefault(require$$0);

console.log('dep', dep);
console.log('dep.default', dep.default);
console.log();

export default main;
