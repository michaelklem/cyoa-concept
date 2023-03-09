/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");
channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/graph1/graph_viewer.js":
/*!***********************************************!*\
  !*** ./app/javascript/graph1/graph_viewer.js ***!
  \***********************************************/
/*! exports provided: GraphViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphViewer", function() { return GraphViewer; });
/* harmony import */ var sigma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sigma */ "./node_modules/sigma/index.js");
/* harmony import */ var sigma__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sigma__WEBPACK_IMPORTED_MODULE_0__);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// import Graph from "graphology.umd.min";
// let timeline = require("../vendor/graphology.min");


/*
  This is displayed in call details as an icon the user clicks on to view 
  render the transcription viewer.
*/
var GraphViewer = /*#__PURE__*/function (_HTMLElement) {
  _inherits(GraphViewer, _HTMLElement);
  var _super = _createSuper(GraphViewer);
  function GraphViewer() {
    _classCallCheck(this, GraphViewer);
    return _super.call(this);
  }
  _createClass(GraphViewer, [{
    key: "handleClick",
    value: function handleClick() {
      console.log('xxxx audioPlayers: clicked');
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var pages, graph, container, renderer;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getPages();
            case 2:
              pages = _context.sent;
              graph = new Graph(); // const graph = new Graph({multi: true, allowSelfLoops: false});
              // pages.forEach(page => {
              // });
              graph.addNode('John');
              graph.addNode('Martha');

              // Adding an edge
              graph.addEdge('John', 'Martha');
              this.innerHTML = "\n      <h1>Graph Viewer</h1>\n      <i \n        class=\"fa fa-file-text-o fa-lg view_transcription\" \n        title=\"Click to view transcription\"\n        style=\"margin-left:6px;\"\n        data-callid=\"123\"\n      ></i>\n      <div id='graph-container'></div>\n\n    ";
              container = document.getElementById("graph-container");
              renderer = new sigma__WEBPACK_IMPORTED_MODULE_0___default.a(graph, container, {
                renderEdgeLabels: true
              }); // Create the spring layout and start it:
              // const layout = new ForceSupervisor(graph);
              // layout.start();
              this.addEventListener("click", this.handleClick);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }
      return connectedCallback;
    }()
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
  }, {
    key: "getPages",
    value: function () {
      var _getPages = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var pages, resp;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              pages = [];
              _context2.prev = 1;
              _context2.next = 4;
              return fetch("/pages/all");
            case 4:
              resp = _context2.sent;
              _context2.next = 7;
              return resp.json();
            case 7:
              pages = _context2.sent;
              console.log("[getPages] " + JSON.stringify(pages));
              _context2.next = 14;
              break;
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](1);
              console.log("[getPages] Error: ".concat(_context2.t0));
            case 14:
              return _context2.abrupt("return", pages);
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 11]]);
      }));
      function getPages() {
        return _getPages.apply(this, arguments);
      }
      return getPages;
    }()
  }]);
  return GraphViewer;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("graph-viewer", GraphViewer);

/***/ }),

/***/ "./app/javascript/graph1/transcription_viewer_icon.js":
/*!************************************************************!*\
  !*** ./app/javascript/graph1/transcription_viewer_icon.js ***!
  \************************************************************/
/*! exports provided: TranscriptionViewerIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranscriptionViewerIcon", function() { return TranscriptionViewerIcon; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/*
  This is displayed in call details as an icon the user clicks on to view 
  render the transcription viewer.
*/
var TranscriptionViewerIcon = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TranscriptionViewerIcon, _HTMLElement);
  var _super = _createSuper(TranscriptionViewerIcon);
  function TranscriptionViewerIcon() {
    _classCallCheck(this, TranscriptionViewerIcon);
    return _super.call(this);
  }
  _createClass(TranscriptionViewerIcon, [{
    key: "handleClick",
    value: function handleClick() {
      console.log('xxxx audioPlayers: clicked');
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n      <h1>Component 2</h1>\n      <i \n        class=\"fa fa-file-text-o fa-lg view_transcription\" \n        title=\"Click to view transcription\"\n        style=\"margin-left:6px;\"\n        data-callid=\"123\"\n      ></i>\n\n    ";
      this.addEventListener("click", this.handleClick);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
  }]);
  return TranscriptionViewerIcon;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("transcription-viewer-icon", TranscriptionViewerIcon);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graph1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graph1 */ "./app/javascript/packs/graph1.js");
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.





_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"]();
window.Graph = __webpack_require__(/*! vendor/graphology.min */ "./app/javascript/vendor/graphology.min.js");
window.Sigma = __webpack_require__(/*! vendor/sigma.min */ "./app/javascript/vendor/sigma.min.js");

// import "../vendor/graphology-library.min";
// import "../vendor/graphology.min";

/***/ }),

/***/ "./app/javascript/packs/graph1.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/graph1.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph1_transcription_viewer_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graph1/transcription_viewer_icon */ "./app/javascript/graph1/transcription_viewer_icon.js");
/* harmony import */ var _graph1_graph_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graph1/graph_viewer */ "./app/javascript/graph1/graph_viewer.js");



/***/ }),

/***/ "./app/javascript/vendor/graphology.min.js":
/*!*************************************************!*\
  !*** ./app/javascript/vendor/graphology.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) {
   true ? module.exports = e() : undefined;
}(this, function () {
  "use strict";

  function t(e) {
    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, t(e);
  }
  function e(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, r(t, e);
  }
  function n(t) {
    return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, n(t);
  }
  function r(t, e) {
    return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, r(t, e);
  }
  function i() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }
  function o(t, e, n) {
    return o = i() ? Reflect.construct.bind() : function (t, e, n) {
      var i = [null];
      i.push.apply(i, e);
      var o = new (Function.bind.apply(t, i))();
      return n && r(o, n.prototype), o;
    }, o.apply(null, arguments);
  }
  function a(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return a = function a(t) {
      if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
      var i;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== e) {
        if (e.has(t)) return e.get(t);
        e.set(t, a);
      }
      function a() {
        return o(t, arguments, n(this).constructor);
      }
      return a.prototype = Object.create(t.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), r(a, t);
    }, a(t);
  }
  function c(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  var u = function u() {
    for (var t = arguments[0], e = 1, n = arguments.length; e < n; e++) if (arguments[e]) for (var r in arguments[e]) t[r] = arguments[e][r];
    return t;
  };
  function d(t, e, n, r) {
    var i = t._nodes.get(e),
      o = null;
    return i ? o = "mixed" === r ? i.out && i.out[n] || i.undirected && i.undirected[n] : "directed" === r ? i.out && i.out[n] : i.undirected && i.undirected[n] : o;
  }
  function s(e) {
    return "object" === t(e) && null !== e && e.constructor === Object;
  }
  function h(t) {
    var e;
    for (e in t) return !1;
    return !0;
  }
  function p(t, e, n) {
    Object.defineProperty(t, e, {
      enumerable: !1,
      configurable: !1,
      writable: !0,
      value: n
    });
  }
  function f(t, e, n) {
    var r = {
      enumerable: !0,
      configurable: !0
    };
    "function" == typeof n ? r.get = n : (r.value = n, r.writable = !1), Object.defineProperty(t, e, r);
  }
  function l(t) {
    return !!s(t) && !(t.attributes && !Array.isArray(t.attributes));
  }
  "function" == typeof Object.assign && (u = Object.assign);
  var g,
    y = {
      exports: {}
    },
    w = "object" == typeof Reflect ? Reflect : null,
    v = w && "function" == typeof w.apply ? w.apply : function (t, e, n) {
      return Function.prototype.apply.call(t, e, n);
    };
  g = w && "function" == typeof w.ownKeys ? w.ownKeys : Object.getOwnPropertySymbols ? function (t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
  } : function (t) {
    return Object.getOwnPropertyNames(t);
  };
  var b = Number.isNaN || function (t) {
    return t != t;
  };
  function m() {
    m.init.call(this);
  }
  y.exports = m, y.exports.once = function (t, e) {
    return new Promise(function (n, r) {
      function i(n) {
        t.removeListener(e, o), r(n);
      }
      function o() {
        "function" == typeof t.removeListener && t.removeListener("error", i), n([].slice.call(arguments));
      }
      U(t, e, o, {
        once: !0
      }), "error" !== e && function (t, e, n) {
        "function" == typeof t.on && U(t, "error", e, n);
      }(t, i, {
        once: !0
      });
    });
  }, m.EventEmitter = m, m.prototype._events = void 0, m.prototype._eventsCount = 0, m.prototype._maxListeners = void 0;
  var k = 10;
  function _(t) {
    if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
  }
  function G(t) {
    return void 0 === t._maxListeners ? m.defaultMaxListeners : t._maxListeners;
  }
  function x(t, e, n, r) {
    var i, o, a, c;
    if (_(n), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), o = t._events), a = o[e]), void 0 === a) a = o[e] = n, ++t._eventsCount;else if ("function" == typeof a ? a = o[e] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (i = G(t)) > 0 && a.length > i && !a.warned) {
      a.warned = !0;
      var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = a.length, c = u, console && console.warn && console.warn(c);
    }
    return t;
  }
  function E() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function A(t, e, n) {
    var r = {
        fired: !1,
        wrapFn: void 0,
        target: t,
        type: e,
        listener: n
      },
      i = E.bind(r);
    return i.listener = n, r.wrapFn = i, i;
  }
  function L(t, e, n) {
    var r = t._events;
    if (void 0 === r) return [];
    var i = r[e];
    return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function (t) {
      for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
      return e;
    }(i) : D(i, i.length);
  }
  function S(t) {
    var e = this._events;
    if (void 0 !== e) {
      var n = e[t];
      if ("function" == typeof n) return 1;
      if (void 0 !== n) return n.length;
    }
    return 0;
  }
  function D(t, e) {
    for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
    return n;
  }
  function U(t, e, n, r) {
    if ("function" == typeof t.on) r.once ? t.once(e, n) : t.on(e, n);else {
      if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
      t.addEventListener(e, function i(o) {
        r.once && t.removeEventListener(e, i), n(o);
      });
    }
  }
  function N(t) {
    if ("function" != typeof t) throw new Error("obliterator/iterator: expecting a function!");
    this.next = t;
  }
  Object.defineProperty(m, "defaultMaxListeners", {
    enumerable: !0,
    get: function get() {
      return k;
    },
    set: function set(t) {
      if ("number" != typeof t || t < 0 || b(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
      k = t;
    }
  }), m.init = function () {
    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, m.prototype.setMaxListeners = function (t) {
    if ("number" != typeof t || t < 0 || b(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
    return this._maxListeners = t, this;
  }, m.prototype.getMaxListeners = function () {
    return G(this);
  }, m.prototype.emit = function (t) {
    for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
    var r = "error" === t,
      i = this._events;
    if (void 0 !== i) r = r && void 0 === i.error;else if (!r) return !1;
    if (r) {
      var o;
      if (e.length > 0 && (o = e[0]), o instanceof Error) throw o;
      var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
      throw a.context = o, a;
    }
    var c = i[t];
    if (void 0 === c) return !1;
    if ("function" == typeof c) v(c, this, e);else {
      var u = c.length,
        d = D(c, u);
      for (n = 0; n < u; ++n) v(d[n], this, e);
    }
    return !0;
  }, m.prototype.addListener = function (t, e) {
    return x(this, t, e, !1);
  }, m.prototype.on = m.prototype.addListener, m.prototype.prependListener = function (t, e) {
    return x(this, t, e, !0);
  }, m.prototype.once = function (t, e) {
    return _(e), this.on(t, A(this, t, e)), this;
  }, m.prototype.prependOnceListener = function (t, e) {
    return _(e), this.prependListener(t, A(this, t, e)), this;
  }, m.prototype.removeListener = function (t, e) {
    var n, r, i, o, a;
    if (_(e), void 0 === (r = this._events)) return this;
    if (void 0 === (n = r[t])) return this;
    if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));else if ("function" != typeof n) {
      for (i = -1, o = n.length - 1; o >= 0; o--) if (n[o] === e || n[o].listener === e) {
        a = n[o].listener, i = o;
        break;
      }
      if (i < 0) return this;
      0 === i ? n.shift() : function (t, e) {
        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
        t.pop();
      }(n, i), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, a || e);
    }
    return this;
  }, m.prototype.off = m.prototype.removeListener, m.prototype.removeAllListeners = function (t) {
    var e, n, r;
    if (void 0 === (n = this._events)) return this;
    if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
    if (0 === arguments.length) {
      var i,
        o = Object.keys(n);
      for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
      return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }
    if ("function" == typeof (e = n[t])) this.removeListener(t, e);else if (void 0 !== e) for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
    return this;
  }, m.prototype.listeners = function (t) {
    return L(this, t, !0);
  }, m.prototype.rawListeners = function (t) {
    return L(this, t, !1);
  }, m.listenerCount = function (t, e) {
    return "function" == typeof t.listenerCount ? t.listenerCount(e) : S.call(t, e);
  }, m.prototype.listenerCount = S, m.prototype.eventNames = function () {
    return this._eventsCount > 0 ? g(this._events) : [];
  }, "undefined" != typeof Symbol && (N.prototype[Symbol.iterator] = function () {
    return this;
  }), N.of = function () {
    var t = arguments,
      e = t.length,
      n = 0;
    return new N(function () {
      return n >= e ? {
        done: !0
      } : {
        done: !1,
        value: t[n++]
      };
    });
  }, N.empty = function () {
    return new N(function () {
      return {
        done: !0
      };
    });
  }, N.fromSequence = function (t) {
    var e = 0,
      n = t.length;
    return new N(function () {
      return e >= n ? {
        done: !0
      } : {
        done: !1,
        value: t[e++]
      };
    });
  }, N.is = function (t) {
    return t instanceof N || "object" == typeof t && null !== t && "function" == typeof t.next;
  };
  var O = N,
    j = {};
  j.ARRAY_BUFFER_SUPPORT = "undefined" != typeof ArrayBuffer, j.SYMBOL_SUPPORT = "undefined" != typeof Symbol;
  var C = O,
    M = j,
    z = M.ARRAY_BUFFER_SUPPORT,
    W = M.SYMBOL_SUPPORT;
  var P = function P(t) {
      var e = function (t) {
        return "string" == typeof t || Array.isArray(t) || z && ArrayBuffer.isView(t) ? C.fromSequence(t) : "object" != typeof t || null === t ? null : W && "function" == typeof t[Symbol.iterator] ? t[Symbol.iterator]() : "function" == typeof t.next ? t : null;
      }(t);
      if (!e) throw new Error("obliterator: target is not iterable nor a valid iterator.");
      return e;
    },
    R = P,
    K = function K(t, e) {
      for (var n, r = arguments.length > 1 ? e : 1 / 0, i = r !== 1 / 0 ? new Array(r) : [], o = 0, a = R(t);;) {
        if (o === r) return i;
        if ((n = a.next()).done) return o !== e && (i.length = o), i;
        i[o++] = n.value;
      }
    },
    T = function (t) {
      function n(e) {
        var n;
        return (n = t.call(this) || this).name = "GraphError", n.message = e, n;
      }
      return e(n, t), n;
    }(a(Error)),
    B = function (t) {
      function n(e) {
        var r;
        return (r = t.call(this, e) || this).name = "InvalidArgumentsGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r), n.prototype.constructor), r;
      }
      return e(n, t), n;
    }(T),
    F = function (t) {
      function n(e) {
        var r;
        return (r = t.call(this, e) || this).name = "NotFoundGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r), n.prototype.constructor), r;
      }
      return e(n, t), n;
    }(T),
    I = function (t) {
      function n(e) {
        var r;
        return (r = t.call(this, e) || this).name = "UsageGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r), n.prototype.constructor), r;
      }
      return e(n, t), n;
    }(T);
  function Y(t, e) {
    this.key = t, this.attributes = e, this.clear();
  }
  function q(t, e) {
    this.key = t, this.attributes = e, this.clear();
  }
  function J(t, e) {
    this.key = t, this.attributes = e, this.clear();
  }
  function V(t, e, n, r, i) {
    this.key = e, this.attributes = i, this.undirected = t, this.source = n, this.target = r;
  }
  Y.prototype.clear = function () {
    this.inDegree = 0, this.outDegree = 0, this.undirectedDegree = 0, this.undirectedLoops = 0, this.directedLoops = 0, this["in"] = {}, this.out = {}, this.undirected = {};
  }, q.prototype.clear = function () {
    this.inDegree = 0, this.outDegree = 0, this.directedLoops = 0, this["in"] = {}, this.out = {};
  }, J.prototype.clear = function () {
    this.undirectedDegree = 0, this.undirectedLoops = 0, this.undirected = {};
  }, V.prototype.attach = function () {
    var t = "out",
      e = "in";
    this.undirected && (t = e = "undirected");
    var n = this.source.key,
      r = this.target.key;
    this.source[t][r] = this, this.undirected && n === r || (this.target[e][n] = this);
  }, V.prototype.attachMulti = function () {
    var t = "out",
      e = "in",
      n = this.source.key,
      r = this.target.key;
    this.undirected && (t = e = "undirected");
    var i = this.source[t],
      o = i[r];
    if (void 0 === o) return i[r] = this, void (this.undirected && n === r || (this.target[e][n] = this));
    o.previous = this, this.next = o, i[r] = this, this.target[e][n] = this;
  }, V.prototype.detach = function () {
    var t = this.source.key,
      e = this.target.key,
      n = "out",
      r = "in";
    this.undirected && (n = r = "undirected"), delete this.source[n][e], delete this.target[r][t];
  }, V.prototype.detachMulti = function () {
    var t = this.source.key,
      e = this.target.key,
      n = "out",
      r = "in";
    this.undirected && (n = r = "undirected"), void 0 === this.previous ? void 0 === this.next ? (delete this.source[n][e], delete this.target[r][t]) : (this.next.previous = void 0, this.source[n][e] = this.next, this.target[r][t] = this.next) : (this.previous.next = this.next, void 0 !== this.next && (this.next.previous = this.previous));
  };
  function H(t, e, n, r, i, o, a) {
    var c, u, d, s;
    if (r = "" + r, 0 === n) {
      if (!(c = t._nodes.get(r))) throw new F("Graph.".concat(e, ': could not find the "').concat(r, '" node in the graph.'));
      d = i, s = o;
    } else if (3 === n) {
      if (i = "" + i, !(u = t._edges.get(i))) throw new F("Graph.".concat(e, ': could not find the "').concat(i, '" edge in the graph.'));
      var h = u.source.key,
        p = u.target.key;
      if (r === h) c = u.target;else {
        if (r !== p) throw new F("Graph.".concat(e, ': the "').concat(r, '" node is not attached to the "').concat(i, '" edge (').concat(h, ", ").concat(p, ")."));
        c = u.source;
      }
      d = o, s = a;
    } else {
      if (!(u = t._edges.get(r))) throw new F("Graph.".concat(e, ': could not find the "').concat(r, '" edge in the graph.'));
      c = 1 === n ? u.source : u.target, d = i, s = o;
    }
    return [c, d, s];
  }
  var Q = [{
    name: function name(t) {
      return "get".concat(t, "Attribute");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r, i) {
        var o = H(this, e, n, t, r, i),
          a = o[0],
          c = o[1];
        return a.attributes[c];
      };
    }
  }, {
    name: function name(t) {
      return "get".concat(t, "Attributes");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r) {
        return H(this, e, n, t, r)[0].attributes;
      };
    }
  }, {
    name: function name(t) {
      return "has".concat(t, "Attribute");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r, i) {
        var o = H(this, e, n, t, r, i),
          a = o[0],
          c = o[1];
        return a.attributes.hasOwnProperty(c);
      };
    }
  }, {
    name: function name(t) {
      return "set".concat(t, "Attribute");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r, i, o) {
        var a = H(this, e, n, t, r, i, o),
          c = a[0],
          u = a[1],
          d = a[2];
        return c.attributes[u] = d, this.emit("nodeAttributesUpdated", {
          key: c.key,
          type: "set",
          attributes: c.attributes,
          name: u
        }), this;
      };
    }
  }, {
    name: function name(t) {
      return "update".concat(t, "Attribute");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r, i, o) {
        var a = H(this, e, n, t, r, i, o),
          c = a[0],
          u = a[1],
          d = a[2];
        if ("function" != typeof d) throw new B("Graph.".concat(e, ": updater should be a function."));
        var s = c.attributes,
          h = d(s[u]);
        return s[u] = h, this.emit("nodeAttributesUpdated", {
          key: c.key,
          type: "set",
          attributes: c.attributes,
          name: u
        }), this;
      };
    }
  }, {
    name: function name(t) {
      return "remove".concat(t, "Attribute");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r, i) {
        var o = H(this, e, n, t, r, i),
          a = o[0],
          c = o[1];
        return delete a.attributes[c], this.emit("nodeAttributesUpdated", {
          key: a.key,
          type: "remove",
          attributes: a.attributes,
          name: c
        }), this;
      };
    }
  }, {
    name: function name(t) {
      return "replace".concat(t, "Attributes");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r, i) {
        var o = H(this, e, n, t, r, i),
          a = o[0],
          c = o[1];
        if (!s(c)) throw new B("Graph.".concat(e, ": provided attributes are not a plain object."));
        return a.attributes = c, this.emit("nodeAttributesUpdated", {
          key: a.key,
          type: "replace",
          attributes: a.attributes
        }), this;
      };
    }
  }, {
    name: function name(t) {
      return "merge".concat(t, "Attributes");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r, i) {
        var o = H(this, e, n, t, r, i),
          a = o[0],
          c = o[1];
        if (!s(c)) throw new B("Graph.".concat(e, ": provided attributes are not a plain object."));
        return u(a.attributes, c), this.emit("nodeAttributesUpdated", {
          key: a.key,
          type: "merge",
          attributes: a.attributes,
          data: c
        }), this;
      };
    }
  }, {
    name: function name(t) {
      return "update".concat(t, "Attributes");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r, i) {
        var o = H(this, e, n, t, r, i),
          a = o[0],
          c = o[1];
        if ("function" != typeof c) throw new B("Graph.".concat(e, ": provided updater is not a function."));
        return a.attributes = c(a.attributes), this.emit("nodeAttributesUpdated", {
          key: a.key,
          type: "update",
          attributes: a.attributes
        }), this;
      };
    }
  }];
  var X = [{
    name: function name(t) {
      return "get".concat(t, "Attribute");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r) {
        var i;
        if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o = "" + t,
            a = "" + r;
          if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
        } else {
          if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
        }
        return i.attributes[r];
      };
    }
  }, {
    name: function name(t) {
      return "get".concat(t, "Attributes");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t) {
        var r;
        if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 1) {
          if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var i = "" + t,
            o = "" + arguments[1];
          if (!(r = d(this, i, o, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(i, '" - "').concat(o, '").'));
        } else {
          if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t = "" + t, !(r = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
        }
        return r.attributes;
      };
    }
  }, {
    name: function name(t) {
      return "has".concat(t, "Attribute");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r) {
        var i;
        if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o = "" + t,
            a = "" + r;
          if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
        } else {
          if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
        }
        return i.attributes.hasOwnProperty(r);
      };
    }
  }, {
    name: function name(t) {
      return "set".concat(t, "Attribute");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r, i) {
        var o;
        if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 3) {
          if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var a = "" + t,
            c = "" + r;
          if (r = arguments[2], i = arguments[3], !(o = d(this, a, c, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(a, '" - "').concat(c, '").'));
        } else {
          if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t = "" + t, !(o = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
        }
        return o.attributes[r] = i, this.emit("edgeAttributesUpdated", {
          key: o.key,
          type: "set",
          attributes: o.attributes,
          name: r
        }), this;
      };
    }
  }, {
    name: function name(t) {
      return "update".concat(t, "Attribute");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r, i) {
        var o;
        if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 3) {
          if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var a = "" + t,
            c = "" + r;
          if (r = arguments[2], i = arguments[3], !(o = d(this, a, c, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(a, '" - "').concat(c, '").'));
        } else {
          if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t = "" + t, !(o = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
        }
        if ("function" != typeof i) throw new B("Graph.".concat(e, ": updater should be a function."));
        return o.attributes[r] = i(o.attributes[r]), this.emit("edgeAttributesUpdated", {
          key: o.key,
          type: "set",
          attributes: o.attributes,
          name: r
        }), this;
      };
    }
  }, {
    name: function name(t) {
      return "remove".concat(t, "Attribute");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r) {
        var i;
        if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o = "" + t,
            a = "" + r;
          if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
        } else {
          if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
        }
        return delete i.attributes[r], this.emit("edgeAttributesUpdated", {
          key: i.key,
          type: "remove",
          attributes: i.attributes,
          name: r
        }), this;
      };
    }
  }, {
    name: function name(t) {
      return "replace".concat(t, "Attributes");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r) {
        var i;
        if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o = "" + t,
            a = "" + r;
          if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
        } else {
          if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
        }
        if (!s(r)) throw new B("Graph.".concat(e, ": provided attributes are not a plain object."));
        return i.attributes = r, this.emit("edgeAttributesUpdated", {
          key: i.key,
          type: "replace",
          attributes: i.attributes
        }), this;
      };
    }
  }, {
    name: function name(t) {
      return "merge".concat(t, "Attributes");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r) {
        var i;
        if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o = "" + t,
            a = "" + r;
          if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
        } else {
          if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
        }
        if (!s(r)) throw new B("Graph.".concat(e, ": provided attributes are not a plain object."));
        return u(i.attributes, r), this.emit("edgeAttributesUpdated", {
          key: i.key,
          type: "merge",
          attributes: i.attributes,
          data: r
        }), this;
      };
    }
  }, {
    name: function name(t) {
      return "update".concat(t, "Attributes");
    },
    attacher: function attacher(t, e, n) {
      t.prototype[e] = function (t, r) {
        var i;
        if ("mixed" !== this.type && "mixed" !== n && n !== this.type) throw new I("Graph.".concat(e, ": cannot find this type of edges in your ").concat(this.type, " graph."));
        if (arguments.length > 2) {
          if (this.multi) throw new I("Graph.".concat(e, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
          var o = "" + t,
            a = "" + r;
          if (r = arguments[2], !(i = d(this, o, a, n))) throw new F("Graph.".concat(e, ': could not find an edge for the given path ("').concat(o, '" - "').concat(a, '").'));
        } else {
          if ("mixed" !== n) throw new I("Graph.".concat(e, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
          if (t = "" + t, !(i = this._edges.get(t))) throw new F("Graph.".concat(e, ': could not find the "').concat(t, '" edge in the graph.'));
        }
        if ("function" != typeof r) throw new B("Graph.".concat(e, ": provided updater is not a function."));
        return i.attributes = r(i.attributes), this.emit("edgeAttributesUpdated", {
          key: i.key,
          type: "update",
          attributes: i.attributes
        }), this;
      };
    }
  }];
  var Z = O,
    $ = P,
    tt = function tt() {
      var t = arguments,
        e = null,
        n = -1;
      return new Z(function () {
        for (var r = null;;) {
          if (null === e) {
            if (++n >= t.length) return {
              done: !0
            };
            e = $(t[n]);
          }
          if (!0 !== (r = e.next()).done) break;
          e = null;
        }
        return r;
      });
    },
    et = [{
      name: "edges",
      type: "mixed"
    }, {
      name: "inEdges",
      type: "directed",
      direction: "in"
    }, {
      name: "outEdges",
      type: "directed",
      direction: "out"
    }, {
      name: "inboundEdges",
      type: "mixed",
      direction: "in"
    }, {
      name: "outboundEdges",
      type: "mixed",
      direction: "out"
    }, {
      name: "directedEdges",
      type: "directed"
    }, {
      name: "undirectedEdges",
      type: "undirected"
    }];
  function nt(t, e, n, r) {
    var i = !1;
    for (var o in e) if (o !== r) {
      var a = e[o];
      if (i = n(a.key, a.attributes, a.source.key, a.target.key, a.source.attributes, a.target.attributes, a.undirected), t && i) return a.key;
    }
  }
  function rt(t, e, n, r) {
    var i,
      o,
      a,
      c = !1;
    for (var u in e) if (u !== r) {
      i = e[u];
      do {
        if (o = i.source, a = i.target, c = n(i.key, i.attributes, o.key, a.key, o.attributes, a.attributes, i.undirected), t && c) return i.key;
        i = i.next;
      } while (void 0 !== i);
    }
  }
  function it(t, e) {
    var n,
      r = Object.keys(t),
      i = r.length,
      o = 0;
    return new O(function () {
      do {
        if (n) n = n.next;else {
          if (o >= i) return {
            done: !0
          };
          var a = r[o++];
          if (a === e) {
            n = void 0;
            continue;
          }
          n = t[a];
        }
      } while (!n);
      return {
        done: !1,
        value: {
          edge: n.key,
          attributes: n.attributes,
          source: n.source.key,
          target: n.target.key,
          sourceAttributes: n.source.attributes,
          targetAttributes: n.target.attributes,
          undirected: n.undirected
        }
      };
    });
  }
  function ot(t, e, n, r) {
    var i = e[n];
    if (i) {
      var o = i.source,
        a = i.target;
      return r(i.key, i.attributes, o.key, a.key, o.attributes, a.attributes, i.undirected) && t ? i.key : void 0;
    }
  }
  function at(t, e, n, r) {
    var i = e[n];
    if (i) {
      var o = !1;
      do {
        if (o = r(i.key, i.attributes, i.source.key, i.target.key, i.source.attributes, i.target.attributes, i.undirected), t && o) return i.key;
        i = i.next;
      } while (void 0 !== i);
    }
  }
  function ct(t, e) {
    var n = t[e];
    return void 0 !== n.next ? new O(function () {
      if (!n) return {
        done: !0
      };
      var t = {
        edge: n.key,
        attributes: n.attributes,
        source: n.source.key,
        target: n.target.key,
        sourceAttributes: n.source.attributes,
        targetAttributes: n.target.attributes,
        undirected: n.undirected
      };
      return n = n.next, {
        done: !1,
        value: t
      };
    }) : O.of({
      edge: n.key,
      attributes: n.attributes,
      source: n.source.key,
      target: n.target.key,
      sourceAttributes: n.source.attributes,
      targetAttributes: n.target.attributes,
      undirected: n.undirected
    });
  }
  function ut(t, e) {
    if (0 === t.size) return [];
    if ("mixed" === e || e === t.type) return "function" == typeof Array.from ? Array.from(t._edges.keys()) : K(t._edges.keys(), t._edges.size);
    for (var n, r, i = "undirected" === e ? t.undirectedSize : t.directedSize, o = new Array(i), a = "undirected" === e, c = t._edges.values(), u = 0; !0 !== (n = c.next()).done;) (r = n.value).undirected === a && (o[u++] = r.key);
    return o;
  }
  function dt(t, e, n, r) {
    if (0 !== e.size) for (var i, o, a = "mixed" !== n && n !== e.type, c = "undirected" === n, u = !1, d = e._edges.values(); !0 !== (i = d.next()).done;) if (o = i.value, !a || o.undirected === c) {
      var s = o,
        h = s.key,
        p = s.attributes,
        f = s.source,
        l = s.target;
      if (u = r(h, p, f.key, l.key, f.attributes, l.attributes, o.undirected), t && u) return h;
    }
  }
  function st(t, e) {
    if (0 === t.size) return O.empty();
    var n = "mixed" !== e && e !== t.type,
      r = "undirected" === e,
      i = t._edges.values();
    return new O(function () {
      for (var t, e;;) {
        if ((t = i.next()).done) return t;
        if (e = t.value, !n || e.undirected === r) break;
      }
      return {
        value: {
          edge: e.key,
          attributes: e.attributes,
          source: e.source.key,
          target: e.target.key,
          sourceAttributes: e.source.attributes,
          targetAttributes: e.target.attributes,
          undirected: e.undirected
        },
        done: !1
      };
    });
  }
  function ht(t, e, n, r, i, o) {
    var a,
      c = e ? rt : nt;
    if ("undirected" !== n) {
      if ("out" !== r && (a = c(t, i["in"], o), t && a)) return a;
      if ("in" !== r && (a = c(t, i.out, o, r ? void 0 : i.key), t && a)) return a;
    }
    if ("directed" !== n && (a = c(t, i.undirected, o), t && a)) return a;
  }
  function pt(t, e, n, r) {
    var i = [];
    return ht(!1, t, e, n, r, function (t) {
      i.push(t);
    }), i;
  }
  function ft(t, e, n) {
    var r = O.empty();
    return "undirected" !== t && ("out" !== e && void 0 !== n["in"] && (r = tt(r, it(n["in"]))), "in" !== e && void 0 !== n.out && (r = tt(r, it(n.out, e ? void 0 : n.key)))), "directed" !== t && void 0 !== n.undirected && (r = tt(r, it(n.undirected))), r;
  }
  function lt(t, e, n, r, i, o, a) {
    var c,
      u = n ? at : ot;
    if ("undirected" !== e) {
      if (void 0 !== i["in"] && "out" !== r && (c = u(t, i["in"], o, a), t && c)) return c;
      if (void 0 !== i.out && "in" !== r && (r || i.key !== o) && (c = u(t, i.out, o, a), t && c)) return c;
    }
    if ("directed" !== e && void 0 !== i.undirected && (c = u(t, i.undirected, o, a), t && c)) return c;
  }
  function gt(t, e, n, r, i) {
    var o = [];
    return lt(!1, t, e, n, r, i, function (t) {
      o.push(t);
    }), o;
  }
  function yt(t, e, n, r) {
    var i = O.empty();
    return "undirected" !== t && (void 0 !== n["in"] && "out" !== e && r in n["in"] && (i = tt(i, ct(n["in"], r))), void 0 !== n.out && "in" !== e && r in n.out && (e || n.key !== r) && (i = tt(i, ct(n.out, r)))), "directed" !== t && void 0 !== n.undirected && r in n.undirected && (i = tt(i, ct(n.undirected, r))), i;
  }
  var wt = [{
    name: "neighbors",
    type: "mixed"
  }, {
    name: "inNeighbors",
    type: "directed",
    direction: "in"
  }, {
    name: "outNeighbors",
    type: "directed",
    direction: "out"
  }, {
    name: "inboundNeighbors",
    type: "mixed",
    direction: "in"
  }, {
    name: "outboundNeighbors",
    type: "mixed",
    direction: "out"
  }, {
    name: "directedNeighbors",
    type: "directed"
  }, {
    name: "undirectedNeighbors",
    type: "undirected"
  }];
  function vt() {
    this.A = null, this.B = null;
  }
  function bt(t, e, n, r, i) {
    for (var o in r) {
      var a = r[o],
        c = a.source,
        u = a.target,
        d = c === n ? u : c;
      if (!e || !e.has(d.key)) {
        var s = i(d.key, d.attributes);
        if (t && s) return d.key;
      }
    }
  }
  function mt(t, e, n, r, i) {
    if ("mixed" !== e) {
      if ("undirected" === e) return bt(t, null, r, r.undirected, i);
      if ("string" == typeof n) return bt(t, null, r, r[n], i);
    }
    var o,
      a = new vt();
    if ("undirected" !== e) {
      if ("out" !== n) {
        if (o = bt(t, null, r, r["in"], i), t && o) return o;
        a.wrap(r["in"]);
      }
      if ("in" !== n) {
        if (o = bt(t, a, r, r.out, i), t && o) return o;
        a.wrap(r.out);
      }
    }
    if ("directed" !== e && (o = bt(t, a, r, r.undirected, i), t && o)) return o;
  }
  function kt(t, e, n) {
    var r = Object.keys(n),
      i = r.length,
      o = 0;
    return new O(function () {
      var a = null;
      do {
        if (o >= i) return t && t.wrap(n), {
          done: !0
        };
        var c = n[r[o++]],
          u = c.source,
          d = c.target;
        a = u === e ? d : u, t && t.has(a.key) && (a = null);
      } while (null === a);
      return {
        done: !1,
        value: {
          neighbor: a.key,
          attributes: a.attributes
        }
      };
    });
  }
  function _t(t, e) {
    var n = e.name,
      r = e.type,
      i = e.direction;
    t.prototype[n] = function (t) {
      if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return [];
      t = "" + t;
      var e = this._nodes.get(t);
      if (void 0 === e) throw new F("Graph.".concat(n, ': could not find the "').concat(t, '" node in the graph.'));
      return function (t, e, n) {
        if ("mixed" !== t) {
          if ("undirected" === t) return Object.keys(n.undirected);
          if ("string" == typeof e) return Object.keys(n[e]);
        }
        var r = [];
        return mt(!1, t, e, n, function (t) {
          r.push(t);
        }), r;
      }("mixed" === r ? this.type : r, i, e);
    };
  }
  function Gt(t, e) {
    var n = e.name,
      r = e.type,
      i = e.direction,
      o = n.slice(0, -1) + "Entries";
    t.prototype[o] = function (t) {
      if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return O.empty();
      t = "" + t;
      var e = this._nodes.get(t);
      if (void 0 === e) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
      return function (t, e, n) {
        if ("mixed" !== t) {
          if ("undirected" === t) return kt(null, n, n.undirected);
          if ("string" == typeof e) return kt(null, n, n[e]);
        }
        var r = O.empty(),
          i = new vt();
        return "undirected" !== t && ("out" !== e && (r = tt(r, kt(i, n, n["in"]))), "in" !== e && (r = tt(r, kt(i, n, n.out)))), "directed" !== t && (r = tt(r, kt(i, n, n.undirected))), r;
      }("mixed" === r ? this.type : r, i, e);
    };
  }
  function xt(t, e, n, r, i) {
    for (var o, a, c, u, d, s, h, p = r._nodes.values(), f = r.type; !0 !== (o = p.next()).done;) {
      var l = !1;
      if (a = o.value, "undirected" !== f) for (c in u = a.out) {
        d = u[c];
        do {
          if (s = d.target, l = !0, h = i(a.key, s.key, a.attributes, s.attributes, d.key, d.attributes, d.undirected), t && h) return d;
          d = d.next;
        } while (d);
      }
      if ("directed" !== f) for (c in u = a.undirected) if (!(e && a.key > c)) {
        d = u[c];
        do {
          if ((s = d.target).key !== c && (s = d.source), l = !0, h = i(a.key, s.key, a.attributes, s.attributes, d.key, d.attributes, d.undirected), t && h) return d;
          d = d.next;
        } while (d);
      }
      if (n && !l && (h = i(a.key, null, a.attributes, null, null, null, null), t && h)) return null;
    }
  }
  function Et(t) {
    if (!s(t)) throw new B('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');
    if (!("key" in t)) throw new B("Graph.import: serialized node is missing its key.");
    if ("attributes" in t && (!s(t.attributes) || null === t.attributes)) throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
  }
  function At(t) {
    if (!s(t)) throw new B('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');
    if (!("source" in t)) throw new B("Graph.import: serialized edge is missing its source.");
    if (!("target" in t)) throw new B("Graph.import: serialized edge is missing its target.");
    if ("attributes" in t && (!s(t.attributes) || null === t.attributes)) throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
    if ("undirected" in t && "boolean" != typeof t.undirected) throw new B("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.");
  }
  vt.prototype.wrap = function (t) {
    null === this.A ? this.A = t : null === this.B && (this.B = t);
  }, vt.prototype.has = function (t) {
    return null !== this.A && t in this.A || null !== this.B && t in this.B;
  };
  var Lt,
    St = (Lt = 255 & Math.floor(256 * Math.random()), function () {
      return Lt++;
    }),
    Dt = new Set(["directed", "undirected", "mixed"]),
    Ut = new Set(["domain", "_events", "_eventsCount", "_maxListeners"]),
    Nt = {
      allowSelfLoops: !0,
      multi: !1,
      type: "mixed"
    };
  function Ot(t, e, n) {
    var r = new t.NodeDataClass(e, n);
    return t._nodes.set(e, r), t.emit("nodeAdded", {
      key: e,
      attributes: n
    }), r;
  }
  function jt(t, e, n, r, i, o, a, c) {
    if (!r && "undirected" === t.type) throw new I("Graph.".concat(e, ": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));
    if (r && "directed" === t.type) throw new I("Graph.".concat(e, ": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));
    if (c && !s(c)) throw new B("Graph.".concat(e, ': invalid attributes. Expecting an object but got "').concat(c, '"'));
    if (o = "" + o, a = "" + a, c = c || {}, !t.allowSelfLoops && o === a) throw new I("Graph.".concat(e, ': source & target are the same ("').concat(o, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));
    var u = t._nodes.get(o),
      d = t._nodes.get(a);
    if (!u) throw new F("Graph.".concat(e, ': source node "').concat(o, '" not found.'));
    if (!d) throw new F("Graph.".concat(e, ': target node "').concat(a, '" not found.'));
    var h = {
      key: null,
      undirected: r,
      source: o,
      target: a,
      attributes: c
    };
    if (n) i = t._edgeKeyGenerator();else if (i = "" + i, t._edges.has(i)) throw new I("Graph.".concat(e, ': the "').concat(i, '" edge already exists in the graph.'));
    if (!t.multi && (r ? void 0 !== u.undirected[a] : void 0 !== u.out[a])) throw new I("Graph.".concat(e, ': an edge linking "').concat(o, '" to "').concat(a, "\" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option."));
    var p = new V(r, i, u, d, c);
    t._edges.set(i, p);
    var f = o === a;
    return r ? (u.undirectedDegree++, d.undirectedDegree++, f && (u.undirectedLoops++, t._undirectedSelfLoopCount++)) : (u.outDegree++, d.inDegree++, f && (u.directedLoops++, t._directedSelfLoopCount++)), t.multi ? p.attachMulti() : p.attach(), r ? t._undirectedSize++ : t._directedSize++, h.key = i, t.emit("edgeAdded", h), i;
  }
  function Ct(t, e, n, r, i, o, a, c, d) {
    if (!r && "undirected" === t.type) throw new I("Graph.".concat(e, ": you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead."));
    if (r && "directed" === t.type) throw new I("Graph.".concat(e, ": you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead."));
    if (c) if (d) {
      if ("function" != typeof c) throw new B("Graph.".concat(e, ': invalid updater function. Expecting a function but got "').concat(c, '"'));
    } else if (!s(c)) throw new B("Graph.".concat(e, ': invalid attributes. Expecting an object but got "').concat(c, '"'));
    var h;
    if (o = "" + o, a = "" + a, d && (h = c, c = void 0), !t.allowSelfLoops && o === a) throw new I("Graph.".concat(e, ': source & target are the same ("').concat(o, "\"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false."));
    var p,
      f,
      l = t._nodes.get(o),
      g = t._nodes.get(a);
    if (!n && (p = t._edges.get(i))) {
      if (!(p.source.key === o && p.target.key === a || r && p.source.key === a && p.target.key === o)) throw new I("Graph.".concat(e, ': inconsistency detected when attempting to merge the "').concat(i, '" edge with "').concat(o, '" source & "').concat(a, '" target vs. ("').concat(p.source.key, '", "').concat(p.target.key, '").'));
      f = p;
    }
    if (f || t.multi || !l || (f = r ? l.undirected[a] : l.out[a]), f) {
      var y = [f.key, !1, !1, !1];
      if (d ? !h : !c) return y;
      if (d) {
        var w = f.attributes;
        f.attributes = h(w), t.emit("edgeAttributesUpdated", {
          type: "replace",
          key: f.key,
          attributes: f.attributes
        });
      } else u(f.attributes, c), t.emit("edgeAttributesUpdated", {
        type: "merge",
        key: f.key,
        attributes: f.attributes,
        data: c
      });
      return y;
    }
    c = c || {}, d && h && (c = h(c));
    var v = {
      key: null,
      undirected: r,
      source: o,
      target: a,
      attributes: c
    };
    if (n) i = t._edgeKeyGenerator();else if (i = "" + i, t._edges.has(i)) throw new I("Graph.".concat(e, ': the "').concat(i, '" edge already exists in the graph.'));
    var b = !1,
      m = !1;
    l || (l = Ot(t, o, {}), b = !0, o === a && (g = l, m = !0)), g || (g = Ot(t, a, {}), m = !0), p = new V(r, i, l, g, c), t._edges.set(i, p);
    var k = o === a;
    return r ? (l.undirectedDegree++, g.undirectedDegree++, k && (l.undirectedLoops++, t._undirectedSelfLoopCount++)) : (l.outDegree++, g.inDegree++, k && (l.directedLoops++, t._directedSelfLoopCount++)), t.multi ? p.attachMulti() : p.attach(), r ? t._undirectedSize++ : t._directedSize++, v.key = i, t.emit("edgeAdded", v), [i, !0, b, m];
  }
  function Mt(t, e) {
    t._edges["delete"](e.key);
    var n = e.source,
      r = e.target,
      i = e.attributes,
      o = e.undirected,
      a = n === r;
    o ? (n.undirectedDegree--, r.undirectedDegree--, a && (n.undirectedLoops--, t._undirectedSelfLoopCount--)) : (n.outDegree--, r.inDegree--, a && (n.directedLoops--, t._directedSelfLoopCount--)), t.multi ? e.detachMulti() : e.detach(), o ? t._undirectedSize-- : t._directedSize--, t.emit("edgeDropped", {
      key: e.key,
      attributes: i,
      source: n.key,
      target: r.key,
      undirected: o
    });
  }
  var zt = function (n) {
    function r(t) {
      var e;
      if (e = n.call(this) || this, "boolean" != typeof (t = u({}, Nt, t)).multi) throw new B("Graph.constructor: invalid 'multi' option. Expecting a boolean but got \"".concat(t.multi, '".'));
      if (!Dt.has(t.type)) throw new B('Graph.constructor: invalid \'type\' option. Should be one of "mixed", "directed" or "undirected" but got "'.concat(t.type, '".'));
      if ("boolean" != typeof t.allowSelfLoops) throw new B("Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got \"".concat(t.allowSelfLoops, '".'));
      var r = "mixed" === t.type ? Y : "directed" === t.type ? q : J;
      p(c(e), "NodeDataClass", r);
      var i = "geid_" + St() + "_",
        o = 0;
      return p(c(e), "_attributes", {}), p(c(e), "_nodes", new Map()), p(c(e), "_edges", new Map()), p(c(e), "_directedSize", 0), p(c(e), "_undirectedSize", 0), p(c(e), "_directedSelfLoopCount", 0), p(c(e), "_undirectedSelfLoopCount", 0), p(c(e), "_edgeKeyGenerator", function () {
        var t;
        do {
          t = i + o++;
        } while (e._edges.has(t));
        return t;
      }), p(c(e), "_options", t), Ut.forEach(function (t) {
        return p(c(e), t, e[t]);
      }), f(c(e), "order", function () {
        return e._nodes.size;
      }), f(c(e), "size", function () {
        return e._edges.size;
      }), f(c(e), "directedSize", function () {
        return e._directedSize;
      }), f(c(e), "undirectedSize", function () {
        return e._undirectedSize;
      }), f(c(e), "selfLoopCount", function () {
        return e._directedSelfLoopCount + e._undirectedSelfLoopCount;
      }), f(c(e), "directedSelfLoopCount", function () {
        return e._directedSelfLoopCount;
      }), f(c(e), "undirectedSelfLoopCount", function () {
        return e._undirectedSelfLoopCount;
      }), f(c(e), "multi", e._options.multi), f(c(e), "type", e._options.type), f(c(e), "allowSelfLoops", e._options.allowSelfLoops), f(c(e), "implementation", function () {
        return "graphology";
      }), e;
    }
    e(r, n);
    var i = r.prototype;
    return i._resetInstanceCounters = function () {
      this._directedSize = 0, this._undirectedSize = 0, this._directedSelfLoopCount = 0, this._undirectedSelfLoopCount = 0;
    }, i.hasNode = function (t) {
      return this._nodes.has("" + t);
    }, i.hasDirectedEdge = function (t, e) {
      if ("undirected" === this.type) return !1;
      if (1 === arguments.length) {
        var n = "" + t,
          r = this._edges.get(n);
        return !!r && !r.undirected;
      }
      if (2 === arguments.length) {
        t = "" + t, e = "" + e;
        var i = this._nodes.get(t);
        return !!i && i.out.hasOwnProperty(e);
      }
      throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
    }, i.hasUndirectedEdge = function (t, e) {
      if ("directed" === this.type) return !1;
      if (1 === arguments.length) {
        var n = "" + t,
          r = this._edges.get(n);
        return !!r && r.undirected;
      }
      if (2 === arguments.length) {
        t = "" + t, e = "" + e;
        var i = this._nodes.get(t);
        return !!i && i.undirected.hasOwnProperty(e);
      }
      throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
    }, i.hasEdge = function (t, e) {
      if (1 === arguments.length) {
        var n = "" + t;
        return this._edges.has(n);
      }
      if (2 === arguments.length) {
        t = "" + t, e = "" + e;
        var r = this._nodes.get(t);
        return !!r && (void 0 !== r.out && r.out.hasOwnProperty(e) || void 0 !== r.undirected && r.undirected.hasOwnProperty(e));
      }
      throw new B("Graph.hasEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
    }, i.directedEdge = function (t, e) {
      if ("undirected" !== this.type) {
        if (t = "" + t, e = "" + e, this.multi) throw new I("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");
        var n = this._nodes.get(t);
        if (!n) throw new F('Graph.directedEdge: could not find the "'.concat(t, '" source node in the graph.'));
        if (!this._nodes.has(e)) throw new F('Graph.directedEdge: could not find the "'.concat(e, '" target node in the graph.'));
        var r = n.out && n.out[e] || void 0;
        return r ? r.key : void 0;
      }
    }, i.undirectedEdge = function (t, e) {
      if ("directed" !== this.type) {
        if (t = "" + t, e = "" + e, this.multi) throw new I("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");
        var n = this._nodes.get(t);
        if (!n) throw new F('Graph.undirectedEdge: could not find the "'.concat(t, '" source node in the graph.'));
        if (!this._nodes.has(e)) throw new F('Graph.undirectedEdge: could not find the "'.concat(e, '" target node in the graph.'));
        var r = n.undirected && n.undirected[e] || void 0;
        return r ? r.key : void 0;
      }
    }, i.edge = function (t, e) {
      if (this.multi) throw new I("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");
      t = "" + t, e = "" + e;
      var n = this._nodes.get(t);
      if (!n) throw new F('Graph.edge: could not find the "'.concat(t, '" source node in the graph.'));
      if (!this._nodes.has(e)) throw new F('Graph.edge: could not find the "'.concat(e, '" target node in the graph.'));
      var r = n.out && n.out[e] || n.undirected && n.undirected[e] || void 0;
      if (r) return r.key;
    }, i.areDirectedNeighbors = function (t, e) {
      t = "" + t, e = "" + e;
      var n = this._nodes.get(t);
      if (!n) throw new F('Graph.areDirectedNeighbors: could not find the "'.concat(t, '" node in the graph.'));
      return "undirected" !== this.type && (e in n["in"] || e in n.out);
    }, i.areOutNeighbors = function (t, e) {
      t = "" + t, e = "" + e;
      var n = this._nodes.get(t);
      if (!n) throw new F('Graph.areOutNeighbors: could not find the "'.concat(t, '" node in the graph.'));
      return "undirected" !== this.type && e in n.out;
    }, i.areInNeighbors = function (t, e) {
      t = "" + t, e = "" + e;
      var n = this._nodes.get(t);
      if (!n) throw new F('Graph.areInNeighbors: could not find the "'.concat(t, '" node in the graph.'));
      return "undirected" !== this.type && e in n["in"];
    }, i.areUndirectedNeighbors = function (t, e) {
      t = "" + t, e = "" + e;
      var n = this._nodes.get(t);
      if (!n) throw new F('Graph.areUndirectedNeighbors: could not find the "'.concat(t, '" node in the graph.'));
      return "directed" !== this.type && e in n.undirected;
    }, i.areNeighbors = function (t, e) {
      t = "" + t, e = "" + e;
      var n = this._nodes.get(t);
      if (!n) throw new F('Graph.areNeighbors: could not find the "'.concat(t, '" node in the graph.'));
      return "undirected" !== this.type && (e in n["in"] || e in n.out) || "directed" !== this.type && e in n.undirected;
    }, i.areInboundNeighbors = function (t, e) {
      t = "" + t, e = "" + e;
      var n = this._nodes.get(t);
      if (!n) throw new F('Graph.areInboundNeighbors: could not find the "'.concat(t, '" node in the graph.'));
      return "undirected" !== this.type && e in n["in"] || "directed" !== this.type && e in n.undirected;
    }, i.areOutboundNeighbors = function (t, e) {
      t = "" + t, e = "" + e;
      var n = this._nodes.get(t);
      if (!n) throw new F('Graph.areOutboundNeighbors: could not find the "'.concat(t, '" node in the graph.'));
      return "undirected" !== this.type && e in n.out || "directed" !== this.type && e in n.undirected;
    }, i.inDegree = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.inDegree: could not find the "'.concat(t, '" node in the graph.'));
      return "undirected" === this.type ? 0 : e.inDegree;
    }, i.outDegree = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.outDegree: could not find the "'.concat(t, '" node in the graph.'));
      return "undirected" === this.type ? 0 : e.outDegree;
    }, i.directedDegree = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.directedDegree: could not find the "'.concat(t, '" node in the graph.'));
      return "undirected" === this.type ? 0 : e.inDegree + e.outDegree;
    }, i.undirectedDegree = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.undirectedDegree: could not find the "'.concat(t, '" node in the graph.'));
      return "directed" === this.type ? 0 : e.undirectedDegree;
    }, i.inboundDegree = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.inboundDegree: could not find the "'.concat(t, '" node in the graph.'));
      var n = 0;
      return "directed" !== this.type && (n += e.undirectedDegree), "undirected" !== this.type && (n += e.inDegree), n;
    }, i.outboundDegree = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.outboundDegree: could not find the "'.concat(t, '" node in the graph.'));
      var n = 0;
      return "directed" !== this.type && (n += e.undirectedDegree), "undirected" !== this.type && (n += e.outDegree), n;
    }, i.degree = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.degree: could not find the "'.concat(t, '" node in the graph.'));
      var n = 0;
      return "directed" !== this.type && (n += e.undirectedDegree), "undirected" !== this.type && (n += e.inDegree + e.outDegree), n;
    }, i.inDegreeWithoutSelfLoops = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
      return "undirected" === this.type ? 0 : e.inDegree - e.directedLoops;
    }, i.outDegreeWithoutSelfLoops = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
      return "undirected" === this.type ? 0 : e.outDegree - e.directedLoops;
    }, i.directedDegreeWithoutSelfLoops = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
      return "undirected" === this.type ? 0 : e.inDegree + e.outDegree - 2 * e.directedLoops;
    }, i.undirectedDegreeWithoutSelfLoops = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
      return "directed" === this.type ? 0 : e.undirectedDegree - 2 * e.undirectedLoops;
    }, i.inboundDegreeWithoutSelfLoops = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
      var n = 0,
        r = 0;
      return "directed" !== this.type && (n += e.undirectedDegree, r += 2 * e.undirectedLoops), "undirected" !== this.type && (n += e.inDegree, r += e.directedLoops), n - r;
    }, i.outboundDegreeWithoutSelfLoops = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
      var n = 0,
        r = 0;
      return "directed" !== this.type && (n += e.undirectedDegree, r += 2 * e.undirectedLoops), "undirected" !== this.type && (n += e.outDegree, r += e.directedLoops), n - r;
    }, i.degreeWithoutSelfLoops = function (t) {
      t = "" + t;
      var e = this._nodes.get(t);
      if (!e) throw new F('Graph.degreeWithoutSelfLoops: could not find the "'.concat(t, '" node in the graph.'));
      var n = 0,
        r = 0;
      return "directed" !== this.type && (n += e.undirectedDegree, r += 2 * e.undirectedLoops), "undirected" !== this.type && (n += e.inDegree + e.outDegree, r += 2 * e.directedLoops), n - r;
    }, i.source = function (t) {
      t = "" + t;
      var e = this._edges.get(t);
      if (!e) throw new F('Graph.source: could not find the "'.concat(t, '" edge in the graph.'));
      return e.source.key;
    }, i.target = function (t) {
      t = "" + t;
      var e = this._edges.get(t);
      if (!e) throw new F('Graph.target: could not find the "'.concat(t, '" edge in the graph.'));
      return e.target.key;
    }, i.extremities = function (t) {
      t = "" + t;
      var e = this._edges.get(t);
      if (!e) throw new F('Graph.extremities: could not find the "'.concat(t, '" edge in the graph.'));
      return [e.source.key, e.target.key];
    }, i.opposite = function (t, e) {
      t = "" + t, e = "" + e;
      var n = this._edges.get(e);
      if (!n) throw new F('Graph.opposite: could not find the "'.concat(e, '" edge in the graph.'));
      var r = n.source.key,
        i = n.target.key;
      if (t === r) return i;
      if (t === i) return r;
      throw new F('Graph.opposite: the "'.concat(t, '" node is not attached to the "').concat(e, '" edge (').concat(r, ", ").concat(i, ")."));
    }, i.hasExtremity = function (t, e) {
      t = "" + t, e = "" + e;
      var n = this._edges.get(t);
      if (!n) throw new F('Graph.hasExtremity: could not find the "'.concat(t, '" edge in the graph.'));
      return n.source.key === e || n.target.key === e;
    }, i.isUndirected = function (t) {
      t = "" + t;
      var e = this._edges.get(t);
      if (!e) throw new F('Graph.isUndirected: could not find the "'.concat(t, '" edge in the graph.'));
      return e.undirected;
    }, i.isDirected = function (t) {
      t = "" + t;
      var e = this._edges.get(t);
      if (!e) throw new F('Graph.isDirected: could not find the "'.concat(t, '" edge in the graph.'));
      return !e.undirected;
    }, i.isSelfLoop = function (t) {
      t = "" + t;
      var e = this._edges.get(t);
      if (!e) throw new F('Graph.isSelfLoop: could not find the "'.concat(t, '" edge in the graph.'));
      return e.source === e.target;
    }, i.addNode = function (t, e) {
      var n = function (t, e, n) {
        if (n && !s(n)) throw new B('Graph.addNode: invalid attributes. Expecting an object but got "'.concat(n, '"'));
        if (e = "" + e, n = n || {}, t._nodes.has(e)) throw new I('Graph.addNode: the "'.concat(e, '" node already exist in the graph.'));
        var r = new t.NodeDataClass(e, n);
        return t._nodes.set(e, r), t.emit("nodeAdded", {
          key: e,
          attributes: n
        }), r;
      }(this, t, e);
      return n.key;
    }, i.mergeNode = function (t, e) {
      if (e && !s(e)) throw new B('Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(e, '"'));
      t = "" + t, e = e || {};
      var n = this._nodes.get(t);
      return n ? (e && (u(n.attributes, e), this.emit("nodeAttributesUpdated", {
        type: "merge",
        key: t,
        attributes: n.attributes,
        data: e
      })), [t, !1]) : (n = new this.NodeDataClass(t, e), this._nodes.set(t, n), this.emit("nodeAdded", {
        key: t,
        attributes: e
      }), [t, !0]);
    }, i.updateNode = function (t, e) {
      if (e && "function" != typeof e) throw new B('Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(e, '"'));
      t = "" + t;
      var n = this._nodes.get(t);
      if (n) {
        if (e) {
          var r = n.attributes;
          n.attributes = e(r), this.emit("nodeAttributesUpdated", {
            type: "replace",
            key: t,
            attributes: n.attributes
          });
        }
        return [t, !1];
      }
      var i = e ? e({}) : {};
      return n = new this.NodeDataClass(t, i), this._nodes.set(t, n), this.emit("nodeAdded", {
        key: t,
        attributes: i
      }), [t, !0];
    }, i.dropNode = function (t) {
      t = "" + t;
      var e,
        n = this._nodes.get(t);
      if (!n) throw new F('Graph.dropNode: could not find the "'.concat(t, '" node in the graph.'));
      if ("undirected" !== this.type) {
        for (var r in n.out) {
          e = n.out[r];
          do {
            Mt(this, e), e = e.next;
          } while (e);
        }
        for (var i in n["in"]) {
          e = n["in"][i];
          do {
            Mt(this, e), e = e.next;
          } while (e);
        }
      }
      if ("directed" !== this.type) for (var o in n.undirected) {
        e = n.undirected[o];
        do {
          Mt(this, e), e = e.next;
        } while (e);
      }
      this._nodes["delete"](t), this.emit("nodeDropped", {
        key: t,
        attributes: n.attributes
      });
    }, i.dropEdge = function (t) {
      var e;
      if (arguments.length > 1) {
        var n = "" + arguments[0],
          r = "" + arguments[1];
        if (!(e = d(this, n, r, this.type))) throw new F('Graph.dropEdge: could not find the "'.concat(n, '" -> "').concat(r, '" edge in the graph.'));
      } else if (t = "" + t, !(e = this._edges.get(t))) throw new F('Graph.dropEdge: could not find the "'.concat(t, '" edge in the graph.'));
      return Mt(this, e), this;
    }, i.dropDirectedEdge = function (t, e) {
      if (arguments.length < 2) throw new I("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
      if (this.multi) throw new I("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
      var n = d(this, t = "" + t, e = "" + e, "directed");
      if (!n) throw new F('Graph.dropDirectedEdge: could not find a "'.concat(t, '" -> "').concat(e, '" edge in the graph.'));
      return Mt(this, n), this;
    }, i.dropUndirectedEdge = function (t, e) {
      if (arguments.length < 2) throw new I("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
      if (this.multi) throw new I("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
      var n = d(this, t, e, "undirected");
      if (!n) throw new F('Graph.dropUndirectedEdge: could not find a "'.concat(t, '" -> "').concat(e, '" edge in the graph.'));
      return Mt(this, n), this;
    }, i.clear = function () {
      this._edges.clear(), this._nodes.clear(), this._resetInstanceCounters(), this.emit("cleared");
    }, i.clearEdges = function () {
      for (var t, e = this._nodes.values(); !0 !== (t = e.next()).done;) t.value.clear();
      this._edges.clear(), this._resetInstanceCounters(), this.emit("edgesCleared");
    }, i.getAttribute = function (t) {
      return this._attributes[t];
    }, i.getAttributes = function () {
      return this._attributes;
    }, i.hasAttribute = function (t) {
      return this._attributes.hasOwnProperty(t);
    }, i.setAttribute = function (t, e) {
      return this._attributes[t] = e, this.emit("attributesUpdated", {
        type: "set",
        attributes: this._attributes,
        name: t
      }), this;
    }, i.updateAttribute = function (t, e) {
      if ("function" != typeof e) throw new B("Graph.updateAttribute: updater should be a function.");
      var n = this._attributes[t];
      return this._attributes[t] = e(n), this.emit("attributesUpdated", {
        type: "set",
        attributes: this._attributes,
        name: t
      }), this;
    }, i.removeAttribute = function (t) {
      return delete this._attributes[t], this.emit("attributesUpdated", {
        type: "remove",
        attributes: this._attributes,
        name: t
      }), this;
    }, i.replaceAttributes = function (t) {
      if (!s(t)) throw new B("Graph.replaceAttributes: provided attributes are not a plain object.");
      return this._attributes = t, this.emit("attributesUpdated", {
        type: "replace",
        attributes: this._attributes
      }), this;
    }, i.mergeAttributes = function (t) {
      if (!s(t)) throw new B("Graph.mergeAttributes: provided attributes are not a plain object.");
      return u(this._attributes, t), this.emit("attributesUpdated", {
        type: "merge",
        attributes: this._attributes,
        data: t
      }), this;
    }, i.updateAttributes = function (t) {
      if ("function" != typeof t) throw new B("Graph.updateAttributes: provided updater is not a function.");
      return this._attributes = t(this._attributes), this.emit("attributesUpdated", {
        type: "update",
        attributes: this._attributes
      }), this;
    }, i.updateEachNodeAttributes = function (t, e) {
      if ("function" != typeof t) throw new B("Graph.updateEachNodeAttributes: expecting an updater function.");
      if (e && !l(e)) throw new B("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
      for (var n, r, i = this._nodes.values(); !0 !== (n = i.next()).done;) (r = n.value).attributes = t(r.key, r.attributes);
      this.emit("eachNodeAttributesUpdated", {
        hints: e || null
      });
    }, i.updateEachEdgeAttributes = function (t, e) {
      if ("function" != typeof t) throw new B("Graph.updateEachEdgeAttributes: expecting an updater function.");
      if (e && !l(e)) throw new B("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
      for (var n, r, i, o, a = this._edges.values(); !0 !== (n = a.next()).done;) i = (r = n.value).source, o = r.target, r.attributes = t(r.key, r.attributes, i.key, o.key, i.attributes, o.attributes, r.undirected);
      this.emit("eachEdgeAttributesUpdated", {
        hints: e || null
      });
    }, i.forEachAdjacencyEntry = function (t) {
      if ("function" != typeof t) throw new B("Graph.forEachAdjacencyEntry: expecting a callback.");
      xt(!1, !1, !1, this, t);
    }, i.forEachAdjacencyEntryWithOrphans = function (t) {
      if ("function" != typeof t) throw new B("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");
      xt(!1, !1, !0, this, t);
    }, i.forEachAssymetricAdjacencyEntry = function (t) {
      if ("function" != typeof t) throw new B("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");
      xt(!1, !0, !1, this, t);
    }, i.forEachAssymetricAdjacencyEntryWithOrphans = function (t) {
      if ("function" != typeof t) throw new B("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");
      xt(!1, !0, !0, this, t);
    }, i.nodes = function () {
      return "function" == typeof Array.from ? Array.from(this._nodes.keys()) : K(this._nodes.keys(), this._nodes.size);
    }, i.forEachNode = function (t) {
      if ("function" != typeof t) throw new B("Graph.forEachNode: expecting a callback.");
      for (var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;) t((n = e.value).key, n.attributes);
    }, i.findNode = function (t) {
      if ("function" != typeof t) throw new B("Graph.findNode: expecting a callback.");
      for (var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;) if (t((n = e.value).key, n.attributes)) return n.key;
    }, i.mapNodes = function (t) {
      if ("function" != typeof t) throw new B("Graph.mapNode: expecting a callback.");
      for (var e, n, r = this._nodes.values(), i = new Array(this.order), o = 0; !0 !== (e = r.next()).done;) n = e.value, i[o++] = t(n.key, n.attributes);
      return i;
    }, i.someNode = function (t) {
      if ("function" != typeof t) throw new B("Graph.someNode: expecting a callback.");
      for (var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;) if (t((n = e.value).key, n.attributes)) return !0;
      return !1;
    }, i.everyNode = function (t) {
      if ("function" != typeof t) throw new B("Graph.everyNode: expecting a callback.");
      for (var e, n, r = this._nodes.values(); !0 !== (e = r.next()).done;) if (!t((n = e.value).key, n.attributes)) return !1;
      return !0;
    }, i.filterNodes = function (t) {
      if ("function" != typeof t) throw new B("Graph.filterNodes: expecting a callback.");
      for (var e, n, r = this._nodes.values(), i = []; !0 !== (e = r.next()).done;) t((n = e.value).key, n.attributes) && i.push(n.key);
      return i;
    }, i.reduceNodes = function (t, e) {
      if ("function" != typeof t) throw new B("Graph.reduceNodes: expecting a callback.");
      if (arguments.length < 2) throw new B("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");
      for (var n, r, i = e, o = this._nodes.values(); !0 !== (n = o.next()).done;) i = t(i, (r = n.value).key, r.attributes);
      return i;
    }, i.nodeEntries = function () {
      var t = this._nodes.values();
      return new O(function () {
        var e = t.next();
        if (e.done) return e;
        var n = e.value;
        return {
          value: {
            node: n.key,
            attributes: n.attributes
          },
          done: !1
        };
      });
    }, i["export"] = function () {
      var t = this,
        e = new Array(this._nodes.size),
        n = 0;
      this._nodes.forEach(function (t, r) {
        e[n++] = function (t, e) {
          var n = {
            key: t
          };
          return h(e.attributes) || (n.attributes = u({}, e.attributes)), n;
        }(r, t);
      });
      var r = new Array(this._edges.size);
      return n = 0, this._edges.forEach(function (e, i) {
        r[n++] = function (t, e, n) {
          var r = {
            key: e,
            source: n.source.key,
            target: n.target.key
          };
          return h(n.attributes) || (r.attributes = u({}, n.attributes)), "mixed" === t && n.undirected && (r.undirected = !0), r;
        }(t.type, i, e);
      }), {
        options: {
          type: this.type,
          multi: this.multi,
          allowSelfLoops: this.allowSelfLoops
        },
        attributes: this.getAttributes(),
        nodes: e,
        edges: r
      };
    }, i["import"] = function (t) {
      var e,
        n,
        i,
        o,
        a,
        c = this,
        u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (t instanceof r) return t.forEachNode(function (t, e) {
        u ? c.mergeNode(t, e) : c.addNode(t, e);
      }), t.forEachEdge(function (t, e, n, r, i, o, a) {
        u ? a ? c.mergeUndirectedEdgeWithKey(t, n, r, e) : c.mergeDirectedEdgeWithKey(t, n, r, e) : a ? c.addUndirectedEdgeWithKey(t, n, r, e) : c.addDirectedEdgeWithKey(t, n, r, e);
      }), this;
      if (!s(t)) throw new B("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");
      if (t.attributes) {
        if (!s(t.attributes)) throw new B("Graph.import: invalid attributes. Expecting a plain object.");
        u ? this.mergeAttributes(t.attributes) : this.replaceAttributes(t.attributes);
      }
      if (t.nodes) {
        if (i = t.nodes, !Array.isArray(i)) throw new B("Graph.import: invalid nodes. Expecting an array.");
        for (e = 0, n = i.length; e < n; e++) {
          Et(o = i[e]);
          var d = o,
            h = d.key,
            p = d.attributes;
          u ? this.mergeNode(h, p) : this.addNode(h, p);
        }
      }
      if (t.edges) {
        var f = !1;
        if ("undirected" === this.type && (f = !0), i = t.edges, !Array.isArray(i)) throw new B("Graph.import: invalid edges. Expecting an array.");
        for (e = 0, n = i.length; e < n; e++) {
          At(a = i[e]);
          var l = a,
            g = l.source,
            y = l.target,
            w = l.attributes,
            v = l.undirected,
            b = void 0 === v ? f : v;
          "key" in a ? (u ? b ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : b ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey).call(this, a.key, g, y, w) : (u ? b ? this.mergeUndirectedEdge : this.mergeDirectedEdge : b ? this.addUndirectedEdge : this.addDirectedEdge).call(this, g, y, w);
        }
      }
      return this;
    }, i.nullCopy = function (t) {
      var e = new r(u({}, this._options, t));
      return e.replaceAttributes(u({}, this.getAttributes())), e;
    }, i.emptyCopy = function (t) {
      var e = this.nullCopy(t);
      return this._nodes.forEach(function (t, n) {
        var r = u({}, t.attributes);
        t = new e.NodeDataClass(n, r), e._nodes.set(n, t);
      }), e;
    }, i.copy = function (t) {
      if ("string" == typeof (t = t || {}).type && t.type !== this.type && "mixed" !== t.type) throw new I('Graph.copy: cannot create an incompatible copy from "'.concat(this.type, '" type to "').concat(t.type, '" because this would mean losing information about the current graph.'));
      if ("boolean" == typeof t.multi && t.multi !== this.multi && !0 !== t.multi) throw new I("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");
      if ("boolean" == typeof t.allowSelfLoops && t.allowSelfLoops !== this.allowSelfLoops && !0 !== t.allowSelfLoops) throw new I("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");
      for (var e, n, r = this.emptyCopy(t), i = this._edges.values(); !0 !== (e = i.next()).done;) jt(r, "copy", !1, (n = e.value).undirected, n.key, n.source.key, n.target.key, u({}, n.attributes));
      return r;
    }, i.toJSON = function () {
      return this["export"]();
    }, i.toString = function () {
      return "[object Graph]";
    }, i.inspect = function () {
      var e = this,
        n = {};
      this._nodes.forEach(function (t, e) {
        n[e] = t.attributes;
      });
      var r = {},
        i = {};
      this._edges.forEach(function (t, n) {
        var o,
          a = t.undirected ? "--" : "->",
          c = "",
          u = t.source.key,
          d = t.target.key;
        t.undirected && u > d && (o = u, u = d, d = o);
        var s = "(".concat(u, ")").concat(a, "(").concat(d, ")");
        n.startsWith("geid_") ? e.multi && (void 0 === i[s] ? i[s] = 0 : i[s]++, c += "".concat(i[s], ". ")) : c += "[".concat(n, "]: "), r[c += s] = t.attributes;
      });
      var o = {};
      for (var a in this) this.hasOwnProperty(a) && !Ut.has(a) && "function" != typeof this[a] && "symbol" !== t(a) && (o[a] = this[a]);
      return o.attributes = this._attributes, o.nodes = n, o.edges = r, p(o, "constructor", this.constructor), o;
    }, r;
  }(y.exports.EventEmitter);
  "undefined" != typeof Symbol && (zt.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = zt.prototype.inspect), [{
    name: function name(t) {
      return "".concat(t, "Edge");
    },
    generateKey: !0
  }, {
    name: function name(t) {
      return "".concat(t, "DirectedEdge");
    },
    generateKey: !0,
    type: "directed"
  }, {
    name: function name(t) {
      return "".concat(t, "UndirectedEdge");
    },
    generateKey: !0,
    type: "undirected"
  }, {
    name: function name(t) {
      return "".concat(t, "EdgeWithKey");
    }
  }, {
    name: function name(t) {
      return "".concat(t, "DirectedEdgeWithKey");
    },
    type: "directed"
  }, {
    name: function name(t) {
      return "".concat(t, "UndirectedEdgeWithKey");
    },
    type: "undirected"
  }].forEach(function (t) {
    ["add", "merge", "update"].forEach(function (e) {
      var n = t.name(e),
        r = "add" === e ? jt : Ct;
      t.generateKey ? zt.prototype[n] = function (i, o, a) {
        return r(this, n, !0, "undirected" === (t.type || this.type), null, i, o, a, "update" === e);
      } : zt.prototype[n] = function (i, o, a, c) {
        return r(this, n, !1, "undirected" === (t.type || this.type), i, o, a, c, "update" === e);
      };
    });
  }), function (t) {
    Q.forEach(function (e) {
      var n = e.name,
        r = e.attacher;
      r(t, n("Node"), 0), r(t, n("Source"), 1), r(t, n("Target"), 2), r(t, n("Opposite"), 3);
    });
  }(zt), function (t) {
    X.forEach(function (e) {
      var n = e.name,
        r = e.attacher;
      r(t, n("Edge"), "mixed"), r(t, n("DirectedEdge"), "directed"), r(t, n("UndirectedEdge"), "undirected");
    });
  }(zt), function (t) {
    et.forEach(function (e) {
      !function (t, e) {
        var n = e.name,
          r = e.type,
          i = e.direction;
        t.prototype[n] = function (t, e) {
          if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return [];
          if (!arguments.length) return ut(this, r);
          if (1 === arguments.length) {
            t = "" + t;
            var o = this._nodes.get(t);
            if (void 0 === o) throw new F("Graph.".concat(n, ': could not find the "').concat(t, '" node in the graph.'));
            return pt(this.multi, "mixed" === r ? this.type : r, i, o);
          }
          if (2 === arguments.length) {
            t = "" + t, e = "" + e;
            var a = this._nodes.get(t);
            if (!a) throw new F("Graph.".concat(n, ':  could not find the "').concat(t, '" source node in the graph.'));
            if (!this._nodes.has(e)) throw new F("Graph.".concat(n, ':  could not find the "').concat(e, '" target node in the graph.'));
            return gt(r, this.multi, i, a, e);
          }
          throw new B("Graph.".concat(n, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
        };
      }(t, e), function (t, e) {
        var n = e.name,
          r = e.type,
          i = e.direction,
          o = "forEach" + n[0].toUpperCase() + n.slice(1, -1);
        t.prototype[o] = function (t, e, n) {
          if ("mixed" === r || "mixed" === this.type || r === this.type) {
            if (1 === arguments.length) return dt(!1, this, r, n = t);
            if (2 === arguments.length) {
              t = "" + t, n = e;
              var a = this._nodes.get(t);
              if (void 0 === a) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
              return ht(!1, this.multi, "mixed" === r ? this.type : r, i, a, n);
            }
            if (3 === arguments.length) {
              t = "" + t, e = "" + e;
              var c = this._nodes.get(t);
              if (!c) throw new F("Graph.".concat(o, ':  could not find the "').concat(t, '" source node in the graph.'));
              if (!this._nodes.has(e)) throw new F("Graph.".concat(o, ':  could not find the "').concat(e, '" target node in the graph.'));
              return lt(!1, r, this.multi, i, c, e, n);
            }
            throw new B("Graph.".concat(o, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
          }
        };
        var a = "map" + n[0].toUpperCase() + n.slice(1);
        t.prototype[a] = function () {
          var t,
            e = Array.prototype.slice.call(arguments),
            n = e.pop();
          if (0 === e.length) {
            var i = 0;
            "directed" !== r && (i += this.undirectedSize), "undirected" !== r && (i += this.directedSize), t = new Array(i);
            var a = 0;
            e.push(function (e, r, i, o, c, u, d) {
              t[a++] = n(e, r, i, o, c, u, d);
            });
          } else t = [], e.push(function (e, r, i, o, a, c, u) {
            t.push(n(e, r, i, o, a, c, u));
          });
          return this[o].apply(this, e), t;
        };
        var c = "filter" + n[0].toUpperCase() + n.slice(1);
        t.prototype[c] = function () {
          var t = Array.prototype.slice.call(arguments),
            e = t.pop(),
            n = [];
          return t.push(function (t, r, i, o, a, c, u) {
            e(t, r, i, o, a, c, u) && n.push(t);
          }), this[o].apply(this, t), n;
        };
        var u = "reduce" + n[0].toUpperCase() + n.slice(1);
        t.prototype[u] = function () {
          var t,
            e,
            n = Array.prototype.slice.call(arguments);
          if (n.length < 2 || n.length > 4) throw new B("Graph.".concat(u, ": invalid number of arguments (expecting 2, 3 or 4 and got ").concat(n.length, ")."));
          if ("function" == typeof n[n.length - 1] && "function" != typeof n[n.length - 2]) throw new B("Graph.".concat(u, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
          2 === n.length ? (t = n[0], e = n[1], n = []) : 3 === n.length ? (t = n[1], e = n[2], n = [n[0]]) : 4 === n.length && (t = n[2], e = n[3], n = [n[0], n[1]]);
          var r = e;
          return n.push(function (e, n, i, o, a, c, u) {
            r = t(r, e, n, i, o, a, c, u);
          }), this[o].apply(this, n), r;
        };
      }(t, e), function (t, e) {
        var n = e.name,
          r = e.type,
          i = e.direction,
          o = "find" + n[0].toUpperCase() + n.slice(1, -1);
        t.prototype[o] = function (t, e, n) {
          if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return !1;
          if (1 === arguments.length) return dt(!0, this, r, n = t);
          if (2 === arguments.length) {
            t = "" + t, n = e;
            var a = this._nodes.get(t);
            if (void 0 === a) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
            return ht(!0, this.multi, "mixed" === r ? this.type : r, i, a, n);
          }
          if (3 === arguments.length) {
            t = "" + t, e = "" + e;
            var c = this._nodes.get(t);
            if (!c) throw new F("Graph.".concat(o, ':  could not find the "').concat(t, '" source node in the graph.'));
            if (!this._nodes.has(e)) throw new F("Graph.".concat(o, ':  could not find the "').concat(e, '" target node in the graph.'));
            return lt(!0, r, this.multi, i, c, e, n);
          }
          throw new B("Graph.".concat(o, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
        };
        var a = "some" + n[0].toUpperCase() + n.slice(1, -1);
        t.prototype[a] = function () {
          var t = Array.prototype.slice.call(arguments),
            e = t.pop();
          return t.push(function (t, n, r, i, o, a, c) {
            return e(t, n, r, i, o, a, c);
          }), !!this[o].apply(this, t);
        };
        var c = "every" + n[0].toUpperCase() + n.slice(1, -1);
        t.prototype[c] = function () {
          var t = Array.prototype.slice.call(arguments),
            e = t.pop();
          return t.push(function (t, n, r, i, o, a, c) {
            return !e(t, n, r, i, o, a, c);
          }), !this[o].apply(this, t);
        };
      }(t, e), function (t, e) {
        var n = e.name,
          r = e.type,
          i = e.direction,
          o = n.slice(0, -1) + "Entries";
        t.prototype[o] = function (t, e) {
          if ("mixed" !== r && "mixed" !== this.type && r !== this.type) return O.empty();
          if (!arguments.length) return st(this, r);
          if (1 === arguments.length) {
            t = "" + t;
            var n = this._nodes.get(t);
            if (!n) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
            return ft(r, i, n);
          }
          if (2 === arguments.length) {
            t = "" + t, e = "" + e;
            var a = this._nodes.get(t);
            if (!a) throw new F("Graph.".concat(o, ':  could not find the "').concat(t, '" source node in the graph.'));
            if (!this._nodes.has(e)) throw new F("Graph.".concat(o, ':  could not find the "').concat(e, '" target node in the graph.'));
            return yt(r, i, a, e);
          }
          throw new B("Graph.".concat(o, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
        };
      }(t, e);
    });
  }(zt), function (t) {
    wt.forEach(function (e) {
      _t(t, e), function (t, e) {
        var n = e.name,
          r = e.type,
          i = e.direction,
          o = "forEach" + n[0].toUpperCase() + n.slice(1, -1);
        t.prototype[o] = function (t, e) {
          if ("mixed" === r || "mixed" === this.type || r === this.type) {
            t = "" + t;
            var n = this._nodes.get(t);
            if (void 0 === n) throw new F("Graph.".concat(o, ': could not find the "').concat(t, '" node in the graph.'));
            mt(!1, "mixed" === r ? this.type : r, i, n, e);
          }
        };
        var a = "map" + n[0].toUpperCase() + n.slice(1);
        t.prototype[a] = function (t, e) {
          var n = [];
          return this[o](t, function (t, r) {
            n.push(e(t, r));
          }), n;
        };
        var c = "filter" + n[0].toUpperCase() + n.slice(1);
        t.prototype[c] = function (t, e) {
          var n = [];
          return this[o](t, function (t, r) {
            e(t, r) && n.push(t);
          }), n;
        };
        var u = "reduce" + n[0].toUpperCase() + n.slice(1);
        t.prototype[u] = function (t, e, n) {
          if (arguments.length < 3) throw new B("Graph.".concat(u, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
          var r = n;
          return this[o](t, function (t, n) {
            r = e(r, t, n);
          }), r;
        };
      }(t, e), function (t, e) {
        var n = e.name,
          r = e.type,
          i = e.direction,
          o = n[0].toUpperCase() + n.slice(1, -1),
          a = "find" + o;
        t.prototype[a] = function (t, e) {
          if ("mixed" === r || "mixed" === this.type || r === this.type) {
            t = "" + t;
            var n = this._nodes.get(t);
            if (void 0 === n) throw new F("Graph.".concat(a, ': could not find the "').concat(t, '" node in the graph.'));
            return mt(!0, "mixed" === r ? this.type : r, i, n, e);
          }
        };
        var c = "some" + o;
        t.prototype[c] = function (t, e) {
          return !!this[a](t, e);
        };
        var u = "every" + o;
        t.prototype[u] = function (t, e) {
          return !this[a](t, function (t, n) {
            return !e(t, n);
          });
        };
      }(t, e), Gt(t, e);
    });
  }(zt);
  var Wt = function (t) {
      function n(e) {
        var n = u({
          type: "directed"
        }, e);
        if ("multi" in n && !1 !== n.multi) throw new B("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
        if ("directed" !== n.type) throw new B('DirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
        return t.call(this, n) || this;
      }
      return e(n, t), n;
    }(zt),
    Pt = function (t) {
      function n(e) {
        var n = u({
          type: "undirected"
        }, e);
        if ("multi" in n && !1 !== n.multi) throw new B("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
        if ("undirected" !== n.type) throw new B('UndirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
        return t.call(this, n) || this;
      }
      return e(n, t), n;
    }(zt),
    Rt = function (t) {
      function n(e) {
        var n = u({
          multi: !0
        }, e);
        if ("multi" in n && !0 !== n.multi) throw new B("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");
        return t.call(this, n) || this;
      }
      return e(n, t), n;
    }(zt),
    Kt = function (t) {
      function n(e) {
        var n = u({
          type: "directed",
          multi: !0
        }, e);
        if ("multi" in n && !0 !== n.multi) throw new B("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
        if ("directed" !== n.type) throw new B('MultiDirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
        return t.call(this, n) || this;
      }
      return e(n, t), n;
    }(zt),
    Tt = function (t) {
      function n(e) {
        var n = u({
          type: "undirected",
          multi: !0
        }, e);
        if ("multi" in n && !0 !== n.multi) throw new B("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
        if ("undirected" !== n.type) throw new B('MultiUndirectedGraph.from: inconsistent "' + n.type + '" type in given options!');
        return t.call(this, n) || this;
      }
      return e(n, t), n;
    }(zt);
  function Bt(t) {
    t.from = function (e, n) {
      var r = u({}, e.options, n),
        i = new t(r);
      return i["import"](e), i;
    };
  }
  return Bt(zt), Bt(Wt), Bt(Pt), Bt(Rt), Bt(Kt), Bt(Tt), zt.Graph = zt, zt.DirectedGraph = Wt, zt.UndirectedGraph = Pt, zt.MultiGraph = Rt, zt.MultiDirectedGraph = Kt, zt.MultiUndirectedGraph = Tt, zt.InvalidArgumentsGraphError = B, zt.NotFoundGraphError = F, zt.UsageGraphError = I, zt;
});

/***/ }),

/***/ "./app/javascript/vendor/sigma.min.js":
/*!********************************************!*\
  !*** ./app/javascript/vendor/sigma.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Sigma;
(function () {
  var t = {
      796: function _(t) {
        t.exports = function (t, e) {
          var r = e.length;
          if (0 !== r) {
            var i = t.length;
            t.length += r;
            for (var n = 0; n < r; n++) t[i + n] = e[n];
          }
        };
      },
      187: function _(t) {
        "use strict";

        var e,
          r = "object" == typeof Reflect ? Reflect : null,
          i = r && "function" == typeof r.apply ? r.apply : function (t, e, r) {
            return Function.prototype.apply.call(t, e, r);
          };
        e = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function (t) {
          return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
        } : function (t) {
          return Object.getOwnPropertyNames(t);
        };
        var n = Number.isNaN || function (t) {
          return t != t;
        };
        function o() {
          o.init.call(this);
        }
        t.exports = o, t.exports.once = function (t, e) {
          return new Promise(function (r, i) {
            function n(r) {
              t.removeListener(e, o), i(r);
            }
            function o() {
              "function" == typeof t.removeListener && t.removeListener("error", n), r([].slice.call(arguments));
            }
            g(t, e, o, {
              once: !0
            }), "error" !== e && function (t, e, r) {
              "function" == typeof t.on && g(t, "error", e, {
                once: !0
              });
            }(t, n);
          });
        }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
        var a = 10;
        function s(t) {
          if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        }
        function h(t) {
          return void 0 === t._maxListeners ? o.defaultMaxListeners : t._maxListeners;
        }
        function l(t, e, r, i) {
          var n, o, a, l;
          if (s(r), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), o = t._events), a = o[e]), void 0 === a) a = o[e] = r, ++t._eventsCount;else if ("function" == typeof a ? a = o[e] = i ? [r, a] : [a, r] : i ? a.unshift(r) : a.push(r), (n = h(t)) > 0 && a.length > n && !a.warned) {
            a.warned = !0;
            var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = a.length, l = c, console && console.warn && console.warn(l);
          }
          return t;
        }
        function c() {
          if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function u(t, e, r) {
          var i = {
              fired: !1,
              wrapFn: void 0,
              target: t,
              type: e,
              listener: r
            },
            n = c.bind(i);
          return n.listener = r, i.wrapFn = n, n;
        }
        function d(t, e, r) {
          var i = t._events;
          if (void 0 === i) return [];
          var n = i[e];
          return void 0 === n ? [] : "function" == typeof n ? r ? [n.listener || n] : [n] : r ? function (t) {
            for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
            return e;
          }(n) : p(n, n.length);
        }
        function f(t) {
          var e = this._events;
          if (void 0 !== e) {
            var r = e[t];
            if ("function" == typeof r) return 1;
            if (void 0 !== r) return r.length;
          }
          return 0;
        }
        function p(t, e) {
          for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
          return r;
        }
        function g(t, e, r, i) {
          if ("function" == typeof t.on) i.once ? t.once(e, r) : t.on(e, r);else {
            if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
            t.addEventListener(e, function n(o) {
              i.once && t.removeEventListener(e, n), r(o);
            });
          }
        }
        Object.defineProperty(o, "defaultMaxListeners", {
          enumerable: !0,
          get: function get() {
            return a;
          },
          set: function set(t) {
            if ("number" != typeof t || t < 0 || n(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            a = t;
          }
        }), o.init = function () {
          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, o.prototype.setMaxListeners = function (t) {
          if ("number" != typeof t || t < 0 || n(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
          return this._maxListeners = t, this;
        }, o.prototype.getMaxListeners = function () {
          return h(this);
        }, o.prototype.emit = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
          var n = "error" === t,
            o = this._events;
          if (void 0 !== o) n = n && void 0 === o.error;else if (!n) return !1;
          if (n) {
            var a;
            if (e.length > 0 && (a = e[0]), a instanceof Error) throw a;
            var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw s.context = a, s;
          }
          var h = o[t];
          if (void 0 === h) return !1;
          if ("function" == typeof h) i(h, this, e);else {
            var l = h.length,
              c = p(h, l);
            for (r = 0; r < l; ++r) i(c[r], this, e);
          }
          return !0;
        }, o.prototype.addListener = function (t, e) {
          return l(this, t, e, !1);
        }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function (t, e) {
          return l(this, t, e, !0);
        }, o.prototype.once = function (t, e) {
          return s(e), this.on(t, u(this, t, e)), this;
        }, o.prototype.prependOnceListener = function (t, e) {
          return s(e), this.prependListener(t, u(this, t, e)), this;
        }, o.prototype.removeListener = function (t, e) {
          var r, i, n, o, a;
          if (s(e), void 0 === (i = this._events)) return this;
          if (void 0 === (r = i[t])) return this;
          if (r === e || r.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || e));else if ("function" != typeof r) {
            for (n = -1, o = r.length - 1; o >= 0; o--) if (r[o] === e || r[o].listener === e) {
              a = r[o].listener, n = o;
              break;
            }
            if (n < 0) return this;
            0 === n ? r.shift() : function (t, e) {
              for (; e + 1 < t.length; e++) t[e] = t[e + 1];
              t.pop();
            }(r, n), 1 === r.length && (i[t] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", t, a || e);
          }
          return this;
        }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function (t) {
          var e, r, i;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[t]), this;
          if (0 === arguments.length) {
            var n,
              o = Object.keys(r);
            for (i = 0; i < o.length; ++i) "removeListener" !== (n = o[i]) && this.removeAllListeners(n);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
          }
          if ("function" == typeof (e = r[t])) this.removeListener(t, e);else if (void 0 !== e) for (i = e.length - 1; i >= 0; i--) this.removeListener(t, e[i]);
          return this;
        }, o.prototype.listeners = function (t) {
          return d(this, t, !0);
        }, o.prototype.rawListeners = function (t) {
          return d(this, t, !1);
        }, o.listenerCount = function (t, e) {
          return "function" == typeof t.listenerCount ? t.listenerCount(e) : f.call(t, e);
        }, o.prototype.listenerCount = f, o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? e(this._events) : [];
        };
      },
      186: function _(t) {
        t.exports = function (t) {
          return null !== t && "object" == typeof t && "function" == typeof t.addUndirectedEdgeWithKey && "function" == typeof t.dropNode && "boolean" == typeof t.multi;
        };
      },
      973: function _(t, e, r) {
        "use strict";

        r.r(e), r.d(e, {
          "default": function _default() {
            return i;
          }
        });
        var i = "precision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
      },
      912: function _(t, e, r) {
        "use strict";

        r.r(e), r.d(e, {
          "default": function _default() {
            return i;
          }
        });
        var i = "attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_radius;\nattribute vec4 a_color;\nattribute vec3 a_barycentric;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadWidthLengthRatio = 0.66;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl and\n  // edge.clamped.vert.glsl. Please read it to get better comments on what's\n  // happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n  float adaptedWebGLNodeRadius = a_radius * 2.0 * u_correctionRatio * u_sqrtZoomRatio;\n  float adaptedWebGLArrowHeadLength = adaptedWebGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n  float adaptedWebGLArrowHeadHalfWidth = adaptedWebGLArrowHeadLength * arrowHeadWidthLengthRatio / 2.0;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * (adaptedWebGLNodeRadius * unitNormal.y)\n    + db * ((adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.y + adaptedWebGLArrowHeadHalfWidth * unitNormal.x)\n    + dc * ((adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.y - adaptedWebGLArrowHeadHalfWidth * unitNormal.x),\n\n      da * (-adaptedWebGLNodeRadius * unitNormal.x)\n    + db * (-(adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.x + adaptedWebGLArrowHeadHalfWidth * unitNormal.y)\n    + dc * (-(adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.x - adaptedWebGLArrowHeadHalfWidth * unitNormal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
      },
      620: function _(t, e, r) {
        "use strict";

        r.r(e), r.d(e, {
          "default": function _default() {
            return i;
          }
        });
        var i = "attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\nattribute float a_radius;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n\n  // Here, we move the point to leave space for the arrow head:\n  float direction = sign(a_radius);\n  float adaptedWebGLNodeRadius = direction * a_radius * 2.0 * u_correctionRatio * u_sqrtZoomRatio;\n  float adaptedWebGLArrowHeadLength = adaptedWebGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n\n  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * adaptedWebGLThickness + compensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_sqrtZoomRatio;\n\n  v_normal = unitNormal;\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
      },
      498: function _(t, e, r) {
        "use strict";

        r.r(e), r.d(e, {
          "default": function _default() {
            return i;
          }
        });
        var i = "precision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float feather = 0.001;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, transparent, t);\n}\n";
      },
      223: function _(t, e, r) {
        "use strict";

        r.r(e), r.d(e, {
          "default": function _default() {
            return i;
          }
        });
        var i = 'attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // We require edges to be at least `minThickness` pixels thick *on screen*\n  // (so we need to compensate the SQRT zoom ratio):\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n\n  // Then, we need to retrieve the normalized thickness of the edge in the WebGL\n  // referential (in a ([0, 1], [0, 1]) space), using our "magic" correction\n  // ratio:\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n\n  // Finally, we adapt the edge thickness to the "SQRT rule" in sigma (so that\n  // items are not too big when zoomed in, and not too small when zoomed out).\n  // The exact computation should be `adapted = value * zoom / sqrt(zoom)`, but\n  // it\'s simpler like this:\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * adaptedWebGLThickness, 1)).xy, 0, 1);\n\n  // For the fragment shader though, we need a thickness that takes the "magic"\n  // correction ratio into account (as in webGLThickness), but so that the\n  // antialiasing effect does not depend on the zoom level. So here\'s yet\n  // another thickness version:\n  v_thickness = webGLThickness / u_sqrtZoomRatio;\n\n  v_normal = unitNormal;\n  v_color = a_color;\n  v_color.a *= bias;\n}\n';
      },
      262: function _(t, e, r) {
        "use strict";

        r.r(e), r.d(e, {
          "default": function _default() {
            return i;
          }
        });
        var i = "precision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float radius = 0.5;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = radius - length(m);\n\n  float t = 0.0;\n  if (dist > v_border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / v_border;\n\n  gl_FragColor = mix(transparent, v_color, t);\n}\n";
      },
      106: function _(t, e, r) {
        "use strict";

        r.r(e), r.d(e, {
          "default": function _default() {
            return i;
          }
        });
        var i = "attribute vec2 a_position;\nattribute float a_size;\nattribute vec4 a_color;\n\nuniform float u_ratio;\nuniform float u_scale;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size * u_ratio * u_scale * 2.0;\n\n  v_border = (1.0 / u_ratio) * (0.5 / a_size);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
      },
      764: function _(t, e, r) {
        "use strict";

        var _i,
          n = this && this.__extends || (_i = function i(t, e) {
            return _i = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          }),
          o = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              "default": t
            };
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var a = r(751),
          s = o(r(358)),
          h = r(928),
          l = r(699),
          c = 1.5,
          u = function (t) {
            function e() {
              var e = t.call(this) || this;
              return e.x = .5, e.y = .5, e.angle = 0, e.ratio = 1, e.minRatio = null, e.maxRatio = null, e.nextFrame = null, e.previousState = null, e.enabled = !0, e.previousState = e.getState(), e;
            }
            return n(e, t), e.from = function (t) {
              return new e().setState(t);
            }, e.prototype.enable = function () {
              return this.enabled = !0, this;
            }, e.prototype.disable = function () {
              return this.enabled = !1, this;
            }, e.prototype.getState = function () {
              return {
                x: this.x,
                y: this.y,
                angle: this.angle,
                ratio: this.ratio
              };
            }, e.prototype.hasState = function (t) {
              return this.x === t.x && this.y === t.y && this.ratio === t.ratio && this.angle === t.angle;
            }, e.prototype.getPreviousState = function () {
              var t = this.previousState;
              return t ? {
                x: t.x,
                y: t.y,
                angle: t.angle,
                ratio: t.ratio
              } : null;
            }, e.prototype.getBoundedRatio = function (t) {
              var e = t;
              return "number" == typeof this.minRatio && (e = Math.max(e, this.minRatio)), "number" == typeof this.maxRatio && (e = Math.min(e, this.maxRatio)), e;
            }, e.prototype.validateState = function (t) {
              var e = {};
              return "number" == typeof t.x && (e.x = t.x), "number" == typeof t.y && (e.y = t.y), "number" == typeof t.angle && (e.angle = t.angle), "number" == typeof t.ratio && (e.ratio = this.getBoundedRatio(t.ratio)), e;
            }, e.prototype.isAnimated = function () {
              return !!this.nextFrame;
            }, e.prototype.setState = function (t) {
              if (!this.enabled) return this;
              this.previousState = this.getState();
              var e = this.validateState(t);
              return "number" == typeof e.x && (this.x = e.x), "number" == typeof e.y && (this.y = e.y), "number" == typeof e.angle && (this.angle = e.angle), "number" == typeof e.ratio && (this.ratio = e.ratio), this.hasState(this.previousState) || this.emit("updated", this.getState()), this;
            }, e.prototype.updateState = function (t) {
              return this.setState(t(this.getState())), this;
            }, e.prototype.animate = function (t, e, r) {
              var i = this;
              if (this.enabled) {
                var n = Object.assign({}, a.ANIMATE_DEFAULTS, e),
                  o = this.validateState(t),
                  l = "function" == typeof n.easing ? n.easing : s["default"][n.easing],
                  c = Date.now(),
                  u = this.getState(),
                  d = function d() {
                    var t = (Date.now() - c) / n.duration;
                    if (t >= 1) return i.nextFrame = null, i.setState(o), void (i.animationCallback && (i.animationCallback.call(null), i.animationCallback = void 0));
                    var e = l(t),
                      r = {};
                    "number" == typeof o.x && (r.x = u.x + (o.x - u.x) * e), "number" == typeof o.y && (r.y = u.y + (o.y - u.y) * e), "number" == typeof o.angle && (r.angle = u.angle + (o.angle - u.angle) * e), "number" == typeof o.ratio && (r.ratio = u.ratio + (o.ratio - u.ratio) * e), i.setState(r), i.nextFrame = (0, h.requestFrame)(d);
                  };
                this.nextFrame ? ((0, h.cancelFrame)(this.nextFrame), this.animationCallback && this.animationCallback.call(null), this.nextFrame = (0, h.requestFrame)(d)) : d(), this.animationCallback = r;
              }
            }, e.prototype.animatedZoom = function (t) {
              if (t) {
                if ("number" == typeof t) return this.animate({
                  ratio: this.ratio / t
                });
                this.animate({
                  ratio: this.ratio / (t.factor || c)
                }, t);
              } else this.animate({
                ratio: this.ratio / c
              });
            }, e.prototype.animatedUnzoom = function (t) {
              if (t) {
                if ("number" == typeof t) return this.animate({
                  ratio: this.ratio * t
                });
                this.animate({
                  ratio: this.ratio * (t.factor || c)
                }, t);
              } else this.animate({
                ratio: this.ratio * c
              });
            }, e.prototype.animatedReset = function (t) {
              this.animate({
                x: .5,
                y: .5,
                ratio: 1,
                angle: 0
              }, t);
            }, e.prototype.copy = function () {
              return e.from(this.getState());
            }, e;
          }(l.TypedEventEmitter);
        e["default"] = u;
      },
      291: function _(t, e, r) {
        "use strict";

        var _i2,
          n = this && this.__extends || (_i2 = function i(t, e) {
            return _i2 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i2(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i2(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          }),
          o = this && this.__assign || function () {
            return o = Object.assign || function (t) {
              for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }, o.apply(this, arguments);
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.getWheelDelta = e.getTouchCoords = e.getTouchesArray = e.getWheelCoords = e.getMouseCoords = e.getPosition = void 0;
        var a = r(699);
        function s(t, e) {
          var r = e.getBoundingClientRect();
          return {
            x: t.clientX - r.left,
            y: t.clientY - r.top
          };
        }
        function h(t, e) {
          var r = o(o({}, s(t, e)), {
            sigmaDefaultPrevented: !1,
            preventSigmaDefault: function preventSigmaDefault() {
              r.sigmaDefaultPrevented = !0;
            },
            original: t
          });
          return r;
        }
        function l(t) {
          for (var e = [], r = 0, i = Math.min(t.length, 2); r < i; r++) e.push(t[r]);
          return e;
        }
        function c(t) {
          if (void 0 !== t.deltaY) return -3 * t.deltaY / 360;
          if (void 0 !== t.detail) return t.detail / -9;
          throw new Error("Captor: could not extract delta from event.");
        }
        e.getPosition = s, e.getMouseCoords = h, e.getWheelCoords = function (t, e) {
          return o(o({}, h(t, e)), {
            delta: c(t)
          });
        }, e.getTouchesArray = l, e.getTouchCoords = function (t, e) {
          return {
            touches: l(t.touches).map(function (t) {
              return s(t, e);
            }),
            original: t
          };
        }, e.getWheelDelta = c;
        var u = function (t) {
          function e(e, r) {
            var i = t.call(this) || this;
            return i.container = e, i.renderer = r, i;
          }
          return n(e, t), e;
        }(a.TypedEventEmitter);
        e["default"] = u;
      },
      269: function _(t, e, r) {
        "use strict";

        var _i3,
          n = this && this.__extends || (_i3 = function i(t, e) {
            return _i3 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i3(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i3(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          }),
          o = this && this.__createBinding || (Object.create ? function (t, e, r, i) {
            void 0 === i && (i = r), Object.defineProperty(t, i, {
              enumerable: !0,
              get: function get() {
                return e[r];
              }
            });
          } : function (t, e, r, i) {
            void 0 === i && (i = r), t[i] = e[r];
          }),
          a = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            });
          } : function (t, e) {
            t["default"] = e;
          }),
          s = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && o(e, t, r);
            return a(e, t), e;
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var h = s(r(291)),
          l = function (t) {
            function e(e, r) {
              var i = t.call(this, e, r) || this;
              return i.enabled = !0, i.draggedEvents = 0, i.downStartTime = null, i.lastMouseX = null, i.lastMouseY = null, i.isMouseDown = !1, i.isMoving = !1, i.movingTimeout = null, i.startCameraState = null, i.clicks = 0, i.doubleClickTimeout = null, i.currentWheelDirection = 0, i.handleClick = i.handleClick.bind(i), i.handleRightClick = i.handleRightClick.bind(i), i.handleDown = i.handleDown.bind(i), i.handleUp = i.handleUp.bind(i), i.handleMove = i.handleMove.bind(i), i.handleWheel = i.handleWheel.bind(i), i.handleOut = i.handleOut.bind(i), e.addEventListener("click", i.handleClick, !1), e.addEventListener("contextmenu", i.handleRightClick, !1), e.addEventListener("mousedown", i.handleDown, !1), e.addEventListener("wheel", i.handleWheel, !1), e.addEventListener("mouseout", i.handleOut, !1), document.addEventListener("mousemove", i.handleMove, !1), document.addEventListener("mouseup", i.handleUp, !1), i;
            }
            return n(e, t), e.prototype.kill = function () {
              var t = this.container;
              t.removeEventListener("click", this.handleClick), t.removeEventListener("contextmenu", this.handleRightClick), t.removeEventListener("mousedown", this.handleDown), t.removeEventListener("wheel", this.handleWheel), t.removeEventListener("mouseout", this.handleOut), document.removeEventListener("mousemove", this.handleMove), document.removeEventListener("mouseup", this.handleUp);
            }, e.prototype.handleClick = function (t) {
              var e = this;
              if (this.enabled) {
                if (this.clicks++, 2 === this.clicks) return this.clicks = 0, "number" == typeof this.doubleClickTimeout && (clearTimeout(this.doubleClickTimeout), this.doubleClickTimeout = null), this.handleDoubleClick(t);
                setTimeout(function () {
                  e.clicks = 0, e.doubleClickTimeout = null;
                }, 300), this.draggedEvents < 3 && this.emit("click", (0, h.getMouseCoords)(t, this.container));
              }
            }, e.prototype.handleRightClick = function (t) {
              this.enabled && this.emit("rightClick", (0, h.getMouseCoords)(t, this.container));
            }, e.prototype.handleDoubleClick = function (t) {
              if (this.enabled) {
                t.preventDefault(), t.stopPropagation();
                var e = (0, h.getMouseCoords)(t, this.container);
                if (this.emit("doubleClick", e), !e.sigmaDefaultPrevented) {
                  var r = this.renderer.getCamera(),
                    i = r.getBoundedRatio(r.getState().ratio / 2.2);
                  r.animate(this.renderer.getViewportZoomedState((0, h.getPosition)(t, this.container), i), {
                    easing: "quadraticInOut",
                    duration: 200
                  });
                }
              }
            }, e.prototype.handleDown = function (t) {
              if (this.enabled) {
                if (0 === t.button) {
                  this.startCameraState = this.renderer.getCamera().getState();
                  var e = (0, h.getPosition)(t, this.container),
                    r = e.x,
                    i = e.y;
                  this.lastMouseX = r, this.lastMouseY = i, this.draggedEvents = 0, this.downStartTime = Date.now(), this.isMouseDown = !0;
                }
                this.emit("mousedown", (0, h.getMouseCoords)(t, this.container));
              }
            }, e.prototype.handleUp = function (t) {
              var e = this;
              if (this.enabled && this.isMouseDown) {
                var r = this.renderer.getCamera();
                this.isMouseDown = !1, "number" == typeof this.movingTimeout && (clearTimeout(this.movingTimeout), this.movingTimeout = null);
                var i = (0, h.getPosition)(t, this.container),
                  n = i.x,
                  o = i.y,
                  a = r.getState(),
                  s = r.getPreviousState() || {
                    x: 0,
                    y: 0
                  };
                this.isMoving ? r.animate({
                  x: a.x + 3 * (a.x - s.x),
                  y: a.y + 3 * (a.y - s.y)
                }, {
                  duration: 200,
                  easing: "quadraticOut"
                }) : this.lastMouseX === n && this.lastMouseY === o || r.setState({
                  x: a.x,
                  y: a.y
                }), this.isMoving = !1, setTimeout(function () {
                  e.draggedEvents = 0, e.renderer.refresh();
                }, 0), this.emit("mouseup", (0, h.getMouseCoords)(t, this.container));
              }
            }, e.prototype.handleMove = function (t) {
              var e = this;
              if (this.enabled) {
                var r = (0, h.getMouseCoords)(t, this.container);
                if (this.emit("mousemovebody", r), t.target === this.container && this.emit("mousemove", r), !r.sigmaDefaultPrevented && this.isMouseDown) {
                  this.isMoving = !0, this.draggedEvents++, "number" == typeof this.movingTimeout && clearTimeout(this.movingTimeout), this.movingTimeout = window.setTimeout(function () {
                    e.movingTimeout = null, e.isMoving = !1;
                  }, 100);
                  var i = this.renderer.getCamera(),
                    n = (0, h.getPosition)(t, this.container),
                    o = n.x,
                    a = n.y,
                    s = this.renderer.viewportToFramedGraph({
                      x: this.lastMouseX,
                      y: this.lastMouseY
                    }),
                    l = this.renderer.viewportToFramedGraph({
                      x: o,
                      y: a
                    }),
                    c = s.x - l.x,
                    u = s.y - l.y,
                    d = i.getState(),
                    f = d.x + c,
                    p = d.y + u;
                  i.setState({
                    x: f,
                    y: p
                  }), this.lastMouseX = o, this.lastMouseY = a, t.preventDefault(), t.stopPropagation();
                }
              }
            }, e.prototype.handleWheel = function (t) {
              var e = this;
              if (this.enabled) {
                t.preventDefault(), t.stopPropagation();
                var r = (0, h.getWheelDelta)(t);
                if (r) {
                  var i = (0, h.getWheelCoords)(t, this.container);
                  if (this.emit("wheel", i), !i.sigmaDefaultPrevented) {
                    var n = r > 0 ? 1 / 1.7 : 1.7,
                      o = this.renderer.getCamera(),
                      a = o.getBoundedRatio(o.getState().ratio * n),
                      s = r > 0 ? 1 : -1,
                      l = Date.now();
                    this.currentWheelDirection === s && this.lastWheelTriggerTime && l - this.lastWheelTriggerTime < 50 || (o.animate(this.renderer.getViewportZoomedState((0, h.getPosition)(t, this.container), a), {
                      easing: "quadraticOut",
                      duration: 250
                    }, function () {
                      e.currentWheelDirection = 0;
                    }), this.currentWheelDirection = s, this.lastWheelTriggerTime = l);
                  }
                }
              }
            }, e.prototype.handleOut = function () {}, e;
          }(h["default"]);
        e["default"] = l;
      },
      508: function _(t, e, r) {
        "use strict";

        var _i4,
          n = this && this.__extends || (_i4 = function i(t, e) {
            return _i4 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i4(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i4(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          }),
          o = this && this.__createBinding || (Object.create ? function (t, e, r, i) {
            void 0 === i && (i = r), Object.defineProperty(t, i, {
              enumerable: !0,
              get: function get() {
                return e[r];
              }
            });
          } : function (t, e, r, i) {
            void 0 === i && (i = r), t[i] = e[r];
          }),
          a = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
            });
          } : function (t, e) {
            t["default"] = e;
          }),
          s = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && o(e, t, r);
            return a(e, t), e;
          },
          h = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var i,
              n,
              o = r.call(t),
              a = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value);
            } catch (t) {
              n = {
                error: t
              };
            } finally {
              try {
                i && !i.done && (r = o["return"]) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return a;
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var l = s(r(291)),
          c = function (t) {
            function e(e, r) {
              var i = t.call(this, e, r) || this;
              return i.enabled = !0, i.isMoving = !1, i.hasMoved = !1, i.touchMode = 0, i.startTouchesPositions = [], i.handleStart = i.handleStart.bind(i), i.handleLeave = i.handleLeave.bind(i), i.handleMove = i.handleMove.bind(i), e.addEventListener("touchstart", i.handleStart, !1), e.addEventListener("touchend", i.handleLeave, !1), e.addEventListener("touchcancel", i.handleLeave, !1), e.addEventListener("touchmove", i.handleMove, !1), i;
            }
            return n(e, t), e.prototype.kill = function () {
              var t = this.container;
              t.removeEventListener("touchstart", this.handleStart), t.removeEventListener("touchend", this.handleLeave), t.removeEventListener("touchcancel", this.handleLeave), t.removeEventListener("touchmove", this.handleMove);
            }, e.prototype.getDimensions = function () {
              return {
                width: this.container.offsetWidth,
                height: this.container.offsetHeight
              };
            }, e.prototype.dispatchRelatedMouseEvent = function (t, e, r, i) {
              var n = r || e.touches[0],
                o = new MouseEvent(t, {
                  clientX: n.clientX,
                  clientY: n.clientY,
                  altKey: e.altKey,
                  ctrlKey: e.ctrlKey
                });
              o.isFakeSigmaMouseEvent = !0, (i || this.container).dispatchEvent(o);
            }, e.prototype.handleStart = function (t) {
              var e = this;
              if (this.enabled) {
                t.preventDefault(), 1 === t.touches.length && this.dispatchRelatedMouseEvent("mousedown", t);
                var r = (0, l.getTouchesArray)(t.touches);
                if (this.touchMode = r.length, this.startCameraState = this.renderer.getCamera().getState(), this.startTouchesPositions = r.map(function (t) {
                  return (0, l.getPosition)(t, e.container);
                }), this.lastTouches = r, this.lastTouchesPositions = this.startTouchesPositions, 2 === this.touchMode) {
                  var i = h(this.startTouchesPositions, 2),
                    n = i[0],
                    o = n.x,
                    a = n.y,
                    s = i[1],
                    c = s.x,
                    u = s.y;
                  this.startTouchesAngle = Math.atan2(u - a, c - o), this.startTouchesDistance = Math.sqrt(Math.pow(c - o, 2) + Math.pow(u - a, 2));
                }
                this.emit("touchdown", (0, l.getTouchCoords)(t, this.container));
              }
            }, e.prototype.handleLeave = function (t) {
              if (this.enabled) {
                switch (t.preventDefault(), 0 === t.touches.length && this.lastTouches && this.lastTouches.length && (this.dispatchRelatedMouseEvent("mouseup", t, this.lastTouches[0], document), this.hasMoved || this.dispatchRelatedMouseEvent("click", t, this.lastTouches[0])), this.movingTimeout && (this.isMoving = !1, clearTimeout(this.movingTimeout)), this.touchMode) {
                  case 2:
                    if (1 === t.touches.length) {
                      this.handleStart(t), t.preventDefault();
                      break;
                    }
                  case 1:
                    if (this.isMoving) {
                      var e = this.renderer.getCamera(),
                        r = e.getState(),
                        i = e.getPreviousState() || {
                          x: 0,
                          y: 0
                        };
                      e.animate({
                        x: r.x + 3 * (r.x - i.x),
                        y: r.y + 3 * (r.y - i.y)
                      }, {
                        duration: 200,
                        easing: "quadraticOut"
                      });
                    }
                    this.hasMoved = !1, this.isMoving = !1, this.touchMode = 0;
                }
                this.emit("touchup", (0, l.getTouchCoords)(t, this.container));
              }
            }, e.prototype.handleMove = function (t) {
              var e,
                r = this;
              if (this.enabled) {
                t.preventDefault(), 1 === t.touches.length && this.dispatchRelatedMouseEvent("mousemove", t);
                var i = (0, l.getTouchesArray)(t.touches),
                  n = i.map(function (t) {
                    return (0, l.getPosition)(t, r.container);
                  });
                if (this.lastTouches = i, this.lastTouchesPositions = n, this.hasMoved || (this.hasMoved = n.some(function (t, e) {
                  var i = r.startTouchesPositions[e];
                  return t.x !== i.x || t.y !== i.y;
                })), this.hasMoved) {
                  this.isMoving = !0, this.movingTimeout && clearTimeout(this.movingTimeout), this.movingTimeout = window.setTimeout(function () {
                    r.isMoving = !1;
                  }, 200);
                  var o = this.renderer.getCamera(),
                    a = this.startCameraState;
                  switch (this.touchMode) {
                    case 1:
                      var s = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]),
                        c = s.x,
                        u = s.y,
                        d = this.renderer.viewportToFramedGraph(n[0]),
                        f = d.x,
                        p = d.y;
                      o.setState({
                        x: a.x + c - f,
                        y: a.y + u - p
                      });
                      break;
                    case 2:
                      var g = {},
                        v = n[0],
                        m = v.x,
                        y = v.y,
                        b = n[1],
                        _ = b.x,
                        x = b.y,
                        w = Math.atan2(x - y, _ - m) - this.startTouchesAngle,
                        E = Math.hypot(x - y, _ - m) / this.startTouchesDistance,
                        L = o.getBoundedRatio(a.ratio / E);
                      g.ratio = L, g.angle = a.angle + w;
                      var F = this.getDimensions(),
                        C = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], {
                          cameraState: a
                        }),
                        A = Math.min(F.width, F.height),
                        T = A / F.width,
                        P = L / A;
                      p = y - A / 2 / (A / F.height), f = (e = h([(f = m - A / 2 / T) * Math.cos(-g.angle) - p * Math.sin(-g.angle), p * Math.cos(-g.angle) + f * Math.sin(-g.angle)], 2))[0], p = e[1], g.x = C.x - f * P, g.y = C.y + p * P, o.setState(g);
                  }
                  this.emit("touchmove", (0, l.getTouchCoords)(t, this.container));
                }
              }
            }, e;
          }(l["default"]);
        e["default"] = c;
      },
      730: function _(t, e) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.edgeLabelsToDisplayFromNodes = e.LabelGrid = void 0;
        var r = function () {
            function t(t, e) {
              this.key = t, this.size = e;
            }
            return t.compare = function (t, e) {
              return t.size > e.size ? -1 : t.size < e.size || t.key > e.key ? 1 : -1;
            }, t;
          }(),
          i = function () {
            function t() {
              this.width = 0, this.height = 0, this.cellSize = 0, this.columns = 0, this.rows = 0, this.cells = {};
            }
            return t.prototype.resizeAndClear = function (t, e) {
              this.width = t.width, this.height = t.height, this.cellSize = e, this.columns = Math.ceil(t.width / e), this.rows = Math.ceil(t.height / e), this.cells = {};
            }, t.prototype.getIndex = function (t) {
              var e = Math.floor(t.x / this.cellSize);
              return Math.floor(t.y / this.cellSize) * this.columns + e;
            }, t.prototype.add = function (t, e, i) {
              var n = new r(t, e),
                o = this.getIndex(i),
                a = this.cells[o];
              a || (a = [], this.cells[o] = a), a.push(n);
            }, t.prototype.organize = function () {
              for (var t in this.cells) this.cells[t].sort(r.compare);
            }, t.prototype.getLabelsToDisplay = function (t, e) {
              var r = this.cellSize * this.cellSize,
                i = r / t / t * e / r,
                n = Math.ceil(i),
                o = [];
              for (var a in this.cells) for (var s = this.cells[a], h = 0; h < Math.min(n, s.length); h++) o.push(s[h].key);
              return o;
            }, t;
          }();
        e.LabelGrid = i, e.edgeLabelsToDisplayFromNodes = function (t) {
          var e = t.graph,
            r = t.hoveredNode,
            i = t.highlightedNodes,
            n = t.displayedNodeLabels,
            o = [];
          return e.forEachEdge(function (t, e, a, s) {
            (a === r || s === r || i.has(a) || i.has(s) || n.has(a) && n.has(s)) && o.push(t);
          }), o;
        };
      },
      134: function _(t, e, r) {
        "use strict";

        var i = this && this.__importDefault || function (t) {
          return t && t.__esModule ? t : {
            "default": t
          };
        };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.rectangleCollidesWithQuad = e.squareCollidesWithQuad = e.getCircumscribedAlignedRectangle = e.isRectangleAligned = void 0;
        var n = i(r(796)),
          o = !1;
        function a(t) {
          return t.x1 === t.x2 || t.y1 === t.y2;
        }
        function s(t) {
          var e = Math.sqrt(Math.pow(t.x2 - t.x1, 2) + Math.pow(t.y2 - t.y1, 2)),
            r = (t.y1 - t.y2) * t.height / e,
            i = (t.x2 - t.x1) * t.height / e,
            n = {
              x: t.x1,
              y: t.y1
            },
            o = {
              x: t.x2,
              y: t.y2
            },
            a = {
              x: t.x1 + r,
              y: t.y1 + i
            },
            s = {
              x: t.x2 + r,
              y: t.y2 + i
            },
            h = Math.min(n.x, o.x, a.x, s.x),
            l = Math.max(n.x, o.x, a.x, s.x),
            c = Math.min(n.y, o.y, a.y, s.y);
          return {
            x1: h,
            y1: c,
            x2: l,
            y2: c,
            height: Math.max(n.y, o.y, a.y, s.y) - c
          };
        }
        function h(t, e, r, i, n, o, a) {
          return t < i + o && t + r > i && e < n + a && e + r > n;
        }
        function l(t, e, r, i, n, o, a, s) {
          return t < n + a && t + r > n && e < o + s && e + i > o;
        }
        function c(t, e, r, i, n, o) {
          var a = t < r + n / 2;
          return e < i + o / 2 ? a ? 1 : 2 : a ? 3 : 4;
        }
        e.isRectangleAligned = a, e.getCircumscribedAlignedRectangle = s, e.squareCollidesWithQuad = h, e.rectangleCollidesWithQuad = l;
        var u = function () {
          function t(t) {
            var e;
            void 0 === t && (t = {}), this.containers = ((e = {})[5460] = [], e), this.cache = null, this.lastRectangle = null;
            var r = Math.pow(4, 5);
            this.data = new Float32Array((4 * r - 1) / 3 * 4), t.boundaries ? this.resize(t.boundaries) : this.resize({
              x: 0,
              y: 0,
              width: 1,
              height: 1
            });
          }
          return t.prototype.add = function (t, e, r, i) {
            return function (t, e, r, i, n, a, s) {
              for (var l = n - s, c = a - s, u = 2 * s, d = 0, f = 0;;) {
                if (d >= 5) return r[f] = r[f] || [], void r[f].push(i);
                var p = 4 * f + 4,
                  g = 4 * f + 8,
                  v = 4 * f + 12,
                  m = 4 * f + 16,
                  y = h(l, c, u, e[p + 0], e[p + 1], e[p + 2], e[p + 3]),
                  b = h(l, c, u, e[g + 0], e[g + 1], e[g + 2], e[g + 3]),
                  _ = h(l, c, u, e[v + 0], e[v + 1], e[v + 2], e[v + 3]),
                  x = h(l, c, u, e[m + 0], e[m + 1], e[m + 2], e[m + 3]),
                  w = [y, b, _, x].reduce(function (t, e) {
                    return e ? t + 1 : t;
                  }, 0);
                if (0 === w && 0 === d) return r[5460].push(i), void (!o && r[5460].length >= 5 && (o = !0, console.warn("sigma/quadtree.insertNode: At least 5 nodes are outside the global quadtree zone. You might have a problem with the normalization function or the custom bounding box.")));
                if (0 === w) throw new Error("sigma/quadtree.insertNode: no collision (level: ".concat(d, ", key: ").concat(i, ", x: ").concat(n, ", y: ").concat(a, ", size: ").concat(s, ")."));
                if (3 === w) throw new Error("sigma/quadtree.insertNode: 3 impossible collisions (level: ".concat(d, ", key: ").concat(i, ", x: ").concat(n, ", y: ").concat(a, ", size: ").concat(s, ")."));
                if (w > 1) return r[f] = r[f] || [], void r[f].push(i);
                d++, y && (f = p), b && (f = g), _ && (f = v), x && (f = m);
              }
            }(0, this.data, this.containers, t, e, r, i), this;
          }, t.prototype.resize = function (t) {
            this.clear(), this.data[0] = t.x, this.data[1] = t.y, this.data[2] = t.width, this.data[3] = t.height, function (t, e) {
              for (var r = [0, 0]; r.length;) {
                var i = r.pop(),
                  n = r.pop(),
                  o = 4 * n + 4,
                  a = 4 * n + 8,
                  s = 4 * n + 12,
                  h = 4 * n + 16,
                  l = e[n + 0],
                  c = e[n + 1],
                  u = e[n + 2] / 2,
                  d = e[n + 3] / 2;
                e[o + 0] = l, e[o + 1] = c, e[o + 2] = u, e[o + 3] = d, e[a + 0] = l + u, e[a + 1] = c, e[a + 2] = u, e[a + 3] = d, e[s + 0] = l, e[s + 1] = c + d, e[s + 2] = u, e[s + 3] = d, e[h + 0] = l + u, e[h + 1] = c + d, e[h + 2] = u, e[h + 3] = d, i < 4 && (r.push(h, i + 1), r.push(s, i + 1), r.push(a, i + 1), r.push(o, i + 1));
              }
            }(0, this.data);
          }, t.prototype.clear = function () {
            var t;
            return this.containers = ((t = {})[5460] = [], t), this;
          }, t.prototype.point = function (t, e) {
            var r = this.containers[5460].slice(),
              i = 0,
              o = 0;
            do {
              this.containers[i] && (0, n["default"])(r, this.containers[i]), i = 4 * i + 4 * c(t, e, this.data[i + 0], this.data[i + 1], this.data[i + 2], this.data[i + 3]), o++;
            } while (o <= 5);
            return r;
          }, t.prototype.rectangle = function (t, e, r, i, o) {
            var h = this.lastRectangle;
            return h && t === h.x1 && r === h.x2 && e === h.y1 && i === h.y2 && o === h.height || (this.lastRectangle = {
              x1: t,
              y1: e,
              x2: r,
              y2: i,
              height: o
            }, a(this.lastRectangle) || (this.lastRectangle = s(this.lastRectangle)), this.cache = function (t, e, r, i, o, a, s) {
              for (var h, c = [0, 0], u = []; c.length;) {
                var d = c.pop(),
                  f = c.pop();
                if ((h = r[f]) && (0, n["default"])(u, h), !(d >= 5)) {
                  var p = 4 * f + 4,
                    g = 4 * f + 8,
                    v = 4 * f + 12,
                    m = 4 * f + 16,
                    y = l(i, o, a, s, e[p + 0], e[p + 1], e[p + 2], e[p + 3]),
                    b = l(i, o, a, s, e[g + 0], e[g + 1], e[g + 2], e[g + 3]),
                    _ = l(i, o, a, s, e[v + 0], e[v + 1], e[v + 2], e[v + 3]),
                    x = l(i, o, a, s, e[m + 0], e[m + 1], e[m + 2], e[m + 3]);
                  y && c.push(p, d + 1), b && c.push(g, d + 1), _ && c.push(v, d + 1), x && c.push(m, d + 1);
                }
              }
              return u;
            }(0, this.data, this.containers, t, e, Math.abs(t - r) || Math.abs(e - i), o), (0, n["default"])(this.cache, this.containers[5460])), this.cache;
          }, t;
        }();
        e["default"] = u;
      },
      265: function _(t, e, r) {
        "use strict";

        var _i5,
          n = this && this.__extends || (_i5 = function i(t, e) {
            return _i5 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i5(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i5(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          }),
          o = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              "default": t
            };
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var a = o(r(159)),
          s = o(r(764)),
          h = o(r(134)),
          l = o(r(269)),
          c = function (t) {
            function e() {
              return null !== t && t.apply(this, arguments) || this;
            }
            return n(e, t), e.Camera = s["default"], e.QuadTree = h["default"], e.MouseCaptor = l["default"], e.Sigma = a["default"], e;
          }(a["default"]);
        t.exports = c;
      },
      942: function _(t, e) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e["default"] = function (t, e, r, i, n) {
          var o = n.edgeLabelSize,
            a = n.edgeLabelFont,
            s = n.edgeLabelWeight,
            h = n.edgeLabelColor.attribute ? e[n.edgeLabelColor.attribute] || n.edgeLabelColor.color || "#000" : n.edgeLabelColor.color,
            l = e.label;
          if (l) {
            t.fillStyle = h, t.font = "".concat(s, " ").concat(o, "px ").concat(a);
            var c,
              u,
              d = r.size,
              f = i.size,
              p = r.x,
              g = r.y,
              v = i.x,
              m = i.y,
              y = v - p,
              b = m - g,
              _ = Math.sqrt(y * y + b * b);
            if (!(_ < d + f)) {
              c = ((p += y * d / _) + (v -= y * f / _)) / 2, u = ((g += b * d / _) + (m -= b * f / _)) / 2, y = v - p, b = m - g, _ = Math.sqrt(y * y + b * b);
              var x,
                w = t.measureText(l).width;
              if (w > _) {
                for (l += "…", w = t.measureText(l).width; w > _ && l.length > 1;) l = l.slice(0, -2) + "…", w = t.measureText(l).width;
                if (l.length < 4) return;
              }
              x = y > 0 ? b > 0 ? Math.acos(y / _) : Math.asin(b / _) : b > 0 ? Math.acos(y / _) + Math.PI : Math.asin(y / _) + Math.PI / 2, t.save(), t.translate(c, u), t.rotate(x), t.fillText(l, -w / 2, e.size / 2 + o), t.restore();
            }
          }
        };
      },
      61: function _(t, e, r) {
        "use strict";

        var i = this && this.__importDefault || function (t) {
          return t && t.__esModule ? t : {
            "default": t
          };
        };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = i(r(622));
        e["default"] = function (t, e, r) {
          var i = r.labelSize,
            o = r.labelFont,
            a = r.labelWeight;
          if (t.font = "".concat(a, " ").concat(i, "px ").concat(o), t.fillStyle = "#FFF", t.shadowOffsetX = 0, t.shadowOffsetY = 0, t.shadowBlur = 8, t.shadowColor = "#000", "string" == typeof e.label) {
            var s = t.measureText(e.label).width,
              h = Math.round(s + 5),
              l = Math.round(i + 4),
              c = Math.max(e.size, i / 2) + 2,
              u = Math.asin(l / 2 / c),
              d = Math.sqrt(Math.abs(Math.pow(c, 2) - Math.pow(l / 2, 2)));
            t.beginPath(), t.moveTo(e.x + d, e.y + l / 2), t.lineTo(e.x + c + h, e.y + l / 2), t.lineTo(e.x + c + h, e.y - l / 2), t.lineTo(e.x + d, e.y - l / 2), t.arc(e.x, e.y, c, u, -u), t.closePath(), t.fill();
          } else t.beginPath(), t.arc(e.x, e.y, e.size + 2, 0, 2 * Math.PI), t.closePath(), t.fill();
          t.shadowOffsetX = 0, t.shadowOffsetY = 0, t.shadowBlur = 0, (0, n["default"])(t, e, r);
        };
      },
      622: function _(t, e) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e["default"] = function (t, e, r) {
          if (e.label) {
            var i = r.labelSize,
              n = r.labelFont,
              o = r.labelWeight,
              a = r.labelColor.attribute ? e[r.labelColor.attribute] || r.labelColor.color || "#000" : r.labelColor.color;
            t.fillStyle = a, t.font = "".concat(o, " ").concat(i, "px ").concat(n), t.fillText(e.label, e.x + e.size + 3, e.y + i / 3);
          }
        };
      },
      195: function _(t, e, r) {
        "use strict";

        var _i6,
          n = this && this.__extends || (_i6 = function i(t, e) {
            return _i6 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i6(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i6(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          });
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.createEdgeCompoundProgram = e.AbstractEdgeProgram = void 0;
        var o = function (t) {
          function e(e, r, i, n, o) {
            return t.call(this, e, r, i, n, o) || this;
          }
          return n(e, t), e;
        }(r(171).AbstractProgram);
        e.AbstractEdgeProgram = o, e.createEdgeCompoundProgram = function (t) {
          return function () {
            function e(e, r) {
              this.programs = t.map(function (t) {
                return new t(e, r);
              });
            }
            return e.prototype.bufferData = function () {
              this.programs.forEach(function (t) {
                return t.bufferData();
              });
            }, e.prototype.allocate = function (t) {
              this.programs.forEach(function (e) {
                return e.allocate(t);
              });
            }, e.prototype.bind = function () {}, e.prototype.computeIndices = function () {
              this.programs.forEach(function (t) {
                return t.computeIndices();
              });
            }, e.prototype.render = function (t) {
              this.programs.forEach(function (e) {
                e.bind(), e.bufferData(), e.render(t);
              });
            }, e.prototype.process = function (t, e, r, i, n) {
              this.programs.forEach(function (o) {
                return o.process(t, e, r, i, n);
              });
            }, e;
          }();
        };
      },
      909: function _(t, e, r) {
        "use strict";

        var _i7,
          n = this && this.__extends || (_i7 = function i(t, e) {
            return _i7 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i7(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i7(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          });
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.createNodeCompoundProgram = e.AbstractNodeProgram = void 0;
        var o = function (t) {
          function e(e, r, i, n, o) {
            var a = t.call(this, e, r, i, n, o) || this;
            a.positionLocation = e.getAttribLocation(a.program, "a_position"), a.sizeLocation = e.getAttribLocation(a.program, "a_size"), a.colorLocation = e.getAttribLocation(a.program, "a_color");
            var s = e.getUniformLocation(a.program, "u_matrix");
            if (null === s) throw new Error("AbstractNodeProgram: error while getting matrixLocation");
            a.matrixLocation = s;
            var h = e.getUniformLocation(a.program, "u_ratio");
            if (null === h) throw new Error("AbstractNodeProgram: error while getting ratioLocation");
            a.ratioLocation = h;
            var l = e.getUniformLocation(a.program, "u_scale");
            if (null === l) throw new Error("AbstractNodeProgram: error while getting scaleLocation");
            return a.scaleLocation = l, a;
          }
          return n(e, t), e.prototype.bind = function () {
            var t = this.gl;
            t.enableVertexAttribArray(this.positionLocation), t.enableVertexAttribArray(this.sizeLocation), t.enableVertexAttribArray(this.colorLocation), t.vertexAttribPointer(this.positionLocation, 2, t.FLOAT, !1, this.attributes * Float32Array.BYTES_PER_ELEMENT, 0), t.vertexAttribPointer(this.sizeLocation, 1, t.FLOAT, !1, this.attributes * Float32Array.BYTES_PER_ELEMENT, 8), t.vertexAttribPointer(this.colorLocation, 4, t.UNSIGNED_BYTE, !0, this.attributes * Float32Array.BYTES_PER_ELEMENT, 12);
          }, e;
        }(r(171).AbstractProgram);
        e.AbstractNodeProgram = o, e.createNodeCompoundProgram = function (t) {
          return function () {
            function e(e, r) {
              this.programs = t.map(function (t) {
                return new t(e, r);
              });
            }
            return e.prototype.bufferData = function () {
              this.programs.forEach(function (t) {
                return t.bufferData();
              });
            }, e.prototype.allocate = function (t) {
              this.programs.forEach(function (e) {
                return e.allocate(t);
              });
            }, e.prototype.bind = function () {}, e.prototype.render = function (t) {
              this.programs.forEach(function (e) {
                e.bind(), e.bufferData(), e.render(t);
              });
            }, e.prototype.process = function (t, e, r) {
              this.programs.forEach(function (i) {
                return i.process(t, e, r);
              });
            }, e;
          }();
        };
      },
      171: function _(t, e, r) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.AbstractProgram = void 0;
        var i = r(706),
          n = function () {
            function t(t, e, r, n, o) {
              this.array = new Float32Array(), this.points = n, this.attributes = o, this.gl = t, this.vertexShaderSource = e, this.fragmentShaderSource = r;
              var a = t.createBuffer();
              if (null === a) throw new Error("AbstractProgram: error while creating the buffer");
              this.buffer = a, t.bindBuffer(t.ARRAY_BUFFER, this.buffer), this.vertexShader = (0, i.loadVertexShader)(t, this.vertexShaderSource), this.fragmentShader = (0, i.loadFragmentShader)(t, this.fragmentShaderSource), this.program = (0, i.loadProgram)(t, [this.vertexShader, this.fragmentShader]);
            }
            return t.prototype.bufferData = function () {
              var t = this.gl;
              t.bufferData(t.ARRAY_BUFFER, this.array, t.DYNAMIC_DRAW);
            }, t.prototype.allocate = function (t) {
              this.array = new Float32Array(this.points * this.attributes * t);
            }, t.prototype.hasNothingToRender = function () {
              return 0 === this.array.length;
            }, t;
          }();
        e.AbstractProgram = n;
      },
      569: function _(t, e, r) {
        "use strict";

        var i = this && this.__importDefault || function (t) {
          return t && t.__esModule ? t : {
            "default": t
          };
        };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = r(195),
          o = i(r(805)),
          a = i(r(483)),
          s = (0, n.createEdgeCompoundProgram)([a["default"], o["default"]]);
        e["default"] = s;
      },
      805: function _(t, e, r) {
        "use strict";

        var _i8,
          n = this && this.__extends || (_i8 = function i(t, e) {
            return _i8 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i8(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i8(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          }),
          o = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              "default": t
            };
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var a = r(928),
          s = o(r(912)),
          h = o(r(973)),
          l = function (t) {
            function e(e) {
              var r = t.call(this, e, s["default"], h["default"], 3, 9) || this;
              r.positionLocation = e.getAttribLocation(r.program, "a_position"), r.colorLocation = e.getAttribLocation(r.program, "a_color"), r.normalLocation = e.getAttribLocation(r.program, "a_normal"), r.radiusLocation = e.getAttribLocation(r.program, "a_radius"), r.barycentricLocation = e.getAttribLocation(r.program, "a_barycentric");
              var i = e.getUniformLocation(r.program, "u_matrix");
              if (null === i) throw new Error("EdgeArrowHeadProgram: error while getting matrixLocation");
              r.matrixLocation = i;
              var n = e.getUniformLocation(r.program, "u_sqrtZoomRatio");
              if (null === n) throw new Error("EdgeArrowHeadProgram: error while getting sqrtZoomRatioLocation");
              r.sqrtZoomRatioLocation = n;
              var o = e.getUniformLocation(r.program, "u_correctionRatio");
              if (null === o) throw new Error("EdgeArrowHeadProgram: error while getting correctionRatioLocation");
              return r.correctionRatioLocation = o, r.bind(), r;
            }
            return n(e, t), e.prototype.bind = function () {
              var t = this.gl;
              t.enableVertexAttribArray(this.positionLocation), t.enableVertexAttribArray(this.normalLocation), t.enableVertexAttribArray(this.radiusLocation), t.enableVertexAttribArray(this.colorLocation), t.enableVertexAttribArray(this.barycentricLocation), t.vertexAttribPointer(this.positionLocation, 2, t.FLOAT, !1, 9 * Float32Array.BYTES_PER_ELEMENT, 0), t.vertexAttribPointer(this.normalLocation, 2, t.FLOAT, !1, 9 * Float32Array.BYTES_PER_ELEMENT, 8), t.vertexAttribPointer(this.radiusLocation, 1, t.FLOAT, !1, 9 * Float32Array.BYTES_PER_ELEMENT, 16), t.vertexAttribPointer(this.colorLocation, 4, t.UNSIGNED_BYTE, !0, 9 * Float32Array.BYTES_PER_ELEMENT, 20), t.vertexAttribPointer(this.barycentricLocation, 3, t.FLOAT, !1, 9 * Float32Array.BYTES_PER_ELEMENT, 24);
            }, e.prototype.computeIndices = function () {}, e.prototype.process = function (t, e, r, i, n) {
              if (i) for (var o = 27 * n, s = o + 27; o < s; o++) this.array[o] = 0;else {
                var h = r.size || 1,
                  l = e.size || 1,
                  c = t.x,
                  u = t.y,
                  d = e.x,
                  f = e.y,
                  p = (0, a.floatColor)(r.color),
                  g = d - c,
                  v = f - u,
                  m = g * g + v * v,
                  y = 0,
                  b = 0;
                m && (y = -v * (m = 1 / Math.sqrt(m)) * h, b = g * m * h);
                var _ = 27 * n,
                  x = this.array;
                x[_++] = d, x[_++] = f, x[_++] = -y, x[_++] = -b, x[_++] = l, x[_++] = p, x[_++] = 1, x[_++] = 0, x[_++] = 0, x[_++] = d, x[_++] = f, x[_++] = -y, x[_++] = -b, x[_++] = l, x[_++] = p, x[_++] = 0, x[_++] = 1, x[_++] = 0, x[_++] = d, x[_++] = f, x[_++] = -y, x[_++] = -b, x[_++] = l, x[_++] = p, x[_++] = 0, x[_++] = 0, x[_] = 1;
              }
            }, e.prototype.render = function (t) {
              if (!this.hasNothingToRender()) {
                var e = this.gl,
                  r = this.program;
                e.useProgram(r), e.uniformMatrix3fv(this.matrixLocation, !1, t.matrix), e.uniform1f(this.sqrtZoomRatioLocation, Math.sqrt(t.ratio)), e.uniform1f(this.correctionRatioLocation, t.correctionRatio), e.drawArrays(e.TRIANGLES, 0, this.array.length / 9);
              }
            }, e;
          }(r(195).AbstractEdgeProgram);
        e["default"] = l;
      },
      483: function _(t, e, r) {
        "use strict";

        var _i9,
          n = this && this.__extends || (_i9 = function i(t, e) {
            return _i9 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i9(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i9(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          }),
          o = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              "default": t
            };
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var a = r(195),
          s = r(928),
          h = o(r(620)),
          l = o(r(498)),
          c = function (t) {
            function e(e) {
              var r = t.call(this, e, h["default"], l["default"], 4, 6) || this,
                i = e.createBuffer();
              if (null === i) throw new Error("EdgeClampedProgram: error while getting resolutionLocation");
              r.indicesBuffer = i, r.positionLocation = e.getAttribLocation(r.program, "a_position"), r.colorLocation = e.getAttribLocation(r.program, "a_color"), r.normalLocation = e.getAttribLocation(r.program, "a_normal"), r.radiusLocation = e.getAttribLocation(r.program, "a_radius");
              var n = e.getUniformLocation(r.program, "u_matrix");
              if (null === n) throw new Error("EdgeClampedProgram: error while getting matrixLocation");
              r.matrixLocation = n;
              var o = e.getUniformLocation(r.program, "u_sqrtZoomRatio");
              if (null === o) throw new Error("EdgeClampedProgram: error while getting cameraRatioLocation");
              r.sqrtZoomRatioLocation = o;
              var a = e.getUniformLocation(r.program, "u_correctionRatio");
              if (null === a) throw new Error("EdgeClampedProgram: error while getting viewportRatioLocation");
              return r.correctionRatioLocation = a, r.canUse32BitsIndices = (0, s.canUse32BitsIndices)(e), r.IndicesArray = r.canUse32BitsIndices ? Uint32Array : Uint16Array, r.indicesArray = new r.IndicesArray(), r.indicesType = r.canUse32BitsIndices ? e.UNSIGNED_INT : e.UNSIGNED_SHORT, r.bind(), r;
            }
            return n(e, t), e.prototype.bind = function () {
              var t = this.gl;
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indicesBuffer), t.enableVertexAttribArray(this.positionLocation), t.enableVertexAttribArray(this.normalLocation), t.enableVertexAttribArray(this.colorLocation), t.enableVertexAttribArray(this.radiusLocation), t.vertexAttribPointer(this.positionLocation, 2, t.FLOAT, !1, 6 * Float32Array.BYTES_PER_ELEMENT, 0), t.vertexAttribPointer(this.normalLocation, 2, t.FLOAT, !1, 6 * Float32Array.BYTES_PER_ELEMENT, 8), t.vertexAttribPointer(this.colorLocation, 4, t.UNSIGNED_BYTE, !0, 6 * Float32Array.BYTES_PER_ELEMENT, 16), t.vertexAttribPointer(this.radiusLocation, 1, t.FLOAT, !1, 6 * Float32Array.BYTES_PER_ELEMENT, 20);
            }, e.prototype.process = function (t, e, r, i, n) {
              if (i) for (var o = 24 * n, a = o + 24; o < a; o++) this.array[o] = 0;else {
                var h = r.size || 1,
                  l = t.x,
                  c = t.y,
                  u = e.x,
                  d = e.y,
                  f = e.size || 1,
                  p = (0, s.floatColor)(r.color),
                  g = u - l,
                  v = d - c,
                  m = g * g + v * v,
                  y = 0,
                  b = 0;
                m && (y = -v * (m = 1 / Math.sqrt(m)) * h, b = g * m * h);
                var _ = 24 * n,
                  x = this.array;
                x[_++] = l, x[_++] = c, x[_++] = y, x[_++] = b, x[_++] = p, x[_++] = 0, x[_++] = l, x[_++] = c, x[_++] = -y, x[_++] = -b, x[_++] = p, x[_++] = 0, x[_++] = u, x[_++] = d, x[_++] = y, x[_++] = b, x[_++] = p, x[_++] = f, x[_++] = u, x[_++] = d, x[_++] = -y, x[_++] = -b, x[_++] = p, x[_] = -f;
              }
            }, e.prototype.computeIndices = function () {
              for (var t = this.array.length / 6, e = t + t / 2, r = new this.IndicesArray(e), i = 0, n = 0; i < t; i += 4) r[n++] = i, r[n++] = i + 1, r[n++] = i + 2, r[n++] = i + 2, r[n++] = i + 1, r[n++] = i + 3;
              this.indicesArray = r;
            }, e.prototype.bufferData = function () {
              t.prototype.bufferData.call(this);
              var e = this.gl;
              e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indicesArray, e.STATIC_DRAW);
            }, e.prototype.render = function (t) {
              if (!this.hasNothingToRender()) {
                var e = this.gl,
                  r = this.program;
                e.useProgram(r), e.uniformMatrix3fv(this.matrixLocation, !1, t.matrix), e.uniform1f(this.sqrtZoomRatioLocation, Math.sqrt(t.ratio)), e.uniform1f(this.correctionRatioLocation, t.correctionRatio), e.drawElements(e.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
              }
            }, e;
          }(a.AbstractEdgeProgram);
        e["default"] = c;
      },
      753: function _(t, e, r) {
        "use strict";

        var _i10,
          n = this && this.__extends || (_i10 = function i(t, e) {
            return _i10 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i10(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i10(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          }),
          o = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              "default": t
            };
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var a = r(928),
          s = o(r(223)),
          h = o(r(498)),
          l = function (t) {
            function e(e) {
              var r = t.call(this, e, s["default"], h["default"], 4, 5) || this,
                i = e.createBuffer();
              if (null === i) throw new Error("EdgeProgram: error while creating indicesBuffer");
              r.indicesBuffer = i, r.positionLocation = e.getAttribLocation(r.program, "a_position"), r.colorLocation = e.getAttribLocation(r.program, "a_color"), r.normalLocation = e.getAttribLocation(r.program, "a_normal");
              var n = e.getUniformLocation(r.program, "u_matrix");
              if (null === n) throw new Error("EdgeProgram: error while getting matrixLocation");
              r.matrixLocation = n;
              var o = e.getUniformLocation(r.program, "u_correctionRatio");
              if (null === o) throw new Error("EdgeProgram: error while getting correctionRatioLocation");
              r.correctionRatioLocation = o;
              var l = e.getUniformLocation(r.program, "u_sqrtZoomRatio");
              if (null === l) throw new Error("EdgeProgram: error while getting sqrtZoomRatioLocation");
              return r.sqrtZoomRatioLocation = l, r.canUse32BitsIndices = (0, a.canUse32BitsIndices)(e), r.IndicesArray = r.canUse32BitsIndices ? Uint32Array : Uint16Array, r.indicesArray = new r.IndicesArray(), r.indicesType = r.canUse32BitsIndices ? e.UNSIGNED_INT : e.UNSIGNED_SHORT, r.bind(), r;
            }
            return n(e, t), e.prototype.bind = function () {
              var t = this.gl;
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indicesBuffer), t.enableVertexAttribArray(this.positionLocation), t.enableVertexAttribArray(this.normalLocation), t.enableVertexAttribArray(this.colorLocation), t.vertexAttribPointer(this.positionLocation, 2, t.FLOAT, !1, 5 * Float32Array.BYTES_PER_ELEMENT, 0), t.vertexAttribPointer(this.normalLocation, 2, t.FLOAT, !1, 5 * Float32Array.BYTES_PER_ELEMENT, 8), t.vertexAttribPointer(this.colorLocation, 4, t.UNSIGNED_BYTE, !0, 5 * Float32Array.BYTES_PER_ELEMENT, 16);
            }, e.prototype.computeIndices = function () {
              for (var t = this.array.length / 5, e = t + t / 2, r = new this.IndicesArray(e), i = 0, n = 0; i < t; i += 4) r[n++] = i, r[n++] = i + 1, r[n++] = i + 2, r[n++] = i + 2, r[n++] = i + 1, r[n++] = i + 3;
              this.indicesArray = r;
            }, e.prototype.bufferData = function () {
              t.prototype.bufferData.call(this);
              var e = this.gl;
              e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indicesArray, e.STATIC_DRAW);
            }, e.prototype.process = function (t, e, r, i, n) {
              if (i) for (var o = 20 * n, s = o + 20; o < s; o++) this.array[o] = 0;else {
                var h = r.size || 1,
                  l = t.x,
                  c = t.y,
                  u = e.x,
                  d = e.y,
                  f = (0, a.floatColor)(r.color),
                  p = u - l,
                  g = d - c,
                  v = p * p + g * g,
                  m = 0,
                  y = 0;
                v && (m = -g * (v = 1 / Math.sqrt(v)) * h, y = p * v * h);
                var b = 20 * n,
                  _ = this.array;
                _[b++] = l, _[b++] = c, _[b++] = m, _[b++] = y, _[b++] = f, _[b++] = l, _[b++] = c, _[b++] = -m, _[b++] = -y, _[b++] = f, _[b++] = u, _[b++] = d, _[b++] = m, _[b++] = y, _[b++] = f, _[b++] = u, _[b++] = d, _[b++] = -m, _[b++] = -y, _[b] = f;
              }
            }, e.prototype.render = function (t) {
              if (!this.hasNothingToRender()) {
                var e = this.gl,
                  r = this.program;
                e.useProgram(r), e.uniformMatrix3fv(this.matrixLocation, !1, t.matrix), e.uniform1f(this.sqrtZoomRatioLocation, Math.sqrt(t.ratio)), e.uniform1f(this.correctionRatioLocation, t.correctionRatio), e.drawElements(e.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
              }
            }, e;
          }(r(195).AbstractEdgeProgram);
        e["default"] = l;
      },
      582: function _(t, e, r) {
        "use strict";

        var _i11,
          n = this && this.__extends || (_i11 = function i(t, e) {
            return _i11 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i11(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i11(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          }),
          o = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              "default": t
            };
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var a = r(928),
          s = o(r(106)),
          h = o(r(262)),
          l = function (t) {
            function e(e) {
              var r = t.call(this, e, s["default"], h["default"], 1, 4) || this;
              return r.bind(), r;
            }
            return n(e, t), e.prototype.process = function (t, e, r) {
              var i = this.array,
                n = 1 * r * 4;
              if (e) return i[n++] = 0, i[n++] = 0, i[n++] = 0, void (i[n++] = 0);
              var o = (0, a.floatColor)(t.color);
              i[n++] = t.x, i[n++] = t.y, i[n++] = t.size, i[n] = o;
            }, e.prototype.render = function (t) {
              if (!this.hasNothingToRender()) {
                var e = this.gl,
                  r = this.program;
                e.useProgram(r), e.uniform1f(this.ratioLocation, 1 / Math.sqrt(t.ratio)), e.uniform1f(this.scaleLocation, t.scalingRatio), e.uniformMatrix3fv(this.matrixLocation, !1, t.matrix), e.drawArrays(e.POINTS, 0, this.array.length / 4);
              }
            }, e;
          }(r(909).AbstractNodeProgram);
        e["default"] = l;
      },
      706: function _(t, e) {
        "use strict";

        function r(t, e, r) {
          var i = "VERTEX" === t ? e.VERTEX_SHADER : e.FRAGMENT_SHADER,
            n = e.createShader(i);
          if (null === n) throw new Error("loadShader: error while creating the shader");
          if (e.shaderSource(n, r), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS)) {
            var o = e.getShaderInfoLog(n);
            throw e.deleteShader(n), new Error("loadShader: error while compiling the shader:\n".concat(o, "\n").concat(r));
          }
          return n;
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.loadProgram = e.loadFragmentShader = e.loadVertexShader = void 0, e.loadVertexShader = function (t, e) {
          return r("VERTEX", t, e);
        }, e.loadFragmentShader = function (t, e) {
          return r("FRAGMENT", t, e);
        }, e.loadProgram = function (t, e) {
          var r,
            i,
            n = t.createProgram();
          if (null === n) throw new Error("loadProgram: error while creating the program.");
          for (r = 0, i = e.length; r < i; r++) t.attachShader(n, e[r]);
          if (t.linkProgram(n), !t.getProgramParameter(n, t.LINK_STATUS)) throw t.deleteProgram(n), new Error("loadProgram: error while linking the program.");
          return n;
        };
      },
      310: function _(t, e, r) {
        "use strict";

        var i = this && this.__importDefault || function (t) {
          return t && t.__esModule ? t : {
            "default": t
          };
        };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.resolveSettings = e.validateSettings = e.DEFAULT_EDGE_PROGRAM_CLASSES = e.DEFAULT_NODE_PROGRAM_CLASSES = e.DEFAULT_SETTINGS = void 0;
        var n = r(928),
          o = i(r(622)),
          a = i(r(61)),
          s = i(r(942)),
          h = i(r(582)),
          l = i(r(753)),
          c = i(r(569));
        e.DEFAULT_SETTINGS = {
          hideEdgesOnMove: !1,
          hideLabelsOnMove: !1,
          renderLabels: !0,
          renderEdgeLabels: !1,
          enableEdgeClickEvents: !1,
          enableEdgeWheelEvents: !1,
          enableEdgeHoverEvents: !1,
          defaultNodeColor: "#999",
          defaultNodeType: "circle",
          defaultEdgeColor: "#ccc",
          defaultEdgeType: "line",
          labelFont: "Arial",
          labelSize: 14,
          labelWeight: "normal",
          labelColor: {
            color: "#000"
          },
          edgeLabelFont: "Arial",
          edgeLabelSize: 14,
          edgeLabelWeight: "normal",
          edgeLabelColor: {
            attribute: "color"
          },
          stagePadding: 30,
          labelDensity: 1,
          labelGridCellSize: 100,
          labelRenderedSizeThreshold: 6,
          nodeReducer: null,
          edgeReducer: null,
          zIndex: !1,
          minCameraRatio: null,
          maxCameraRatio: null,
          labelRenderer: o["default"],
          hoverRenderer: a["default"],
          edgeLabelRenderer: s["default"],
          allowInvalidContainer: !1,
          nodeProgramClasses: {},
          nodeHoverProgramClasses: {},
          edgeProgramClasses: {}
        }, e.DEFAULT_NODE_PROGRAM_CLASSES = {
          circle: h["default"]
        }, e.DEFAULT_EDGE_PROGRAM_CLASSES = {
          arrow: c["default"],
          line: l["default"]
        }, e.validateSettings = function (t) {
          if ("number" != typeof t.labelDensity || t.labelDensity < 0) throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
          var e = t.minCameraRatio,
            r = t.maxCameraRatio;
          if ("number" == typeof e && "number" == typeof r && r < e) throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
        }, e.resolveSettings = function (t) {
          var r = (0, n.assign)({}, e.DEFAULT_SETTINGS, t);
          return r.nodeProgramClasses = (0, n.assign)({}, e.DEFAULT_NODE_PROGRAM_CLASSES, r.nodeProgramClasses), r.edgeProgramClasses = (0, n.assign)({}, e.DEFAULT_EDGE_PROGRAM_CLASSES, r.edgeProgramClasses), r;
        };
      },
      159: function _(t, e, r) {
        "use strict";

        var _i12,
          n = this && this.__extends || (_i12 = function i(t, e) {
            return _i12 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i12(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i12(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          }),
          o = this && this.__assign || function () {
            return o = Object.assign || function (t) {
              for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }, o.apply(this, arguments);
          },
          a = this && this.__values || function (t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
              r = e && t[e],
              i = 0;
            if (r) return r.call(t);
            if (t && "number" == typeof t.length) return {
              next: function next() {
                return t && i >= t.length && (t = void 0), {
                  value: t && t[i++],
                  done: !t
                };
              }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
          },
          s = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              "default": t
            };
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var h = s(r(796)),
          l = s(r(764)),
          c = s(r(269)),
          u = s(r(134)),
          d = r(699),
          f = r(928),
          p = r(730),
          g = r(310),
          v = s(r(508)),
          m = r(700),
          y = r(628);
        function b(t, e, r) {
          if (!r.hasOwnProperty("x") || !r.hasOwnProperty("y")) throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(e, '". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?'));
          return r.color || (r.color = t.defaultNodeColor), r.label || "" === r.label || (r.label = null), void 0 !== r.label && null !== r.label ? r.label = "" + r.label : r.label = null, r.size || (r.size = 2), r.hasOwnProperty("hidden") || (r.hidden = !1), r.hasOwnProperty("highlighted") || (r.highlighted = !1), r.hasOwnProperty("forceLabel") || (r.forceLabel = !1), r.type && "" !== r.type || (r.type = t.defaultNodeType), r.zIndex || (r.zIndex = 0), r;
        }
        function _(t, e, r) {
          return r.color || (r.color = t.defaultEdgeColor), r.label || (r.label = ""), r.size || (r.size = .5), r.hasOwnProperty("hidden") || (r.hidden = !1), r.hasOwnProperty("forceLabel") || (r.forceLabel = !1), r.type && "" !== r.type || (r.type = t.defaultEdgeType), r.zIndex || (r.zIndex = 0), r;
        }
        var x = function (t) {
          function e(e, r, i) {
            void 0 === i && (i = {});
            var n = t.call(this) || this;
            if (n.elements = {}, n.canvasContexts = {}, n.webGLContexts = {}, n.activeListeners = {}, n.quadtree = new u["default"](), n.labelGrid = new p.LabelGrid(), n.nodeDataCache = {}, n.edgeDataCache = {}, n.nodesWithForcedLabels = [], n.edgesWithForcedLabels = [], n.nodeExtent = {
              x: [0, 1],
              y: [0, 1]
            }, n.matrix = (0, m.identity)(), n.invMatrix = (0, m.identity)(), n.correctionRatio = 1, n.customBBox = null, n.normalizationFunction = (0, f.createNormalizationFunction)({
              x: [0, 1],
              y: [0, 1]
            }), n.cameraSizeRatio = 1, n.width = 0, n.height = 0, n.pixelRatio = (0, f.getPixelRatio)(), n.displayedLabels = new Set(), n.highlightedNodes = new Set(), n.hoveredNode = null, n.hoveredEdge = null, n.renderFrame = null, n.renderHighlightedNodesFrame = null, n.needToProcess = !1, n.needToSoftProcess = !1, n.checkEdgesEventsFrame = null, n.nodePrograms = {}, n.nodeHoverPrograms = {}, n.edgePrograms = {}, n.settings = (0, g.resolveSettings)(i), (0, g.validateSettings)(n.settings), (0, f.validateGraph)(e), !(r instanceof HTMLElement)) throw new Error("Sigma: container should be an html element.");
            for (var o in n.graph = e, n.container = r, n.createWebGLContext("edges", {
              preserveDrawingBuffer: !0
            }), n.createCanvasContext("edgeLabels"), n.createWebGLContext("nodes"), n.createCanvasContext("labels"), n.createCanvasContext("hovers"), n.createWebGLContext("hoverNodes"), n.createCanvasContext("mouse"), n.webGLContexts) {
              var a = n.webGLContexts[o];
              a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA), a.enable(a.BLEND);
            }
            for (var s in n.settings.nodeProgramClasses) {
              var h = n.settings.nodeProgramClasses[s];
              n.nodePrograms[s] = new h(n.webGLContexts.nodes, n);
              var d = h;
              s in n.settings.nodeHoverProgramClasses && (d = n.settings.nodeHoverProgramClasses[s]), n.nodeHoverPrograms[s] = new d(n.webGLContexts.hoverNodes, n);
            }
            for (var s in n.settings.edgeProgramClasses) {
              var y = n.settings.edgeProgramClasses[s];
              n.edgePrograms[s] = new y(n.webGLContexts.edges, n);
            }
            return n.resize(), n.camera = new l["default"](), n.bindCameraHandlers(), n.mouseCaptor = new c["default"](n.elements.mouse, n), n.touchCaptor = new v["default"](n.elements.mouse, n), n.bindEventHandlers(), n.bindGraphHandlers(), n.handleSettingsUpdate(), n.process(), n.render(), n;
          }
          return n(e, t), e.prototype.createCanvas = function (t) {
            var e = (0, f.createElement)("canvas", {
              position: "absolute"
            }, {
              "class": "sigma-".concat(t)
            });
            return this.elements[t] = e, this.container.appendChild(e), e;
          }, e.prototype.createCanvasContext = function (t) {
            var e = this.createCanvas(t);
            return this.canvasContexts[t] = e.getContext("2d", {
              preserveDrawingBuffer: !1,
              antialias: !1
            }), this;
          }, e.prototype.createWebGLContext = function (t, e) {
            var r,
              i = this.createCanvas(t),
              n = o({
                preserveDrawingBuffer: !1,
                antialias: !1
              }, e || {});
            return (r = i.getContext("webgl2", n)) || (r = i.getContext("webgl", n)), r || (r = i.getContext("experimental-webgl", n)), this.webGLContexts[t] = r, this;
          }, e.prototype.bindCameraHandlers = function () {
            var t = this;
            return this.activeListeners.camera = function () {
              t._scheduleRefresh();
            }, this.camera.on("updated", this.activeListeners.camera), this;
          }, e.prototype.mouseIsOnNode = function (t, e, r) {
            var i = t.x,
              n = t.y,
              o = e.x,
              a = e.y;
            return i > o - r && i < o + r && n > a - r && n < a + r && Math.sqrt(Math.pow(i - o, 2) + Math.pow(n - a, 2)) < r;
          }, e.prototype.getQuadNodes = function (t) {
            var e = this.viewportToFramedGraph(t);
            return this.quadtree.point(e.x, 1 - e.y);
          }, e.prototype.getNodeAtPosition = function (t) {
            for (var e = t.x, r = t.y, i = this.getQuadNodes(t), n = 1 / 0, o = null, a = 0, s = i.length; a < s; a++) {
              var h = i[a],
                l = this.nodeDataCache[h],
                c = this.framedGraphToViewport(l),
                u = this.scaleSize(l.size);
              if (!l.hidden && this.mouseIsOnNode(t, c, u)) {
                var d = Math.sqrt(Math.pow(e - c.x, 2) + Math.pow(r - c.y, 2));
                d < n && (n = d, o = h);
              }
            }
            return o;
          }, e.prototype.bindEventHandlers = function () {
            var t = this;
            this.activeListeners.handleResize = function () {
              t.needToSoftProcess = !0, t._scheduleRefresh();
            }, window.addEventListener("resize", this.activeListeners.handleResize), this.activeListeners.handleMove = function (e) {
              var r = {
                  event: e,
                  preventSigmaDefault: function preventSigmaDefault() {
                    e.preventSigmaDefault();
                  }
                },
                i = t.getNodeAtPosition(e);
              if (i && t.hoveredNode !== i && !t.nodeDataCache[i].hidden) return t.hoveredNode && t.emit("leaveNode", o(o({}, r), {
                node: t.hoveredNode
              })), t.hoveredNode = i, t.emit("enterNode", o(o({}, r), {
                node: i
              })), void t.scheduleHighlightedNodesRender();
              if (t.hoveredNode) {
                var n = t.nodeDataCache[t.hoveredNode],
                  a = t.framedGraphToViewport(n),
                  s = t.scaleSize(n.size);
                if (!t.mouseIsOnNode(e, a, s)) {
                  var h = t.hoveredNode;
                  return t.hoveredNode = null, t.emit("leaveNode", o(o({}, r), {
                    node: h
                  })), void t.scheduleHighlightedNodesRender();
                }
              }
              !0 === t.settings.enableEdgeHoverEvents ? t.checkEdgeHoverEvents(r) : "debounce" === t.settings.enableEdgeHoverEvents && (t.checkEdgesEventsFrame || (t.checkEdgesEventsFrame = (0, f.requestFrame)(function () {
                t.checkEdgeHoverEvents(r), t.checkEdgesEventsFrame = null;
              })));
            };
            var e = function e(_e) {
              return function (r) {
                var i = {
                    event: r,
                    preventSigmaDefault: function preventSigmaDefault() {
                      r.preventSigmaDefault();
                    }
                  },
                  n = r.original.isFakeSigmaMouseEvent ? t.getNodeAtPosition(r) : t.hoveredNode;
                if (n) return t.emit("".concat(_e, "Node"), o(o({}, i), {
                  node: n
                }));
                if ("wheel" === _e ? t.settings.enableEdgeWheelEvents : t.settings.enableEdgeClickEvents) {
                  var a = t.getEdgeAtPoint(r.x, r.y);
                  if (a) return t.emit("".concat(_e, "Edge"), o(o({}, i), {
                    edge: a
                  }));
                }
                return t.emit("".concat(_e, "Stage"), i);
              };
            };
            return this.activeListeners.handleClick = e("click"), this.activeListeners.handleRightClick = e("rightClick"), this.activeListeners.handleDoubleClick = e("doubleClick"), this.activeListeners.handleWheel = e("wheel"), this.activeListeners.handleDown = e("down"), this.mouseCaptor.on("mousemove", this.activeListeners.handleMove), this.mouseCaptor.on("click", this.activeListeners.handleClick), this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick), this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick), this.mouseCaptor.on("wheel", this.activeListeners.handleWheel), this.mouseCaptor.on("mousedown", this.activeListeners.handleDown), this;
          }, e.prototype.bindGraphHandlers = function () {
            var t = this,
              e = this.graph;
            return this.activeListeners.graphUpdate = function () {
              t.needToProcess = !0, t._scheduleRefresh();
            }, this.activeListeners.softGraphUpdate = function () {
              t.needToSoftProcess = !0, t._scheduleRefresh();
            }, this.activeListeners.dropNodeGraphUpdate = function (e) {
              delete t.nodeDataCache[e.key], t.hoveredNode === e.key && (t.hoveredNode = null), t.activeListeners.graphUpdate();
            }, this.activeListeners.dropEdgeGraphUpdate = function (e) {
              delete t.edgeDataCache[e.key], t.hoveredEdge === e.key && (t.hoveredEdge = null), t.activeListeners.graphUpdate();
            }, this.activeListeners.clearEdgesGraphUpdate = function () {
              t.edgeDataCache = {}, t.hoveredEdge = null, t.activeListeners.graphUpdate();
            }, this.activeListeners.clearGraphUpdate = function () {
              t.nodeDataCache = {}, t.hoveredNode = null, t.activeListeners.clearEdgesGraphUpdate();
            }, e.on("nodeAdded", this.activeListeners.graphUpdate), e.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate), e.on("nodeAttributesUpdated", this.activeListeners.softGraphUpdate), e.on("eachNodeAttributesUpdated", this.activeListeners.graphUpdate), e.on("edgeAdded", this.activeListeners.graphUpdate), e.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate), e.on("edgeAttributesUpdated", this.activeListeners.softGraphUpdate), e.on("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate), e.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate), e.on("cleared", this.activeListeners.clearGraphUpdate), this;
          }, e.prototype.unbindGraphHandlers = function () {
            var t = this.graph;
            t.removeListener("nodeAdded", this.activeListeners.graphUpdate), t.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate), t.removeListener("nodeAttributesUpdated", this.activeListeners.softGraphUpdate), t.removeListener("eachNodeAttributesUpdated", this.activeListeners.graphUpdate), t.removeListener("edgeAdded", this.activeListeners.graphUpdate), t.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate), t.removeListener("edgeAttributesUpdated", this.activeListeners.softGraphUpdate), t.removeListener("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate), t.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate), t.removeListener("cleared", this.activeListeners.clearGraphUpdate);
          }, e.prototype.checkEdgeHoverEvents = function (t) {
            var e = this.hoveredNode ? null : this.getEdgeAtPoint(t.event.x, t.event.y);
            return e !== this.hoveredEdge && (this.hoveredEdge && this.emit("leaveEdge", o(o({}, t), {
              edge: this.hoveredEdge
            })), e && this.emit("enterEdge", o(o({}, t), {
              edge: e
            })), this.hoveredEdge = e), this;
          }, e.prototype.getEdgeAtPoint = function (t, e) {
            var r,
              i,
              n = this,
              o = this.edgeDataCache,
              s = this.nodeDataCache;
            if (!(0, y.isPixelColored)(this.webGLContexts.edges, t * this.pixelRatio, e * this.pixelRatio)) return null;
            var h = this.viewportToGraph({
                x: t,
                y: e
              }),
              l = h.x,
              c = h.y,
              u = 0;
            if (this.graph.someEdge(function (t, e, r, i, a, h) {
              var l = a.x,
                c = a.y,
                d = h.x,
                f = h.y;
              if (o[t].hidden || s[r].hidden || s[i].hidden) return !1;
              if (l !== d || c !== f) {
                var p = Math.sqrt(Math.pow(d - l, 2) + Math.pow(f - c, 2)),
                  g = n.graphToViewport({
                    x: l,
                    y: c
                  }),
                  v = g.x,
                  m = g.y,
                  y = n.graphToViewport({
                    x: d,
                    y: f
                  }),
                  b = y.x,
                  _ = y.y,
                  x = Math.sqrt(Math.pow(b - v, 2) + Math.pow(_ - m, 2));
                return u = p / x, !0;
              }
            }), !u) return null;
            var d = this.graph.filterEdges(function (t, e, r, i, a, h) {
              return !(o[t].hidden || s[r].hidden || s[i].hidden) && (!!(0, y.doEdgeCollideWithPoint)(l, c, a.x, a.y, h.x, h.y, o[t].size * u / n.cameraSizeRatio) || void 0);
            });
            if (0 === d.length) return null;
            var f = d[d.length - 1],
              p = -1 / 0;
            try {
              for (var g = a(d), v = g.next(); !v.done; v = g.next()) {
                var m = v.value,
                  b = this.graph.getEdgeAttribute(m, "zIndex");
                b >= p && (f = m, p = b);
              }
            } catch (t) {
              r = {
                error: t
              };
            } finally {
              try {
                v && !v.done && (i = g["return"]) && i.call(g);
              } finally {
                if (r) throw r.error;
              }
            }
            return f;
          }, e.prototype.process = function (t) {
            var e = this;
            void 0 === t && (t = !1);
            var r = this.graph,
              i = this.settings,
              n = this.getDimensions(),
              o = [1 / 0, -1 / 0],
              a = [1 / 0, -1 / 0];
            this.quadtree.clear(), this.labelGrid.resizeAndClear(n, i.labelGridCellSize), this.highlightedNodes = new Set(), this.nodeExtent = (0, f.graphExtent)(r), this.nodesWithForcedLabels = [], this.edgesWithForcedLabels = [];
            var s = new l["default"](),
              h = (0, f.matrixFromCamera)(s.getState(), this.getDimensions(), this.getGraphDimensions(), this.getSetting("stagePadding") || 0);
            this.normalizationFunction = (0, f.createNormalizationFunction)(this.customBBox || this.nodeExtent);
            for (var c = {}, u = r.nodes(), d = 0, p = u.length; d < p; d++) {
              var g = u[d],
                v = Object.assign({}, r.getNodeAttributes(g));
              i.nodeReducer && (v = i.nodeReducer(g, v)), c[(y = b(this.settings, g, v)).type] = (c[y.type] || 0) + 1, this.nodeDataCache[g] = y, this.normalizationFunction.applyTo(y), y.forceLabel && this.nodesWithForcedLabels.push(g), this.settings.zIndex && (y.zIndex < o[0] && (o[0] = y.zIndex), y.zIndex > o[1] && (o[1] = y.zIndex));
            }
            for (var m in this.nodePrograms) {
              if (!this.nodePrograms.hasOwnProperty(m)) throw new Error('Sigma: could not find a suitable program for node type "'.concat(m, '"!'));
              t || this.nodePrograms[m].allocate(c[m] || 0), c[m] = 0;
            }
            for (this.settings.zIndex && o[0] !== o[1] && (u = (0, f.zIndexOrdering)(o, function (t) {
              return e.nodeDataCache[t].zIndex;
            }, u)), d = 0, p = u.length; d < p; d++) {
              g = u[d];
              var y = this.nodeDataCache[g];
              this.quadtree.add(g, y.x, 1 - y.y, y.size / this.width), "string" != typeof y.label || y.hidden || this.labelGrid.add(g, y.size, this.framedGraphToViewport(y, {
                matrix: h
              }));
              var x = this.nodePrograms[y.type];
              if (!x) throw new Error('Sigma: could not find a suitable program for node type "'.concat(y.type, '"!'));
              x.process(y, y.hidden, c[y.type]++), y.highlighted && !y.hidden && this.highlightedNodes.add(g);
            }
            this.labelGrid.organize();
            var w = {},
              E = r.edges();
            for (d = 0, p = E.length; d < p; d++) {
              var L = E[d];
              v = Object.assign({}, r.getEdgeAttributes(L)), i.edgeReducer && (v = i.edgeReducer(L, v)), w[(y = _(this.settings, 0, v)).type] = (w[y.type] || 0) + 1, this.edgeDataCache[L] = y, y.forceLabel && !y.hidden && this.edgesWithForcedLabels.push(L), this.settings.zIndex && (y.zIndex < a[0] && (a[0] = y.zIndex), y.zIndex > a[1] && (a[1] = y.zIndex));
            }
            for (var m in this.edgePrograms) {
              if (!this.edgePrograms.hasOwnProperty(m)) throw new Error('Sigma: could not find a suitable program for edge type "'.concat(m, '"!'));
              t || this.edgePrograms[m].allocate(w[m] || 0), w[m] = 0;
            }
            for (this.settings.zIndex && a[0] !== a[1] && (E = (0, f.zIndexOrdering)(a, function (t) {
              return e.edgeDataCache[t].zIndex;
            }, E)), d = 0, p = E.length; d < p; d++) {
              L = E[d], y = this.edgeDataCache[L];
              var F = r.extremities(L),
                C = this.nodeDataCache[F[0]],
                A = this.nodeDataCache[F[1]],
                T = y.hidden || C.hidden || A.hidden;
              this.edgePrograms[y.type].process(C, A, y, T, w[y.type]++);
            }
            for (var m in this.edgePrograms) {
              var P = this.edgePrograms[m];
              t || "function" != typeof P.computeIndices || P.computeIndices();
            }
            return this;
          }, e.prototype.handleSettingsUpdate = function () {
            return this.camera.minRatio = this.settings.minCameraRatio, this.camera.maxRatio = this.settings.maxCameraRatio, this.camera.setState(this.camera.validateState(this.camera.getState())), this;
          }, e.prototype._refresh = function () {
            return this.needToProcess ? this.process() : this.needToSoftProcess && this.process(!0), this.needToProcess = !1, this.needToSoftProcess = !1, this.render(), this;
          }, e.prototype._scheduleRefresh = function () {
            var t = this;
            return this.renderFrame || (this.renderFrame = (0, f.requestFrame)(function () {
              t._refresh(), t.renderFrame = null;
            })), this;
          }, e.prototype.renderLabels = function () {
            if (!this.settings.renderLabels) return this;
            var t = this.camera.getState(),
              e = this.labelGrid.getLabelsToDisplay(t.ratio, this.settings.labelDensity);
            (0, h["default"])(e, this.nodesWithForcedLabels), this.displayedLabels = new Set();
            for (var r = this.canvasContexts.labels, i = 0, n = e.length; i < n; i++) {
              var a = e[i],
                s = this.nodeDataCache[a];
              if (!this.displayedLabels.has(a) && !s.hidden) {
                var l = this.framedGraphToViewport(s),
                  c = l.x,
                  u = l.y,
                  d = this.scaleSize(s.size);
                !s.forceLabel && d < this.settings.labelRenderedSizeThreshold || c < -150 || c > this.width + 150 || u < -50 || u > this.height + 50 || (this.displayedLabels.add(a), this.settings.labelRenderer(r, o(o({
                  key: a
                }, s), {
                  size: d,
                  x: c,
                  y: u
                }), this.settings));
              }
            }
            return this;
          }, e.prototype.renderEdgeLabels = function () {
            if (!this.settings.renderEdgeLabels) return this;
            var t = this.canvasContexts.edgeLabels;
            t.clearRect(0, 0, this.width, this.height);
            for (var e = (0, p.edgeLabelsToDisplayFromNodes)({
                graph: this.graph,
                hoveredNode: this.hoveredNode,
                displayedNodeLabels: this.displayedLabels,
                highlightedNodes: this.highlightedNodes
              }).concat(this.edgesWithForcedLabels), r = new Set(), i = 0, n = e.length; i < n; i++) {
              var a = e[i],
                s = this.graph.extremities(a),
                h = this.nodeDataCache[s[0]],
                l = this.nodeDataCache[s[1]],
                c = this.edgeDataCache[a];
              r.has(a) || c.hidden || h.hidden || l.hidden || (this.settings.edgeLabelRenderer(t, o(o({
                key: a
              }, c), {
                size: this.scaleSize(c.size)
              }), o(o(o({
                key: s[0]
              }, h), this.framedGraphToViewport(h)), {
                size: this.scaleSize(h.size)
              }), o(o(o({
                key: s[1]
              }, l), this.framedGraphToViewport(l)), {
                size: this.scaleSize(l.size)
              }), this.settings), r.add(a));
            }
            return this;
          }, e.prototype.renderHighlightedNodes = function () {
            var t = this,
              e = this.canvasContexts.hovers;
            e.clearRect(0, 0, this.width, this.height);
            var r = [];
            this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden && r.push(this.hoveredNode), this.highlightedNodes.forEach(function (e) {
              e !== t.hoveredNode && r.push(e);
            }), r.forEach(function (r) {
              return function (r) {
                var i = t.nodeDataCache[r],
                  n = t.framedGraphToViewport(i),
                  a = n.x,
                  s = n.y,
                  h = t.scaleSize(i.size);
                t.settings.hoverRenderer(e, o(o({
                  key: r
                }, i), {
                  size: h,
                  x: a,
                  y: s
                }), t.settings);
              }(r);
            });
            var i = {};
            for (var n in r.forEach(function (e) {
              var r = t.nodeDataCache[e].type;
              i[r] = (i[r] || 0) + 1;
            }), this.nodeHoverPrograms) this.nodeHoverPrograms[n].allocate(i[n] || 0), i[n] = 0;
            for (var n in r.forEach(function (e) {
              var r = t.nodeDataCache[e];
              t.nodeHoverPrograms[r.type].process(r, r.hidden, i[r.type]++);
            }), this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT), this.nodeHoverPrograms) {
              var a = this.nodeHoverPrograms[n];
              a.bind(), a.bufferData(), a.render({
                matrix: this.matrix,
                width: this.width,
                height: this.height,
                ratio: this.camera.ratio,
                correctionRatio: this.correctionRatio / this.camera.ratio,
                scalingRatio: this.pixelRatio
              });
            }
          }, e.prototype.scheduleHighlightedNodesRender = function () {
            var t = this;
            this.renderHighlightedNodesFrame || this.renderFrame || (this.renderHighlightedNodesFrame = (0, f.requestFrame)(function () {
              t.renderHighlightedNodesFrame = null, t.renderHighlightedNodes(), t.renderEdgeLabels();
            }));
          }, e.prototype.render = function () {
            var t = this;
            this.emit("beforeRender");
            var e = function e() {
              return t.emit("afterRender"), t;
            };
            if (this.renderFrame && ((0, f.cancelFrame)(this.renderFrame), this.renderFrame = null, this.needToProcess = !1, this.needToSoftProcess = !1), this.resize(), this.clear(), this.updateCachedValues(), !this.graph.order) return e();
            var r = this.mouseCaptor,
              i = this.camera.isAnimated() || r.isMoving || r.draggedEvents || r.currentWheelDirection,
              n = this.camera.getState(),
              o = this.getDimensions(),
              a = this.getGraphDimensions(),
              s = this.getSetting("stagePadding") || 0;
            for (var h in this.matrix = (0, f.matrixFromCamera)(n, o, a, s), this.invMatrix = (0, f.matrixFromCamera)(n, o, a, s, !0), this.correctionRatio = (0, f.getMatrixImpact)(this.matrix, n, o), this.nodePrograms) (l = this.nodePrograms[h]).bind(), l.bufferData(), l.render({
              matrix: this.matrix,
              width: this.width,
              height: this.height,
              ratio: n.ratio,
              correctionRatio: this.correctionRatio / n.ratio,
              scalingRatio: this.pixelRatio
            });
            if (!this.settings.hideEdgesOnMove || !i) for (var h in this.edgePrograms) {
              var l;
              (l = this.edgePrograms[h]).bind(), l.bufferData(), l.render({
                matrix: this.matrix,
                width: this.width,
                height: this.height,
                ratio: n.ratio,
                correctionRatio: this.correctionRatio / n.ratio,
                scalingRatio: this.pixelRatio
              });
            }
            return this.settings.hideLabelsOnMove && i || (this.renderLabels(), this.renderEdgeLabels(), this.renderHighlightedNodes()), e();
          }, e.prototype.updateCachedValues = function () {
            var t = this.camera.getState().ratio;
            this.cameraSizeRatio = Math.sqrt(t);
          }, e.prototype.getCamera = function () {
            return this.camera;
          }, e.prototype.getContainer = function () {
            return this.container;
          }, e.prototype.getGraph = function () {
            return this.graph;
          }, e.prototype.setGraph = function (t) {
            t !== this.graph && (this.unbindGraphHandlers(), this.nodeDataCache = {}, this.edgeDataCache = {}, this.displayedLabels.clear(), this.highlightedNodes.clear(), this.hoveredNode = null, this.hoveredEdge = null, this.nodesWithForcedLabels.length = 0, this.edgesWithForcedLabels.length = 0, null !== this.checkEdgesEventsFrame && ((0, f.cancelFrame)(this.checkEdgesEventsFrame), this.checkEdgesEventsFrame = null), this.graph = t, this.bindGraphHandlers(), this.process(), this.render());
          }, e.prototype.getMouseCaptor = function () {
            return this.mouseCaptor;
          }, e.prototype.getTouchCaptor = function () {
            return this.touchCaptor;
          }, e.prototype.getDimensions = function () {
            return {
              width: this.width,
              height: this.height
            };
          }, e.prototype.getGraphDimensions = function () {
            var t = this.customBBox || this.nodeExtent;
            return {
              width: t.x[1] - t.x[0] || 1,
              height: t.y[1] - t.y[0] || 1
            };
          }, e.prototype.getNodeDisplayData = function (t) {
            var e = this.nodeDataCache[t];
            return e ? Object.assign({}, e) : void 0;
          }, e.prototype.getEdgeDisplayData = function (t) {
            var e = this.edgeDataCache[t];
            return e ? Object.assign({}, e) : void 0;
          }, e.prototype.getSettings = function () {
            return o({}, this.settings);
          }, e.prototype.getSetting = function (t) {
            return this.settings[t];
          }, e.prototype.setSetting = function (t, e) {
            return this.settings[t] = e, (0, g.validateSettings)(this.settings), this.handleSettingsUpdate(), this.needToProcess = !0, this._scheduleRefresh(), this;
          }, e.prototype.updateSetting = function (t, e) {
            return this.settings[t] = e(this.settings[t]), (0, g.validateSettings)(this.settings), this.handleSettingsUpdate(), this.needToProcess = !0, this._scheduleRefresh(), this;
          }, e.prototype.resize = function () {
            var t = this.width,
              e = this.height;
            if (this.width = this.container.offsetWidth, this.height = this.container.offsetHeight, this.pixelRatio = (0, f.getPixelRatio)(), 0 === this.width) {
              if (!this.settings.allowInvalidContainer) throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
              this.width = 1;
            }
            if (0 === this.height) {
              if (!this.settings.allowInvalidContainer) throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
              this.height = 1;
            }
            if (t === this.width && e === this.height) return this;
            for (var r in this.emit("resize"), this.elements) {
              var i = this.elements[r];
              i.style.width = this.width + "px", i.style.height = this.height + "px";
            }
            for (var r in this.canvasContexts) this.elements[r].setAttribute("width", this.width * this.pixelRatio + "px"), this.elements[r].setAttribute("height", this.height * this.pixelRatio + "px"), 1 !== this.pixelRatio && this.canvasContexts[r].scale(this.pixelRatio, this.pixelRatio);
            for (var r in this.webGLContexts) this.elements[r].setAttribute("width", this.width * this.pixelRatio + "px"), this.elements[r].setAttribute("height", this.height * this.pixelRatio + "px"), this.webGLContexts[r].viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);
            return this;
          }, e.prototype.clear = function () {
            return this.webGLContexts.nodes.clear(this.webGLContexts.nodes.COLOR_BUFFER_BIT), this.webGLContexts.edges.clear(this.webGLContexts.edges.COLOR_BUFFER_BIT), this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT), this.canvasContexts.labels.clearRect(0, 0, this.width, this.height), this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height), this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height), this;
          }, e.prototype.refresh = function () {
            return this.needToProcess = !0, this._refresh(), this;
          }, e.prototype.scheduleRefresh = function () {
            return this.needToProcess = !0, this._scheduleRefresh(), this;
          }, e.prototype.getViewportZoomedState = function (t, e) {
            var r = this.camera.getState(),
              i = r.ratio,
              n = r.angle,
              o = r.x,
              a = r.y,
              s = e / i,
              h = {
                x: this.width / 2,
                y: this.height / 2
              },
              l = this.viewportToFramedGraph(t),
              c = this.viewportToFramedGraph(h);
            return {
              angle: n,
              x: (l.x - c.x) * (1 - s) + o,
              y: (l.y - c.y) * (1 - s) + a,
              ratio: e
            };
          }, e.prototype.viewRectangle = function () {
            var t = 0 * this.width / 8,
              e = 0 * this.height / 8,
              r = this.viewportToFramedGraph({
                x: 0 - t,
                y: 0 - e
              }),
              i = this.viewportToFramedGraph({
                x: this.width + t,
                y: 0 - e
              }),
              n = this.viewportToFramedGraph({
                x: 0,
                y: this.height + e
              });
            return {
              x1: r.x,
              y1: r.y,
              x2: i.x,
              y2: i.y,
              height: i.y - n.y
            };
          }, e.prototype.framedGraphToViewport = function (t, e) {
            void 0 === e && (e = {});
            var r = !!e.cameraState || !!e.viewportDimensions || !!e.graphDimensions,
              i = e.matrix ? e.matrix : r ? (0, f.matrixFromCamera)(e.cameraState || this.camera.getState(), e.viewportDimensions || this.getDimensions(), e.graphDimensions || this.getGraphDimensions(), e.padding || this.getSetting("stagePadding") || 0) : this.matrix,
              n = (0, m.multiplyVec2)(i, t);
            return {
              x: (1 + n.x) * this.width / 2,
              y: (1 - n.y) * this.height / 2
            };
          }, e.prototype.viewportToFramedGraph = function (t, e) {
            void 0 === e && (e = {});
            var r = !!e.cameraState || !!e.viewportDimensions || !e.graphDimensions,
              i = e.matrix ? e.matrix : r ? (0, f.matrixFromCamera)(e.cameraState || this.camera.getState(), e.viewportDimensions || this.getDimensions(), e.graphDimensions || this.getGraphDimensions(), e.padding || this.getSetting("stagePadding") || 0, !0) : this.invMatrix,
              n = (0, m.multiplyVec2)(i, {
                x: t.x / this.width * 2 - 1,
                y: 1 - t.y / this.height * 2
              });
            return isNaN(n.x) && (n.x = 0), isNaN(n.y) && (n.y = 0), n;
          }, e.prototype.viewportToGraph = function (t, e) {
            return void 0 === e && (e = {}), this.normalizationFunction.inverse(this.viewportToFramedGraph(t, e));
          }, e.prototype.graphToViewport = function (t, e) {
            return void 0 === e && (e = {}), this.framedGraphToViewport(this.normalizationFunction(t), e);
          }, e.prototype.getBBox = function () {
            return (0, f.graphExtent)(this.graph);
          }, e.prototype.getCustomBBox = function () {
            return this.customBBox;
          }, e.prototype.setCustomBBox = function (t) {
            return this.customBBox = t, this._scheduleRefresh(), this;
          }, e.prototype.kill = function () {
            this.emit("kill"), this.removeAllListeners(), this.camera.removeListener("updated", this.activeListeners.camera), window.removeEventListener("resize", this.activeListeners.handleResize), this.mouseCaptor.kill(), this.touchCaptor.kill(), this.unbindGraphHandlers(), this.quadtree = new u["default"](), this.nodeDataCache = {}, this.edgeDataCache = {}, this.nodesWithForcedLabels = [], this.edgesWithForcedLabels = [], this.highlightedNodes.clear(), this.renderFrame && ((0, f.cancelFrame)(this.renderFrame), this.renderFrame = null), this.renderHighlightedNodesFrame && ((0, f.cancelFrame)(this.renderHighlightedNodesFrame), this.renderHighlightedNodesFrame = null);
            for (var t = this.container; t.firstChild;) t.removeChild(t.firstChild);
          }, e.prototype.scaleSize = function (t) {
            return t / this.cameraSizeRatio;
          }, e.prototype.getCanvases = function () {
            return o({}, this.elements);
          }, e;
        }(d.TypedEventEmitter);
        e["default"] = x;
      },
      699: function _(t, e, r) {
        "use strict";

        var _i13,
          n = this && this.__extends || (_i13 = function i(t, e) {
            return _i13 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, e) {
              t.__proto__ = e;
            } || function (t, e) {
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }, _i13(t, e);
          }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
              this.constructor = t;
            }
            _i13(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
          });
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.TypedEventEmitter = void 0;
        var o = function (t) {
          function e() {
            var e = t.call(this) || this;
            return e.rawEmitter = e, e;
          }
          return n(e, t), e;
        }(r(187).EventEmitter);
        e.TypedEventEmitter = o;
      },
      751: function _(t, e, r) {
        "use strict";

        var i = this && this.__importDefault || function (t) {
          return t && t.__esModule ? t : {
            "default": t
          };
        };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.animateNodes = e.ANIMATE_DEFAULTS = void 0;
        var n = r(928),
          o = i(r(358));
        e.ANIMATE_DEFAULTS = {
          easing: "quadraticInOut",
          duration: 150
        }, e.animateNodes = function (t, r, i, a) {
          var s = Object.assign({}, e.ANIMATE_DEFAULTS, i),
            h = "function" == typeof s.easing ? s.easing : o["default"][s.easing],
            l = Date.now(),
            c = {};
          for (var u in r) {
            var d = r[u];
            for (var f in c[u] = {}, d) c[u][f] = t.getNodeAttribute(u, f);
          }
          var p = null,
            g = function g() {
              p = null;
              var e = (Date.now() - l) / s.duration;
              if (e >= 1) {
                for (var i in r) {
                  var o = r[i];
                  for (var u in o) t.setNodeAttribute(i, u, o[u]);
                }
                "function" == typeof a && a();
              } else {
                for (var i in e = h(e), r) {
                  o = r[i];
                  var d = c[i];
                  for (var u in o) t.setNodeAttribute(i, u, o[u] * e + d[u] * (1 - e));
                }
                p = (0, n.requestFrame)(g);
              }
            };
          return g(), function () {
            p && (0, n.cancelFrame)(p);
          };
        };
      },
      634: function _(t, e) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.HTML_COLORS = void 0, e.HTML_COLORS = {
          black: "#000000",
          silver: "#C0C0C0",
          gray: "#808080",
          grey: "#808080",
          white: "#FFFFFF",
          maroon: "#800000",
          red: "#FF0000",
          purple: "#800080",
          fuchsia: "#FF00FF",
          green: "#008000",
          lime: "#00FF00",
          olive: "#808000",
          yellow: "#FFFF00",
          navy: "#000080",
          blue: "#0000FF",
          teal: "#008080",
          aqua: "#00FFFF",
          darkblue: "#00008B",
          mediumblue: "#0000CD",
          darkgreen: "#006400",
          darkcyan: "#008B8B",
          deepskyblue: "#00BFFF",
          darkturquoise: "#00CED1",
          mediumspringgreen: "#00FA9A",
          springgreen: "#00FF7F",
          cyan: "#00FFFF",
          midnightblue: "#191970",
          dodgerblue: "#1E90FF",
          lightseagreen: "#20B2AA",
          forestgreen: "#228B22",
          seagreen: "#2E8B57",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          limegreen: "#32CD32",
          mediumseagreen: "#3CB371",
          turquoise: "#40E0D0",
          royalblue: "#4169E1",
          steelblue: "#4682B4",
          darkslateblue: "#483D8B",
          mediumturquoise: "#48D1CC",
          indigo: "#4B0082",
          darkolivegreen: "#556B2F",
          cadetblue: "#5F9EA0",
          cornflowerblue: "#6495ED",
          rebeccapurple: "#663399",
          mediumaquamarine: "#66CDAA",
          dimgray: "#696969",
          dimgrey: "#696969",
          slateblue: "#6A5ACD",
          olivedrab: "#6B8E23",
          slategray: "#708090",
          slategrey: "#708090",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          mediumslateblue: "#7B68EE",
          lawngreen: "#7CFC00",
          chartreuse: "#7FFF00",
          aquamarine: "#7FFFD4",
          skyblue: "#87CEEB",
          lightskyblue: "#87CEFA",
          blueviolet: "#8A2BE2",
          darkred: "#8B0000",
          darkmagenta: "#8B008B",
          saddlebrown: "#8B4513",
          darkseagreen: "#8FBC8F",
          lightgreen: "#90EE90",
          mediumpurple: "#9370DB",
          darkviolet: "#9400D3",
          palegreen: "#98FB98",
          darkorchid: "#9932CC",
          yellowgreen: "#9ACD32",
          sienna: "#A0522D",
          brown: "#A52A2A",
          darkgray: "#A9A9A9",
          darkgrey: "#A9A9A9",
          lightblue: "#ADD8E6",
          greenyellow: "#ADFF2F",
          paleturquoise: "#AFEEEE",
          lightsteelblue: "#B0C4DE",
          powderblue: "#B0E0E6",
          firebrick: "#B22222",
          darkgoldenrod: "#B8860B",
          mediumorchid: "#BA55D3",
          rosybrown: "#BC8F8F",
          darkkhaki: "#BDB76B",
          mediumvioletred: "#C71585",
          indianred: "#CD5C5C",
          peru: "#CD853F",
          chocolate: "#D2691E",
          tan: "#D2B48C",
          lightgray: "#D3D3D3",
          lightgrey: "#D3D3D3",
          thistle: "#D8BFD8",
          orchid: "#DA70D6",
          goldenrod: "#DAA520",
          palevioletred: "#DB7093",
          crimson: "#DC143C",
          gainsboro: "#DCDCDC",
          plum: "#DDA0DD",
          burlywood: "#DEB887",
          lightcyan: "#E0FFFF",
          lavender: "#E6E6FA",
          darksalmon: "#E9967A",
          violet: "#EE82EE",
          palegoldenrod: "#EEE8AA",
          lightcoral: "#F08080",
          khaki: "#F0E68C",
          aliceblue: "#F0F8FF",
          honeydew: "#F0FFF0",
          azure: "#F0FFFF",
          sandybrown: "#F4A460",
          wheat: "#F5DEB3",
          beige: "#F5F5DC",
          whitesmoke: "#F5F5F5",
          mintcream: "#F5FFFA",
          ghostwhite: "#F8F8FF",
          salmon: "#FA8072",
          antiquewhite: "#FAEBD7",
          linen: "#FAF0E6",
          lightgoldenrodyellow: "#FAFAD2",
          oldlace: "#FDF5E6",
          magenta: "#FF00FF",
          deeppink: "#FF1493",
          orangered: "#FF4500",
          tomato: "#FF6347",
          hotpink: "#FF69B4",
          coral: "#FF7F50",
          darkorange: "#FF8C00",
          lightsalmon: "#FFA07A",
          orange: "#FFA500",
          lightpink: "#FFB6C1",
          pink: "#FFC0CB",
          gold: "#FFD700",
          peachpuff: "#FFDAB9",
          navajowhite: "#FFDEAD",
          moccasin: "#FFE4B5",
          bisque: "#FFE4C4",
          mistyrose: "#FFE4E1",
          blanchedalmond: "#FFEBCD",
          papayawhip: "#FFEFD5",
          lavenderblush: "#FFF0F5",
          seashell: "#FFF5EE",
          cornsilk: "#FFF8DC",
          lemonchiffon: "#FFFACD",
          floralwhite: "#FFFAF0",
          snow: "#FFFAFA",
          lightyellow: "#FFFFE0",
          ivory: "#FFFFF0"
        };
      },
      358: function _(t, e) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.cubicInOut = e.cubicOut = e.cubicIn = e.quadraticInOut = e.quadraticOut = e.quadraticIn = e.linear = void 0, e.linear = function (t) {
          return t;
        }, e.quadraticIn = function (t) {
          return t * t;
        }, e.quadraticOut = function (t) {
          return t * (2 - t);
        }, e.quadraticInOut = function (t) {
          return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        }, e.cubicIn = function (t) {
          return t * t * t;
        }, e.cubicOut = function (t) {
          return --t * t * t + 1;
        }, e.cubicInOut = function (t) {
          return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        };
        var r = {
          linear: e.linear,
          quadraticIn: e.quadraticIn,
          quadraticOut: e.quadraticOut,
          quadraticInOut: e.quadraticInOut,
          cubicIn: e.cubicIn,
          cubicOut: e.cubicOut,
          cubicInOut: e.cubicInOut
        };
        e["default"] = r;
      },
      628: function _(t, e) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.doEdgeCollideWithPoint = e.isPixelColored = void 0, e.isPixelColored = function (t, e, r) {
          var i = new Uint8Array(4);
          return t.readPixels(e, t.drawingBufferHeight - r, 1, 1, t.RGBA, t.UNSIGNED_BYTE, i), i[3] > 0;
        }, e.doEdgeCollideWithPoint = function (t, e, r, i, n, o, a) {
          return !(t < r - a && t < n - a || e < i - a && e < o - a || t > r + a && t > n + a || e > i + a && e > o + a || !(Math.abs((n - r) * (i - e) - (r - t) * (o - i)) / Math.sqrt(Math.pow(n - r, 2) + Math.pow(o - i, 2)) < a / 2));
        };
      },
      928: function _(t, e, r) {
        "use strict";

        var i = this && this.__read || function (t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var i,
              n,
              o = r.call(t),
              a = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value);
            } catch (t) {
              n = {
                error: t
              };
            } finally {
              try {
                i && !i.done && (r = o["return"]) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return a;
          },
          n = this && this.__importDefault || function (t) {
            return t && t.__esModule ? t : {
              "default": t
            };
          };
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.validateGraph = e.canUse32BitsIndices = e.extractPixel = e.getMatrixImpact = e.matrixFromCamera = e.getCorrectionRatio = e.floatColor = e.floatArrayColor = e.parseColor = e.zIndexOrdering = e.createNormalizationFunction = e.graphExtent = e.getPixelRatio = e.createElement = e.cancelFrame = e.requestFrame = e.assignDeep = e.assign = e.isPlainObject = void 0;
        var o = n(r(186)),
          a = r(700),
          s = r(634);
        function h(t) {
          return "object" == typeof t && null !== t && t.constructor === Object;
        }
        e.isPlainObject = h, e.assign = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
          t = t || {};
          for (var i = 0, n = e.length; i < n; i++) {
            var o = e[i];
            o && Object.assign(t, o);
          }
          return t;
        }, e.assignDeep = function t(e) {
          for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
          e = e || {};
          for (var n = 0, o = r.length; n < o; n++) {
            var a = r[n];
            if (a) for (var s in a) h(a[s]) ? e[s] = t(e[s], a[s]) : e[s] = a[s];
          }
          return e;
        }, e.requestFrame = "undefined" != typeof requestAnimationFrame ? function (t) {
          return requestAnimationFrame(t);
        } : function (t) {
          return setTimeout(t, 0);
        }, e.cancelFrame = "undefined" != typeof cancelAnimationFrame ? function (t) {
          return cancelAnimationFrame(t);
        } : function (t) {
          return clearTimeout(t);
        }, e.createElement = function (t, e, r) {
          var i = document.createElement(t);
          if (e) for (var n in e) i.style[n] = e[n];
          if (r) for (var n in r) i.setAttribute(n, r[n]);
          return i;
        }, e.getPixelRatio = function () {
          return void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1;
        }, e.graphExtent = function (t) {
          if (!t.order) return {
            x: [0, 1],
            y: [0, 1]
          };
          var e = 1 / 0,
            r = -1 / 0,
            i = 1 / 0,
            n = -1 / 0;
          return t.forEachNode(function (t, o) {
            var a = o.x,
              s = o.y;
            a < e && (e = a), a > r && (r = a), s < i && (i = s), s > n && (n = s);
          }), {
            x: [e, r],
            y: [i, n]
          };
        }, e.createNormalizationFunction = function (t) {
          var e = i(t.x, 2),
            r = e[0],
            n = e[1],
            o = i(t.y, 2),
            a = o[0],
            s = o[1],
            h = Math.max(n - r, s - a),
            l = (n + r) / 2,
            c = (s + a) / 2;
          (0 === h || Math.abs(h) === 1 / 0 || isNaN(h)) && (h = 1), isNaN(l) && (l = 0), isNaN(c) && (c = 0);
          var u = function u(t) {
            return {
              x: .5 + (t.x - l) / h,
              y: .5 + (t.y - c) / h
            };
          };
          return u.applyTo = function (t) {
            t.x = .5 + (t.x - l) / h, t.y = .5 + (t.y - c) / h;
          }, u.inverse = function (t) {
            return {
              x: l + h * (t.x - .5),
              y: c + h * (t.y - .5)
            };
          }, u.ratio = h, u;
        }, e.zIndexOrdering = function (t, e, r) {
          return r.sort(function (t, r) {
            var i = e(t) || 0,
              n = e(r) || 0;
            return i < n ? -1 : i > n ? 1 : 0;
          });
        };
        var l = new Int8Array(4),
          c = new Int32Array(l.buffer, 0, 1),
          u = new Float32Array(l.buffer, 0, 1),
          d = /^\s*rgba?\s*\(/,
          f = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
        function p(t) {
          var e = 0,
            r = 0,
            i = 0,
            n = 1;
          if ("#" === t[0]) 4 === t.length ? (e = parseInt(t.charAt(1) + t.charAt(1), 16), r = parseInt(t.charAt(2) + t.charAt(2), 16), i = parseInt(t.charAt(3) + t.charAt(3), 16)) : (e = parseInt(t.charAt(1) + t.charAt(2), 16), r = parseInt(t.charAt(3) + t.charAt(4), 16), i = parseInt(t.charAt(5) + t.charAt(6), 16)), 9 === t.length && (n = parseInt(t.charAt(7) + t.charAt(8), 16) / 255);else if (d.test(t)) {
            var o = t.match(f);
            o && (e = +o[1], r = +o[2], i = +o[3], o[4] && (n = +o[4]));
          }
          return {
            r: e,
            g: r,
            b: i,
            a: n
          };
        }
        e.parseColor = p;
        var g = {};
        for (var v in s.HTML_COLORS) g[v] = m(s.HTML_COLORS[v]), g[s.HTML_COLORS[v]] = g[v];
        function m(t) {
          if (void 0 !== g[t]) return g[t];
          var e = p(t),
            r = e.r,
            i = e.g,
            n = e.b,
            o = e.a;
          o = 255 * o | 0, c[0] = 4278190079 & (o << 24 | n << 16 | i << 8 | r);
          var a = u[0];
          return g[t] = a, a;
        }
        function y(t, e) {
          var r = t.height / t.width,
            i = e.height / e.width;
          return r < 1 && i > 1 || r > 1 && i < 1 ? 1 : Math.min(Math.max(i, 1 / i), Math.max(1 / r, r));
        }
        e.floatArrayColor = function (t) {
          var e = p(t = s.HTML_COLORS[t] || t),
            r = e.r,
            i = e.g,
            n = e.b,
            o = e.a;
          return new Float32Array([r / 255, i / 255, n / 255, o]);
        }, e.floatColor = m, e.getCorrectionRatio = y, e.matrixFromCamera = function (t, e, r, i, n) {
          var o = t.angle,
            s = t.ratio,
            h = t.x,
            l = t.y,
            c = e.width,
            u = e.height,
            d = (0, a.identity)(),
            f = Math.min(c, u) - 2 * i,
            p = y(e, r);
          return n ? ((0, a.multiply)(d, (0, a.translate)((0, a.identity)(), h, l)), (0, a.multiply)(d, (0, a.scale)((0, a.identity)(), s)), (0, a.multiply)(d, (0, a.rotate)((0, a.identity)(), o)), (0, a.multiply)(d, (0, a.scale)((0, a.identity)(), c / f / 2 / p, u / f / 2 / p))) : ((0, a.multiply)(d, (0, a.scale)((0, a.identity)(), f / c * 2 * p, f / u * 2 * p)), (0, a.multiply)(d, (0, a.rotate)((0, a.identity)(), -o)), (0, a.multiply)(d, (0, a.scale)((0, a.identity)(), 1 / s)), (0, a.multiply)(d, (0, a.translate)((0, a.identity)(), -h, -l))), d;
        }, e.getMatrixImpact = function (t, e, r) {
          var i = (0, a.multiplyVec2)(t, {
              x: Math.cos(e.angle),
              y: Math.sin(e.angle)
            }, 0),
            n = i.x,
            o = i.y;
          return 1 / Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2)) / r.width;
        }, e.extractPixel = function (t, e, r, i) {
          var n = i || new Uint8Array(4);
          return t.readPixels(e, r, 1, 1, t.RGBA, t.UNSIGNED_BYTE, n), n;
        }, e.canUse32BitsIndices = function (t) {
          return "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || !!t.getExtension("OES_element_index_uint");
        }, e.validateGraph = function (t) {
          if (!(0, o["default"])(t)) throw new Error("Sigma: invalid graph instance.");
          t.forEachNode(function (t, e) {
            if (!Number.isFinite(e.x) || !Number.isFinite(e.y)) throw new Error("Sigma: Coordinates of node ".concat(t, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
          });
        };
      },
      700: function _(t, e) {
        "use strict";

        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.multiplyVec2 = e.multiply = e.translate = e.rotate = e.scale = e.identity = void 0, e.identity = function () {
          return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
        }, e.scale = function (t, e, r) {
          return t[0] = e, t[4] = "number" == typeof r ? r : e, t;
        }, e.rotate = function (t, e) {
          var r = Math.sin(e),
            i = Math.cos(e);
          return t[0] = i, t[1] = r, t[3] = -r, t[4] = i, t;
        }, e.translate = function (t, e, r) {
          return t[6] = e, t[7] = r, t;
        }, e.multiply = function (t, e) {
          var r = t[0],
            i = t[1],
            n = t[2],
            o = t[3],
            a = t[4],
            s = t[5],
            h = t[6],
            l = t[7],
            c = t[8],
            u = e[0],
            d = e[1],
            f = e[2],
            p = e[3],
            g = e[4],
            v = e[5],
            m = e[6],
            y = e[7],
            b = e[8];
          return t[0] = u * r + d * o + f * h, t[1] = u * i + d * a + f * l, t[2] = u * n + d * s + f * c, t[3] = p * r + g * o + v * h, t[4] = p * i + g * a + v * l, t[5] = p * n + g * s + v * c, t[6] = m * r + y * o + b * h, t[7] = m * i + y * a + b * l, t[8] = m * n + y * s + b * c, t;
        }, e.multiplyVec2 = function (t, e, r) {
          void 0 === r && (r = 1);
          var i = t[0],
            n = t[1],
            o = t[3],
            a = t[4],
            s = t[6],
            h = t[7],
            l = e.x,
            c = e.y;
          return {
            x: l * i + c * o + s * r,
            y: l * n + c * a + h * r
          };
        };
      }
    },
    e = {};
  function r(i) {
    var n = e[i];
    if (void 0 !== n) return n.exports;
    var o = e[i] = {
      exports: {}
    };
    return t[i].call(o.exports, o, o.exports, r), o.exports;
  }
  r.d = function (t, e) {
    for (var i in e) r.o(e, i) && !r.o(t, i) && Object.defineProperty(t, i, {
      enumerable: !0,
      get: e[i]
    });
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  };
  var i = r(265);
  Sigma = i;
})();

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }
  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      function md5cycle(x, k) {
        var a = x[0],
          b = x[1],
          c = x[2],
          d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }
      function md5blk(s) {
        var md5blks = [],
          i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
      }
      function md5blk_array(a) {
        var md5blks = [],
          i;
        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
      }
      function md51(s) {
        var n = s.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function md51_array(a) {
        var n = a.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;
        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }
      function rhex(n) {
        var s = "",
          j;
        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }
        return s;
      }
      function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }
        return x.join("");
      }
      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;
      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;
            if (val < 0) {
              return Math.max(val + length, 0);
            }
            return Math.min(val, length);
          }
          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
              begin = clamp(from, length),
              end = length,
              num,
              target,
              targetArray,
              sourceArray;
            if (to !== undefined) {
              end = clamp(to, length);
            }
            if (begin > end) {
              return new ArrayBuffer(0);
            }
            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }
      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }
        return str;
      }
      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
          buff = new ArrayBuffer(length),
          arr = new Uint8Array(buff),
          i;
        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }
        return returnUInt8Array ? arr : buff;
      }
      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }
      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }
      function hexToBinaryString(hex) {
        var bytes = [],
          length = hex.length,
          x;
        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
      }
      function SparkMD5() {
        this.reset();
      }
      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };
      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
          i;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
      };
      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
          length = buff.length,
          i,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };
      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };
      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
          tmp,
          lo,
          hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
          md5cycle(this._hash, tail);
          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };
      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };
      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
          ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };
      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
          length = buff.length,
          i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
          length = buff.length,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          i,
          ret;
        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
          ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
      };
      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };
      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };
      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
          ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };
      return SparkMD5;
    });
  });
  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);
    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }
    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;
        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);
        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();
  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');
    if (element) {
      return element.getAttribute("content");
    }
  }
  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }
  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }
    return root.querySelector(selector);
  }
  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
      cancelable = eventInit.cancelable,
      detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};
    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }
    return event;
  }
  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }
  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;
      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");
      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }
      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }
    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};
        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }
        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
          responseType = _xhr.responseType,
          response = _xhr.response;
        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();
  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;
      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
        url = _blob$directUploadDat.url,
        headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";
      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }
      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }
    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
          status = _xhr.status,
          response = _xhr.response;
        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();
  var id = 0;
  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }
    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;
        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }
          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();
  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }
      return object[methodName].apply(object, messages);
    }
  }
  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }
    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;
        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);
            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }
          _this.dispatch("end");
          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;
        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });
        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;
        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();
  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";
  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }
    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;
        var controllers = this.createDirectUploadControllers();
        var startNextController = function startNextController() {
          var controller = controllers.shift();
          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);
                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();
            _this.dispatch("end");
          }
        };
        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();
  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;
  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }
  function didClick(event) {
    var target = event.target;
    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }
  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }
  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }
  function handleFormSubmissionEvent(event) {
    var form = event.target;
    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }
    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;
    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);
        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }
  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");
    if (button) {
      var _button = button,
        disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }
    submitButtonsByForm.delete(form);
  }
  function disable(input) {
    input.disabled = true;
  }
  function enable(input) {
    input.disabled = false;
  }
  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }
  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form:not([data-turbo=true])',
        formInputClickSelector: 'form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;
      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };
      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };
      expando = '_ujsData';
      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };
      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }
        return element[expando][key] = value;
      };
      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;
      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };
      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };
      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();
        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };
      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();
        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;
      if (typeof CustomEvent !== 'function') {
        CustomEvent = function (event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };
        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;
        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);
          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function () {
                return true;
              }
            });
          }
          return result;
        };
      }
      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };
      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };
      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;
          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }
          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };
      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));
          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }
          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });
        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }
        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };
      prepareOptions = function (options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();
        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }
        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }
        options.accept = AcceptHeaders[options.dataType];
        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }
        return options;
      };
      createXHR = function (options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);
        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }
        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }
        xhr.withCredentials = !!options.withCredentials;
        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };
        return xhr;
      };
      processResponse = function (response, type) {
        var parser, script;
        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');
            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }
        return response;
      };
      Rails.href = function (element) {
        return element.href;
      };
      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');
        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;
      toArray = function (e) {
        return Array.prototype.slice.call(e);
      };
      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];
        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }
        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }
          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }
          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });
        if (additionalParam) {
          params.push(additionalParam);
        }
        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };
      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;
      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };
      Rails.confirm = function (message, element) {
        return confirm(message);
      };
      allowAction = function (element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');
        if (!message) {
          return true;
        }
        answer = false;
        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}
          callback = fire(element, 'confirm:complete', [answer]);
        }
        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;
      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;
        if (element.disabled) {
          return stopEverything(e);
        }
      };
      Rails.enableElement = function (e) {
        var element;
        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }
          element = e.target;
        } else {
          element = e;
        }
        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };
      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;
        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };
      disableLinkElement = function (element) {
        var replacement;
        if (getData(element, 'ujs:disabled')) {
          return;
        }
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }
        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };
      enableLinkElement = function (element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }
        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };
      disableFormElements = function (form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };
      disableFormElement = function (element) {
        var replacement;
        if (getData(element, 'ujs:disabled')) {
          return;
        }
        replacement = element.getAttribute('data-disable-with');
        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }
        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };
      enableFormElements = function (form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };
      enableFormElement = function (element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');
        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }
          setData(element, 'ujs:enable-with', null);
        }
        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };
      isXhrRedirect = function (event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;
      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');
        if (!method) {
          return;
        }
        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";
        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }
        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
        fire,
        getData,
        isCrossDomain,
        isRemote,
        matches,
        serializeElement,
        setData,
        stopEverything,
        slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;
      isRemote = function (element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };
      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;
        if (!isRemote(element)) {
          return true;
        }
        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }
        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';
        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;
          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }
          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);
            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }
          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }
        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function (xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };
      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;
        if (!form) {
          return;
        }
        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }
        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };
      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;
        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;
      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }
        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }
      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }
        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };
      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);
  if ( true && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);

/***/ }),

/***/ "./node_modules/@yomguithereal/helpers/extend.js":
/*!*******************************************************!*\
  !*** ./node_modules/@yomguithereal/helpers/extend.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Extend function
 * ================
 *
 * Function used to push a bunch of values into an array at once.
 *
 * Its strategy is to mutate target array's length then setting the new indices
 * to be the values to add.
 *
 * A benchmark proved that it is faster than the following strategies:
 *   1) `array.push.apply(array, values)`.
 *   2) A loop of pushes.
 *   3) `array = array.concat(values)`, obviously.
 *
 * Intuitively, this is correct because when adding a lot of elements, the
 * chosen strategies does not need to handle the `arguments` object to
 * execute #.apply's variadicity and because the array know its final length
 * at the beginning, avoiding potential multiple reallocations of the underlying
 * contiguous array. Some engines may be able to optimize the loop of push
 * operations but empirically they don't seem to do so.
 */

/**
 * Extends the target array with the given values.
 *
 * @param  {array} array  - Target array.
 * @param  {array} values - Values to add.
 */
module.exports = function extend(array, values) {
  var l2 = values.length;
  if (l2 === 0) return;
  var l1 = array.length;
  array.length += l2;
  for (var i = 0; i < l2; i++) array[l1 + i] = values[i];
};

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}
function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};
function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});
EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};
function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;
  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }
  return true;
};
function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }
  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }
  return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};
function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}
function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;
  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;
    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }
    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }
  return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }
  listeners = events[type];
  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }
  return this;
};
function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};
EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;
  if (events !== undefined) {
    var evlistener = events[type];
    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }
  return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i) copy[i] = arr[i];
  return copy;
}
function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];
  list.pop();
}
function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}
function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }
    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    }
    ;
    eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

/***/ }),

/***/ "./node_modules/graphology-utils/is-graph.js":
/*!***************************************************!*\
  !*** ./node_modules/graphology-utils/is-graph.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Graphology isGraph
 * ===================
 *
 * Very simple function aiming at ensuring the given variable is a
 * graphology instance.
 */

/**
 * Checking the value is a graphology instance.
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */
module.exports = function isGraph(value) {
  return value !== null && typeof value === 'object' && typeof value.addUndirectedEdgeWithKey === 'function' && typeof value.dropNode === 'function' && typeof value.multi === 'boolean';
};

/***/ }),

/***/ "./node_modules/sigma/core/camera.js":
/*!*******************************************!*\
  !*** ./node_modules/sigma/core/camera.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Sigma.js Camera Class
 * ======================
 *
 * Class designed to store camera information & used to update it.
 * @module
 */
var animate_1 = __webpack_require__(/*! ../utils/animate */ "./node_modules/sigma/utils/animate.js");
var easings_1 = __importDefault(__webpack_require__(/*! ../utils/easings */ "./node_modules/sigma/utils/easings.js"));
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/sigma/utils/index.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/sigma/types.js");
/**
 * Defaults.
 */
var DEFAULT_ZOOMING_RATIO = 1.5;
/**
 * Camera class
 *
 * @constructor
 */
var Camera = /** @class */function (_super) {
  __extends(Camera, _super);
  function Camera() {
    var _this = _super.call(this) || this;
    _this.x = 0.5;
    _this.y = 0.5;
    _this.angle = 0;
    _this.ratio = 1;
    _this.minRatio = null;
    _this.maxRatio = null;
    _this.nextFrame = null;
    _this.previousState = null;
    _this.enabled = true;
    // State
    _this.previousState = _this.getState();
    return _this;
  }
  /**
   * Static method used to create a Camera object with a given state.
   *
   * @param state
   * @return {Camera}
   */
  Camera.from = function (state) {
    var camera = new Camera();
    return camera.setState(state);
  };
  /**
   * Method used to enable the camera.
   *
   * @return {Camera}
   */
  Camera.prototype.enable = function () {
    this.enabled = true;
    return this;
  };
  /**
   * Method used to disable the camera.
   *
   * @return {Camera}
   */
  Camera.prototype.disable = function () {
    this.enabled = false;
    return this;
  };
  /**
   * Method used to retrieve the camera's current state.
   *
   * @return {object}
   */
  Camera.prototype.getState = function () {
    return {
      x: this.x,
      y: this.y,
      angle: this.angle,
      ratio: this.ratio
    };
  };
  /**
   * Method used to check whether the camera has the given state.
   *
   * @return {object}
   */
  Camera.prototype.hasState = function (state) {
    return this.x === state.x && this.y === state.y && this.ratio === state.ratio && this.angle === state.angle;
  };
  /**
   * Method used to retrieve the camera's previous state.
   *
   * @return {object}
   */
  Camera.prototype.getPreviousState = function () {
    var state = this.previousState;
    if (!state) return null;
    return {
      x: state.x,
      y: state.y,
      angle: state.angle,
      ratio: state.ratio
    };
  };
  /**
   * Method used to check minRatio and maxRatio values.
   *
   * @param ratio
   * @return {number}
   */
  Camera.prototype.getBoundedRatio = function (ratio) {
    var r = ratio;
    if (typeof this.minRatio === "number") r = Math.max(r, this.minRatio);
    if (typeof this.maxRatio === "number") r = Math.min(r, this.maxRatio);
    return r;
  };
  /**
   * Method used to check various things to return a legit state candidate.
   *
   * @param state
   * @return {object}
   */
  Camera.prototype.validateState = function (state) {
    var validatedState = {};
    if (typeof state.x === "number") validatedState.x = state.x;
    if (typeof state.y === "number") validatedState.y = state.y;
    if (typeof state.angle === "number") validatedState.angle = state.angle;
    if (typeof state.ratio === "number") validatedState.ratio = this.getBoundedRatio(state.ratio);
    return validatedState;
  };
  /**
   * Method used to check whether the camera is currently being animated.
   *
   * @return {boolean}
   */
  Camera.prototype.isAnimated = function () {
    return !!this.nextFrame;
  };
  /**
   * Method used to set the camera's state.
   *
   * @param  {object} state - New state.
   * @return {Camera}
   */
  Camera.prototype.setState = function (state) {
    if (!this.enabled) return this;
    // TODO: update by function
    // Keeping track of last state
    this.previousState = this.getState();
    var validState = this.validateState(state);
    if (typeof validState.x === "number") this.x = validState.x;
    if (typeof validState.y === "number") this.y = validState.y;
    if (typeof validState.angle === "number") this.angle = validState.angle;
    if (typeof validState.ratio === "number") this.ratio = validState.ratio;
    // Emitting
    if (!this.hasState(this.previousState)) this.emit("updated", this.getState());
    return this;
  };
  /**
   * Method used to update the camera's state using a function.
   *
   * @param  {function} updater - Updated function taking current state and
   *                              returning next state.
   * @return {Camera}
   */
  Camera.prototype.updateState = function (updater) {
    this.setState(updater(this.getState()));
    return this;
  };
  /**
   * Method used to animate the camera.
   *
   * @param  {object}                    state      - State to reach eventually.
   * @param  {object}                    opts       - Options:
   * @param  {number}                      duration - Duration of the animation.
   * @param  {string | number => number}   easing   - Easing function or name of an existing one
   * @param  {function}                  callback   - Callback
   */
  Camera.prototype.animate = function (state, opts, callback) {
    var _this = this;
    if (!this.enabled) return;
    var options = Object.assign({}, animate_1.ANIMATE_DEFAULTS, opts);
    var validState = this.validateState(state);
    var easing = typeof options.easing === "function" ? options.easing : easings_1.default[options.easing];
    // State
    var start = Date.now(),
      initialState = this.getState();
    // Function performing the animation
    var fn = function () {
      var t = (Date.now() - start) / options.duration;
      // The animation is over:
      if (t >= 1) {
        _this.nextFrame = null;
        _this.setState(validState);
        if (_this.animationCallback) {
          _this.animationCallback.call(null);
          _this.animationCallback = undefined;
        }
        return;
      }
      var coefficient = easing(t);
      var newState = {};
      if (typeof validState.x === "number") newState.x = initialState.x + (validState.x - initialState.x) * coefficient;
      if (typeof validState.y === "number") newState.y = initialState.y + (validState.y - initialState.y) * coefficient;
      if (typeof validState.angle === "number") newState.angle = initialState.angle + (validState.angle - initialState.angle) * coefficient;
      if (typeof validState.ratio === "number") newState.ratio = initialState.ratio + (validState.ratio - initialState.ratio) * coefficient;
      _this.setState(newState);
      _this.nextFrame = (0, utils_1.requestFrame)(fn);
    };
    if (this.nextFrame) {
      (0, utils_1.cancelFrame)(this.nextFrame);
      if (this.animationCallback) this.animationCallback.call(null);
      this.nextFrame = (0, utils_1.requestFrame)(fn);
    } else {
      fn();
    }
    this.animationCallback = callback;
  };
  /**
   * Method used to zoom the camera.
   *
   * @param  {number|object} factorOrOptions - Factor or options.
   * @return {function}
   */
  Camera.prototype.animatedZoom = function (factorOrOptions) {
    if (!factorOrOptions) {
      this.animate({
        ratio: this.ratio / DEFAULT_ZOOMING_RATIO
      });
    } else {
      if (typeof factorOrOptions === "number") return this.animate({
        ratio: this.ratio / factorOrOptions
      });else this.animate({
        ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
      }, factorOrOptions);
    }
  };
  /**
   * Method used to unzoom the camera.
   *
   * @param  {number|object} factorOrOptions - Factor or options.
   */
  Camera.prototype.animatedUnzoom = function (factorOrOptions) {
    if (!factorOrOptions) {
      this.animate({
        ratio: this.ratio * DEFAULT_ZOOMING_RATIO
      });
    } else {
      if (typeof factorOrOptions === "number") return this.animate({
        ratio: this.ratio * factorOrOptions
      });else this.animate({
        ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
      }, factorOrOptions);
    }
  };
  /**
   * Method used to reset the camera.
   *
   * @param  {object} options - Options.
   */
  Camera.prototype.animatedReset = function (options) {
    this.animate({
      x: 0.5,
      y: 0.5,
      ratio: 1,
      angle: 0
    }, options);
  };
  /**
   * Returns a new Camera instance, with the same state as the current camera.
   *
   * @return {Camera}
   */
  Camera.prototype.copy = function () {
    return Camera.from(this.getState());
  };
  return Camera;
}(types_1.TypedEventEmitter);
exports.default = Camera;

/***/ }),

/***/ "./node_modules/sigma/core/captors/captor.js":
/*!***************************************************!*\
  !*** ./node_modules/sigma/core/captors/captor.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWheelDelta = exports.getTouchCoords = exports.getTouchesArray = exports.getWheelCoords = exports.getMouseCoords = exports.getPosition = void 0;
/**
 * Sigma.js Captor Class
 * ======================
 * @module
 */
var types_1 = __webpack_require__(/*! ../../types */ "./node_modules/sigma/types.js");
/**
 * Captor utils functions
 * ======================
 */
/**
 * Extract the local X and Y coordinates from a mouse event or touch object. If
 * a DOM element is given, it uses this element's offset to compute the position
 * (this allows using events that are not bound to the container itself and
 * still have a proper position).
 *
 * @param  {event}       e - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {number}      The local Y value of the mouse.
 */
function getPosition(e, dom) {
  var bbox = dom.getBoundingClientRect();
  return {
    x: e.clientX - bbox.left,
    y: e.clientY - bbox.top
  };
}
exports.getPosition = getPosition;
/**
 * Convert mouse coords to sigma coords.
 *
 * @param  {event}       e   - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getMouseCoords(e, dom) {
  var res = __assign(__assign({}, getPosition(e, dom)), {
    sigmaDefaultPrevented: false,
    preventSigmaDefault: function () {
      res.sigmaDefaultPrevented = true;
    },
    original: e
  });
  return res;
}
exports.getMouseCoords = getMouseCoords;
/**
 * Convert mouse wheel event coords to sigma coords.
 *
 * @param  {event}       e   - A wheel mouse event.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getWheelCoords(e, dom) {
  return __assign(__assign({}, getMouseCoords(e, dom)), {
    delta: getWheelDelta(e)
  });
}
exports.getWheelCoords = getWheelCoords;
var MAX_TOUCHES = 2;
function getTouchesArray(touches) {
  var arr = [];
  for (var i = 0, l = Math.min(touches.length, MAX_TOUCHES); i < l; i++) arr.push(touches[i]);
  return arr;
}
exports.getTouchesArray = getTouchesArray;
/**
 * Convert touch coords to sigma coords.
 *
 * @param  {event}       e   - A touch event.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getTouchCoords(e, dom) {
  return {
    touches: getTouchesArray(e.touches).map(function (touch) {
      return getPosition(touch, dom);
    }),
    original: e
  };
}
exports.getTouchCoords = getTouchCoords;
/**
 * Extract the wheel delta from a mouse event or touch object.
 *
 * @param  {event}  e - A mouse event or touch object.
 * @return {number}     The wheel delta of the mouse.
 */
function getWheelDelta(e) {
  // TODO: check those ratios again to ensure a clean Chrome/Firefox compat
  if (typeof e.deltaY !== "undefined") return e.deltaY * -3 / 360;
  if (typeof e.detail !== "undefined") return e.detail / -9;
  throw new Error("Captor: could not extract delta from event.");
}
exports.getWheelDelta = getWheelDelta;
/**
 * Abstract class representing a captor like the user's mouse or touch controls.
 */
var Captor = /** @class */function (_super) {
  __extends(Captor, _super);
  function Captor(container, renderer) {
    var _this = _super.call(this) || this;
    // Properties
    _this.container = container;
    _this.renderer = renderer;
    return _this;
  }
  return Captor;
}(types_1.TypedEventEmitter);
exports.default = Captor;

/***/ }),

/***/ "./node_modules/sigma/core/captors/mouse.js":
/*!**************************************************!*\
  !*** ./node_modules/sigma/core/captors/mouse.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var captor_1 = __importStar(__webpack_require__(/*! ./captor */ "./node_modules/sigma/core/captors/captor.js"));
/**
 * Constants.
 */
var DRAG_TIMEOUT = 100;
var DRAGGED_EVENTS_TOLERANCE = 3;
var MOUSE_INERTIA_DURATION = 200;
var MOUSE_INERTIA_RATIO = 3;
var MOUSE_ZOOM_DURATION = 250;
var ZOOMING_RATIO = 1.7;
var DOUBLE_CLICK_TIMEOUT = 300;
var DOUBLE_CLICK_ZOOMING_RATIO = 2.2;
var DOUBLE_CLICK_ZOOMING_DURATION = 200;
/**
 * Mouse captor class.
 *
 * @constructor
 */
var MouseCaptor = /** @class */function (_super) {
  __extends(MouseCaptor, _super);
  function MouseCaptor(container, renderer) {
    var _this = _super.call(this, container, renderer) || this;
    // State
    _this.enabled = true;
    _this.draggedEvents = 0;
    _this.downStartTime = null;
    _this.lastMouseX = null;
    _this.lastMouseY = null;
    _this.isMouseDown = false;
    _this.isMoving = false;
    _this.movingTimeout = null;
    _this.startCameraState = null;
    _this.clicks = 0;
    _this.doubleClickTimeout = null;
    _this.currentWheelDirection = 0;
    // Binding methods
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleRightClick = _this.handleRightClick.bind(_this);
    _this.handleDown = _this.handleDown.bind(_this);
    _this.handleUp = _this.handleUp.bind(_this);
    _this.handleMove = _this.handleMove.bind(_this);
    _this.handleWheel = _this.handleWheel.bind(_this);
    _this.handleOut = _this.handleOut.bind(_this);
    // Binding events
    container.addEventListener("click", _this.handleClick, false);
    container.addEventListener("contextmenu", _this.handleRightClick, false);
    container.addEventListener("mousedown", _this.handleDown, false);
    container.addEventListener("wheel", _this.handleWheel, false);
    container.addEventListener("mouseout", _this.handleOut, false);
    document.addEventListener("mousemove", _this.handleMove, false);
    document.addEventListener("mouseup", _this.handleUp, false);
    return _this;
  }
  MouseCaptor.prototype.kill = function () {
    var container = this.container;
    container.removeEventListener("click", this.handleClick);
    container.removeEventListener("contextmenu", this.handleRightClick);
    container.removeEventListener("mousedown", this.handleDown);
    container.removeEventListener("wheel", this.handleWheel);
    container.removeEventListener("mouseout", this.handleOut);
    document.removeEventListener("mousemove", this.handleMove);
    document.removeEventListener("mouseup", this.handleUp);
  };
  MouseCaptor.prototype.handleClick = function (e) {
    var _this = this;
    if (!this.enabled) return;
    this.clicks++;
    if (this.clicks === 2) {
      this.clicks = 0;
      if (typeof this.doubleClickTimeout === "number") {
        clearTimeout(this.doubleClickTimeout);
        this.doubleClickTimeout = null;
      }
      return this.handleDoubleClick(e);
    }
    setTimeout(function () {
      _this.clicks = 0;
      _this.doubleClickTimeout = null;
    }, DOUBLE_CLICK_TIMEOUT);
    // NOTE: this is here to prevent click events on drag
    if (this.draggedEvents < DRAGGED_EVENTS_TOLERANCE) this.emit("click", (0, captor_1.getMouseCoords)(e, this.container));
  };
  MouseCaptor.prototype.handleRightClick = function (e) {
    if (!this.enabled) return;
    this.emit("rightClick", (0, captor_1.getMouseCoords)(e, this.container));
  };
  MouseCaptor.prototype.handleDoubleClick = function (e) {
    if (!this.enabled) return;
    e.preventDefault();
    e.stopPropagation();
    var mouseCoords = (0, captor_1.getMouseCoords)(e, this.container);
    this.emit("doubleClick", mouseCoords);
    if (mouseCoords.sigmaDefaultPrevented) return;
    // default behavior
    var camera = this.renderer.getCamera();
    var newRatio = camera.getBoundedRatio(camera.getState().ratio / DOUBLE_CLICK_ZOOMING_RATIO);
    camera.animate(this.renderer.getViewportZoomedState((0, captor_1.getPosition)(e, this.container), newRatio), {
      easing: "quadraticInOut",
      duration: DOUBLE_CLICK_ZOOMING_DURATION
    });
  };
  MouseCaptor.prototype.handleDown = function (e) {
    if (!this.enabled) return;
    // We only start dragging on left button
    if (e.button === 0) {
      this.startCameraState = this.renderer.getCamera().getState();
      var _a = (0, captor_1.getPosition)(e, this.container),
        x = _a.x,
        y = _a.y;
      this.lastMouseX = x;
      this.lastMouseY = y;
      this.draggedEvents = 0;
      this.downStartTime = Date.now();
      this.isMouseDown = true;
    }
    this.emit("mousedown", (0, captor_1.getMouseCoords)(e, this.container));
  };
  MouseCaptor.prototype.handleUp = function (e) {
    var _this = this;
    if (!this.enabled || !this.isMouseDown) return;
    var camera = this.renderer.getCamera();
    this.isMouseDown = false;
    if (typeof this.movingTimeout === "number") {
      clearTimeout(this.movingTimeout);
      this.movingTimeout = null;
    }
    var _a = (0, captor_1.getPosition)(e, this.container),
      x = _a.x,
      y = _a.y;
    var cameraState = camera.getState(),
      previousCameraState = camera.getPreviousState() || {
        x: 0,
        y: 0
      };
    if (this.isMoving) {
      camera.animate({
        x: cameraState.x + MOUSE_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
        y: cameraState.y + MOUSE_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
      }, {
        duration: MOUSE_INERTIA_DURATION,
        easing: "quadraticOut"
      });
    } else if (this.lastMouseX !== x || this.lastMouseY !== y) {
      camera.setState({
        x: cameraState.x,
        y: cameraState.y
      });
    }
    this.isMoving = false;
    setTimeout(function () {
      _this.draggedEvents = 0;
      // NOTE: this refresh is here to make sure `hideEdgesOnMove` can work
      // when someone releases camera pan drag after having stopped moving.
      // See commit: https://github.com/jacomyal/sigma.js/commit/cfd9197f70319109db6b675dd7c82be493ca95a2
      // See also issue: https://github.com/jacomyal/sigma.js/issues/1290
      // It could be possible to render instead of scheduling a refresh but for
      // now it seems good enough.
      _this.renderer.refresh();
    }, 0);
    this.emit("mouseup", (0, captor_1.getMouseCoords)(e, this.container));
  };
  MouseCaptor.prototype.handleMove = function (e) {
    var _this = this;
    if (!this.enabled) return;
    var mouseCoords = (0, captor_1.getMouseCoords)(e, this.container);
    // Always trigger a "mousemovebody" event, so that it is possible to develop
    // a drag-and-drop effect that works even when the mouse is out of the
    // container:
    this.emit("mousemovebody", mouseCoords);
    // Only trigger the "mousemove" event when the mouse is actually hovering
    // the container, to avoid weirdly hovering nodes and/or edges when the
    // mouse is not hover the container:
    if (e.target === this.container) {
      this.emit("mousemove", mouseCoords);
    }
    if (mouseCoords.sigmaDefaultPrevented) return;
    // Handle the case when "isMouseDown" all the time, to allow dragging the
    // stage while the mouse is not hover the container:
    if (this.isMouseDown) {
      this.isMoving = true;
      this.draggedEvents++;
      if (typeof this.movingTimeout === "number") {
        clearTimeout(this.movingTimeout);
      }
      this.movingTimeout = window.setTimeout(function () {
        _this.movingTimeout = null;
        _this.isMoving = false;
      }, DRAG_TIMEOUT);
      var camera = this.renderer.getCamera();
      var _a = (0, captor_1.getPosition)(e, this.container),
        eX = _a.x,
        eY = _a.y;
      var lastMouse = this.renderer.viewportToFramedGraph({
        x: this.lastMouseX,
        y: this.lastMouseY
      });
      var mouse = this.renderer.viewportToFramedGraph({
        x: eX,
        y: eY
      });
      var offsetX = lastMouse.x - mouse.x,
        offsetY = lastMouse.y - mouse.y;
      var cameraState = camera.getState();
      var x = cameraState.x + offsetX,
        y = cameraState.y + offsetY;
      camera.setState({
        x: x,
        y: y
      });
      this.lastMouseX = eX;
      this.lastMouseY = eY;
      e.preventDefault();
      e.stopPropagation();
    }
  };
  MouseCaptor.prototype.handleWheel = function (e) {
    var _this = this;
    if (!this.enabled) return;
    e.preventDefault();
    e.stopPropagation();
    var delta = (0, captor_1.getWheelDelta)(e);
    if (!delta) return;
    var wheelCoords = (0, captor_1.getWheelCoords)(e, this.container);
    this.emit("wheel", wheelCoords);
    if (wheelCoords.sigmaDefaultPrevented) return;
    // Default behavior
    var ratioDiff = delta > 0 ? 1 / ZOOMING_RATIO : ZOOMING_RATIO;
    var camera = this.renderer.getCamera();
    var newRatio = camera.getBoundedRatio(camera.getState().ratio * ratioDiff);
    var wheelDirection = delta > 0 ? 1 : -1;
    var now = Date.now();
    // Cancel events that are too close too each other and in the same direction:
    if (this.currentWheelDirection === wheelDirection && this.lastWheelTriggerTime && now - this.lastWheelTriggerTime < MOUSE_ZOOM_DURATION / 5) {
      return;
    }
    camera.animate(this.renderer.getViewportZoomedState((0, captor_1.getPosition)(e, this.container), newRatio), {
      easing: "quadraticOut",
      duration: MOUSE_ZOOM_DURATION
    }, function () {
      _this.currentWheelDirection = 0;
    });
    this.currentWheelDirection = wheelDirection;
    this.lastWheelTriggerTime = now;
  };
  MouseCaptor.prototype.handleOut = function () {
    // TODO: dispatch event
  };
  return MouseCaptor;
}(captor_1.default);
exports.default = MouseCaptor;

/***/ }),

/***/ "./node_modules/sigma/core/captors/touch.js":
/*!**************************************************!*\
  !*** ./node_modules/sigma/core/captors/touch.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var captor_1 = __importStar(__webpack_require__(/*! ./captor */ "./node_modules/sigma/core/captors/captor.js"));
var DRAG_TIMEOUT = 200;
var TOUCH_INERTIA_RATIO = 3;
var TOUCH_INERTIA_DURATION = 200;
/**
 * Touch captor class.
 *
 * @constructor
 */
var TouchCaptor = /** @class */function (_super) {
  __extends(TouchCaptor, _super);
  function TouchCaptor(container, renderer) {
    var _this = _super.call(this, container, renderer) || this;
    _this.enabled = true;
    _this.isMoving = false;
    _this.hasMoved = false;
    _this.touchMode = 0; // number of touches down
    _this.startTouchesPositions = [];
    // Binding methods:
    _this.handleStart = _this.handleStart.bind(_this);
    _this.handleLeave = _this.handleLeave.bind(_this);
    _this.handleMove = _this.handleMove.bind(_this);
    // Binding events
    container.addEventListener("touchstart", _this.handleStart, false);
    container.addEventListener("touchend", _this.handleLeave, false);
    container.addEventListener("touchcancel", _this.handleLeave, false);
    container.addEventListener("touchmove", _this.handleMove, false);
    return _this;
  }
  TouchCaptor.prototype.kill = function () {
    var container = this.container;
    container.removeEventListener("touchstart", this.handleStart);
    container.removeEventListener("touchend", this.handleLeave);
    container.removeEventListener("touchcancel", this.handleLeave);
    container.removeEventListener("touchmove", this.handleMove);
  };
  TouchCaptor.prototype.getDimensions = function () {
    return {
      width: this.container.offsetWidth,
      height: this.container.offsetHeight
    };
  };
  TouchCaptor.prototype.dispatchRelatedMouseEvent = function (type, e, touch, emitter) {
    var mousePosition = touch || e.touches[0];
    var mouseEvent = new MouseEvent(type, {
      clientX: mousePosition.clientX,
      clientY: mousePosition.clientY,
      altKey: e.altKey,
      ctrlKey: e.ctrlKey
    });
    mouseEvent.isFakeSigmaMouseEvent = true;
    (emitter || this.container).dispatchEvent(mouseEvent);
  };
  TouchCaptor.prototype.handleStart = function (e) {
    var _this = this;
    if (!this.enabled) return;
    // Prevent default to avoid default browser behaviors...
    e.preventDefault();
    // ...but simulate mouse behavior anyway, to get the MouseCaptor working as well:
    if (e.touches.length === 1) this.dispatchRelatedMouseEvent("mousedown", e);
    var touches = (0, captor_1.getTouchesArray)(e.touches);
    this.touchMode = touches.length;
    this.startCameraState = this.renderer.getCamera().getState();
    this.startTouchesPositions = touches.map(function (touch) {
      return (0, captor_1.getPosition)(touch, _this.container);
    });
    this.lastTouches = touches;
    this.lastTouchesPositions = this.startTouchesPositions;
    // When there are two touches down, let's record distance and angle as well:
    if (this.touchMode === 2) {
      var _a = __read(this.startTouchesPositions, 2),
        _b = _a[0],
        x0 = _b.x,
        y0 = _b.y,
        _c = _a[1],
        x1 = _c.x,
        y1 = _c.y;
      this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
      this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
    }
    this.emit("touchdown", (0, captor_1.getTouchCoords)(e, this.container));
  };
  TouchCaptor.prototype.handleLeave = function (e) {
    if (!this.enabled) return;
    // Prevent default to avoid default browser behaviors...
    e.preventDefault();
    // ...but simulate mouse behavior anyway, to get the MouseCaptor working as well:
    if (e.touches.length === 0 && this.lastTouches && this.lastTouches.length) {
      this.dispatchRelatedMouseEvent("mouseup", e, this.lastTouches[0], document);
      // ... and only click if no move was made
      if (!this.hasMoved) {
        this.dispatchRelatedMouseEvent("click", e, this.lastTouches[0]);
      }
    }
    if (this.movingTimeout) {
      this.isMoving = false;
      clearTimeout(this.movingTimeout);
    }
    switch (this.touchMode) {
      case 2:
        if (e.touches.length === 1) {
          this.handleStart(e);
          e.preventDefault();
          break;
        }
      /* falls through */
      case 1:
        // TODO
        // Dispatch event
        if (this.isMoving) {
          var camera = this.renderer.getCamera();
          var cameraState = camera.getState(),
            previousCameraState = camera.getPreviousState() || {
              x: 0,
              y: 0
            };
          camera.animate({
            x: cameraState.x + TOUCH_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
            y: cameraState.y + TOUCH_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
          }, {
            duration: TOUCH_INERTIA_DURATION,
            easing: "quadraticOut"
          });
        }
        this.hasMoved = false;
        this.isMoving = false;
        this.touchMode = 0;
        break;
    }
    this.emit("touchup", (0, captor_1.getTouchCoords)(e, this.container));
  };
  TouchCaptor.prototype.handleMove = function (e) {
    var _a;
    var _this = this;
    if (!this.enabled) return;
    // Prevent default to avoid default browser behaviors...
    e.preventDefault();
    // ...but simulate mouse behavior anyway, to get the MouseCaptor working as well:
    if (e.touches.length === 1) this.dispatchRelatedMouseEvent("mousemove", e);
    var touches = (0, captor_1.getTouchesArray)(e.touches);
    var touchesPositions = touches.map(function (touch) {
      return (0, captor_1.getPosition)(touch, _this.container);
    });
    this.lastTouches = touches;
    this.lastTouchesPositions = touchesPositions;
    // If a move was initiated at some point and we get back to startpoint,
    // we should still consider that we did move (which also happens after a
    // multiple touch when only one touch remains in which case handleStart
    // is recalled within handleLeave).
    // Now, some mobile browsers report zero-distance moves so we also check that
    // one of the touches did actually move from the origin position.
    this.hasMoved || (this.hasMoved = touchesPositions.some(function (position, idx) {
      var startPosition = _this.startTouchesPositions[idx];
      return position.x !== startPosition.x || position.y !== startPosition.y;
    }));
    // If there was no move, do not trigger touch moves behavior
    if (!this.hasMoved) {
      return;
    }
    this.isMoving = true;
    if (this.movingTimeout) clearTimeout(this.movingTimeout);
    this.movingTimeout = window.setTimeout(function () {
      _this.isMoving = false;
    }, DRAG_TIMEOUT);
    var camera = this.renderer.getCamera();
    var startCameraState = this.startCameraState;
    switch (this.touchMode) {
      case 1:
        {
          var _b = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]),
            xStart = _b.x,
            yStart = _b.y;
          var _c = this.renderer.viewportToFramedGraph(touchesPositions[0]),
            x = _c.x,
            y = _c.y;
          camera.setState({
            x: startCameraState.x + xStart - x,
            y: startCameraState.y + yStart - y
          });
          break;
        }
      case 2:
        {
          /**
           * Here is the thinking here:
           *
           * 1. We can find the new angle and ratio, by comparing the vector from "touch one" to "touch two" at the start
           *    of the d'n'd and now
           *
           * 2. We can use `Camera#viewportToGraph` inside formula to retrieve the new camera position, using the graph
           *    position of a touch at the beginning of the d'n'd (using `startCamera.viewportToGraph`) and the viewport
           *    position of this same touch now
           */
          var newCameraState = {};
          var _d = touchesPositions[0],
            x0 = _d.x,
            y0 = _d.y;
          var _e = touchesPositions[1],
            x1 = _e.x,
            y1 = _e.y;
          var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
          var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;
          // 1.
          var newRatio = camera.getBoundedRatio(startCameraState.ratio / ratioDiff);
          newCameraState.ratio = newRatio;
          newCameraState.angle = startCameraState.angle + angleDiff;
          // 2.
          var dimensions = this.getDimensions();
          var touchGraphPosition = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], {
            cameraState: startCameraState
          });
          var smallestDimension = Math.min(dimensions.width, dimensions.height);
          var dx = smallestDimension / dimensions.width;
          var dy = smallestDimension / dimensions.height;
          var ratio = newRatio / smallestDimension;
          // Align with center of the graph:
          var x = x0 - smallestDimension / 2 / dx;
          var y = y0 - smallestDimension / 2 / dy;
          // Rotate:
          _a = __read([x * Math.cos(-newCameraState.angle) - y * Math.sin(-newCameraState.angle), y * Math.cos(-newCameraState.angle) + x * Math.sin(-newCameraState.angle)], 2), x = _a[0], y = _a[1];
          newCameraState.x = touchGraphPosition.x - x * ratio;
          newCameraState.y = touchGraphPosition.y + y * ratio;
          camera.setState(newCameraState);
          break;
        }
    }
    this.emit("touchmove", (0, captor_1.getTouchCoords)(e, this.container));
  };
  return TouchCaptor;
}(captor_1.default);
exports.default = TouchCaptor;

/***/ }),

/***/ "./node_modules/sigma/core/labels.js":
/*!*******************************************!*\
  !*** ./node_modules/sigma/core/labels.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.edgeLabelsToDisplayFromNodes = exports.LabelGrid = void 0;
/**
 * Class representing a single candidate for the label grid selection.
 *
 * It also describes a deterministic way to compare two candidates to assess
 * which one is better.
 */
var LabelCandidate = /** @class */function () {
  function LabelCandidate(key, size) {
    this.key = key;
    this.size = size;
  }
  LabelCandidate.compare = function (first, second) {
    // First we compare by size
    if (first.size > second.size) return -1;
    if (first.size < second.size) return 1;
    // Then since no two nodes can have the same key, we use it to
    // deterministically tie-break by key
    if (first.key > second.key) return 1;
    // NOTE: this comparator cannot return 0
    return -1;
  };
  return LabelCandidate;
}();
/**
 * Class representing a 2D spatial grid divided into constant-size cells.
 */
var LabelGrid = /** @class */function () {
  function LabelGrid() {
    this.width = 0;
    this.height = 0;
    this.cellSize = 0;
    this.columns = 0;
    this.rows = 0;
    this.cells = {};
  }
  LabelGrid.prototype.resizeAndClear = function (dimensions, cellSize) {
    this.width = dimensions.width;
    this.height = dimensions.height;
    this.cellSize = cellSize;
    this.columns = Math.ceil(dimensions.width / cellSize);
    this.rows = Math.ceil(dimensions.height / cellSize);
    this.cells = {};
  };
  LabelGrid.prototype.getIndex = function (pos) {
    var xIndex = Math.floor(pos.x / this.cellSize);
    var yIndex = Math.floor(pos.y / this.cellSize);
    return yIndex * this.columns + xIndex;
  };
  LabelGrid.prototype.add = function (key, size, pos) {
    var candidate = new LabelCandidate(key, size);
    var index = this.getIndex(pos);
    var cell = this.cells[index];
    if (!cell) {
      cell = [];
      this.cells[index] = cell;
    }
    cell.push(candidate);
  };
  LabelGrid.prototype.organize = function () {
    for (var k in this.cells) {
      var cell = this.cells[k];
      cell.sort(LabelCandidate.compare);
    }
  };
  LabelGrid.prototype.getLabelsToDisplay = function (ratio, density) {
    // TODO: work on visible nodes to optimize? ^ -> threshold outside so that memoization works?
    // TODO: adjust threshold lower, but increase cells a bit?
    // TODO: hunt for geom issue in disguise
    // TODO: memoize while ratio does not move. method to force recompute
    var cellArea = this.cellSize * this.cellSize;
    var scaledCellArea = cellArea / ratio / ratio;
    var scaledDensity = scaledCellArea * density / cellArea;
    var labelsToDisplayPerCell = Math.ceil(scaledDensity);
    var labels = [];
    for (var k in this.cells) {
      var cell = this.cells[k];
      for (var i = 0; i < Math.min(labelsToDisplayPerCell, cell.length); i++) {
        labels.push(cell[i].key);
      }
    }
    return labels;
  };
  return LabelGrid;
}();
exports.LabelGrid = LabelGrid;
/**
 * Label heuristic selecting edge labels to display, based on displayed node
 * labels
 *
 * @param  {object} params                 - Parameters:
 * @param  {Set}      displayedNodeLabels  - Currently displayed node labels.
 * @param  {Set}      highlightedNodes     - Highlighted nodes.
 * @param  {Graph}    graph                - The rendered graph.
 * @param  {string}   hoveredNode          - Hovered node (optional)
 * @return {Array}                         - The selected labels.
 */
function edgeLabelsToDisplayFromNodes(params) {
  var graph = params.graph,
    hoveredNode = params.hoveredNode,
    highlightedNodes = params.highlightedNodes,
    displayedNodeLabels = params.displayedNodeLabels;
  var worthyEdges = [];
  // TODO: the code below can be optimized using #.forEach and batching the code per adj
  // We should display an edge's label if:
  //   - Any of its extremities is highlighted or hovered
  //   - Both of its extremities has its label shown
  graph.forEachEdge(function (edge, _, source, target) {
    if (source === hoveredNode || target === hoveredNode || highlightedNodes.has(source) || highlightedNodes.has(target) || displayedNodeLabels.has(source) && displayedNodeLabels.has(target)) {
      worthyEdges.push(edge);
    }
  });
  return worthyEdges;
}
exports.edgeLabelsToDisplayFromNodes = edgeLabelsToDisplayFromNodes;

/***/ }),

/***/ "./node_modules/sigma/core/quadtree.js":
/*!*********************************************!*\
  !*** ./node_modules/sigma/core/quadtree.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rectangleCollidesWithQuad = exports.squareCollidesWithQuad = exports.getCircumscribedAlignedRectangle = exports.isRectangleAligned = void 0;
/**
 * Sigma.js Quad Tree Class
 * =========================
 *
 * Class implementing the quad tree data structure used to solve hovers and
 * determine which elements are currently in the scope of the camera so that
 * we don't waste time rendering things the user cannot see anyway.
 * @module
 */
/* eslint no-nested-ternary: 0 */
/* eslint no-constant-condition: 0 */
var extend_1 = __importDefault(__webpack_require__(/*! @yomguithereal/helpers/extend */ "./node_modules/@yomguithereal/helpers/extend.js"));
/**
 * Notes:
 *
 *   - a square can be represented as topleft + width, saying for the quad blocks,
 *     to reduce overall memory usage (which is already pretty low).
 *   - this implementation of a quadtree is often called a MX-CIF quadtree.
 *   - we could explore spatial hashing (hilbert quadtrees, notably).
 */
/**
 * Constants.
 *
 * Note that since we are representing a static 4-ary tree, the indices of the
 * quadrants are the following:
 *   - TOP_LEFT:     4i + b
 *   - TOP_RIGHT:    4i + 2b
 *   - BOTTOM_LEFT:  4i + 3b
 *   - BOTTOM_RIGHT: 4i + 4b
 */
var BLOCKS = 4;
var MAX_LEVEL = 5;
// Outside block is max block index + 1, i.e.:
// BLOCKS * ((4 * (4 ** MAX_LEVEL) - 1) / 3)
var OUTSIDE_BLOCK = 5460;
var X_OFFSET = 0;
var Y_OFFSET = 1;
var WIDTH_OFFSET = 2;
var HEIGHT_OFFSET = 3;
var TOP_LEFT = 1;
var TOP_RIGHT = 2;
var BOTTOM_LEFT = 3;
var BOTTOM_RIGHT = 4;
var hasWarnedTooMuchOutside = false;
/**
 * Geometry helpers.
 */
/**
 * Function returning whether the given rectangle is axis-aligned.
 *
 * @param  {Rectangle} rect
 * @return {boolean}
 */
function isRectangleAligned(rect) {
  return rect.x1 === rect.x2 || rect.y1 === rect.y2;
}
exports.isRectangleAligned = isRectangleAligned;
/**
 * Function returning the smallest rectangle that contains the given rectangle, and that is aligned with the axis.
 *
 * @param {Rectangle} rect
 * @return {Rectangle}
 */
function getCircumscribedAlignedRectangle(rect) {
  var width = Math.sqrt(Math.pow(rect.x2 - rect.x1, 2) + Math.pow(rect.y2 - rect.y1, 2));
  var heightVector = {
    x: (rect.y1 - rect.y2) * rect.height / width,
    y: (rect.x2 - rect.x1) * rect.height / width
  };
  // Compute all corners:
  var tl = {
    x: rect.x1,
    y: rect.y1
  };
  var tr = {
    x: rect.x2,
    y: rect.y2
  };
  var bl = {
    x: rect.x1 + heightVector.x,
    y: rect.y1 + heightVector.y
  };
  var br = {
    x: rect.x2 + heightVector.x,
    y: rect.y2 + heightVector.y
  };
  var xL = Math.min(tl.x, tr.x, bl.x, br.x);
  var xR = Math.max(tl.x, tr.x, bl.x, br.x);
  var yT = Math.min(tl.y, tr.y, bl.y, br.y);
  var yB = Math.max(tl.y, tr.y, bl.y, br.y);
  return {
    x1: xL,
    y1: yT,
    x2: xR,
    y2: yT,
    height: yB - yT
  };
}
exports.getCircumscribedAlignedRectangle = getCircumscribedAlignedRectangle;
/**
 *
 * @param x1
 * @param y1
 * @param w
 * @param qx
 * @param qy
 * @param qw
 * @param qh
 */
function squareCollidesWithQuad(x1, y1, w, qx, qy, qw, qh) {
  return x1 < qx + qw && x1 + w > qx && y1 < qy + qh && y1 + w > qy;
}
exports.squareCollidesWithQuad = squareCollidesWithQuad;
function rectangleCollidesWithQuad(x1, y1, w, h, qx, qy, qw, qh) {
  return x1 < qx + qw && x1 + w > qx && y1 < qy + qh && y1 + h > qy;
}
exports.rectangleCollidesWithQuad = rectangleCollidesWithQuad;
function pointIsInQuad(x, y, qx, qy, qw, qh) {
  var xmp = qx + qw / 2,
    ymp = qy + qh / 2,
    top = y < ymp,
    left = x < xmp;
  return top ? left ? TOP_LEFT : TOP_RIGHT : left ? BOTTOM_LEFT : BOTTOM_RIGHT;
}
/**
 * Helper functions that are not bound to the class so an external user
 * cannot mess with them.
 */
function buildQuadrants(maxLevel, data) {
  // [block, level]
  var stack = [0, 0];
  while (stack.length) {
    var level = stack.pop(),
      block = stack.pop();
    var topLeftBlock = 4 * block + BLOCKS,
      topRightBlock = 4 * block + 2 * BLOCKS,
      bottomLeftBlock = 4 * block + 3 * BLOCKS,
      bottomRightBlock = 4 * block + 4 * BLOCKS;
    var x = data[block + X_OFFSET],
      y = data[block + Y_OFFSET],
      width = data[block + WIDTH_OFFSET],
      height = data[block + HEIGHT_OFFSET],
      hw = width / 2,
      hh = height / 2;
    data[topLeftBlock + X_OFFSET] = x;
    data[topLeftBlock + Y_OFFSET] = y;
    data[topLeftBlock + WIDTH_OFFSET] = hw;
    data[topLeftBlock + HEIGHT_OFFSET] = hh;
    data[topRightBlock + X_OFFSET] = x + hw;
    data[topRightBlock + Y_OFFSET] = y;
    data[topRightBlock + WIDTH_OFFSET] = hw;
    data[topRightBlock + HEIGHT_OFFSET] = hh;
    data[bottomLeftBlock + X_OFFSET] = x;
    data[bottomLeftBlock + Y_OFFSET] = y + hh;
    data[bottomLeftBlock + WIDTH_OFFSET] = hw;
    data[bottomLeftBlock + HEIGHT_OFFSET] = hh;
    data[bottomRightBlock + X_OFFSET] = x + hw;
    data[bottomRightBlock + Y_OFFSET] = y + hh;
    data[bottomRightBlock + WIDTH_OFFSET] = hw;
    data[bottomRightBlock + HEIGHT_OFFSET] = hh;
    if (level < maxLevel - 1) {
      stack.push(bottomRightBlock, level + 1);
      stack.push(bottomLeftBlock, level + 1);
      stack.push(topRightBlock, level + 1);
      stack.push(topLeftBlock, level + 1);
    }
  }
}
function insertNode(maxLevel, data, containers, key, x, y, size) {
  var x1 = x - size,
    y1 = y - size,
    w = size * 2;
  var level = 0,
    block = 0;
  while (true) {
    // If we reached max level
    if (level >= maxLevel) {
      containers[block] = containers[block] || [];
      containers[block].push(key);
      return;
    }
    var topLeftBlock = 4 * block + BLOCKS,
      topRightBlock = 4 * block + 2 * BLOCKS,
      bottomLeftBlock = 4 * block + 3 * BLOCKS,
      bottomRightBlock = 4 * block + 4 * BLOCKS;
    var collidingWithTopLeft = squareCollidesWithQuad(x1, y1, w, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
    var collidingWithTopRight = squareCollidesWithQuad(x1, y1, w, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
    var collidingWithBottomLeft = squareCollidesWithQuad(x1, y1, w, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
    var collidingWithBottomRight = squareCollidesWithQuad(x1, y1, w, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
    var collisions = [collidingWithTopLeft, collidingWithTopRight, collidingWithBottomLeft, collidingWithBottomRight].reduce(function (acc, current) {
      if (current) return acc + 1;else return acc;
    }, 0);
    // If we have no collision at root level, inject node in the outside block
    if (collisions === 0 && level === 0) {
      containers[OUTSIDE_BLOCK].push(key);
      if (!hasWarnedTooMuchOutside && containers[OUTSIDE_BLOCK].length >= 5) {
        hasWarnedTooMuchOutside = true;
        console.warn("sigma/quadtree.insertNode: At least 5 nodes are outside the global quadtree zone. " + "You might have a problem with the normalization function or the custom bounding box.");
      }
      return;
    }
    // If we don't have at least a collision but deeper, there is an issue
    if (collisions === 0) throw new Error("sigma/quadtree.insertNode: no collision (level: ".concat(level, ", key: ").concat(key, ", x: ").concat(x, ", y: ").concat(y, ", size: ").concat(size, ")."));
    // If we have 3 collisions, we have a geometry problem obviously
    if (collisions === 3) throw new Error("sigma/quadtree.insertNode: 3 impossible collisions (level: ".concat(level, ", key: ").concat(key, ", x: ").concat(x, ", y: ").concat(y, ", size: ").concat(size, ")."));
    // If we have more that one collision, we stop here and store the node
    // in the relevant containers
    if (collisions > 1) {
      containers[block] = containers[block] || [];
      containers[block].push(key);
      return;
    } else {
      level++;
    }
    // Else we recurse into the correct quads
    if (collidingWithTopLeft) block = topLeftBlock;
    if (collidingWithTopRight) block = topRightBlock;
    if (collidingWithBottomLeft) block = bottomLeftBlock;
    if (collidingWithBottomRight) block = bottomRightBlock;
  }
}
function getNodesInAxisAlignedRectangleArea(maxLevel, data, containers, x1, y1, w, h) {
  // [block, level]
  var stack = [0, 0];
  var collectedNodes = [];
  var container;
  while (stack.length) {
    var level = stack.pop(),
      block = stack.pop();
    // Collecting nodes
    container = containers[block];
    if (container) (0, extend_1.default)(collectedNodes, container);
    // If we reached max level
    if (level >= maxLevel) continue;
    var topLeftBlock = 4 * block + BLOCKS,
      topRightBlock = 4 * block + 2 * BLOCKS,
      bottomLeftBlock = 4 * block + 3 * BLOCKS,
      bottomRightBlock = 4 * block + 4 * BLOCKS;
    var collidingWithTopLeft = rectangleCollidesWithQuad(x1, y1, w, h, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
    var collidingWithTopRight = rectangleCollidesWithQuad(x1, y1, w, h, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
    var collidingWithBottomLeft = rectangleCollidesWithQuad(x1, y1, w, h, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
    var collidingWithBottomRight = rectangleCollidesWithQuad(x1, y1, w, h, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
    if (collidingWithTopLeft) stack.push(topLeftBlock, level + 1);
    if (collidingWithTopRight) stack.push(topRightBlock, level + 1);
    if (collidingWithBottomLeft) stack.push(bottomLeftBlock, level + 1);
    if (collidingWithBottomRight) stack.push(bottomRightBlock, level + 1);
  }
  return collectedNodes;
}
/**
 * QuadTree class.
 *
 * @constructor
 * @param {object} boundaries - The graph boundaries.
 */
var QuadTree = /** @class */function () {
  function QuadTree(params) {
    var _a;
    if (params === void 0) {
      params = {};
    }
    this.containers = (_a = {}, _a[OUTSIDE_BLOCK] = [], _a);
    this.cache = null;
    this.lastRectangle = null;
    // Allocating the underlying byte array
    var L = Math.pow(4, MAX_LEVEL);
    this.data = new Float32Array(BLOCKS * ((4 * L - 1) / 3));
    if (params.boundaries) this.resize(params.boundaries);else this.resize({
      x: 0,
      y: 0,
      width: 1,
      height: 1
    });
  }
  QuadTree.prototype.add = function (key, x, y, size) {
    insertNode(MAX_LEVEL, this.data, this.containers, key, x, y, size);
    return this;
  };
  QuadTree.prototype.resize = function (boundaries) {
    this.clear();
    // Building the quadrants
    this.data[X_OFFSET] = boundaries.x;
    this.data[Y_OFFSET] = boundaries.y;
    this.data[WIDTH_OFFSET] = boundaries.width;
    this.data[HEIGHT_OFFSET] = boundaries.height;
    buildQuadrants(MAX_LEVEL, this.data);
  };
  QuadTree.prototype.clear = function () {
    var _a;
    this.containers = (_a = {}, _a[OUTSIDE_BLOCK] = [], _a);
    return this;
  };
  QuadTree.prototype.point = function (x, y) {
    var nodes = this.containers[OUTSIDE_BLOCK].slice();
    var block = 0,
      level = 0;
    do {
      if (this.containers[block]) (0, extend_1.default)(nodes, this.containers[block]);
      var quad = pointIsInQuad(x, y, this.data[block + X_OFFSET], this.data[block + Y_OFFSET], this.data[block + WIDTH_OFFSET], this.data[block + HEIGHT_OFFSET]);
      block = 4 * block + quad * BLOCKS;
      level++;
    } while (level <= MAX_LEVEL);
    return nodes;
  };
  QuadTree.prototype.rectangle = function (x1, y1, x2, y2, height) {
    var lr = this.lastRectangle;
    if (lr && x1 === lr.x1 && x2 === lr.x2 && y1 === lr.y1 && y2 === lr.y2 && height === lr.height) {
      return this.cache;
    }
    this.lastRectangle = {
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      height: height
    };
    // If the rectangle is shifted, we use the smallest aligned rectangle that contains the shifted one:
    if (!isRectangleAligned(this.lastRectangle)) this.lastRectangle = getCircumscribedAlignedRectangle(this.lastRectangle);
    this.cache = getNodesInAxisAlignedRectangleArea(MAX_LEVEL, this.data, this.containers, x1, y1, Math.abs(x1 - x2) || Math.abs(y1 - y2), height);
    // Add all the nodes in the outside block, since they might be relevant, and since they should be very few:
    (0, extend_1.default)(this.cache, this.containers[OUTSIDE_BLOCK]);
    return this.cache;
  };
  return QuadTree;
}();
exports.default = QuadTree;

/***/ }),

/***/ "./node_modules/sigma/index.js":
/*!*************************************!*\
  !*** ./node_modules/sigma/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sigma = exports.MouseCaptor = exports.QuadTree = exports.Camera = void 0;
/**
 * Sigma.js Library Endpoint
 * =========================
 *
 * The library endpoint.
 * @module
 */
var sigma_1 = __importDefault(__webpack_require__(/*! ./sigma */ "./node_modules/sigma/sigma.js"));
exports.Sigma = sigma_1.default;
var camera_1 = __importDefault(__webpack_require__(/*! ./core/camera */ "./node_modules/sigma/core/camera.js"));
exports.Camera = camera_1.default;
var quadtree_1 = __importDefault(__webpack_require__(/*! ./core/quadtree */ "./node_modules/sigma/core/quadtree.js"));
exports.QuadTree = quadtree_1.default;
var mouse_1 = __importDefault(__webpack_require__(/*! ./core/captors/mouse */ "./node_modules/sigma/core/captors/mouse.js"));
exports.MouseCaptor = mouse_1.default;
exports.default = sigma_1.default;

/***/ }),

/***/ "./node_modules/sigma/rendering/canvas/edge-label.js":
/*!***********************************************************!*\
  !*** ./node_modules/sigma/rendering/canvas/edge-label.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function drawEdgeLabel(context, edgeData, sourceData, targetData, settings) {
  var size = settings.edgeLabelSize,
    font = settings.edgeLabelFont,
    weight = settings.edgeLabelWeight,
    color = settings.edgeLabelColor.attribute ? edgeData[settings.edgeLabelColor.attribute] || settings.edgeLabelColor.color || "#000" : settings.edgeLabelColor.color;
  var label = edgeData.label;
  if (!label) return;
  context.fillStyle = color;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
  // Computing positions without considering nodes sizes:
  var sSize = sourceData.size;
  var tSize = targetData.size;
  var sx = sourceData.x;
  var sy = sourceData.y;
  var tx = targetData.x;
  var ty = targetData.y;
  var cx = (sx + tx) / 2;
  var cy = (sy + ty) / 2;
  var dx = tx - sx;
  var dy = ty - sy;
  var d = Math.sqrt(dx * dx + dy * dy);
  if (d < sSize + tSize) return;
  // Adding nodes sizes:
  sx += dx * sSize / d;
  sy += dy * sSize / d;
  tx -= dx * tSize / d;
  ty -= dy * tSize / d;
  cx = (sx + tx) / 2;
  cy = (sy + ty) / 2;
  dx = tx - sx;
  dy = ty - sy;
  d = Math.sqrt(dx * dx + dy * dy);
  // Handling ellipsis
  var textLength = context.measureText(label).width;
  if (textLength > d) {
    var ellipsis = "…";
    label = label + ellipsis;
    textLength = context.measureText(label).width;
    while (textLength > d && label.length > 1) {
      label = label.slice(0, -2) + ellipsis;
      textLength = context.measureText(label).width;
    }
    if (label.length < 4) return;
  }
  var angle;
  if (dx > 0) {
    if (dy > 0) angle = Math.acos(dx / d);else angle = Math.asin(dy / d);
  } else {
    if (dy > 0) angle = Math.acos(dx / d) + Math.PI;else angle = Math.asin(dx / d) + Math.PI / 2;
  }
  context.save();
  context.translate(cx, cy);
  context.rotate(angle);
  context.fillText(label, -textLength / 2, edgeData.size / 2 + size);
  context.restore();
}
exports.default = drawEdgeLabel;

/***/ }),

/***/ "./node_modules/sigma/rendering/canvas/hover.js":
/*!******************************************************!*\
  !*** ./node_modules/sigma/rendering/canvas/hover.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var label_1 = __importDefault(__webpack_require__(/*! ./label */ "./node_modules/sigma/rendering/canvas/label.js"));
/**
 * Draw an hovered node.
 * - if there is no label => display a shadow on the node
 * - if the label box is bigger than node size => display a label box that contains the node with a shadow
 * - else node with shadow and the label box
 */
function drawHover(context, data, settings) {
  var size = settings.labelSize,
    font = settings.labelFont,
    weight = settings.labelWeight;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
  // Then we draw the label background
  context.fillStyle = "#FFF";
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 8;
  context.shadowColor = "#000";
  var PADDING = 2;
  if (typeof data.label === "string") {
    var textWidth = context.measureText(data.label).width,
      boxWidth = Math.round(textWidth + 5),
      boxHeight = Math.round(size + 2 * PADDING),
      radius = Math.max(data.size, size / 2) + PADDING;
    var angleRadian = Math.asin(boxHeight / 2 / radius);
    var xDeltaCoord = Math.sqrt(Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)));
    context.beginPath();
    context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
    context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
    context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
    context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
    context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
    context.closePath();
    context.fill();
  } else {
    context.beginPath();
    context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  }
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;
  // And finally we draw the label
  (0, label_1.default)(context, data, settings);
}
exports.default = drawHover;

/***/ }),

/***/ "./node_modules/sigma/rendering/canvas/label.js":
/*!******************************************************!*\
  !*** ./node_modules/sigma/rendering/canvas/label.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function drawLabel(context, data, settings) {
  if (!data.label) return;
  var size = settings.labelSize,
    font = settings.labelFont,
    weight = settings.labelWeight,
    color = settings.labelColor.attribute ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000" : settings.labelColor.color;
  context.fillStyle = color;
  context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
  context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}
exports.default = drawLabel;

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/common/edge.js":
/*!********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/common/edge.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEdgeCompoundProgram = exports.AbstractEdgeProgram = void 0;
/**
 * Sigma.js WebGL Abstract Edge Program
 * =====================================
 *
 * @module
 */
var program_1 = __webpack_require__(/*! ./program */ "./node_modules/sigma/rendering/webgl/programs/common/program.js");
/**
 * Edge Program class.
 *
 * @constructor
 */
var AbstractEdgeProgram = /** @class */function (_super) {
  __extends(AbstractEdgeProgram, _super);
  function AbstractEdgeProgram(gl, vertexShaderSource, fragmentShaderSource, points, attributes) {
    return _super.call(this, gl, vertexShaderSource, fragmentShaderSource, points, attributes) || this;
  }
  return AbstractEdgeProgram;
}(program_1.AbstractProgram);
exports.AbstractEdgeProgram = AbstractEdgeProgram;
function createEdgeCompoundProgram(programClasses) {
  return (/** @class */function () {
      function EdgeCompoundProgram(gl, renderer) {
        this.programs = programClasses.map(function (ProgramClass) {
          return new ProgramClass(gl, renderer);
        });
      }
      EdgeCompoundProgram.prototype.bufferData = function () {
        this.programs.forEach(function (program) {
          return program.bufferData();
        });
      };
      EdgeCompoundProgram.prototype.allocate = function (capacity) {
        this.programs.forEach(function (program) {
          return program.allocate(capacity);
        });
      };
      EdgeCompoundProgram.prototype.bind = function () {
        // nothing todo, it's already done in each program constructor
      };
      EdgeCompoundProgram.prototype.computeIndices = function () {
        this.programs.forEach(function (program) {
          return program.computeIndices();
        });
      };
      EdgeCompoundProgram.prototype.render = function (params) {
        this.programs.forEach(function (program) {
          program.bind();
          program.bufferData();
          program.render(params);
        });
      };
      EdgeCompoundProgram.prototype.process = function (sourceData, targetData, data, hidden, offset) {
        this.programs.forEach(function (program) {
          return program.process(sourceData, targetData, data, hidden, offset);
        });
      };
      return EdgeCompoundProgram;
    }()
  );
}
exports.createEdgeCompoundProgram = createEdgeCompoundProgram;

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/common/node.js":
/*!********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/common/node.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNodeCompoundProgram = exports.AbstractNodeProgram = void 0;
/**
 * Sigma.js WebGL Abstract Node Program
 * =====================================
 *
 * @module
 */
var program_1 = __webpack_require__(/*! ./program */ "./node_modules/sigma/rendering/webgl/programs/common/program.js");
/**
 * Node Program class.
 *
 * @constructor
 */
var AbstractNodeProgram = /** @class */function (_super) {
  __extends(AbstractNodeProgram, _super);
  function AbstractNodeProgram(gl, vertexShaderSource, fragmentShaderSource, points, attributes) {
    var _this = _super.call(this, gl, vertexShaderSource, fragmentShaderSource, points, attributes) || this;
    // Locations
    _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
    _this.sizeLocation = gl.getAttribLocation(_this.program, "a_size");
    _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
    // Uniform Location
    var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
    if (matrixLocation === null) throw new Error("AbstractNodeProgram: error while getting matrixLocation");
    _this.matrixLocation = matrixLocation;
    var ratioLocation = gl.getUniformLocation(_this.program, "u_ratio");
    if (ratioLocation === null) throw new Error("AbstractNodeProgram: error while getting ratioLocation");
    _this.ratioLocation = ratioLocation;
    var scaleLocation = gl.getUniformLocation(_this.program, "u_scale");
    if (scaleLocation === null) throw new Error("AbstractNodeProgram: error while getting scaleLocation");
    _this.scaleLocation = scaleLocation;
    return _this;
  }
  AbstractNodeProgram.prototype.bind = function () {
    var gl = this.gl;
    gl.enableVertexAttribArray(this.positionLocation);
    gl.enableVertexAttribArray(this.sizeLocation);
    gl.enableVertexAttribArray(this.colorLocation);
    gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, this.attributes * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.vertexAttribPointer(this.sizeLocation, 1, gl.FLOAT, false, this.attributes * Float32Array.BYTES_PER_ELEMENT, 8);
    gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, this.attributes * Float32Array.BYTES_PER_ELEMENT, 12);
  };
  return AbstractNodeProgram;
}(program_1.AbstractProgram);
exports.AbstractNodeProgram = AbstractNodeProgram;
/**
 * Helper function combining two or more programs into a single compound one.
 * Note that this is more a quick & easy way to combine program than a really
 * performant option. More performant programs can be written entirely.
 *
 * @param  {array}    programClasses - Program classes to combine.
 * @return {function}
 */
function createNodeCompoundProgram(programClasses) {
  return (/** @class */function () {
      function NodeCompoundProgram(gl, renderer) {
        this.programs = programClasses.map(function (ProgramClass) {
          return new ProgramClass(gl, renderer);
        });
      }
      NodeCompoundProgram.prototype.bufferData = function () {
        this.programs.forEach(function (program) {
          return program.bufferData();
        });
      };
      NodeCompoundProgram.prototype.allocate = function (capacity) {
        this.programs.forEach(function (program) {
          return program.allocate(capacity);
        });
      };
      NodeCompoundProgram.prototype.bind = function () {
        // nothing todo, it's already done in each program constructor
      };
      NodeCompoundProgram.prototype.render = function (params) {
        this.programs.forEach(function (program) {
          program.bind();
          program.bufferData();
          program.render(params);
        });
      };
      NodeCompoundProgram.prototype.process = function (data, hidden, offset) {
        this.programs.forEach(function (program) {
          return program.process(data, hidden, offset);
        });
      };
      return NodeCompoundProgram;
    }()
  );
}
exports.createNodeCompoundProgram = createNodeCompoundProgram;

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/common/program.js":
/*!***********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/common/program.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractProgram = void 0;
/**
 * Sigma.js WebGL Renderer Program
 * ================================
 *
 * Class representing a single WebGL program used by sigma's WebGL renderer.
 * @module
 */
var utils_1 = __webpack_require__(/*! ../../shaders/utils */ "./node_modules/sigma/rendering/webgl/shaders/utils.js");
/**
 * Abstract Program class.
 *
 * @constructor
 */
var AbstractProgram = /** @class */function () {
  function AbstractProgram(gl, vertexShaderSource, fragmentShaderSource, points, attributes) {
    this.array = new Float32Array();
    this.points = points;
    this.attributes = attributes;
    this.gl = gl;
    this.vertexShaderSource = vertexShaderSource;
    this.fragmentShaderSource = fragmentShaderSource;
    var buffer = gl.createBuffer();
    if (buffer === null) throw new Error("AbstractProgram: error while creating the buffer");
    this.buffer = buffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    this.vertexShader = (0, utils_1.loadVertexShader)(gl, this.vertexShaderSource);
    this.fragmentShader = (0, utils_1.loadFragmentShader)(gl, this.fragmentShaderSource);
    this.program = (0, utils_1.loadProgram)(gl, [this.vertexShader, this.fragmentShader]);
  }
  AbstractProgram.prototype.bufferData = function () {
    var gl = this.gl;
    gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
  };
  AbstractProgram.prototype.allocate = function (capacity) {
    this.array = new Float32Array(this.points * this.attributes * capacity);
  };
  AbstractProgram.prototype.hasNothingToRender = function () {
    return this.array.length === 0;
  };
  return AbstractProgram;
}();
exports.AbstractProgram = AbstractProgram;

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/edge.arrow.js":
/*!*******************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/edge.arrow.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Sigma.js WebGL Renderer Edge Arrow Program
 * ===========================================
 *
 * Compound program rendering edges as an arrow from the source to the target.
 * @module
 */
var edge_1 = __webpack_require__(/*! ./common/edge */ "./node_modules/sigma/rendering/webgl/programs/common/edge.js");
var edge_arrowHead_1 = __importDefault(__webpack_require__(/*! ./edge.arrowHead */ "./node_modules/sigma/rendering/webgl/programs/edge.arrowHead.js"));
var edge_clamped_1 = __importDefault(__webpack_require__(/*! ./edge.clamped */ "./node_modules/sigma/rendering/webgl/programs/edge.clamped.js"));
var EdgeArrowProgram = (0, edge_1.createEdgeCompoundProgram)([edge_clamped_1.default, edge_arrowHead_1.default]);
exports.default = EdgeArrowProgram;

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/edge.arrowHead.js":
/*!***********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/edge.arrowHead.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var utils_1 = __webpack_require__(/*! ../../../utils */ "./node_modules/sigma/utils/index.js");
var edge_arrowHead_vert_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/edge.arrowHead.vert.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.vert.glsl.js"));
var edge_arrowHead_frag_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/edge.arrowHead.frag.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.frag.glsl.js"));
var edge_1 = __webpack_require__(/*! ./common/edge */ "./node_modules/sigma/rendering/webgl/programs/common/edge.js");
var POINTS = 3,
  ATTRIBUTES = 9,
  STRIDE = POINTS * ATTRIBUTES;
var EdgeArrowHeadProgram = /** @class */function (_super) {
  __extends(EdgeArrowHeadProgram, _super);
  function EdgeArrowHeadProgram(gl) {
    var _this = _super.call(this, gl, edge_arrowHead_vert_glsl_1.default, edge_arrowHead_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
    // Locations
    _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
    _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
    _this.normalLocation = gl.getAttribLocation(_this.program, "a_normal");
    _this.radiusLocation = gl.getAttribLocation(_this.program, "a_radius");
    _this.barycentricLocation = gl.getAttribLocation(_this.program, "a_barycentric");
    // Uniform locations
    var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
    if (matrixLocation === null) throw new Error("EdgeArrowHeadProgram: error while getting matrixLocation");
    _this.matrixLocation = matrixLocation;
    var sqrtZoomRatioLocation = gl.getUniformLocation(_this.program, "u_sqrtZoomRatio");
    if (sqrtZoomRatioLocation === null) throw new Error("EdgeArrowHeadProgram: error while getting sqrtZoomRatioLocation");
    _this.sqrtZoomRatioLocation = sqrtZoomRatioLocation;
    var correctionRatioLocation = gl.getUniformLocation(_this.program, "u_correctionRatio");
    if (correctionRatioLocation === null) throw new Error("EdgeArrowHeadProgram: error while getting correctionRatioLocation");
    _this.correctionRatioLocation = correctionRatioLocation;
    _this.bind();
    return _this;
  }
  EdgeArrowHeadProgram.prototype.bind = function () {
    var gl = this.gl;
    // Bindings
    gl.enableVertexAttribArray(this.positionLocation);
    gl.enableVertexAttribArray(this.normalLocation);
    gl.enableVertexAttribArray(this.radiusLocation);
    gl.enableVertexAttribArray(this.colorLocation);
    gl.enableVertexAttribArray(this.barycentricLocation);
    gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
    gl.vertexAttribPointer(this.radiusLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
    gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 20);
    // TODO: maybe we can optimize here by packing this in a bit mask
    gl.vertexAttribPointer(this.barycentricLocation, 3, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 24);
  };
  EdgeArrowHeadProgram.prototype.computeIndices = function () {
    // nothing to do
  };
  EdgeArrowHeadProgram.prototype.process = function (sourceData, targetData, data, hidden, offset) {
    if (hidden) {
      for (var i_1 = offset * STRIDE, l = i_1 + STRIDE; i_1 < l; i_1++) this.array[i_1] = 0;
      return;
    }
    var thickness = data.size || 1,
      radius = targetData.size || 1,
      x1 = sourceData.x,
      y1 = sourceData.y,
      x2 = targetData.x,
      y2 = targetData.y,
      color = (0, utils_1.floatColor)(data.color);
    // Computing normals
    var dx = x2 - x1,
      dy = y2 - y1;
    var len = dx * dx + dy * dy,
      n1 = 0,
      n2 = 0;
    if (len) {
      len = 1 / Math.sqrt(len);
      n1 = -dy * len * thickness;
      n2 = dx * len * thickness;
    }
    var i = POINTS * ATTRIBUTES * offset;
    var array = this.array;
    // First point
    array[i++] = x2;
    array[i++] = y2;
    array[i++] = -n1;
    array[i++] = -n2;
    array[i++] = radius;
    array[i++] = color;
    array[i++] = 1;
    array[i++] = 0;
    array[i++] = 0;
    // Second point
    array[i++] = x2;
    array[i++] = y2;
    array[i++] = -n1;
    array[i++] = -n2;
    array[i++] = radius;
    array[i++] = color;
    array[i++] = 0;
    array[i++] = 1;
    array[i++] = 0;
    // Third point
    array[i++] = x2;
    array[i++] = y2;
    array[i++] = -n1;
    array[i++] = -n2;
    array[i++] = radius;
    array[i++] = color;
    array[i++] = 0;
    array[i++] = 0;
    array[i] = 1;
  };
  EdgeArrowHeadProgram.prototype.render = function (params) {
    if (this.hasNothingToRender()) return;
    var gl = this.gl;
    var program = this.program;
    gl.useProgram(program);
    // Binding uniforms
    gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
    gl.uniform1f(this.sqrtZoomRatioLocation, Math.sqrt(params.ratio));
    gl.uniform1f(this.correctionRatioLocation, params.correctionRatio);
    // Drawing:
    gl.drawArrays(gl.TRIANGLES, 0, this.array.length / ATTRIBUTES);
  };
  return EdgeArrowHeadProgram;
}(edge_1.AbstractEdgeProgram);
exports.default = EdgeArrowHeadProgram;

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/edge.clamped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/edge.clamped.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var edge_1 = __webpack_require__(/*! ./common/edge */ "./node_modules/sigma/rendering/webgl/programs/common/edge.js");
var utils_1 = __webpack_require__(/*! ../../../utils */ "./node_modules/sigma/utils/index.js");
var edge_clamped_vert_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/edge.clamped.vert.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/edge.clamped.vert.glsl.js"));
var edge_frag_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/edge.frag.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/edge.frag.glsl.js"));
var POINTS = 4,
  ATTRIBUTES = 6,
  STRIDE = POINTS * ATTRIBUTES;
var EdgeClampedProgram = /** @class */function (_super) {
  __extends(EdgeClampedProgram, _super);
  function EdgeClampedProgram(gl) {
    var _this = _super.call(this, gl, edge_clamped_vert_glsl_1.default, edge_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
    // Initializing indices buffer
    var indicesBuffer = gl.createBuffer();
    if (indicesBuffer === null) throw new Error("EdgeClampedProgram: error while getting resolutionLocation");
    _this.indicesBuffer = indicesBuffer;
    // Locations:
    _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
    _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
    _this.normalLocation = gl.getAttribLocation(_this.program, "a_normal");
    _this.radiusLocation = gl.getAttribLocation(_this.program, "a_radius");
    // Uniform locations
    var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
    if (matrixLocation === null) throw new Error("EdgeClampedProgram: error while getting matrixLocation");
    _this.matrixLocation = matrixLocation;
    var sqrtZoomRatioLocation = gl.getUniformLocation(_this.program, "u_sqrtZoomRatio");
    if (sqrtZoomRatioLocation === null) throw new Error("EdgeClampedProgram: error while getting cameraRatioLocation");
    _this.sqrtZoomRatioLocation = sqrtZoomRatioLocation;
    var correctionRatioLocation = gl.getUniformLocation(_this.program, "u_correctionRatio");
    if (correctionRatioLocation === null) throw new Error("EdgeClampedProgram: error while getting viewportRatioLocation");
    _this.correctionRatioLocation = correctionRatioLocation;
    // Enabling the OES_element_index_uint extension
    // NOTE: on older GPUs, this means that really large graphs won't
    // have all their edges rendered. But it seems that the
    // `OES_element_index_uint` is quite everywhere so we'll handle
    // the potential issue if it really arises.
    // NOTE: when using webgl2, the extension is enabled by default
    _this.canUse32BitsIndices = (0, utils_1.canUse32BitsIndices)(gl);
    _this.IndicesArray = _this.canUse32BitsIndices ? Uint32Array : Uint16Array;
    _this.indicesArray = new _this.IndicesArray();
    _this.indicesType = _this.canUse32BitsIndices ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
    _this.bind();
    return _this;
  }
  EdgeClampedProgram.prototype.bind = function () {
    var gl = this.gl;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
    // Bindings
    gl.enableVertexAttribArray(this.positionLocation);
    gl.enableVertexAttribArray(this.normalLocation);
    gl.enableVertexAttribArray(this.colorLocation);
    gl.enableVertexAttribArray(this.radiusLocation);
    gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
    gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
    gl.vertexAttribPointer(this.radiusLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 20);
  };
  EdgeClampedProgram.prototype.process = function (sourceData, targetData, data, hidden, offset) {
    if (hidden) {
      for (var i_1 = offset * STRIDE, l = i_1 + STRIDE; i_1 < l; i_1++) this.array[i_1] = 0;
      return;
    }
    var thickness = data.size || 1,
      x1 = sourceData.x,
      y1 = sourceData.y,
      x2 = targetData.x,
      y2 = targetData.y,
      radius = targetData.size || 1,
      color = (0, utils_1.floatColor)(data.color);
    // Computing normals
    var dx = x2 - x1,
      dy = y2 - y1;
    var len = dx * dx + dy * dy,
      n1 = 0,
      n2 = 0;
    if (len) {
      len = 1 / Math.sqrt(len);
      n1 = -dy * len * thickness;
      n2 = dx * len * thickness;
    }
    var i = POINTS * ATTRIBUTES * offset;
    var array = this.array;
    // First point
    array[i++] = x1;
    array[i++] = y1;
    array[i++] = n1;
    array[i++] = n2;
    array[i++] = color;
    array[i++] = 0;
    // First point flipped
    array[i++] = x1;
    array[i++] = y1;
    array[i++] = -n1;
    array[i++] = -n2;
    array[i++] = color;
    array[i++] = 0;
    // Second point
    array[i++] = x2;
    array[i++] = y2;
    array[i++] = n1;
    array[i++] = n2;
    array[i++] = color;
    array[i++] = radius;
    // Second point flipped
    array[i++] = x2;
    array[i++] = y2;
    array[i++] = -n1;
    array[i++] = -n2;
    array[i++] = color;
    array[i] = -radius;
  };
  EdgeClampedProgram.prototype.computeIndices = function () {
    var l = this.array.length / ATTRIBUTES;
    var size = l + l / 2;
    var indices = new this.IndicesArray(size);
    for (var i = 0, c = 0; i < l; i += 4) {
      indices[c++] = i;
      indices[c++] = i + 1;
      indices[c++] = i + 2;
      indices[c++] = i + 2;
      indices[c++] = i + 1;
      indices[c++] = i + 3;
    }
    this.indicesArray = indices;
  };
  EdgeClampedProgram.prototype.bufferData = function () {
    _super.prototype.bufferData.call(this);
    // Indices data
    var gl = this.gl;
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indicesArray, gl.STATIC_DRAW);
  };
  EdgeClampedProgram.prototype.render = function (params) {
    if (this.hasNothingToRender()) return;
    var gl = this.gl;
    var program = this.program;
    gl.useProgram(program);
    // Binding uniforms
    gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
    gl.uniform1f(this.sqrtZoomRatioLocation, Math.sqrt(params.ratio));
    gl.uniform1f(this.correctionRatioLocation, params.correctionRatio);
    // Drawing:
    gl.drawElements(gl.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
  };
  return EdgeClampedProgram;
}(edge_1.AbstractEdgeProgram);
exports.default = EdgeClampedProgram;

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/edge.js":
/*!*************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/edge.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Sigma.js WebGL Renderer Edge Program
 * =====================================
 *
 * Program rendering edges as thick lines using four points translated
 * orthogonally from the source & target's centers by half thickness.
 *
 * Rendering two triangles by using only four points is made possible through
 * the use of indices.
 *
 * This method should be faster than the 6 points / 2 triangles approach and
 * should handle thickness better than with gl.LINES.
 *
 * This version of the shader balances geometry computation evenly between
 * the CPU & GPU (normals are computed on the CPU side).
 * @module
 */
var utils_1 = __webpack_require__(/*! ../../../utils */ "./node_modules/sigma/utils/index.js");
var edge_vert_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/edge.vert.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/edge.vert.glsl.js"));
var edge_frag_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/edge.frag.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/edge.frag.glsl.js"));
var edge_1 = __webpack_require__(/*! ./common/edge */ "./node_modules/sigma/rendering/webgl/programs/common/edge.js");
var POINTS = 4,
  ATTRIBUTES = 5,
  STRIDE = POINTS * ATTRIBUTES;
var EdgeProgram = /** @class */function (_super) {
  __extends(EdgeProgram, _super);
  function EdgeProgram(gl) {
    var _this = _super.call(this, gl, edge_vert_glsl_1.default, edge_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
    // Initializing indices buffer
    var indicesBuffer = gl.createBuffer();
    if (indicesBuffer === null) throw new Error("EdgeProgram: error while creating indicesBuffer");
    _this.indicesBuffer = indicesBuffer;
    // Locations
    _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
    _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
    _this.normalLocation = gl.getAttribLocation(_this.program, "a_normal");
    var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
    if (matrixLocation === null) throw new Error("EdgeProgram: error while getting matrixLocation");
    _this.matrixLocation = matrixLocation;
    var correctionRatioLocation = gl.getUniformLocation(_this.program, "u_correctionRatio");
    if (correctionRatioLocation === null) throw new Error("EdgeProgram: error while getting correctionRatioLocation");
    _this.correctionRatioLocation = correctionRatioLocation;
    var sqrtZoomRatioLocation = gl.getUniformLocation(_this.program, "u_sqrtZoomRatio");
    if (sqrtZoomRatioLocation === null) throw new Error("EdgeProgram: error while getting sqrtZoomRatioLocation");
    _this.sqrtZoomRatioLocation = sqrtZoomRatioLocation;
    // Enabling the OES_element_index_uint extension
    // NOTE: on older GPUs, this means that really large graphs won't
    // have all their edges rendered. But it seems that the
    // `OES_element_index_uint` is quite everywhere so we'll handle
    // the potential issue if it really arises.
    // NOTE: when using webgl2, the extension is enabled by default
    _this.canUse32BitsIndices = (0, utils_1.canUse32BitsIndices)(gl);
    _this.IndicesArray = _this.canUse32BitsIndices ? Uint32Array : Uint16Array;
    _this.indicesArray = new _this.IndicesArray();
    _this.indicesType = _this.canUse32BitsIndices ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
    _this.bind();
    return _this;
  }
  EdgeProgram.prototype.bind = function () {
    var gl = this.gl;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
    // Bindings
    gl.enableVertexAttribArray(this.positionLocation);
    gl.enableVertexAttribArray(this.normalLocation);
    gl.enableVertexAttribArray(this.colorLocation);
    gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
    gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
  };
  EdgeProgram.prototype.computeIndices = function () {
    var l = this.array.length / ATTRIBUTES;
    var size = l + l / 2;
    var indices = new this.IndicesArray(size);
    for (var i = 0, c = 0; i < l; i += 4) {
      indices[c++] = i;
      indices[c++] = i + 1;
      indices[c++] = i + 2;
      indices[c++] = i + 2;
      indices[c++] = i + 1;
      indices[c++] = i + 3;
    }
    this.indicesArray = indices;
  };
  EdgeProgram.prototype.bufferData = function () {
    _super.prototype.bufferData.call(this);
    // Indices data
    var gl = this.gl;
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indicesArray, gl.STATIC_DRAW);
  };
  EdgeProgram.prototype.process = function (sourceData, targetData, data, hidden, offset) {
    if (hidden) {
      for (var i_1 = offset * STRIDE, l = i_1 + STRIDE; i_1 < l; i_1++) this.array[i_1] = 0;
      return;
    }
    var thickness = data.size || 1,
      x1 = sourceData.x,
      y1 = sourceData.y,
      x2 = targetData.x,
      y2 = targetData.y,
      color = (0, utils_1.floatColor)(data.color);
    // Computing normals
    var dx = x2 - x1,
      dy = y2 - y1;
    var len = dx * dx + dy * dy,
      n1 = 0,
      n2 = 0;
    if (len) {
      len = 1 / Math.sqrt(len);
      n1 = -dy * len * thickness;
      n2 = dx * len * thickness;
    }
    var i = POINTS * ATTRIBUTES * offset;
    var array = this.array;
    // First point
    array[i++] = x1;
    array[i++] = y1;
    array[i++] = n1;
    array[i++] = n2;
    array[i++] = color;
    // First point flipped
    array[i++] = x1;
    array[i++] = y1;
    array[i++] = -n1;
    array[i++] = -n2;
    array[i++] = color;
    // Second point
    array[i++] = x2;
    array[i++] = y2;
    array[i++] = n1;
    array[i++] = n2;
    array[i++] = color;
    // Second point flipped
    array[i++] = x2;
    array[i++] = y2;
    array[i++] = -n1;
    array[i++] = -n2;
    array[i] = color;
  };
  EdgeProgram.prototype.render = function (params) {
    if (this.hasNothingToRender()) return;
    var gl = this.gl;
    var program = this.program;
    gl.useProgram(program);
    gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
    gl.uniform1f(this.sqrtZoomRatioLocation, Math.sqrt(params.ratio));
    gl.uniform1f(this.correctionRatioLocation, params.correctionRatio);
    // Drawing:
    gl.drawElements(gl.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
  };
  return EdgeProgram;
}(edge_1.AbstractEdgeProgram);
exports.default = EdgeProgram;

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/programs/node.fast.js":
/*!******************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/programs/node.fast.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var utils_1 = __webpack_require__(/*! ../../../utils */ "./node_modules/sigma/utils/index.js");
var node_fast_vert_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/node.fast.vert.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/node.fast.vert.glsl.js"));
var node_fast_frag_glsl_1 = __importDefault(__webpack_require__(/*! ../shaders/node.fast.frag.glsl.js */ "./node_modules/sigma/rendering/webgl/shaders/node.fast.frag.glsl.js"));
var node_1 = __webpack_require__(/*! ./common/node */ "./node_modules/sigma/rendering/webgl/programs/common/node.js");
var POINTS = 1,
  ATTRIBUTES = 4;
var NodeFastProgram = /** @class */function (_super) {
  __extends(NodeFastProgram, _super);
  function NodeFastProgram(gl) {
    var _this = _super.call(this, gl, node_fast_vert_glsl_1.default, node_fast_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
    _this.bind();
    return _this;
  }
  NodeFastProgram.prototype.process = function (data, hidden, offset) {
    var array = this.array;
    var i = offset * POINTS * ATTRIBUTES;
    if (hidden) {
      array[i++] = 0;
      array[i++] = 0;
      array[i++] = 0;
      array[i++] = 0;
      return;
    }
    var color = (0, utils_1.floatColor)(data.color);
    array[i++] = data.x;
    array[i++] = data.y;
    array[i++] = data.size;
    array[i] = color;
  };
  NodeFastProgram.prototype.render = function (params) {
    if (this.hasNothingToRender()) return;
    var gl = this.gl;
    var program = this.program;
    gl.useProgram(program);
    gl.uniform1f(this.ratioLocation, 1 / Math.sqrt(params.ratio));
    gl.uniform1f(this.scaleLocation, params.scalingRatio);
    gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
    gl.drawArrays(gl.POINTS, 0, this.array.length / ATTRIBUTES);
  };
  return NodeFastProgram;
}(node_1.AbstractNodeProgram);
exports.default = NodeFastProgram;

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.frag.glsl.js":
/*!********************************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.frag.glsl.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(() => {
  "use strict";

  var e = {
      d: (o, r) => {
        for (var t in r) e.o(r, t) && !e.o(o, t) && Object.defineProperty(o, t, {
          enumerable: !0,
          get: r[t]
        });
      },
      o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
      r: e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }
    },
    o = {};
  e.r(o), e.d(o, {
    default: () => r
  });
  const r = "precision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
  module.exports = o;
})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.vert.glsl.js":
/*!********************************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.vert.glsl.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(() => {
  "use strict";

  var a = {
      d: (e, t) => {
        for (var o in t) a.o(t, o) && !a.o(e, o) && Object.defineProperty(e, o, {
          enumerable: !0,
          get: t[o]
        });
      },
      o: (a, e) => Object.prototype.hasOwnProperty.call(a, e),
      r: a => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(a, "__esModule", {
          value: !0
        });
      }
    },
    e = {};
  a.r(e), a.d(e, {
    default: () => t
  });
  const t = "attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_radius;\nattribute vec4 a_color;\nattribute vec3 a_barycentric;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadWidthLengthRatio = 0.66;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl and\n  // edge.clamped.vert.glsl. Please read it to get better comments on what's\n  // happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n  float adaptedWebGLNodeRadius = a_radius * 2.0 * u_correctionRatio * u_sqrtZoomRatio;\n  float adaptedWebGLArrowHeadLength = adaptedWebGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n  float adaptedWebGLArrowHeadHalfWidth = adaptedWebGLArrowHeadLength * arrowHeadWidthLengthRatio / 2.0;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * (adaptedWebGLNodeRadius * unitNormal.y)\n    + db * ((adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.y + adaptedWebGLArrowHeadHalfWidth * unitNormal.x)\n    + dc * ((adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.y - adaptedWebGLArrowHeadHalfWidth * unitNormal.x),\n\n      da * (-adaptedWebGLNodeRadius * unitNormal.x)\n    + db * (-(adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.x + adaptedWebGLArrowHeadHalfWidth * unitNormal.y)\n    + dc * (-(adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.x - adaptedWebGLArrowHeadHalfWidth * unitNormal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
  module.exports = e;
})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/edge.clamped.vert.glsl.js":
/*!******************************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/edge.clamped.vert.glsl.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(() => {
  "use strict";

  var e = {
      d: (o, n) => {
        for (var t in n) e.o(n, t) && !e.o(o, t) && Object.defineProperty(o, t, {
          enumerable: !0,
          get: n[t]
        });
      },
      o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
      r: e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }
    },
    o = {};
  e.r(o), e.d(o, {
    default: () => n
  });
  const n = "attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\nattribute float a_radius;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n\n  // Here, we move the point to leave space for the arrow head:\n  float direction = sign(a_radius);\n  float adaptedWebGLNodeRadius = direction * a_radius * 2.0 * u_correctionRatio * u_sqrtZoomRatio;\n  float adaptedWebGLArrowHeadLength = adaptedWebGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n\n  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * adaptedWebGLThickness + compensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_sqrtZoomRatio;\n\n  v_normal = unitNormal;\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
  module.exports = o;
})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/edge.frag.glsl.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/edge.frag.glsl.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(() => {
  "use strict";

  var e = {
      d: (n, t) => {
        for (var o in t) e.o(t, o) && !e.o(n, o) && Object.defineProperty(n, o, {
          enumerable: !0,
          get: t[o]
        });
      },
      o: (e, n) => Object.prototype.hasOwnProperty.call(e, n),
      r: e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }
    },
    n = {};
  e.r(n), e.d(n, {
    default: () => t
  });
  const t = "precision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float feather = 0.001;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, transparent, t);\n}\n";
  module.exports = n;
})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/edge.vert.glsl.js":
/*!**********************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/edge.vert.glsl.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(() => {
  "use strict";

  var e = {
      d: (n, o) => {
        for (var t in o) e.o(o, t) && !e.o(n, t) && Object.defineProperty(n, t, {
          enumerable: !0,
          get: o[t]
        });
      },
      o: (e, n) => Object.prototype.hasOwnProperty.call(e, n),
      r: e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }
    },
    n = {};
  e.r(n), e.d(n, {
    default: () => o
  });
  const o = 'attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // We require edges to be at least `minThickness` pixels thick *on screen*\n  // (so we need to compensate the SQRT zoom ratio):\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n\n  // Then, we need to retrieve the normalized thickness of the edge in the WebGL\n  // referential (in a ([0, 1], [0, 1]) space), using our "magic" correction\n  // ratio:\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n\n  // Finally, we adapt the edge thickness to the "SQRT rule" in sigma (so that\n  // items are not too big when zoomed in, and not too small when zoomed out).\n  // The exact computation should be `adapted = value * zoom / sqrt(zoom)`, but\n  // it\'s simpler like this:\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * adaptedWebGLThickness, 1)).xy, 0, 1);\n\n  // For the fragment shader though, we need a thickness that takes the "magic"\n  // correction ratio into account (as in webGLThickness), but so that the\n  // antialiasing effect does not depend on the zoom level. So here\'s yet\n  // another thickness version:\n  v_thickness = webGLThickness / u_sqrtZoomRatio;\n\n  v_normal = unitNormal;\n  v_color = a_color;\n  v_color.a *= bias;\n}\n';
  module.exports = n;
})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/node.fast.frag.glsl.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/node.fast.frag.glsl.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(() => {
  "use strict";

  var e = {
      d: (n, o) => {
        for (var t in o) e.o(o, t) && !e.o(n, t) && Object.defineProperty(n, t, {
          enumerable: !0,
          get: o[t]
        });
      },
      o: (e, n) => Object.prototype.hasOwnProperty.call(e, n),
      r: e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }
    },
    n = {};
  e.r(n), e.d(n, {
    default: () => o
  });
  const o = "precision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float radius = 0.5;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = radius - length(m);\n\n  float t = 0.0;\n  if (dist > v_border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / v_border;\n\n  gl_FragColor = mix(transparent, v_color, t);\n}\n";
  module.exports = n;
})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/node.fast.vert.glsl.js":
/*!***************************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/node.fast.vert.glsl.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(() => {
  "use strict";

  var o = {
      d: (t, e) => {
        for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
          enumerable: !0,
          get: e[n]
        });
      },
      o: (o, t) => Object.prototype.hasOwnProperty.call(o, t),
      r: o => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(o, "__esModule", {
          value: !0
        });
      }
    },
    t = {};
  o.r(t), o.d(t, {
    default: () => e
  });
  const e = "attribute vec2 a_position;\nattribute float a_size;\nattribute vec4 a_color;\n\nuniform float u_ratio;\nuniform float u_scale;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size * u_ratio * u_scale * 2.0;\n\n  v_border = (1.0 / u_ratio) * (0.5 / a_size);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
  module.exports = t;
})();

/***/ }),

/***/ "./node_modules/sigma/rendering/webgl/shaders/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/sigma/rendering/webgl/shaders/utils.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Sigma.js Shader Utils
 * ======================
 *
 * Code used to load sigma's shaders.
 * @module
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadProgram = exports.loadFragmentShader = exports.loadVertexShader = void 0;
/**
 * Function used to load a shader.
 */
function loadShader(type, gl, source) {
  var glType = type === "VERTEX" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
  // Creating the shader
  var shader = gl.createShader(glType);
  if (shader === null) {
    throw new Error("loadShader: error while creating the shader");
  }
  // Loading source
  gl.shaderSource(shader, source);
  // Compiling the shader
  gl.compileShader(shader);
  // Retrieving compilation status
  var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  // Throwing if something went awry
  if (!successfullyCompiled) {
    var infoLog = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("loadShader: error while compiling the shader:\n".concat(infoLog, "\n").concat(source));
  }
  return shader;
}
function loadVertexShader(gl, source) {
  return loadShader("VERTEX", gl, source);
}
exports.loadVertexShader = loadVertexShader;
function loadFragmentShader(gl, source) {
  return loadShader("FRAGMENT", gl, source);
}
exports.loadFragmentShader = loadFragmentShader;
/**
 * Function used to load a program.
 */
function loadProgram(gl, shaders) {
  var program = gl.createProgram();
  if (program === null) {
    throw new Error("loadProgram: error while creating the program.");
  }
  var i, l;
  // Attaching the shaders
  for (i = 0, l = shaders.length; i < l; i++) gl.attachShader(program, shaders[i]);
  gl.linkProgram(program);
  // Checking status
  var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!successfullyLinked) {
    gl.deleteProgram(program);
    throw new Error("loadProgram: error while linking the program.");
  }
  return program;
}
exports.loadProgram = loadProgram;

/***/ }),

/***/ "./node_modules/sigma/settings.js":
/*!****************************************!*\
  !*** ./node_modules/sigma/settings.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveSettings = exports.validateSettings = exports.DEFAULT_EDGE_PROGRAM_CLASSES = exports.DEFAULT_NODE_PROGRAM_CLASSES = exports.DEFAULT_SETTINGS = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/sigma/utils/index.js");
var label_1 = __importDefault(__webpack_require__(/*! ./rendering/canvas/label */ "./node_modules/sigma/rendering/canvas/label.js"));
var hover_1 = __importDefault(__webpack_require__(/*! ./rendering/canvas/hover */ "./node_modules/sigma/rendering/canvas/hover.js"));
var edge_label_1 = __importDefault(__webpack_require__(/*! ./rendering/canvas/edge-label */ "./node_modules/sigma/rendering/canvas/edge-label.js"));
var node_fast_1 = __importDefault(__webpack_require__(/*! ./rendering/webgl/programs/node.fast */ "./node_modules/sigma/rendering/webgl/programs/node.fast.js"));
var edge_1 = __importDefault(__webpack_require__(/*! ./rendering/webgl/programs/edge */ "./node_modules/sigma/rendering/webgl/programs/edge.js"));
var edge_arrow_1 = __importDefault(__webpack_require__(/*! ./rendering/webgl/programs/edge.arrow */ "./node_modules/sigma/rendering/webgl/programs/edge.arrow.js"));
exports.DEFAULT_SETTINGS = {
  // Performance
  hideEdgesOnMove: false,
  hideLabelsOnMove: false,
  renderLabels: true,
  renderEdgeLabels: false,
  enableEdgeClickEvents: false,
  enableEdgeWheelEvents: false,
  enableEdgeHoverEvents: false,
  // Component rendering
  defaultNodeColor: "#999",
  defaultNodeType: "circle",
  defaultEdgeColor: "#ccc",
  defaultEdgeType: "line",
  labelFont: "Arial",
  labelSize: 14,
  labelWeight: "normal",
  labelColor: {
    color: "#000"
  },
  edgeLabelFont: "Arial",
  edgeLabelSize: 14,
  edgeLabelWeight: "normal",
  edgeLabelColor: {
    attribute: "color"
  },
  stagePadding: 30,
  // Labels
  labelDensity: 1,
  labelGridCellSize: 100,
  labelRenderedSizeThreshold: 6,
  // Reducers
  nodeReducer: null,
  edgeReducer: null,
  // Features
  zIndex: false,
  minCameraRatio: null,
  maxCameraRatio: null,
  // Renderers
  labelRenderer: label_1.default,
  hoverRenderer: hover_1.default,
  edgeLabelRenderer: edge_label_1.default,
  // Lifecycle
  allowInvalidContainer: false,
  // Program classes
  nodeProgramClasses: {},
  nodeHoverProgramClasses: {},
  edgeProgramClasses: {}
};
exports.DEFAULT_NODE_PROGRAM_CLASSES = {
  circle: node_fast_1.default
};
exports.DEFAULT_EDGE_PROGRAM_CLASSES = {
  arrow: edge_arrow_1.default,
  line: edge_1.default
};
function validateSettings(settings) {
  if (typeof settings.labelDensity !== "number" || settings.labelDensity < 0) {
    throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
  }
  var minCameraRatio = settings.minCameraRatio,
    maxCameraRatio = settings.maxCameraRatio;
  if (typeof minCameraRatio === "number" && typeof maxCameraRatio === "number" && maxCameraRatio < minCameraRatio) {
    throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
  }
}
exports.validateSettings = validateSettings;
function resolveSettings(settings) {
  var resolvedSettings = (0, utils_1.assign)({}, exports.DEFAULT_SETTINGS, settings);
  resolvedSettings.nodeProgramClasses = (0, utils_1.assign)({}, exports.DEFAULT_NODE_PROGRAM_CLASSES, resolvedSettings.nodeProgramClasses);
  resolvedSettings.edgeProgramClasses = (0, utils_1.assign)({}, exports.DEFAULT_EDGE_PROGRAM_CLASSES, resolvedSettings.edgeProgramClasses);
  return resolvedSettings;
}
exports.resolveSettings = resolveSettings;

/***/ }),

/***/ "./node_modules/sigma/sigma.js":
/*!*************************************!*\
  !*** ./node_modules/sigma/sigma.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var extend_1 = __importDefault(__webpack_require__(/*! @yomguithereal/helpers/extend */ "./node_modules/@yomguithereal/helpers/extend.js"));
var camera_1 = __importDefault(__webpack_require__(/*! ./core/camera */ "./node_modules/sigma/core/camera.js"));
var mouse_1 = __importDefault(__webpack_require__(/*! ./core/captors/mouse */ "./node_modules/sigma/core/captors/mouse.js"));
var quadtree_1 = __importDefault(__webpack_require__(/*! ./core/quadtree */ "./node_modules/sigma/core/quadtree.js"));
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/sigma/types.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/sigma/utils/index.js");
var labels_1 = __webpack_require__(/*! ./core/labels */ "./node_modules/sigma/core/labels.js");
var settings_1 = __webpack_require__(/*! ./settings */ "./node_modules/sigma/settings.js");
var touch_1 = __importDefault(__webpack_require__(/*! ./core/captors/touch */ "./node_modules/sigma/core/captors/touch.js"));
var matrices_1 = __webpack_require__(/*! ./utils/matrices */ "./node_modules/sigma/utils/matrices.js");
var edge_collisions_1 = __webpack_require__(/*! ./utils/edge-collisions */ "./node_modules/sigma/utils/edge-collisions.js");
/**
 * Constants.
 */
var X_LABEL_MARGIN = 150;
var Y_LABEL_MARGIN = 50;
/**
 * Important functions.
 */
function applyNodeDefaults(settings, key, data) {
  if (!data.hasOwnProperty("x") || !data.hasOwnProperty("y")) throw new Error("Sigma: could not find a valid position (x, y) for node \"".concat(key, "\". All your nodes must have a number \"x\" and \"y\". Maybe your forgot to apply a layout or your \"nodeReducer\" is not returning the correct data?"));
  if (!data.color) data.color = settings.defaultNodeColor;
  if (!data.label && data.label !== "") data.label = null;
  if (data.label !== undefined && data.label !== null) data.label = "" + data.label;else data.label = null;
  if (!data.size) data.size = 2;
  if (!data.hasOwnProperty("hidden")) data.hidden = false;
  if (!data.hasOwnProperty("highlighted")) data.highlighted = false;
  if (!data.hasOwnProperty("forceLabel")) data.forceLabel = false;
  if (!data.type || data.type === "") data.type = settings.defaultNodeType;
  if (!data.zIndex) data.zIndex = 0;
  return data;
}
function applyEdgeDefaults(settings, key, data) {
  if (!data.color) data.color = settings.defaultEdgeColor;
  if (!data.label) data.label = "";
  if (!data.size) data.size = 0.5;
  if (!data.hasOwnProperty("hidden")) data.hidden = false;
  if (!data.hasOwnProperty("forceLabel")) data.forceLabel = false;
  if (!data.type || data.type === "") data.type = settings.defaultEdgeType;
  if (!data.zIndex) data.zIndex = 0;
  return data;
}
/**
 * Main class.
 *
 * @constructor
 * @param {Graph}       graph     - Graph to render.
 * @param {HTMLElement} container - DOM container in which to render.
 * @param {object}      settings  - Optional settings.
 */
var Sigma = /** @class */function (_super) {
  __extends(Sigma, _super);
  function Sigma(graph, container, settings) {
    if (settings === void 0) {
      settings = {};
    }
    var _this = _super.call(this) || this;
    _this.elements = {};
    _this.canvasContexts = {};
    _this.webGLContexts = {};
    _this.activeListeners = {};
    _this.quadtree = new quadtree_1.default();
    _this.labelGrid = new labels_1.LabelGrid();
    _this.nodeDataCache = {};
    _this.edgeDataCache = {};
    _this.nodesWithForcedLabels = [];
    _this.edgesWithForcedLabels = [];
    _this.nodeExtent = {
      x: [0, 1],
      y: [0, 1]
    };
    _this.matrix = (0, matrices_1.identity)();
    _this.invMatrix = (0, matrices_1.identity)();
    _this.correctionRatio = 1;
    _this.customBBox = null;
    _this.normalizationFunction = (0, utils_1.createNormalizationFunction)({
      x: [0, 1],
      y: [0, 1]
    });
    // Cache:
    _this.cameraSizeRatio = 1;
    // Starting dimensions and pixel ratio
    _this.width = 0;
    _this.height = 0;
    _this.pixelRatio = (0, utils_1.getPixelRatio)();
    // State
    _this.displayedLabels = new Set();
    _this.highlightedNodes = new Set();
    _this.hoveredNode = null;
    _this.hoveredEdge = null;
    _this.renderFrame = null;
    _this.renderHighlightedNodesFrame = null;
    _this.needToProcess = false;
    _this.needToSoftProcess = false;
    _this.checkEdgesEventsFrame = null;
    // Programs
    _this.nodePrograms = {};
    _this.nodeHoverPrograms = {};
    _this.edgePrograms = {};
    // Resolving settings
    _this.settings = (0, settings_1.resolveSettings)(settings);
    // Validating
    (0, settings_1.validateSettings)(_this.settings);
    (0, utils_1.validateGraph)(graph);
    if (!(container instanceof HTMLElement)) throw new Error("Sigma: container should be an html element.");
    // Properties
    _this.graph = graph;
    _this.container = container;
    // Initializing contexts
    _this.createWebGLContext("edges", {
      preserveDrawingBuffer: true
    });
    _this.createCanvasContext("edgeLabels");
    _this.createWebGLContext("nodes");
    _this.createCanvasContext("labels");
    _this.createCanvasContext("hovers");
    _this.createWebGLContext("hoverNodes");
    _this.createCanvasContext("mouse");
    // Blending
    for (var key in _this.webGLContexts) {
      var gl = _this.webGLContexts[key];
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.BLEND);
    }
    // Loading programs
    for (var type in _this.settings.nodeProgramClasses) {
      var NodeProgramClass = _this.settings.nodeProgramClasses[type];
      _this.nodePrograms[type] = new NodeProgramClass(_this.webGLContexts.nodes, _this);
      var NodeHoverProgram = NodeProgramClass;
      if (type in _this.settings.nodeHoverProgramClasses) {
        NodeHoverProgram = _this.settings.nodeHoverProgramClasses[type];
      }
      _this.nodeHoverPrograms[type] = new NodeHoverProgram(_this.webGLContexts.hoverNodes, _this);
    }
    for (var type in _this.settings.edgeProgramClasses) {
      var EdgeProgramClass = _this.settings.edgeProgramClasses[type];
      _this.edgePrograms[type] = new EdgeProgramClass(_this.webGLContexts.edges, _this);
    }
    // Initial resize
    _this.resize();
    // Initializing the camera
    _this.camera = new camera_1.default();
    // Binding camera events
    _this.bindCameraHandlers();
    // Initializing captors
    _this.mouseCaptor = new mouse_1.default(_this.elements.mouse, _this);
    _this.touchCaptor = new touch_1.default(_this.elements.mouse, _this);
    // Binding event handlers
    _this.bindEventHandlers();
    // Binding graph handlers
    _this.bindGraphHandlers();
    // Trigger eventual settings-related things
    _this.handleSettingsUpdate();
    // Processing data for the first time & render
    _this.process();
    _this.render();
    return _this;
  }
  /**---------------------------------------------------------------------------
   * Internal methods.
   **---------------------------------------------------------------------------
   */
  /**
   * Internal function used to create a canvas element.
   * @param  {string} id - Context's id.
   * @return {Sigma}
   */
  Sigma.prototype.createCanvas = function (id) {
    var canvas = (0, utils_1.createElement)("canvas", {
      position: "absolute"
    }, {
      class: "sigma-".concat(id)
    });
    this.elements[id] = canvas;
    this.container.appendChild(canvas);
    return canvas;
  };
  /**
   * Internal function used to create a canvas context and add the relevant
   * DOM elements.
   *
   * @param  {string} id - Context's id.
   * @return {Sigma}
   */
  Sigma.prototype.createCanvasContext = function (id) {
    var canvas = this.createCanvas(id);
    var contextOptions = {
      preserveDrawingBuffer: false,
      antialias: false
    };
    this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
    return this;
  };
  /**
   * Internal function used to create a canvas context and add the relevant
   * DOM elements.
   *
   * @param  {string}  id      - Context's id.
   * @param  {object?} options - #getContext params to override (optional)
   * @return {Sigma}
   */
  Sigma.prototype.createWebGLContext = function (id, options) {
    var canvas = this.createCanvas(id);
    var contextOptions = __assign({
      preserveDrawingBuffer: false,
      antialias: false
    }, options || {});
    var context;
    // First we try webgl2 for an easy performance boost
    context = canvas.getContext("webgl2", contextOptions);
    // Else we fall back to webgl
    if (!context) context = canvas.getContext("webgl", contextOptions);
    // Edge, I am looking right at you...
    if (!context) context = canvas.getContext("experimental-webgl", contextOptions);
    this.webGLContexts[id] = context;
    return this;
  };
  /**
   * Method binding camera handlers.
   *
   * @return {Sigma}
   */
  Sigma.prototype.bindCameraHandlers = function () {
    var _this = this;
    this.activeListeners.camera = function () {
      _this._scheduleRefresh();
    };
    this.camera.on("updated", this.activeListeners.camera);
    return this;
  };
  /**
   * Method that checks whether or not a node collides with a given position.
   */
  Sigma.prototype.mouseIsOnNode = function (_a, _b, size) {
    var x = _a.x,
      y = _a.y;
    var nodeX = _b.x,
      nodeY = _b.y;
    return x > nodeX - size && x < nodeX + size && y > nodeY - size && y < nodeY + size && Math.sqrt(Math.pow(x - nodeX, 2) + Math.pow(y - nodeY, 2)) < size;
  };
  /**
   * Method that returns all nodes in quad at a given position.
   */
  Sigma.prototype.getQuadNodes = function (position) {
    var mouseGraphPosition = this.viewportToFramedGraph(position);
    return this.quadtree.point(mouseGraphPosition.x, 1 - mouseGraphPosition.y);
  };
  /**
   * Method that returns the closest node to a given position.
   */
  Sigma.prototype.getNodeAtPosition = function (position) {
    var x = position.x,
      y = position.y;
    var quadNodes = this.getQuadNodes(position);
    // We will hover the node whose center is closest to mouse
    var minDistance = Infinity,
      nodeAtPosition = null;
    for (var i = 0, l = quadNodes.length; i < l; i++) {
      var node = quadNodes[i];
      var data = this.nodeDataCache[node];
      var nodePosition = this.framedGraphToViewport(data);
      var size = this.scaleSize(data.size);
      if (!data.hidden && this.mouseIsOnNode(position, nodePosition, size)) {
        var distance = Math.sqrt(Math.pow(x - nodePosition.x, 2) + Math.pow(y - nodePosition.y, 2));
        // TODO: sort by min size also for cases where center is the same
        if (distance < minDistance) {
          minDistance = distance;
          nodeAtPosition = node;
        }
      }
    }
    return nodeAtPosition;
  };
  /**
   * Method binding event handlers.
   *
   * @return {Sigma}
   */
  Sigma.prototype.bindEventHandlers = function () {
    var _this = this;
    // Handling window resize
    this.activeListeners.handleResize = function () {
      _this.needToSoftProcess = true;
      _this._scheduleRefresh();
    };
    window.addEventListener("resize", this.activeListeners.handleResize);
    // Handling mouse move
    this.activeListeners.handleMove = function (e) {
      var baseEvent = {
        event: e,
        preventSigmaDefault: function () {
          e.preventSigmaDefault();
        }
      };
      var nodeToHover = _this.getNodeAtPosition(e);
      if (nodeToHover && _this.hoveredNode !== nodeToHover && !_this.nodeDataCache[nodeToHover].hidden) {
        // Handling passing from one node to the other directly
        if (_this.hoveredNode) _this.emit("leaveNode", __assign(__assign({}, baseEvent), {
          node: _this.hoveredNode
        }));
        _this.hoveredNode = nodeToHover;
        _this.emit("enterNode", __assign(__assign({}, baseEvent), {
          node: nodeToHover
        }));
        _this.scheduleHighlightedNodesRender();
        return;
      }
      // Checking if the hovered node is still hovered
      if (_this.hoveredNode) {
        var data = _this.nodeDataCache[_this.hoveredNode];
        var pos = _this.framedGraphToViewport(data);
        var size = _this.scaleSize(data.size);
        if (!_this.mouseIsOnNode(e, pos, size)) {
          var node = _this.hoveredNode;
          _this.hoveredNode = null;
          _this.emit("leaveNode", __assign(__assign({}, baseEvent), {
            node: node
          }));
          _this.scheduleHighlightedNodesRender();
          return;
        }
      }
      if (_this.settings.enableEdgeHoverEvents === true) {
        _this.checkEdgeHoverEvents(baseEvent);
      } else if (_this.settings.enableEdgeHoverEvents === "debounce") {
        if (!_this.checkEdgesEventsFrame) _this.checkEdgesEventsFrame = (0, utils_1.requestFrame)(function () {
          _this.checkEdgeHoverEvents(baseEvent);
          _this.checkEdgesEventsFrame = null;
        });
      }
    };
    // Handling click
    var createMouseListener = function (eventType) {
      return function (e) {
        var baseEvent = {
          event: e,
          preventSigmaDefault: function () {
            e.preventSigmaDefault();
          }
        };
        var isFakeSigmaMouseEvent = e.original.isFakeSigmaMouseEvent;
        var nodeAtPosition = isFakeSigmaMouseEvent ? _this.getNodeAtPosition(e) : _this.hoveredNode;
        if (nodeAtPosition) return _this.emit("".concat(eventType, "Node"), __assign(__assign({}, baseEvent), {
          node: nodeAtPosition
        }));
        if (eventType === "wheel" ? _this.settings.enableEdgeWheelEvents : _this.settings.enableEdgeClickEvents) {
          var edge = _this.getEdgeAtPoint(e.x, e.y);
          if (edge) return _this.emit("".concat(eventType, "Edge"), __assign(__assign({}, baseEvent), {
            edge: edge
          }));
        }
        return _this.emit("".concat(eventType, "Stage"), baseEvent);
      };
    };
    this.activeListeners.handleClick = createMouseListener("click");
    this.activeListeners.handleRightClick = createMouseListener("rightClick");
    this.activeListeners.handleDoubleClick = createMouseListener("doubleClick");
    this.activeListeners.handleWheel = createMouseListener("wheel");
    this.activeListeners.handleDown = createMouseListener("down");
    this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
    this.mouseCaptor.on("click", this.activeListeners.handleClick);
    this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
    this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick);
    this.mouseCaptor.on("wheel", this.activeListeners.handleWheel);
    this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
    // TODO
    // Deal with Touch captor events
    return this;
  };
  /**
   * Method binding graph handlers
   *
   * @return {Sigma}
   */
  Sigma.prototype.bindGraphHandlers = function () {
    var _this = this;
    var graph = this.graph;
    this.activeListeners.graphUpdate = function () {
      _this.needToProcess = true;
      _this._scheduleRefresh();
    };
    this.activeListeners.softGraphUpdate = function () {
      _this.needToSoftProcess = true;
      _this._scheduleRefresh();
    };
    this.activeListeners.dropNodeGraphUpdate = function (e) {
      delete _this.nodeDataCache[e.key];
      if (_this.hoveredNode === e.key) _this.hoveredNode = null;
      _this.activeListeners.graphUpdate();
    };
    this.activeListeners.dropEdgeGraphUpdate = function (e) {
      delete _this.edgeDataCache[e.key];
      if (_this.hoveredEdge === e.key) _this.hoveredEdge = null;
      _this.activeListeners.graphUpdate();
    };
    this.activeListeners.clearEdgesGraphUpdate = function () {
      _this.edgeDataCache = {};
      _this.hoveredEdge = null;
      _this.activeListeners.graphUpdate();
    };
    this.activeListeners.clearGraphUpdate = function () {
      _this.nodeDataCache = {};
      _this.hoveredNode = null;
      _this.activeListeners.clearEdgesGraphUpdate();
    };
    graph.on("nodeAdded", this.activeListeners.graphUpdate);
    graph.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
    graph.on("nodeAttributesUpdated", this.activeListeners.softGraphUpdate);
    graph.on("eachNodeAttributesUpdated", this.activeListeners.graphUpdate);
    graph.on("edgeAdded", this.activeListeners.graphUpdate);
    graph.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
    graph.on("edgeAttributesUpdated", this.activeListeners.softGraphUpdate);
    graph.on("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate);
    graph.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
    graph.on("cleared", this.activeListeners.clearGraphUpdate);
    return this;
  };
  /**
   * Method used to unbind handlers from the graph.
   *
   * @return {undefined}
   */
  Sigma.prototype.unbindGraphHandlers = function () {
    var graph = this.graph;
    graph.removeListener("nodeAdded", this.activeListeners.graphUpdate);
    graph.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
    graph.removeListener("nodeAttributesUpdated", this.activeListeners.softGraphUpdate);
    graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.graphUpdate);
    graph.removeListener("edgeAdded", this.activeListeners.graphUpdate);
    graph.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
    graph.removeListener("edgeAttributesUpdated", this.activeListeners.softGraphUpdate);
    graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate);
    graph.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
    graph.removeListener("cleared", this.activeListeners.clearGraphUpdate);
  };
  /**
   * Method dealing with "leaveEdge" and "enterEdge" events.
   *
   * @return {Sigma}
   */
  Sigma.prototype.checkEdgeHoverEvents = function (payload) {
    var edgeToHover = this.hoveredNode ? null : this.getEdgeAtPoint(payload.event.x, payload.event.y);
    if (edgeToHover !== this.hoveredEdge) {
      if (this.hoveredEdge) this.emit("leaveEdge", __assign(__assign({}, payload), {
        edge: this.hoveredEdge
      }));
      if (edgeToHover) this.emit("enterEdge", __assign(__assign({}, payload), {
        edge: edgeToHover
      }));
      this.hoveredEdge = edgeToHover;
    }
    return this;
  };
  /**
   * Method looking for an edge colliding with a given point at (x, y). Returns
   * the key of the edge if any, or null else.
   */
  Sigma.prototype.getEdgeAtPoint = function (x, y) {
    var e_1, _a;
    var _this = this;
    var _b = this,
      edgeDataCache = _b.edgeDataCache,
      nodeDataCache = _b.nodeDataCache;
    // Check first that pixel is colored:
    // Note that mouse positions must be corrected by pixel ratio to correctly
    // index the drawing buffer.
    if (!(0, edge_collisions_1.isPixelColored)(this.webGLContexts.edges, x * this.pixelRatio, y * this.pixelRatio)) return null;
    // Check for each edge if it collides with the point:
    var _c = this.viewportToGraph({
        x: x,
        y: y
      }),
      graphX = _c.x,
      graphY = _c.y;
    // To translate edge thicknesses to the graph system, we observe by how much
    // the length of a non-null edge is transformed to between the graph system
    // and the viewport system:
    var transformationRatio = 0;
    this.graph.someEdge(function (key, _, sourceId, targetId, _a, _b) {
      var xs = _a.x,
        ys = _a.y;
      var xt = _b.x,
        yt = _b.y;
      if (edgeDataCache[key].hidden || nodeDataCache[sourceId].hidden || nodeDataCache[targetId].hidden) return false;
      if (xs !== xt || ys !== yt) {
        var graphLength = Math.sqrt(Math.pow(xt - xs, 2) + Math.pow(yt - ys, 2));
        var _c = _this.graphToViewport({
            x: xs,
            y: ys
          }),
          vp_xs = _c.x,
          vp_ys = _c.y;
        var _d = _this.graphToViewport({
            x: xt,
            y: yt
          }),
          vp_xt = _d.x,
          vp_yt = _d.y;
        var viewportLength = Math.sqrt(Math.pow(vp_xt - vp_xs, 2) + Math.pow(vp_yt - vp_ys, 2));
        transformationRatio = graphLength / viewportLength;
        return true;
      }
    });
    // If no non-null edge has been found, return null:
    if (!transformationRatio) return null;
    // Now we can look for matching edges:
    var edges = this.graph.filterEdges(function (key, edgeAttributes, sourceId, targetId, sourcePosition, targetPosition) {
      if (edgeDataCache[key].hidden || nodeDataCache[sourceId].hidden || nodeDataCache[targetId].hidden) return false;
      if ((0, edge_collisions_1.doEdgeCollideWithPoint)(graphX, graphY, sourcePosition.x, sourcePosition.y, targetPosition.x, targetPosition.y,
      // Adapt the edge size to the zoom ratio:
      edgeDataCache[key].size * transformationRatio / _this.cameraSizeRatio)) {
        return true;
      }
    });
    if (edges.length === 0) return null; // no edges found
    // if none of the edges have a zIndex, selected the most recently created one to match the rendering order
    var selectedEdge = edges[edges.length - 1];
    // otherwise select edge with highest zIndex
    var highestZIndex = -Infinity;
    try {
      for (var edges_1 = __values(edges), edges_1_1 = edges_1.next(); !edges_1_1.done; edges_1_1 = edges_1.next()) {
        var edge = edges_1_1.value;
        var zIndex = this.graph.getEdgeAttribute(edge, "zIndex");
        if (zIndex >= highestZIndex) {
          selectedEdge = edge;
          highestZIndex = zIndex;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (edges_1_1 && !edges_1_1.done && (_a = edges_1.return)) _a.call(edges_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return selectedEdge;
  };
  /**
   * Method used to process the whole graph's data.
   *
   * @return {Sigma}
   */
  Sigma.prototype.process = function (keepArrays) {
    var _this = this;
    if (keepArrays === void 0) {
      keepArrays = false;
    }
    var graph = this.graph;
    var settings = this.settings;
    var dimensions = this.getDimensions();
    var nodeZExtent = [Infinity, -Infinity];
    var edgeZExtent = [Infinity, -Infinity];
    // Clearing the quad
    this.quadtree.clear();
    // Resetting the label grid
    // TODO: it's probably better to do this explicitly or on resizes for layout and anims
    this.labelGrid.resizeAndClear(dimensions, settings.labelGridCellSize);
    // Clear the highlightedNodes
    this.highlightedNodes = new Set();
    // Computing extents
    this.nodeExtent = (0, utils_1.graphExtent)(graph);
    // Resetting `forceLabel` indices
    this.nodesWithForcedLabels = [];
    this.edgesWithForcedLabels = [];
    // NOTE: it is important to compute this matrix after computing the node's extent
    // because #.getGraphDimensions relies on it
    var nullCamera = new camera_1.default();
    var nullCameraMatrix = (0, utils_1.matrixFromCamera)(nullCamera.getState(), this.getDimensions(), this.getGraphDimensions(), this.getSetting("stagePadding") || 0);
    // Rescaling function
    this.normalizationFunction = (0, utils_1.createNormalizationFunction)(this.customBBox || this.nodeExtent);
    var nodesPerPrograms = {};
    var nodes = graph.nodes();
    for (var i = 0, l = nodes.length; i < l; i++) {
      var node = nodes[i];
      // Node display data resolution:
      //   1. First we get the node's attributes
      //   2. We optionally reduce them using the function provided by the user
      //      Note that this function must return a total object and won't be merged
      //   3. We apply our defaults, while running some vital checks
      //   4. We apply the normalization function
      // We shallow copy node data to avoid dangerous behaviors from reducers
      var attr = Object.assign({}, graph.getNodeAttributes(node));
      if (settings.nodeReducer) attr = settings.nodeReducer(node, attr);
      var data = applyNodeDefaults(this.settings, node, attr);
      nodesPerPrograms[data.type] = (nodesPerPrograms[data.type] || 0) + 1;
      this.nodeDataCache[node] = data;
      this.normalizationFunction.applyTo(data);
      if (data.forceLabel) this.nodesWithForcedLabels.push(node);
      if (this.settings.zIndex) {
        if (data.zIndex < nodeZExtent[0]) nodeZExtent[0] = data.zIndex;
        if (data.zIndex > nodeZExtent[1]) nodeZExtent[1] = data.zIndex;
      }
    }
    for (var type in this.nodePrograms) {
      if (!this.nodePrograms.hasOwnProperty(type)) {
        throw new Error("Sigma: could not find a suitable program for node type \"".concat(type, "\"!"));
      }
      if (!keepArrays) this.nodePrograms[type].allocate(nodesPerPrograms[type] || 0);
      // We reset that count here, so that we can reuse it while calling the Program#process methods:
      nodesPerPrograms[type] = 0;
    }
    // Handling node z-index
    // TODO: z-index needs us to compute display data before hand
    if (this.settings.zIndex && nodeZExtent[0] !== nodeZExtent[1]) nodes = (0, utils_1.zIndexOrdering)(nodeZExtent, function (node) {
      return _this.nodeDataCache[node].zIndex;
    }, nodes);
    for (var i = 0, l = nodes.length; i < l; i++) {
      var node = nodes[i];
      var data = this.nodeDataCache[node];
      this.quadtree.add(node, data.x, 1 - data.y, data.size / this.width);
      if (typeof data.label === "string" && !data.hidden) this.labelGrid.add(node, data.size, this.framedGraphToViewport(data, {
        matrix: nullCameraMatrix
      }));
      var nodeProgram = this.nodePrograms[data.type];
      if (!nodeProgram) throw new Error("Sigma: could not find a suitable program for node type \"".concat(data.type, "\"!"));
      nodeProgram.process(data, data.hidden, nodesPerPrograms[data.type]++);
      // Save the node in the highlighted set if needed
      if (data.highlighted && !data.hidden) this.highlightedNodes.add(node);
    }
    this.labelGrid.organize();
    var edgesPerPrograms = {};
    var edges = graph.edges();
    for (var i = 0, l = edges.length; i < l; i++) {
      var edge = edges[i];
      // Edge display data resolution:
      //   1. First we get the edge's attributes
      //   2. We optionally reduce them using the function provided by the user
      //      Note that this function must return a total object and won't be merged
      //   3. We apply our defaults, while running some vital checks
      // We shallow copy edge data to avoid dangerous behaviors from reducers
      var attr = Object.assign({}, graph.getEdgeAttributes(edge));
      if (settings.edgeReducer) attr = settings.edgeReducer(edge, attr);
      var data = applyEdgeDefaults(this.settings, edge, attr);
      edgesPerPrograms[data.type] = (edgesPerPrograms[data.type] || 0) + 1;
      this.edgeDataCache[edge] = data;
      if (data.forceLabel && !data.hidden) this.edgesWithForcedLabels.push(edge);
      if (this.settings.zIndex) {
        if (data.zIndex < edgeZExtent[0]) edgeZExtent[0] = data.zIndex;
        if (data.zIndex > edgeZExtent[1]) edgeZExtent[1] = data.zIndex;
      }
    }
    for (var type in this.edgePrograms) {
      if (!this.edgePrograms.hasOwnProperty(type)) {
        throw new Error("Sigma: could not find a suitable program for edge type \"".concat(type, "\"!"));
      }
      if (!keepArrays) this.edgePrograms[type].allocate(edgesPerPrograms[type] || 0);
      // We reset that count here, so that we can reuse it while calling the Program#process methods:
      edgesPerPrograms[type] = 0;
    }
    // Handling edge z-index
    if (this.settings.zIndex && edgeZExtent[0] !== edgeZExtent[1]) edges = (0, utils_1.zIndexOrdering)(edgeZExtent, function (edge) {
      return _this.edgeDataCache[edge].zIndex;
    }, edges);
    for (var i = 0, l = edges.length; i < l; i++) {
      var edge = edges[i];
      var data = this.edgeDataCache[edge];
      var extremities = graph.extremities(edge),
        sourceData = this.nodeDataCache[extremities[0]],
        targetData = this.nodeDataCache[extremities[1]];
      var hidden = data.hidden || sourceData.hidden || targetData.hidden;
      this.edgePrograms[data.type].process(sourceData, targetData, data, hidden, edgesPerPrograms[data.type]++);
    }
    for (var type in this.edgePrograms) {
      var program = this.edgePrograms[type];
      if (!keepArrays && typeof program.computeIndices === "function") program.computeIndices();
    }
    return this;
  };
  /**
   * Method that backports potential settings updates where it's needed.
   * @private
   */
  Sigma.prototype.handleSettingsUpdate = function () {
    this.camera.minRatio = this.settings.minCameraRatio;
    this.camera.maxRatio = this.settings.maxCameraRatio;
    this.camera.setState(this.camera.validateState(this.camera.getState()));
    return this;
  };
  /**
   * Method that decides whether to reprocess graph or not, and then render the
   * graph.
   *
   * @return {Sigma}
   */
  Sigma.prototype._refresh = function () {
    // Do we need to process data?
    if (this.needToProcess) {
      this.process();
    } else if (this.needToSoftProcess) {
      this.process(true);
    }
    // Resetting state
    this.needToProcess = false;
    this.needToSoftProcess = false;
    // Rendering
    this.render();
    return this;
  };
  /**
   * Method that schedules a `_refresh` call if none has been scheduled yet. It
   * will then be processed next available frame.
   *
   * @return {Sigma}
   */
  Sigma.prototype._scheduleRefresh = function () {
    var _this = this;
    if (!this.renderFrame) {
      this.renderFrame = (0, utils_1.requestFrame)(function () {
        _this._refresh();
        _this.renderFrame = null;
      });
    }
    return this;
  };
  /**
   * Method used to render labels.
   *
   * @return {Sigma}
   */
  Sigma.prototype.renderLabels = function () {
    if (!this.settings.renderLabels) return this;
    var cameraState = this.camera.getState();
    // Selecting labels to draw
    var labelsToDisplay = this.labelGrid.getLabelsToDisplay(cameraState.ratio, this.settings.labelDensity);
    (0, extend_1.default)(labelsToDisplay, this.nodesWithForcedLabels);
    this.displayedLabels = new Set();
    // Drawing labels
    var context = this.canvasContexts.labels;
    for (var i = 0, l = labelsToDisplay.length; i < l; i++) {
      var node = labelsToDisplay[i];
      var data = this.nodeDataCache[node];
      // If the node was already drawn (like if it is eligible AND has
      // `forceLabel`), we don't want to draw it again
      // NOTE: we can do better probably
      if (this.displayedLabels.has(node)) continue;
      // If the node is hidden, we don't need to display its label obviously
      if (data.hidden) continue;
      var _a = this.framedGraphToViewport(data),
        x = _a.x,
        y = _a.y;
      // NOTE: we can cache the labels we need to render until the camera's ratio changes
      var size = this.scaleSize(data.size);
      // Is node big enough?
      if (!data.forceLabel && size < this.settings.labelRenderedSizeThreshold) continue;
      // Is node actually on screen (with some margin)
      // NOTE: we used to rely on the quadtree for this, but the coordinates
      // conversion make it unreliable and at that point we already converted
      // to viewport coordinates and since the label grid already culls the
      // number of potential labels to display this looks like a good
      // performance compromise.
      // NOTE: labelGrid.getLabelsToDisplay could probably optimize by not
      // considering cells obviously outside of the range of the current
      // view rectangle.
      if (x < -X_LABEL_MARGIN || x > this.width + X_LABEL_MARGIN || y < -Y_LABEL_MARGIN || y > this.height + Y_LABEL_MARGIN) continue;
      // Because displayed edge labels depend directly on actually rendered node
      // labels, we need to only add to this.displayedLabels nodes whose label
      // is rendered.
      // This makes this.displayedLabels depend on viewport, which might become
      // an issue once we start memoizing getLabelsToDisplay.
      this.displayedLabels.add(node);
      this.settings.labelRenderer(context, __assign(__assign({
        key: node
      }, data), {
        size: size,
        x: x,
        y: y
      }), this.settings);
    }
    return this;
  };
  /**
   * Method used to render edge labels, based on which node labels were
   * rendered.
   *
   * @return {Sigma}
   */
  Sigma.prototype.renderEdgeLabels = function () {
    if (!this.settings.renderEdgeLabels) return this;
    var context = this.canvasContexts.edgeLabels;
    // Clearing
    context.clearRect(0, 0, this.width, this.height);
    var edgeLabelsToDisplay = (0, labels_1.edgeLabelsToDisplayFromNodes)({
      graph: this.graph,
      hoveredNode: this.hoveredNode,
      displayedNodeLabels: this.displayedLabels,
      highlightedNodes: this.highlightedNodes
    }).concat(this.edgesWithForcedLabels);
    var displayedLabels = new Set();
    for (var i = 0, l = edgeLabelsToDisplay.length; i < l; i++) {
      var edge = edgeLabelsToDisplay[i],
        extremities = this.graph.extremities(edge),
        sourceData = this.nodeDataCache[extremities[0]],
        targetData = this.nodeDataCache[extremities[1]],
        edgeData = this.edgeDataCache[edge];
      // If the edge was already drawn (like if it is eligible AND has
      // `forceLabel`), we don't want to draw it again
      if (displayedLabels.has(edge)) continue;
      // If the edge is hidden we don't need to display its label
      // NOTE: the test on sourceData & targetData is probably paranoid at this point?
      if (edgeData.hidden || sourceData.hidden || targetData.hidden) {
        continue;
      }
      this.settings.edgeLabelRenderer(context, __assign(__assign({
        key: edge
      }, edgeData), {
        size: this.scaleSize(edgeData.size)
      }), __assign(__assign(__assign({
        key: extremities[0]
      }, sourceData), this.framedGraphToViewport(sourceData)), {
        size: this.scaleSize(sourceData.size)
      }), __assign(__assign(__assign({
        key: extremities[1]
      }, targetData), this.framedGraphToViewport(targetData)), {
        size: this.scaleSize(targetData.size)
      }), this.settings);
      displayedLabels.add(edge);
    }
    return this;
  };
  /**
   * Method used to render the highlighted nodes.
   *
   * @return {Sigma}
   */
  Sigma.prototype.renderHighlightedNodes = function () {
    var _this = this;
    var context = this.canvasContexts.hovers;
    // Clearing
    context.clearRect(0, 0, this.width, this.height);
    // Rendering
    var render = function (node) {
      var data = _this.nodeDataCache[node];
      var _a = _this.framedGraphToViewport(data),
        x = _a.x,
        y = _a.y;
      var size = _this.scaleSize(data.size);
      _this.settings.hoverRenderer(context, __assign(__assign({
        key: node
      }, data), {
        size: size,
        x: x,
        y: y
      }), _this.settings);
    };
    var nodesToRender = [];
    if (this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden) {
      nodesToRender.push(this.hoveredNode);
    }
    this.highlightedNodes.forEach(function (node) {
      // The hovered node has already been highlighted
      if (node !== _this.hoveredNode) nodesToRender.push(node);
    });
    // Draw labels:
    nodesToRender.forEach(function (node) {
      return render(node);
    });
    // Draw WebGL nodes on top of the labels:
    var nodesPerPrograms = {};
    // 1. Count nodes per type:
    nodesToRender.forEach(function (node) {
      var type = _this.nodeDataCache[node].type;
      nodesPerPrograms[type] = (nodesPerPrograms[type] || 0) + 1;
    });
    // 2. Allocate for each type for the proper number of nodes
    for (var type in this.nodeHoverPrograms) {
      this.nodeHoverPrograms[type].allocate(nodesPerPrograms[type] || 0);
      // Also reset count, to use when rendering:
      nodesPerPrograms[type] = 0;
    }
    // 3. Process all nodes to render:
    nodesToRender.forEach(function (node) {
      var data = _this.nodeDataCache[node];
      _this.nodeHoverPrograms[data.type].process(data, data.hidden, nodesPerPrograms[data.type]++);
    });
    // 4. Clear hovered nodes layer:
    this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
    // 5. Render:
    for (var type in this.nodeHoverPrograms) {
      var program = this.nodeHoverPrograms[type];
      program.bind();
      program.bufferData();
      program.render({
        matrix: this.matrix,
        width: this.width,
        height: this.height,
        ratio: this.camera.ratio,
        correctionRatio: this.correctionRatio / this.camera.ratio,
        scalingRatio: this.pixelRatio
      });
    }
  };
  /**
   * Method used to schedule a hover render.
   *
   */
  Sigma.prototype.scheduleHighlightedNodesRender = function () {
    var _this = this;
    if (this.renderHighlightedNodesFrame || this.renderFrame) return;
    this.renderHighlightedNodesFrame = (0, utils_1.requestFrame)(function () {
      // Resetting state
      _this.renderHighlightedNodesFrame = null;
      // Rendering
      _this.renderHighlightedNodes();
      _this.renderEdgeLabels();
    });
  };
  /**
   * Method used to render.
   *
   * @return {Sigma}
   */
  Sigma.prototype.render = function () {
    var _this = this;
    this.emit("beforeRender");
    var exitRender = function () {
      _this.emit("afterRender");
      return _this;
    };
    // If a render was scheduled, we cancel it
    if (this.renderFrame) {
      (0, utils_1.cancelFrame)(this.renderFrame);
      this.renderFrame = null;
      this.needToProcess = false;
      this.needToSoftProcess = false;
    }
    // First we need to resize
    this.resize();
    // Clearing the canvases
    this.clear();
    // Recomputing useful camera-related values:
    this.updateCachedValues();
    // If we have no nodes we can stop right there
    if (!this.graph.order) return exitRender();
    // TODO: improve this heuristic or move to the captor itself?
    // TODO: deal with the touch captor here as well
    var mouseCaptor = this.mouseCaptor;
    var moving = this.camera.isAnimated() || mouseCaptor.isMoving || mouseCaptor.draggedEvents || mouseCaptor.currentWheelDirection;
    // Then we need to extract a matrix from the camera
    var cameraState = this.camera.getState();
    var viewportDimensions = this.getDimensions();
    var graphDimensions = this.getGraphDimensions();
    var padding = this.getSetting("stagePadding") || 0;
    this.matrix = (0, utils_1.matrixFromCamera)(cameraState, viewportDimensions, graphDimensions, padding);
    this.invMatrix = (0, utils_1.matrixFromCamera)(cameraState, viewportDimensions, graphDimensions, padding, true);
    this.correctionRatio = (0, utils_1.getMatrixImpact)(this.matrix, cameraState, viewportDimensions);
    // Drawing nodes
    for (var type in this.nodePrograms) {
      var program = this.nodePrograms[type];
      program.bind();
      program.bufferData();
      program.render({
        matrix: this.matrix,
        width: this.width,
        height: this.height,
        ratio: cameraState.ratio,
        correctionRatio: this.correctionRatio / cameraState.ratio,
        scalingRatio: this.pixelRatio
      });
    }
    // Drawing edges
    if (!this.settings.hideEdgesOnMove || !moving) {
      for (var type in this.edgePrograms) {
        var program = this.edgePrograms[type];
        program.bind();
        program.bufferData();
        program.render({
          matrix: this.matrix,
          width: this.width,
          height: this.height,
          ratio: cameraState.ratio,
          correctionRatio: this.correctionRatio / cameraState.ratio,
          scalingRatio: this.pixelRatio
        });
      }
    }
    // Do not display labels on move per setting
    if (this.settings.hideLabelsOnMove && moving) return exitRender();
    this.renderLabels();
    this.renderEdgeLabels();
    this.renderHighlightedNodes();
    return exitRender();
  };
  /**
   * Internal method used to update expensive and therefore cached values
   * each time the camera state is updated.
   */
  Sigma.prototype.updateCachedValues = function () {
    var ratio = this.camera.getState().ratio;
    this.cameraSizeRatio = Math.sqrt(ratio);
  };
  /**---------------------------------------------------------------------------
   * Public API.
   **---------------------------------------------------------------------------
   */
  /**
   * Method returning the renderer's camera.
   *
   * @return {Camera}
   */
  Sigma.prototype.getCamera = function () {
    return this.camera;
  };
  /**
   * Method returning the container DOM element.
   *
   * @return {HTMLElement}
   */
  Sigma.prototype.getContainer = function () {
    return this.container;
  };
  /**
   * Method returning the renderer's graph.
   *
   * @return {Graph}
   */
  Sigma.prototype.getGraph = function () {
    return this.graph;
  };
  /**
   * Method used to set the renderer's graph.
   *
   * @return {Graph}
   */
  Sigma.prototype.setGraph = function (graph) {
    if (graph === this.graph) return;
    // Unbinding handlers on the current graph
    this.unbindGraphHandlers();
    // Clearing the graph data caches
    this.nodeDataCache = {};
    this.edgeDataCache = {};
    // Cleaning renderer state tied to the current graph
    this.displayedLabels.clear();
    this.highlightedNodes.clear();
    this.hoveredNode = null;
    this.hoveredEdge = null;
    this.nodesWithForcedLabels.length = 0;
    this.edgesWithForcedLabels.length = 0;
    if (this.checkEdgesEventsFrame !== null) {
      (0, utils_1.cancelFrame)(this.checkEdgesEventsFrame);
      this.checkEdgesEventsFrame = null;
    }
    // Installing new graph
    this.graph = graph;
    // Binding new handlers
    this.bindGraphHandlers();
    // Re-rendering now to avoid discrepancies from now to next frame
    this.process();
    this.render();
  };
  /**
   * Method returning the mouse captor.
   *
   * @return {MouseCaptor}
   */
  Sigma.prototype.getMouseCaptor = function () {
    return this.mouseCaptor;
  };
  /**
   * Method returning the touch captor.
   *
   * @return {TouchCaptor}
   */
  Sigma.prototype.getTouchCaptor = function () {
    return this.touchCaptor;
  };
  /**
   * Method returning the current renderer's dimensions.
   *
   * @return {Dimensions}
   */
  Sigma.prototype.getDimensions = function () {
    return {
      width: this.width,
      height: this.height
    };
  };
  /**
   * Method returning the current graph's dimensions.
   *
   * @return {Dimensions}
   */
  Sigma.prototype.getGraphDimensions = function () {
    var extent = this.customBBox || this.nodeExtent;
    return {
      width: extent.x[1] - extent.x[0] || 1,
      height: extent.y[1] - extent.y[0] || 1
    };
  };
  /**
   * Method used to get all the sigma node attributes.
   * It's usefull for example to get the position of a node
   * and to get values that are set by the nodeReducer
   *
   * @param  {string} key - The node's key.
   * @return {NodeDisplayData | undefined} A copy of the desired node's attribute or undefined if not found
   */
  Sigma.prototype.getNodeDisplayData = function (key) {
    var node = this.nodeDataCache[key];
    return node ? Object.assign({}, node) : undefined;
  };
  /**
   * Method used to get all the sigma edge attributes.
   * It's usefull for example to get values that are set by the edgeReducer.
   *
   * @param  {string} key - The edge's key.
   * @return {EdgeDisplayData | undefined} A copy of the desired edge's attribute or undefined if not found
   */
  Sigma.prototype.getEdgeDisplayData = function (key) {
    var edge = this.edgeDataCache[key];
    return edge ? Object.assign({}, edge) : undefined;
  };
  /**
   * Method returning a copy of the settings collection.
   *
   * @return {Settings} A copy of the settings collection.
   */
  Sigma.prototype.getSettings = function () {
    return __assign({}, this.settings);
  };
  /**
   * Method returning the current value for a given setting key.
   *
   * @param  {string} key - The setting key to get.
   * @return {any} The value attached to this setting key or undefined if not found
   */
  Sigma.prototype.getSetting = function (key) {
    return this.settings[key];
  };
  /**
   * Method setting the value of a given setting key. Note that this will schedule
   * a new render next frame.
   *
   * @param  {string} key - The setting key to set.
   * @param  {any}    value - The value to set.
   * @return {Sigma}
   */
  Sigma.prototype.setSetting = function (key, value) {
    this.settings[key] = value;
    (0, settings_1.validateSettings)(this.settings);
    this.handleSettingsUpdate();
    this.needToProcess = true; // TODO: some keys may work with only needToSoftProcess or even nothing
    this._scheduleRefresh();
    return this;
  };
  /**
   * Method updating the value of a given setting key using the provided function.
   * Note that this will schedule a new render next frame.
   *
   * @param  {string}   key     - The setting key to set.
   * @param  {function} updater - The update function.
   * @return {Sigma}
   */
  Sigma.prototype.updateSetting = function (key, updater) {
    this.settings[key] = updater(this.settings[key]);
    (0, settings_1.validateSettings)(this.settings);
    this.handleSettingsUpdate();
    this.needToProcess = true; // TODO: some keys may work with only needToSoftProcess or even nothing
    this._scheduleRefresh();
    return this;
  };
  /**
   * Method used to resize the renderer.
   *
   * @return {Sigma}
   */
  Sigma.prototype.resize = function () {
    var previousWidth = this.width,
      previousHeight = this.height;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.pixelRatio = (0, utils_1.getPixelRatio)();
    if (this.width === 0) {
      if (this.settings.allowInvalidContainer) this.width = 1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
    }
    if (this.height === 0) {
      if (this.settings.allowInvalidContainer) this.height = 1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
    }
    // If nothing has changed, we can stop right here
    if (previousWidth === this.width && previousHeight === this.height) return this;
    this.emit("resize");
    // Sizing dom elements
    for (var id in this.elements) {
      var element = this.elements[id];
      element.style.width = this.width + "px";
      element.style.height = this.height + "px";
    }
    // Sizing canvas contexts
    for (var id in this.canvasContexts) {
      this.elements[id].setAttribute("width", this.width * this.pixelRatio + "px");
      this.elements[id].setAttribute("height", this.height * this.pixelRatio + "px");
      if (this.pixelRatio !== 1) this.canvasContexts[id].scale(this.pixelRatio, this.pixelRatio);
    }
    // Sizing WebGL contexts
    for (var id in this.webGLContexts) {
      this.elements[id].setAttribute("width", this.width * this.pixelRatio + "px");
      this.elements[id].setAttribute("height", this.height * this.pixelRatio + "px");
      this.webGLContexts[id].viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);
    }
    return this;
  };
  /**
   * Method used to clear all the canvases.
   *
   * @return {Sigma}
   */
  Sigma.prototype.clear = function () {
    this.webGLContexts.nodes.clear(this.webGLContexts.nodes.COLOR_BUFFER_BIT);
    this.webGLContexts.edges.clear(this.webGLContexts.edges.COLOR_BUFFER_BIT);
    this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
    this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
    this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
    this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
    return this;
  };
  /**
   * Method used to refresh all computed data.
   *
   * @return {Sigma}
   */
  Sigma.prototype.refresh = function () {
    this.needToProcess = true;
    this._refresh();
    return this;
  };
  /**
   * Method used to refresh all computed data, at the next available frame.
   * If this method has already been called this frame, then it will only render once at the next available frame.
   *
   * @return {Sigma}
   */
  Sigma.prototype.scheduleRefresh = function () {
    this.needToProcess = true;
    this._scheduleRefresh();
    return this;
  };
  /**
   * Method used to (un)zoom, while preserving the position of a viewport point.
   * Used for instance to zoom "on the mouse cursor".
   *
   * @param viewportTarget
   * @param newRatio
   * @return {CameraState}
   */
  Sigma.prototype.getViewportZoomedState = function (viewportTarget, newRatio) {
    var _a = this.camera.getState(),
      ratio = _a.ratio,
      angle = _a.angle,
      x = _a.x,
      y = _a.y;
    // TODO: handle max zoom
    var ratioDiff = newRatio / ratio;
    var center = {
      x: this.width / 2,
      y: this.height / 2
    };
    var graphMousePosition = this.viewportToFramedGraph(viewportTarget);
    var graphCenterPosition = this.viewportToFramedGraph(center);
    return {
      angle: angle,
      x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + x,
      y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + y,
      ratio: newRatio
    };
  };
  /**
   * Method returning the abstract rectangle containing the graph according
   * to the camera's state.
   *
   * @return {object} - The view's rectangle.
   */
  Sigma.prototype.viewRectangle = function () {
    // TODO: reduce relative margin?
    var marginX = 0 * this.width / 8,
      marginY = 0 * this.height / 8;
    var p1 = this.viewportToFramedGraph({
        x: 0 - marginX,
        y: 0 - marginY
      }),
      p2 = this.viewportToFramedGraph({
        x: this.width + marginX,
        y: 0 - marginY
      }),
      h = this.viewportToFramedGraph({
        x: 0,
        y: this.height + marginY
      });
    return {
      x1: p1.x,
      y1: p1.y,
      x2: p2.x,
      y2: p2.y,
      height: p2.y - h.y
    };
  };
  /**
   * Method returning the coordinates of a point from the framed graph system to the viewport system. It allows
   * overriding anything that is used to get the translation matrix, or even the matrix itself.
   *
   * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
   * of computations.
   */
  Sigma.prototype.framedGraphToViewport = function (coordinates, override) {
    if (override === void 0) {
      override = {};
    }
    var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !!override.graphDimensions;
    var matrix = override.matrix ? override.matrix : recomputeMatrix ? (0, utils_1.matrixFromCamera)(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0) : this.matrix;
    var viewportPos = (0, matrices_1.multiplyVec2)(matrix, coordinates);
    return {
      x: (1 + viewportPos.x) * this.width / 2,
      y: (1 - viewportPos.y) * this.height / 2
    };
  };
  /**
   * Method returning the coordinates of a point from the viewport system to the framed graph system. It allows
   * overriding anything that is used to get the translation matrix, or even the matrix itself.
   *
   * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
   * of computations.
   */
  Sigma.prototype.viewportToFramedGraph = function (coordinates, override) {
    if (override === void 0) {
      override = {};
    }
    var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !override.graphDimensions;
    var invMatrix = override.matrix ? override.matrix : recomputeMatrix ? (0, utils_1.matrixFromCamera)(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0, true) : this.invMatrix;
    var res = (0, matrices_1.multiplyVec2)(invMatrix, {
      x: coordinates.x / this.width * 2 - 1,
      y: 1 - coordinates.y / this.height * 2
    });
    if (isNaN(res.x)) res.x = 0;
    if (isNaN(res.y)) res.y = 0;
    return res;
  };
  /**
   * Method used to translate a point's coordinates from the viewport system (pixel distance from the top-left of the
   * stage) to the graph system (the reference system of data as they are in the given graph instance).
   *
   * This method accepts an optional camera which can be useful if you need to translate coordinates
   * based on a different view than the one being currently being displayed on screen.
   *
   * @param {Coordinates}                  viewportPoint
   * @param {CoordinateConversionOverride} override
   */
  Sigma.prototype.viewportToGraph = function (viewportPoint, override) {
    if (override === void 0) {
      override = {};
    }
    return this.normalizationFunction.inverse(this.viewportToFramedGraph(viewportPoint, override));
  };
  /**
   * Method used to translate a point's coordinates from the graph system (the reference system of data as they are in
   * the given graph instance) to the viewport system (pixel distance from the top-left of the stage).
   *
   * This method accepts an optional camera which can be useful if you need to translate coordinates
   * based on a different view than the one being currently being displayed on screen.
   *
   * @param {Coordinates}                  graphPoint
   * @param {CoordinateConversionOverride} override
   */
  Sigma.prototype.graphToViewport = function (graphPoint, override) {
    if (override === void 0) {
      override = {};
    }
    return this.framedGraphToViewport(this.normalizationFunction(graphPoint), override);
  };
  /**
   * Method returning the graph's bounding box.
   *
   * @return {{ x: Extent, y: Extent }}
   */
  Sigma.prototype.getBBox = function () {
    return (0, utils_1.graphExtent)(this.graph);
  };
  /**
   * Method returning the graph's custom bounding box, if any.
   *
   * @return {{ x: Extent, y: Extent } | null}
   */
  Sigma.prototype.getCustomBBox = function () {
    return this.customBBox;
  };
  /**
   * Method used to override the graph's bounding box with a custom one. Give `null` as the argument to stop overriding.
   *
   * @return {Sigma}
   */
  Sigma.prototype.setCustomBBox = function (customBBox) {
    this.customBBox = customBBox;
    this._scheduleRefresh();
    return this;
  };
  /**
   * Method used to shut the container & release event listeners.
   *
   * @return {undefined}
   */
  Sigma.prototype.kill = function () {
    // Emitting "kill" events so that plugins and such can cleanup
    this.emit("kill");
    // Releasing events
    this.removeAllListeners();
    // Releasing camera handlers
    this.camera.removeListener("updated", this.activeListeners.camera);
    // Releasing DOM events & captors
    window.removeEventListener("resize", this.activeListeners.handleResize);
    this.mouseCaptor.kill();
    this.touchCaptor.kill();
    // Releasing graph handlers
    this.unbindGraphHandlers();
    // Releasing cache & state
    this.quadtree = new quadtree_1.default();
    this.nodeDataCache = {};
    this.edgeDataCache = {};
    this.nodesWithForcedLabels = [];
    this.edgesWithForcedLabels = [];
    this.highlightedNodes.clear();
    // Clearing frames
    if (this.renderFrame) {
      (0, utils_1.cancelFrame)(this.renderFrame);
      this.renderFrame = null;
    }
    if (this.renderHighlightedNodesFrame) {
      (0, utils_1.cancelFrame)(this.renderHighlightedNodesFrame);
      this.renderHighlightedNodesFrame = null;
    }
    // Destroying canvases
    var container = this.container;
    while (container.firstChild) container.removeChild(container.firstChild);
  };
  /**
   * Method used to scale the given size according to the camera's ratio, i.e.
   * zooming state.
   *
   * @param  {number} size - The size to scale (node size, edge thickness etc.).
   * @return {number}      - The scaled size.
   */
  Sigma.prototype.scaleSize = function (size) {
    return size / this.cameraSizeRatio;
  };
  /**
   * Method that returns the collection of all used canvases.
   * At the moment, the instantiated canvases are the following, and in the
   * following order in the DOM:
   * - `edges`
   * - `nodes`
   * - `edgeLabels`
   * - `labels`
   * - `hovers`
   * - `hoverNodes`
   * - `mouse`
   *
   * @return {PlainObject<HTMLCanvasElement>} - The collection of canvases.
   */
  Sigma.prototype.getCanvases = function () {
    return __assign({}, this.elements);
  };
  return Sigma;
}(types_1.TypedEventEmitter);
exports.default = Sigma;

/***/ }),

/***/ "./node_modules/sigma/types.js":
/*!*************************************!*\
  !*** ./node_modules/sigma/types.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypedEventEmitter = void 0;
/**
 * Sigma.js Types
 * ===============
 *
 * Various type declarations used throughout the library.
 * @module
 */
var events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var TypedEventEmitter = /** @class */function (_super) {
  __extends(TypedEventEmitter, _super);
  function TypedEventEmitter() {
    var _this = _super.call(this) || this;
    _this.rawEmitter = _this;
    return _this;
  }
  return TypedEventEmitter;
}(events_1.EventEmitter);
exports.TypedEventEmitter = TypedEventEmitter;

/***/ }),

/***/ "./node_modules/sigma/utils/animate.js":
/*!*********************************************!*\
  !*** ./node_modules/sigma/utils/animate.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateNodes = exports.ANIMATE_DEFAULTS = void 0;
var index_1 = __webpack_require__(/*! ./index */ "./node_modules/sigma/utils/index.js");
var easings_1 = __importDefault(__webpack_require__(/*! ./easings */ "./node_modules/sigma/utils/easings.js"));
exports.ANIMATE_DEFAULTS = {
  easing: "quadraticInOut",
  duration: 150
};
/**
 * Function used to animate the nodes.
 */
function animateNodes(graph, targets, opts, callback) {
  var options = Object.assign({}, exports.ANIMATE_DEFAULTS, opts);
  var easing = typeof options.easing === "function" ? options.easing : easings_1.default[options.easing];
  var start = Date.now();
  var startPositions = {};
  for (var node in targets) {
    var attrs = targets[node];
    startPositions[node] = {};
    for (var k in attrs) startPositions[node][k] = graph.getNodeAttribute(node, k);
  }
  var frame = null;
  var step = function () {
    frame = null;
    var p = (Date.now() - start) / options.duration;
    if (p >= 1) {
      // Animation is done
      for (var node in targets) {
        var attrs = targets[node];
        // We use given values to avoid precision issues and for convenience
        for (var k in attrs) graph.setNodeAttribute(node, k, attrs[k]);
      }
      if (typeof callback === "function") callback();
      return;
    }
    p = easing(p);
    for (var node in targets) {
      var attrs = targets[node];
      var s = startPositions[node];
      for (var k in attrs) graph.setNodeAttribute(node, k, attrs[k] * p + s[k] * (1 - p));
    }
    frame = (0, index_1.requestFrame)(step);
  };
  step();
  return function () {
    if (frame) (0, index_1.cancelFrame)(frame);
  };
}
exports.animateNodes = animateNodes;

/***/ }),

/***/ "./node_modules/sigma/utils/data.js":
/*!******************************************!*\
  !*** ./node_modules/sigma/utils/data.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTML_COLORS = void 0;
exports.HTML_COLORS = {
  black: "#000000",
  silver: "#C0C0C0",
  gray: "#808080",
  grey: "#808080",
  white: "#FFFFFF",
  maroon: "#800000",
  red: "#FF0000",
  purple: "#800080",
  fuchsia: "#FF00FF",
  green: "#008000",
  lime: "#00FF00",
  olive: "#808000",
  yellow: "#FFFF00",
  navy: "#000080",
  blue: "#0000FF",
  teal: "#008080",
  aqua: "#00FFFF",
  darkblue: "#00008B",
  mediumblue: "#0000CD",
  darkgreen: "#006400",
  darkcyan: "#008B8B",
  deepskyblue: "#00BFFF",
  darkturquoise: "#00CED1",
  mediumspringgreen: "#00FA9A",
  springgreen: "#00FF7F",
  cyan: "#00FFFF",
  midnightblue: "#191970",
  dodgerblue: "#1E90FF",
  lightseagreen: "#20B2AA",
  forestgreen: "#228B22",
  seagreen: "#2E8B57",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  limegreen: "#32CD32",
  mediumseagreen: "#3CB371",
  turquoise: "#40E0D0",
  royalblue: "#4169E1",
  steelblue: "#4682B4",
  darkslateblue: "#483D8B",
  mediumturquoise: "#48D1CC",
  indigo: "#4B0082",
  darkolivegreen: "#556B2F",
  cadetblue: "#5F9EA0",
  cornflowerblue: "#6495ED",
  rebeccapurple: "#663399",
  mediumaquamarine: "#66CDAA",
  dimgray: "#696969",
  dimgrey: "#696969",
  slateblue: "#6A5ACD",
  olivedrab: "#6B8E23",
  slategray: "#708090",
  slategrey: "#708090",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  mediumslateblue: "#7B68EE",
  lawngreen: "#7CFC00",
  chartreuse: "#7FFF00",
  aquamarine: "#7FFFD4",
  skyblue: "#87CEEB",
  lightskyblue: "#87CEFA",
  blueviolet: "#8A2BE2",
  darkred: "#8B0000",
  darkmagenta: "#8B008B",
  saddlebrown: "#8B4513",
  darkseagreen: "#8FBC8F",
  lightgreen: "#90EE90",
  mediumpurple: "#9370DB",
  darkviolet: "#9400D3",
  palegreen: "#98FB98",
  darkorchid: "#9932CC",
  yellowgreen: "#9ACD32",
  sienna: "#A0522D",
  brown: "#A52A2A",
  darkgray: "#A9A9A9",
  darkgrey: "#A9A9A9",
  lightblue: "#ADD8E6",
  greenyellow: "#ADFF2F",
  paleturquoise: "#AFEEEE",
  lightsteelblue: "#B0C4DE",
  powderblue: "#B0E0E6",
  firebrick: "#B22222",
  darkgoldenrod: "#B8860B",
  mediumorchid: "#BA55D3",
  rosybrown: "#BC8F8F",
  darkkhaki: "#BDB76B",
  mediumvioletred: "#C71585",
  indianred: "#CD5C5C",
  peru: "#CD853F",
  chocolate: "#D2691E",
  tan: "#D2B48C",
  lightgray: "#D3D3D3",
  lightgrey: "#D3D3D3",
  thistle: "#D8BFD8",
  orchid: "#DA70D6",
  goldenrod: "#DAA520",
  palevioletred: "#DB7093",
  crimson: "#DC143C",
  gainsboro: "#DCDCDC",
  plum: "#DDA0DD",
  burlywood: "#DEB887",
  lightcyan: "#E0FFFF",
  lavender: "#E6E6FA",
  darksalmon: "#E9967A",
  violet: "#EE82EE",
  palegoldenrod: "#EEE8AA",
  lightcoral: "#F08080",
  khaki: "#F0E68C",
  aliceblue: "#F0F8FF",
  honeydew: "#F0FFF0",
  azure: "#F0FFFF",
  sandybrown: "#F4A460",
  wheat: "#F5DEB3",
  beige: "#F5F5DC",
  whitesmoke: "#F5F5F5",
  mintcream: "#F5FFFA",
  ghostwhite: "#F8F8FF",
  salmon: "#FA8072",
  antiquewhite: "#FAEBD7",
  linen: "#FAF0E6",
  lightgoldenrodyellow: "#FAFAD2",
  oldlace: "#FDF5E6",
  magenta: "#FF00FF",
  deeppink: "#FF1493",
  orangered: "#FF4500",
  tomato: "#FF6347",
  hotpink: "#FF69B4",
  coral: "#FF7F50",
  darkorange: "#FF8C00",
  lightsalmon: "#FFA07A",
  orange: "#FFA500",
  lightpink: "#FFB6C1",
  pink: "#FFC0CB",
  gold: "#FFD700",
  peachpuff: "#FFDAB9",
  navajowhite: "#FFDEAD",
  moccasin: "#FFE4B5",
  bisque: "#FFE4C4",
  mistyrose: "#FFE4E1",
  blanchedalmond: "#FFEBCD",
  papayawhip: "#FFEFD5",
  lavenderblush: "#FFF0F5",
  seashell: "#FFF5EE",
  cornsilk: "#FFF8DC",
  lemonchiffon: "#FFFACD",
  floralwhite: "#FFFAF0",
  snow: "#FFFAFA",
  lightyellow: "#FFFFE0",
  ivory: "#FFFFF0"
};

/***/ }),

/***/ "./node_modules/sigma/utils/easings.js":
/*!*********************************************!*\
  !*** ./node_modules/sigma/utils/easings.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubicInOut = exports.cubicOut = exports.cubicIn = exports.quadraticInOut = exports.quadraticOut = exports.quadraticIn = exports.linear = void 0;
/**
 * Sigma.js Easings
 * =================
 *
 * Handy collection of easing functions.
 * @module
 */
var linear = function (k) {
  return k;
};
exports.linear = linear;
var quadraticIn = function (k) {
  return k * k;
};
exports.quadraticIn = quadraticIn;
var quadraticOut = function (k) {
  return k * (2 - k);
};
exports.quadraticOut = quadraticOut;
var quadraticInOut = function (k) {
  if ((k *= 2) < 1) return 0.5 * k * k;
  return -0.5 * (--k * (k - 2) - 1);
};
exports.quadraticInOut = quadraticInOut;
var cubicIn = function (k) {
  return k * k * k;
};
exports.cubicIn = cubicIn;
var cubicOut = function (k) {
  return --k * k * k + 1;
};
exports.cubicOut = cubicOut;
var cubicInOut = function (k) {
  if ((k *= 2) < 1) return 0.5 * k * k * k;
  return 0.5 * ((k -= 2) * k * k + 2);
};
exports.cubicInOut = cubicInOut;
var easings = {
  linear: exports.linear,
  quadraticIn: exports.quadraticIn,
  quadraticOut: exports.quadraticOut,
  quadraticInOut: exports.quadraticInOut,
  cubicIn: exports.cubicIn,
  cubicOut: exports.cubicOut,
  cubicInOut: exports.cubicInOut
};
exports.default = easings;

/***/ }),

/***/ "./node_modules/sigma/utils/edge-collisions.js":
/*!*****************************************************!*\
  !*** ./node_modules/sigma/utils/edge-collisions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doEdgeCollideWithPoint = exports.isPixelColored = void 0;
/**
 * This helper returns true is the pixel at (x,y) in the given WebGL context is
 * colored, and false else.
 */
function isPixelColored(gl, x, y) {
  var pixels = new Uint8Array(4);
  gl.readPixels(x, gl.drawingBufferHeight - y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  return pixels[3] > 0;
}
exports.isPixelColored = isPixelColored;
/**
 * This helper checks whether or not a point (x, y) collides with an
 * edge, connecting a source (xS, yS) to a target (xT, yT) with a thickness in
 * pixels.
 */
function doEdgeCollideWithPoint(x, y, xS, yS, xT, yT, thickness) {
  // Check first if point is out of the rectangle which opposite corners are the
  // source and the target, rectangle we expand by `thickness` in every
  // directions:
  if (x < xS - thickness && x < xT - thickness) return false;
  if (y < yS - thickness && y < yT - thickness) return false;
  if (x > xS + thickness && x > xT + thickness) return false;
  if (y > yS + thickness && y > yT + thickness) return false;
  // Check actual collision now: Since we now the point is in this big rectangle
  // we "just" need to check that the distance between the point and the line
  // connecting the source and the target is less than `thickness`:
  // https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line
  var distance = Math.abs((xT - xS) * (yS - y) - (xS - x) * (yT - yS)) / Math.sqrt(Math.pow(xT - xS, 2) + Math.pow(yT - yS, 2));
  return distance < thickness / 2;
}
exports.doEdgeCollideWithPoint = doEdgeCollideWithPoint;

/***/ }),

/***/ "./node_modules/sigma/utils/index.js":
/*!*******************************************!*\
  !*** ./node_modules/sigma/utils/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateGraph = exports.canUse32BitsIndices = exports.extractPixel = exports.getMatrixImpact = exports.matrixFromCamera = exports.getCorrectionRatio = exports.floatColor = exports.floatArrayColor = exports.parseColor = exports.zIndexOrdering = exports.createNormalizationFunction = exports.graphExtent = exports.getPixelRatio = exports.createElement = exports.cancelFrame = exports.requestFrame = exports.assignDeep = exports.assign = exports.isPlainObject = void 0;
var is_graph_1 = __importDefault(__webpack_require__(/*! graphology-utils/is-graph */ "./node_modules/graphology-utils/is-graph.js"));
var matrices_1 = __webpack_require__(/*! ./matrices */ "./node_modules/sigma/utils/matrices.js");
var data_1 = __webpack_require__(/*! ./data */ "./node_modules/sigma/utils/data.js");
/**
 * Checks whether the given value is a plain object.
 *
 * @param  {mixed}   value - Target value.
 * @return {boolean}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function isPlainObject(value) {
  return typeof value === "object" && value !== null && value.constructor === Object;
}
exports.isPlainObject = isPlainObject;
/**
 * Helper to use Object.assign with more than two objects.
 *
 * @param  {object} target       - First object.
 * @param  {object} [...objects] - Objects to merge.
 * @return {object}
 */
function assign(target) {
  var objects = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    objects[_i - 1] = arguments[_i];
  }
  target = target || {};
  for (var i = 0, l = objects.length; i < l; i++) {
    var o = objects[i];
    if (!o) continue;
    Object.assign(target, o);
  }
  return target;
}
exports.assign = assign;
/**
 * Very simple recursive Object.assign-like function.
 *
 * @param  {object} target       - First object.
 * @param  {object} [...objects] - Objects to merge.
 * @return {object}
 */
function assignDeep(target) {
  var objects = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    objects[_i - 1] = arguments[_i];
  }
  target = target || {};
  for (var i = 0, l = objects.length; i < l; i++) {
    var o = objects[i];
    if (!o) continue;
    for (var k in o) {
      if (isPlainObject(o[k])) {
        target[k] = assignDeep(target[k], o[k]);
      } else {
        target[k] = o[k];
      }
    }
  }
  return target;
}
exports.assignDeep = assignDeep;
/**
 * Just some dirty trick to make requestAnimationFrame and cancelAnimationFrame "work" in Node.js, for unit tests:
 */
exports.requestFrame = typeof requestAnimationFrame !== "undefined" ? function (callback) {
  return requestAnimationFrame(callback);
} : function (callback) {
  return setTimeout(callback, 0);
};
exports.cancelFrame = typeof cancelAnimationFrame !== "undefined" ? function (requestID) {
  return cancelAnimationFrame(requestID);
} : function (requestID) {
  return clearTimeout(requestID);
};
/**
 * Function used to create DOM elements easily.
 *
 * @param  {string} tag        - Tag name of the element to create.
 * @param  {object} style      - Styles map.
 * @param  {object} attributes - Attributes map.
 * @return {HTMLElement}
 */
function createElement(tag, style, attributes) {
  var element = document.createElement(tag);
  if (style) {
    for (var k in style) {
      element.style[k] = style[k];
    }
  }
  if (attributes) {
    for (var k in attributes) {
      element.setAttribute(k, attributes[k]);
    }
  }
  return element;
}
exports.createElement = createElement;
/**
 * Function returning the browser's pixel ratio.
 *
 * @return {number}
 */
function getPixelRatio() {
  if (typeof window.devicePixelRatio !== "undefined") return window.devicePixelRatio;
  return 1;
}
exports.getPixelRatio = getPixelRatio;
/**
 * Function returning the graph's node extent in x & y.
 *
 * @param  {Graph}
 * @return {object}
 */
function graphExtent(graph) {
  if (!graph.order) return {
    x: [0, 1],
    y: [0, 1]
  };
  var xMin = Infinity;
  var xMax = -Infinity;
  var yMin = Infinity;
  var yMax = -Infinity;
  graph.forEachNode(function (_, attr) {
    var x = attr.x,
      y = attr.y;
    if (x < xMin) xMin = x;
    if (x > xMax) xMax = x;
    if (y < yMin) yMin = y;
    if (y > yMax) yMax = y;
  });
  return {
    x: [xMin, xMax],
    y: [yMin, yMax]
  };
}
exports.graphExtent = graphExtent;
function createNormalizationFunction(extent) {
  var _a = __read(extent.x, 2),
    minX = _a[0],
    maxX = _a[1],
    _b = __read(extent.y, 2),
    minY = _b[0],
    maxY = _b[1];
  var ratio = Math.max(maxX - minX, maxY - minY),
    dX = (maxX + minX) / 2,
    dY = (maxY + minY) / 2;
  if (ratio === 0 || Math.abs(ratio) === Infinity || isNaN(ratio)) ratio = 1;
  if (isNaN(dX)) dX = 0;
  if (isNaN(dY)) dY = 0;
  var fn = function (data) {
    return {
      x: 0.5 + (data.x - dX) / ratio,
      y: 0.5 + (data.y - dY) / ratio
    };
  };
  // TODO: possibility to apply this in batch over array of indices
  fn.applyTo = function (data) {
    data.x = 0.5 + (data.x - dX) / ratio;
    data.y = 0.5 + (data.y - dY) / ratio;
  };
  fn.inverse = function (data) {
    return {
      x: dX + ratio * (data.x - 0.5),
      y: dY + ratio * (data.y - 0.5)
    };
  };
  fn.ratio = ratio;
  return fn;
}
exports.createNormalizationFunction = createNormalizationFunction;
/**
 * Function ordering the given elements in reverse z-order so they drawn
 * the correct way.
 *
 * @param  {number}   extent   - [min, max] z values.
 * @param  {function} getter   - Z attribute getter function.
 * @param  {array}    elements - The array to sort.
 * @return {array} - The sorted array.
 */
function zIndexOrdering(extent, getter, elements) {
  // If k is > n, we'll use a standard sort
  return elements.sort(function (a, b) {
    var zA = getter(a) || 0,
      zB = getter(b) || 0;
    if (zA < zB) return -1;
    if (zA > zB) return 1;
    return 0;
  });
  // TODO: counting sort optimization
}

exports.zIndexOrdering = zIndexOrdering;
/**
 * WebGL utils
 * ===========
 */
/**
 * Memoized function returning a float-encoded color from various string
 * formats describing colors.
 */
var INT8 = new Int8Array(4);
var INT32 = new Int32Array(INT8.buffer, 0, 1);
var FLOAT32 = new Float32Array(INT8.buffer, 0, 1);
var RGBA_TEST_REGEX = /^\s*rgba?\s*\(/;
var RGBA_EXTRACT_REGEX = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
function parseColor(val) {
  var r = 0; // byte
  var g = 0; // byte
  var b = 0; // byte
  var a = 1; // float
  // Handling hexadecimal notation
  if (val[0] === "#") {
    if (val.length === 4) {
      r = parseInt(val.charAt(1) + val.charAt(1), 16);
      g = parseInt(val.charAt(2) + val.charAt(2), 16);
      b = parseInt(val.charAt(3) + val.charAt(3), 16);
    } else {
      r = parseInt(val.charAt(1) + val.charAt(2), 16);
      g = parseInt(val.charAt(3) + val.charAt(4), 16);
      b = parseInt(val.charAt(5) + val.charAt(6), 16);
    }
    if (val.length === 9) {
      a = parseInt(val.charAt(7) + val.charAt(8), 16) / 255;
    }
  }
  // Handling rgb notation
  else if (RGBA_TEST_REGEX.test(val)) {
    var match = val.match(RGBA_EXTRACT_REGEX);
    if (match) {
      r = +match[1];
      g = +match[2];
      b = +match[3];
      if (match[4]) a = +match[4];
    }
  }
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}
exports.parseColor = parseColor;
var FLOAT_COLOR_CACHE = {};
for (var htmlColor in data_1.HTML_COLORS) {
  FLOAT_COLOR_CACHE[htmlColor] = floatColor(data_1.HTML_COLORS[htmlColor]);
  // Replicating cache for hex values for free
  FLOAT_COLOR_CACHE[data_1.HTML_COLORS[htmlColor]] = FLOAT_COLOR_CACHE[htmlColor];
}
function floatArrayColor(val) {
  val = data_1.HTML_COLORS[val] || val;
  // NOTE: this variant is not cached because it is mostly used for uniforms
  var _a = parseColor(val),
    r = _a.r,
    g = _a.g,
    b = _a.b,
    a = _a.a;
  return new Float32Array([r / 255, g / 255, b / 255, a]);
}
exports.floatArrayColor = floatArrayColor;
function floatColor(val) {
  // If the color is already computed, we yield it
  if (typeof FLOAT_COLOR_CACHE[val] !== "undefined") return FLOAT_COLOR_CACHE[val];
  var parsed = parseColor(val);
  var r = parsed.r,
    g = parsed.g,
    b = parsed.b;
  var a = parsed.a;
  a = a * 255 | 0;
  INT32[0] = (a << 24 | b << 16 | g << 8 | r) & 0xfeffffff;
  var color = FLOAT32[0];
  FLOAT_COLOR_CACHE[val] = color;
  return color;
}
exports.floatColor = floatColor;
/**
 * In sigma, the graph is normalized into a [0, 1], [0, 1] square, before being given to the various renderers. This
 * helps dealing with quadtree in particular.
 * But at some point, we need to rescale it so that it takes the best place in the screen, ie. we always want to see two
 * nodes "touching" opposite sides of the graph, with the camera being at its default state.
 *
 * This function determines this ratio.
 */
function getCorrectionRatio(viewportDimensions, graphDimensions) {
  var viewportRatio = viewportDimensions.height / viewportDimensions.width;
  var graphRatio = graphDimensions.height / graphDimensions.width;
  // If the stage and the graphs are in different directions (such as the graph being wider that tall while the stage
  // is taller than wide), we can stop here to have indeed nodes touching opposite sides:
  if (viewportRatio < 1 && graphRatio > 1 || viewportRatio > 1 && graphRatio < 1) {
    return 1;
  }
  // Else, we need to fit the graph inside the stage:
  // 1. If the graph is "squarer" (ie. with a ratio closer to 1), we need to make the largest sides touch;
  // 2. If the stage is "squarer", we need to make the smallest sides touch.
  return Math.min(Math.max(graphRatio, 1 / graphRatio), Math.max(1 / viewportRatio, viewportRatio));
}
exports.getCorrectionRatio = getCorrectionRatio;
/**
 * Function returning a matrix from the current state of the camera.
 */
// TODO: it's possible to optimize this drastically!
function matrixFromCamera(state, viewportDimensions, graphDimensions, padding, inverse) {
  var angle = state.angle,
    ratio = state.ratio,
    x = state.x,
    y = state.y;
  var width = viewportDimensions.width,
    height = viewportDimensions.height;
  var matrix = (0, matrices_1.identity)();
  var smallestDimension = Math.min(width, height) - 2 * padding;
  var correctionRatio = getCorrectionRatio(viewportDimensions, graphDimensions);
  if (!inverse) {
    (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), 2 * (smallestDimension / width) * correctionRatio, 2 * (smallestDimension / height) * correctionRatio));
    (0, matrices_1.multiply)(matrix, (0, matrices_1.rotate)((0, matrices_1.identity)(), -angle));
    (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), 1 / ratio));
    (0, matrices_1.multiply)(matrix, (0, matrices_1.translate)((0, matrices_1.identity)(), -x, -y));
  } else {
    (0, matrices_1.multiply)(matrix, (0, matrices_1.translate)((0, matrices_1.identity)(), x, y));
    (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), ratio));
    (0, matrices_1.multiply)(matrix, (0, matrices_1.rotate)((0, matrices_1.identity)(), angle));
    (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), width / smallestDimension / 2 / correctionRatio, height / smallestDimension / 2 / correctionRatio));
  }
  return matrix;
}
exports.matrixFromCamera = matrixFromCamera;
/**
 * All these transformations we apply on the matrix to get it rescale the graph
 * as we want make it very hard to get pixel-perfect distances in WebGL. This
 * function returns a factor that properly cancels the matrix effect on lengths.
 *
 * [jacomyal]
 * To be fully honest, I can't really explain happens here... I notice that the
 * following ratio works (ie. it correctly compensates the matrix impact on all
 * camera states I could try):
 * > `R = size(V) / size(M * V) / W`
 * as long as `M * V` is in the direction of W (ie. parallel to (Ox)). It works
 * as well with H and a vector that transforms into something parallel to (Oy).
 *
 * Also, note that we use `angle` and not `-angle` (that would seem logical,
 * since we want to anticipate the rotation), because of the fact that in WebGL,
 * the image is vertically swapped.
 */
function getMatrixImpact(matrix, cameraState, viewportDimensions) {
  var _a = (0, matrices_1.multiplyVec2)(matrix, {
      x: Math.cos(cameraState.angle),
      y: Math.sin(cameraState.angle)
    }, 0),
    x = _a.x,
    y = _a.y;
  return 1 / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / viewportDimensions.width;
}
exports.getMatrixImpact = getMatrixImpact;
/**
 * Function extracting the color at the given pixel.
 */
function extractPixel(gl, x, y, array) {
  var data = array || new Uint8Array(4);
  gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
  return data;
}
exports.extractPixel = extractPixel;
/**
 * Function used to know whether given webgl context can use 32 bits indices.
 */
function canUse32BitsIndices(gl) {
  var webgl2 = typeof WebGL2RenderingContext !== "undefined" && gl instanceof WebGL2RenderingContext;
  return webgl2 || !!gl.getExtension("OES_element_index_uint");
}
exports.canUse32BitsIndices = canUse32BitsIndices;
/**
 * Check if the graph variable is a valid graph, and if sigma can render it.
 */
function validateGraph(graph) {
  // check if it's a valid graphology instance
  if (!(0, is_graph_1.default)(graph)) throw new Error("Sigma: invalid graph instance.");
  // check if nodes have x/y attributes
  graph.forEachNode(function (key, attributes) {
    if (!Number.isFinite(attributes.x) || !Number.isFinite(attributes.y)) {
      throw new Error("Sigma: Coordinates of node ".concat(key, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
    }
  });
}
exports.validateGraph = validateGraph;

/***/ }),

/***/ "./node_modules/sigma/utils/matrices.js":
/*!**********************************************!*\
  !*** ./node_modules/sigma/utils/matrices.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiplyVec2 = exports.multiply = exports.translate = exports.rotate = exports.scale = exports.identity = void 0;
function identity() {
  return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
}
exports.identity = identity;
// TODO: optimize
function scale(m, x, y) {
  m[0] = x;
  m[4] = typeof y === "number" ? y : x;
  return m;
}
exports.scale = scale;
function rotate(m, r) {
  var s = Math.sin(r),
    c = Math.cos(r);
  m[0] = c;
  m[1] = s;
  m[3] = -s;
  m[4] = c;
  return m;
}
exports.rotate = rotate;
function translate(m, x, y) {
  m[6] = x;
  m[7] = y;
  return m;
}
exports.translate = translate;
function multiply(a, b) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  var a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  var a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  var b00 = b[0],
    b01 = b[1],
    b02 = b[2];
  var b10 = b[3],
    b11 = b[4],
    b12 = b[5];
  var b20 = b[6],
    b21 = b[7],
    b22 = b[8];
  a[0] = b00 * a00 + b01 * a10 + b02 * a20;
  a[1] = b00 * a01 + b01 * a11 + b02 * a21;
  a[2] = b00 * a02 + b01 * a12 + b02 * a22;
  a[3] = b10 * a00 + b11 * a10 + b12 * a20;
  a[4] = b10 * a01 + b11 * a11 + b12 * a21;
  a[5] = b10 * a02 + b11 * a12 + b12 * a22;
  a[6] = b20 * a00 + b21 * a10 + b22 * a20;
  a[7] = b20 * a01 + b21 * a11 + b22 * a21;
  a[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return a;
}
exports.multiply = multiply;
function multiplyVec2(a, b, z) {
  if (z === void 0) {
    z = 1;
  }
  var a00 = a[0];
  var a01 = a[1];
  var a10 = a[3];
  var a11 = a[4];
  var a20 = a[6];
  var a21 = a[7];
  var b0 = b.x;
  var b1 = b.y;
  return {
    x: b0 * a00 + b1 * a10 + a20 * z,
    y: b0 * a01 + b1 * a11 + a21 * z
  };
}
exports.multiplyVec2 = multiplyVec2;

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function (t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function () {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function (t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
        r,
        n,
        o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};
        for (e in t) n = t[e], r[e] = n;
        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;
          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function () {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;
        for (r = "", t = e = 1; 36 >= e; t = ++e) r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }
        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function (t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function (t) {
          return n(t, "/") ? t : t + "/";
        }, o = function (t, e) {
          return t.slice(0, e.length) === e;
        }, n = function (t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }
        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }
        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }
        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();
            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }
        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;
          for (this.elements = {}, n = 0, a = t.length; a > n; n++) u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
            type: i(u),
            tracked: o(u),
            elements: []
          }, r.elements.push(u));
        }
        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];
            for (t in r) e = r[t].tracked, e && n.push(t);
            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];
          for (n in o) i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;
          for (e in n) o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;
          for (o in i) n = i[o].elements, e(n[0], t) && (r = n[0]);
          return r;
        }, i = function (t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function (t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function (t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function (t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function (t, e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }
        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;
          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;
      e.Renderer = function () {
        function e() {}
        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
              o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function (t, e) {
          var r, n, o, i, s, a, u;
          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
        r,
        n = function (t, e) {
          function r() {
            this.constructor = t;
          }
          for (var n in e) o.call(e, n) && (t[n] = e[n]);
          return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
        },
        o = {}.hasOwnProperty;
      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }
        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;
          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(t));
          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;
          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;
          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.removeChild(t));
          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;
          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(t));
          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;
          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;
          for (u = [], o = 0, i = t.length; i > o; o++) a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;
          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function (t) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", t.id), {
          element: e,
          permanentElement: t
        };
      }, r = function (t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function (t, e) {
          function n() {
            this.constructor = t;
          }
          for (var o in e) r.call(e, o) && (t[o] = e[o]);
          return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
        },
        r = {}.hasOwnProperty;
      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }
        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;
          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }
        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }
        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }
        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;
          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) e = n[t], o.push(delete this.snapshots[e]);
          return o;
        }, r = function (t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }
        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function (t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";
            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };
      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }
        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function () {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function () {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function () {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this),  true && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);

/***/ })

/******/ });
//# sourceMappingURL=application-52986557110fe5bec924.js.map