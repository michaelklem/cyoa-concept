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
var timeline = __webpack_require__(/*! ../vendors/graphology.min */ "./app/javascript/vendors/graphology.min.js");

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
    value: function connectedCallback() {
      this.innerHTML = "\n      <h1>Graph Viewer</h1>\n      <i \n        class=\"fa fa-file-text-o fa-lg view_transcription\" \n        title=\"Click to view transcription\"\n        style=\"margin-left:6px;\"\n        data-callid=\"123\"\n      ></i>\n\n    ";
      this.addEventListener("click", this.handleClick);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
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
/* harmony import */ var _vendors_graphology_library_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vendors/graphology-library.min */ "./app/javascript/vendors/graphology-library.min.js");
/* harmony import */ var _vendors_graphology_library_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendors_graphology_library_min__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vendors_graphology_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vendors/graphology.min */ "./app/javascript/vendors/graphology.min.js");
/* harmony import */ var _vendors_graphology_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendors_graphology_min__WEBPACK_IMPORTED_MODULE_6__);
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.





_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"]();




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

/***/ "./app/javascript/vendors/graphology-library.min.js":
/*!**********************************************************!*\
  !*** ./app/javascript/vendors/graphology-library.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
!function (t, e) {
   true ? e(exports) : undefined;
}(this, function (t) {
  "use strict";

  var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    r = {},
    n = {},
    i = function i(t) {
      return null !== t && "object" == typeof t && "function" == typeof t.addUndirectedEdgeWithKey && "function" == typeof t.dropNode && "boolean" == typeof t.multi;
    },
    o = function o(t) {
      return null !== t && "function" == typeof t && "object" == typeof t.prototype && "function" == typeof t.prototype.addUndirectedEdgeWithKey && "function" == typeof t.prototype.dropNode;
    },
    a = function t(e, r) {
      if (e === r) return !0;
      if (e && r && "object" == typeof e && "object" == typeof r) {
        if (e.constructor !== r.constructor) return !1;
        var n, i, o;
        if (Array.isArray(e)) {
          if ((n = e.length) != r.length) return !1;
          for (i = n; 0 != i--;) if (!t(e[i], r[i])) return !1;
          return !0;
        }
        if (e instanceof Map && r instanceof Map) {
          if (e.size !== r.size) return !1;
          var _iterator = _createForOfIteratorHelper(e.entries()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              i = _step.value;
              if (!r.has(i[0])) return !1;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var _iterator2 = _createForOfIteratorHelper(e.entries()),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              i = _step2.value;
              if (!t(i[1], r.get(i[0]))) return !1;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return !0;
        }
        if (e instanceof Set && r instanceof Set) {
          if (e.size !== r.size) return !1;
          var _iterator3 = _createForOfIteratorHelper(e.entries()),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              i = _step3.value;
              if (!r.has(i[0])) return !1;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return !0;
        }
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
          if ((n = e.length) != r.length) return !1;
          for (i = n; 0 != i--;) if (e[i] !== r[i]) return !1;
          return !0;
        }
        if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
        if ((n = (o = Object.keys(e)).length) !== Object.keys(r).length) return !1;
        for (i = n; 0 != i--;) if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
        for (i = n; 0 != i--;) {
          var a = o[i];
          if (!t(e[a], r[a])) return !1;
        }
        return !0;
      }
      return e != e && r != r;
    },
    s = Symbol("size");
  function h(t, e) {
    var r,
      n,
      i,
      o,
      s = t.length,
      h = e.length;
    if (s !== h) return !1;
    var u = new Set();
    t: for (i = 0; i < s; i++) {
      for (r = t[i], o = 0; o < h; o++) if (!u.has(o) && (n = e[o], a(r, n))) {
        u.add(o);
        continue t;
      }
      return !1;
    }
    return !0;
  }
  function u(t, e) {
    if (t[s] !== e[s]) return !1;
    for (var r in t) if (!h(t[r], e[r])) return !1;
    return !0;
  }
  function d(t, e) {
    var r,
      n = {};
    return t.forEachOutEdge(e, function (t, e, i, o) {
      r = n[o] || 0, r++, n[o] = r;
    }), n;
  }
  function c(t, e) {
    var r,
      n = {};
    return t.forEachUndirectedEdge(e, function (t, i, o, a) {
      e > (a = e === o ? a : o) || (r = n[a] || 0, r++, n[a] = r);
    }), n;
  }
  function l(t, e) {
    var r,
      n = {};
    return n[s] = 0, t.forEachOutEdge(e, function (t, e, i, o) {
      (r = n[o]) || (r = [], n[s] += 1, n[o] = r), r.push(e);
    }), n;
  }
  function f(t, e) {
    var r,
      n = {};
    return n[s] = 0, t.forEachUndirectedEdge(e, function (t, i, o, a) {
      e > (a = e === o ? a : o) || ((r = n[a]) || (r = [], n[s] += 1, n[a] = r), r.push(i));
    }), n;
  }
  function g(t, e, r) {
    return e === r || e.order === r.order && e.everyNode(function (e, n) {
      return !!r.hasNode(e) && (!t || a(n, r.getNodeAttributes(e)));
    });
  }
  function p(t, e, r, n) {
    if (r === n) return !0;
    if (e) {
      if ("directed" === r.type && "undirected" === n.type || "undirected" === r.type && "directed" === n.type) return !1;
    } else if (r.type !== n.type || r.allowSelfLoops !== n.allowSelfLoops || r.multi !== n.multi) return !1;
    if (r.directedSize !== n.directedSize || r.undirectedSize !== n.undirectedSize) return !1;
    if (!g(t, r, n)) return !1;
    var i = !1,
      o = !1;
    if (r.multi || n.multi) {
      var s = t ? l : d,
        h = t ? u : a;
      if (i = r.everyNode(function (t) {
        var e = s(r, t),
          i = s(n, t);
        return h(e, i);
      }), !i) return !1;
      if (s = t ? f : c, o = r.everyNode(function (t) {
        var e = s(r, t),
          i = s(n, t);
        return h(e, i);
      }), !o) return !1;
    } else {
      if (!(i = r.everyDirectedEdge(function (e, i, o, s) {
        return !!n.hasDirectedEdge(o, s) && (!t || a(r.getDirectedEdgeAttributes(o, s), n.getDirectedEdgeAttributes(o, s)));
      }))) return !1;
      if (!(o = r.everyUndirectedEdge(function (e, i, o, s) {
        return !!n.hasUndirectedEdge(o, s) && (!t || a(r.getUndirectedEdgeAttributes(o, s), n.getUndirectedEdgeAttributes(o, s)));
      }))) return !1;
    }
    return !0;
  }
  n.isGraph = i, n.isGraphConstructor = o, n.haveSameNodes = g.bind(null, !1), n.haveSameNodesDeep = g.bind(null, !0), n.areSameGraphs = p.bind(null, !1, !1), n.areSameGraphsDeep = p.bind(null, !0, !1), n.haveSameEdges = p.bind(null, !1, !0), n.haveSameEdgesDeep = p.bind(null, !0, !0);
  var y = n,
    v = {},
    m = {},
    b = {},
    w = {};
  var E = function t(e, r) {
      e = e || {};
      var n,
        i = {};
      for (var o in r) {
        var a = e[o],
          s = r[o];
        !(n = s) || "object" != typeof n || "function" == typeof n || Array.isArray(n) || n instanceof Set || n instanceof Map || n instanceof RegExp || n instanceof Date ? i[o] = void 0 === a ? s : a : i[o] = t(a, s);
      }
      return i;
    },
    A = {
      identity: function identity() {
        return Float64Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
      },
      scale: function scale(t, e, r) {
        return t[0] = e, t[4] = "number" == typeof r ? r : e, t;
      },
      rotate: function rotate(t, e) {
        var r = Math.sin(e),
          n = Math.cos(e);
        return t[0] = n, t[1] = r, t[3] = -r, t[4] = n, t;
      },
      translate: function translate(t, e, r) {
        return t[6] = e, t[7] = r, t;
      },
      multiply: function multiply(t, e) {
        var r = t[0],
          n = t[1],
          i = t[2],
          o = t[3],
          a = t[4],
          s = t[5],
          h = t[6],
          u = t[7],
          d = t[8],
          c = e[0],
          l = e[1],
          f = e[2],
          g = e[3],
          p = e[4],
          y = e[5],
          v = e[6],
          m = e[7],
          b = e[8];
        return t[0] = c * r + l * o + f * h, t[1] = c * n + l * a + f * u, t[2] = c * i + l * s + f * d, t[3] = g * r + p * o + y * h, t[4] = g * n + p * a + y * u, t[5] = g * i + p * s + y * d, t[6] = v * r + m * o + b * h, t[7] = v * n + m * a + b * u, t[8] = v * i + m * s + b * d, t;
      },
      multiplyVec2: function multiplyVec2(t, e) {
        var r = t[0],
          n = t[1],
          i = t[3],
          o = t[4],
          a = t[6],
          s = t[7],
          h = e.x,
          u = e.y;
        e.x = h * r + u * i + a, e.y = h * n + u * o + s;
      }
    },
    x = E,
    z = A,
    M = z.identity,
    S = z.multiply,
    D = z.translate,
    N = z.scale,
    k = z.rotate,
    C = z.multiplyVec2;
  var O = {
    camera: {
      x: .5,
      y: .5,
      angle: 0,
      ratio: 1
    },
    padding: 0
  };
  w.createGraphToViewportConversionFunction = function (t, e, r) {
    var n = (r = x(r, O)).camera,
      i = t.x[1],
      o = t.y[1],
      a = t.x[0],
      s = t.y[0],
      h = i - a,
      u = o - s,
      d = e.width,
      c = e.height,
      l = Math.max(h, u) || 1,
      f = (i + a) / 2,
      g = (o + s) / 2,
      p = Math.min(d, c);
    p -= 2 * r.padding;
    var y = function (t, e, r, n) {
        var i = n / r,
          o = e / t;
        return i < 1 && o > 1 || i > 1 && o < 1 ? 1 : Math.min(Math.max(o, 1 / o), Math.max(1 / i, i));
      }(h, u, d, c),
      v = M();
    S(v, N(M(), d / 2, c / 2)), S(v, D(M(), 1, 1)), S(v, N(M(), 1, -1)), S(v, N(M(), p / d * 2 * y, p / c * 2 * y)), S(v, k(M(), -n.angle)), S(v, N(M(), 1 / n.ratio)), S(v, D(M(), -n.x, -n.y)), S(v, D(M(), .5, .5)), S(v, N(M(), 1 / l)), S(v, D(M(), -f, -g));
    var m = function m(t) {
        return C(v, t), t;
      },
      b = function b(t) {
        return m({
          x: t.x,
          y: t.y
        });
      };
    return b.assign = m, b;
  };
  var W = {};
  var j = function j() {
    this.__data__ = [], this.size = 0;
  };
  var _ = function _(t, e) {
      return t === e || t != t && e != e;
    },
    P = _;
  var U = function U(t, e) {
      for (var r = t.length; r--;) if (P(t[r][0], e)) return r;
      return -1;
    },
    I = U,
    F = Array.prototype.splice;
  var T = U;
  var L = U;
  var R = U;
  var G = j,
    q = function q(t) {
      var e = this.__data__,
        r = I(e, t);
      return !(r < 0) && (r == e.length - 1 ? e.pop() : F.call(e, r, 1), --this.size, !0);
    },
    B = function B(t) {
      var e = this.__data__,
        r = T(e, t);
      return r < 0 ? void 0 : e[r][1];
    },
    H = function H(t) {
      return L(this.__data__, t) > -1;
    },
    V = function V(t, e) {
      var r = this.__data__,
        n = R(r, t);
      return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
    };
  function Y(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  Y.prototype.clear = G, Y.prototype["delete"] = q, Y.prototype.get = B, Y.prototype.has = H, Y.prototype.set = V;
  var K = Y,
    $ = K;
  var X = function X() {
    this.__data__ = new $(), this.size = 0;
  };
  var J = function J(t) {
    var e = this.__data__,
      r = e["delete"](t);
    return this.size = e.size, r;
  };
  var Q = function Q(t) {
    return this.__data__.get(t);
  };
  var Z = function Z(t) {
      return this.__data__.has(t);
    },
    tt = "object" == typeof e && e && e.Object === Object && e,
    et = tt,
    rt = "object" == typeof self && self && self.Object === Object && self,
    nt = et || rt || Function("return this")(),
    it = nt.Symbol,
    ot = it,
    at = Object.prototype,
    st = at.hasOwnProperty,
    ht = at.toString,
    ut = ot ? ot.toStringTag : void 0;
  var dt = function dt(t) {
      var e = st.call(t, ut),
        r = t[ut];
      try {
        t[ut] = void 0;
        var n = !0;
      } catch (t) {}
      var i = ht.call(t);
      return n && (e ? t[ut] = r : delete t[ut]), i;
    },
    ct = Object.prototype.toString;
  var lt = dt,
    ft = function ft(t) {
      return ct.call(t);
    },
    gt = it ? it.toStringTag : void 0;
  var pt = function pt(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : gt && gt in Object(t) ? lt(t) : ft(t);
  };
  var yt = function yt(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    },
    vt = pt,
    mt = yt;
  var bt,
    wt = function wt(t) {
      if (!mt(t)) return !1;
      var e = vt(t);
      return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e;
    },
    Et = nt["__core-js_shared__"],
    At = (bt = /[^.]+$/.exec(Et && Et.keys && Et.keys.IE_PROTO || "")) ? "Symbol(src)_1." + bt : "";
  var xt = function xt(t) {
      return !!At && At in t;
    },
    zt = Function.prototype.toString;
  var Mt = wt,
    St = xt,
    Dt = yt,
    Nt = function Nt(t) {
      if (null != t) {
        try {
          return zt.call(t);
        } catch (t) {}
        try {
          return t + "";
        } catch (t) {}
      }
      return "";
    },
    kt = /^\[object .+?Constructor\]$/,
    Ct = Function.prototype,
    Ot = Object.prototype,
    Wt = Ct.toString,
    jt = Ot.hasOwnProperty,
    _t = RegExp("^" + Wt.call(jt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Pt = function Pt(t) {
      return !(!Dt(t) || St(t)) && (Mt(t) ? _t : kt).test(Nt(t));
    },
    Ut = function Ut(t, e) {
      return null == t ? void 0 : t[e];
    };
  var It = function It(t, e) {
      var r = Ut(t, e);
      return Pt(r) ? r : void 0;
    },
    Ft = It(nt, "Map"),
    Tt = It(Object, "create"),
    Lt = Tt;
  var Rt = function Rt() {
    this.__data__ = Lt ? Lt(null) : {}, this.size = 0;
  };
  var Gt = function Gt(t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e;
    },
    qt = Tt,
    Bt = Object.prototype.hasOwnProperty;
  var Ht = function Ht(t) {
      var e = this.__data__;
      if (qt) {
        var r = e[t];
        return "__lodash_hash_undefined__" === r ? void 0 : r;
      }
      return Bt.call(e, t) ? e[t] : void 0;
    },
    Vt = Tt,
    Yt = Object.prototype.hasOwnProperty;
  var Kt = Tt;
  var $t = Rt,
    Xt = Gt,
    Jt = Ht,
    Qt = function Qt(t) {
      var e = this.__data__;
      return Vt ? void 0 !== e[t] : Yt.call(e, t);
    },
    Zt = function Zt(t, e) {
      var r = this.__data__;
      return this.size += this.has(t) ? 0 : 1, r[t] = Kt && void 0 === e ? "__lodash_hash_undefined__" : e, this;
    };
  function te(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  te.prototype.clear = $t, te.prototype["delete"] = Xt, te.prototype.get = Jt, te.prototype.has = Qt, te.prototype.set = Zt;
  var ee = te,
    re = K,
    ne = Ft;
  var ie = function ie(t) {
    var e = typeof t;
    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
  };
  var oe = function oe(t, e) {
      var r = t.__data__;
      return ie(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
    },
    ae = oe;
  var se = oe;
  var he = oe;
  var ue = oe;
  var de = function de() {
      this.size = 0, this.__data__ = {
        hash: new ee(),
        map: new (ne || re)(),
        string: new ee()
      };
    },
    ce = function ce(t) {
      var e = ae(this, t)["delete"](t);
      return this.size -= e ? 1 : 0, e;
    },
    le = function le(t) {
      return se(this, t).get(t);
    },
    fe = function fe(t) {
      return he(this, t).has(t);
    },
    ge = function ge(t, e) {
      var r = ue(this, t),
        n = r.size;
      return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
    };
  function pe(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  pe.prototype.clear = de, pe.prototype["delete"] = ce, pe.prototype.get = le, pe.prototype.has = fe, pe.prototype.set = ge;
  var ye = K,
    ve = Ft,
    me = pe;
  var be = K,
    we = X,
    Ee = J,
    Ae = Q,
    xe = Z,
    ze = function ze(t, e) {
      var r = this.__data__;
      if (r instanceof ye) {
        var n = r.__data__;
        if (!ve || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
        r = this.__data__ = new me(n);
      }
      return r.set(t, e), this.size = r.size, this;
    };
  function Me(t) {
    var e = this.__data__ = new be(t);
    this.size = e.size;
  }
  Me.prototype.clear = we, Me.prototype["delete"] = Ee, Me.prototype.get = Ae, Me.prototype.has = xe, Me.prototype.set = ze;
  var Se = Me,
    De = It,
    Ne = function () {
      try {
        var t = De(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch (t) {}
    }(),
    ke = Ne;
  var Ce = function Ce(t, e, r) {
      "__proto__" == e && ke ? ke(t, e, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      }) : t[e] = r;
    },
    Oe = Ce,
    We = _;
  var je = function je(t, e, r) {
    (void 0 !== r && !We(t[e], r) || void 0 === r && !(e in t)) && Oe(t, e, r);
  };
  var _e = function (t) {
      return function (e, r, n) {
        for (var i = -1, o = Object(e), a = n(e), s = a.length; s--;) {
          var h = a[t ? s : ++i];
          if (!1 === r(o[h], h, o)) break;
        }
        return e;
      };
    }(),
    Pe = {
      exports: {}
    };
  !function (t, e) {
    var r = nt,
      n = e && !e.nodeType && e,
      i = n && t && !t.nodeType && t,
      o = i && i.exports === n ? r.Buffer : void 0,
      a = o ? o.allocUnsafe : void 0;
    t.exports = function (t, e) {
      if (e) return t.slice();
      var r = t.length,
        n = a ? a(r) : new t.constructor(r);
      return t.copy(n), n;
    };
  }(Pe, Pe.exports);
  var Ue = nt.Uint8Array;
  var Ie = function Ie(t) {
    var e = new t.constructor(t.byteLength);
    return new Ue(e).set(new Ue(t)), e;
  };
  var Fe = function Fe(t, e) {
    var r = e ? Ie(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.length);
  };
  var Te = function Te(t, e) {
      var r = -1,
        n = t.length;
      for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
      return e;
    },
    Le = yt,
    Re = Object.create,
    Ge = function () {
      function t() {}
      return function (e) {
        if (!Le(e)) return {};
        if (Re) return Re(e);
        t.prototype = e;
        var r = new t();
        return t.prototype = void 0, r;
      };
    }();
  var qe = function (t, e) {
      return function (r) {
        return t(e(r));
      };
    }(Object.getPrototypeOf, Object),
    Be = Object.prototype;
  var He = function He(t) {
      var e = t && t.constructor;
      return t === ("function" == typeof e && e.prototype || Be);
    },
    Ve = Ge,
    Ye = qe,
    Ke = He;
  var $e = function $e(t) {
    return "function" != typeof t.constructor || Ke(t) ? {} : Ve(Ye(t));
  };
  var Xe = function Xe(t) {
      return null != t && "object" == typeof t;
    },
    Je = pt,
    Qe = Xe;
  var Ze = function Ze(t) {
      return Qe(t) && "[object Arguments]" == Je(t);
    },
    tr = Xe,
    er = Object.prototype,
    rr = er.hasOwnProperty,
    nr = er.propertyIsEnumerable,
    ir = Ze(function () {
      return arguments;
    }()) ? Ze : function (t) {
      return tr(t) && rr.call(t, "callee") && !nr.call(t, "callee");
    },
    or = ir,
    ar = Array.isArray;
  var sr = function sr(t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
    },
    hr = wt,
    ur = sr;
  var dr = function dr(t) {
      return null != t && ur(t.length) && !hr(t);
    },
    cr = dr,
    lr = Xe;
  var fr = function fr(t) {
      return lr(t) && cr(t);
    },
    gr = {
      exports: {}
    };
  var pr = function pr() {
    return !1;
  };
  !function (t, e) {
    var r = nt,
      n = pr,
      i = e && !e.nodeType && e,
      o = i && t && !t.nodeType && t,
      a = o && o.exports === i ? r.Buffer : void 0,
      s = (a ? a.isBuffer : void 0) || n;
    t.exports = s;
  }(gr, gr.exports);
  var yr = pt,
    vr = qe,
    mr = Xe,
    br = Function.prototype,
    wr = Object.prototype,
    Er = br.toString,
    Ar = wr.hasOwnProperty,
    xr = Er.call(Object);
  var zr = function zr(t) {
      if (!mr(t) || "[object Object]" != yr(t)) return !1;
      var e = vr(t);
      if (null === e) return !0;
      var r = Ar.call(e, "constructor") && e.constructor;
      return "function" == typeof r && r instanceof r && Er.call(r) == xr;
    },
    Mr = pt,
    Sr = sr,
    Dr = Xe,
    Nr = {};
  Nr["[object Float32Array]"] = Nr["[object Float64Array]"] = Nr["[object Int8Array]"] = Nr["[object Int16Array]"] = Nr["[object Int32Array]"] = Nr["[object Uint8Array]"] = Nr["[object Uint8ClampedArray]"] = Nr["[object Uint16Array]"] = Nr["[object Uint32Array]"] = !0, Nr["[object Arguments]"] = Nr["[object Array]"] = Nr["[object ArrayBuffer]"] = Nr["[object Boolean]"] = Nr["[object DataView]"] = Nr["[object Date]"] = Nr["[object Error]"] = Nr["[object Function]"] = Nr["[object Map]"] = Nr["[object Number]"] = Nr["[object Object]"] = Nr["[object RegExp]"] = Nr["[object Set]"] = Nr["[object String]"] = Nr["[object WeakMap]"] = !1;
  var kr = function kr(t) {
    return Dr(t) && Sr(t.length) && !!Nr[Mr(t)];
  };
  var Cr = function Cr(t) {
      return function (e) {
        return t(e);
      };
    },
    Or = {
      exports: {}
    };
  !function (t, e) {
    var r = tt,
      n = e && !e.nodeType && e,
      i = n && t && !t.nodeType && t,
      o = i && i.exports === n && r.process,
      a = function () {
        try {
          var t = i && i.require && i.require("util").types;
          return t || o && o.binding && o.binding("util");
        } catch (t) {}
      }();
    t.exports = a;
  }(Or, Or.exports);
  var Wr = kr,
    jr = Cr,
    _r = Or.exports,
    Pr = _r && _r.isTypedArray,
    Ur = Pr ? jr(Pr) : Wr;
  var Ir = function Ir(t, e) {
      if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e];
    },
    Fr = Ce,
    Tr = _,
    Lr = Object.prototype.hasOwnProperty;
  var Rr = function Rr(t, e, r) {
      var n = t[e];
      Lr.call(t, e) && Tr(n, r) && (void 0 !== r || e in t) || Fr(t, e, r);
    },
    Gr = Ce;
  var qr = function qr(t, e, r, n) {
    var i = !r;
    r || (r = {});
    for (var o = -1, a = e.length; ++o < a;) {
      var s = e[o],
        h = n ? n(r[s], t[s], s, r, t) : void 0;
      void 0 === h && (h = t[s]), i ? Gr(r, s, h) : Rr(r, s, h);
    }
    return r;
  };
  var Br = /^(?:0|[1-9]\d*)$/;
  var Hr = function Hr(t, e) {
      var r = typeof t;
      return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && Br.test(t)) && t > -1 && t % 1 == 0 && t < e;
    },
    Vr = function Vr(t, e) {
      for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
      return n;
    },
    Yr = or,
    Kr = ar,
    $r = gr.exports,
    Xr = Hr,
    Jr = Ur,
    Qr = Object.prototype.hasOwnProperty;
  var Zr = function Zr(t, e) {
    var r = Kr(t),
      n = !r && Yr(t),
      i = !r && !n && $r(t),
      o = !r && !n && !i && Jr(t),
      a = r || n || i || o,
      s = a ? Vr(t.length, String) : [],
      h = s.length;
    for (var u in t) !e && !Qr.call(t, u) || a && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Xr(u, h)) || s.push(u);
    return s;
  };
  var tn = yt,
    en = He,
    rn = function rn(t) {
      var e = [];
      if (null != t) for (var r in Object(t)) e.push(r);
      return e;
    },
    nn = Object.prototype.hasOwnProperty;
  var on = Zr,
    an = function an(t) {
      if (!tn(t)) return rn(t);
      var e = en(t),
        r = [];
      for (var n in t) ("constructor" != n || !e && nn.call(t, n)) && r.push(n);
      return r;
    },
    sn = dr;
  var hn = function hn(t) {
      return sn(t) ? on(t, !0) : an(t);
    },
    un = qr,
    dn = hn;
  var cn = je,
    ln = Pe.exports,
    fn = Fe,
    gn = Te,
    pn = $e,
    yn = or,
    vn = ar,
    mn = fr,
    bn = gr.exports,
    wn = wt,
    En = yt,
    An = zr,
    xn = Ur,
    zn = Ir,
    Mn = function Mn(t) {
      return un(t, dn(t));
    };
  var Sn = Se,
    Dn = je,
    Nn = _e,
    kn = function kn(t, e, r, n, i, o, a) {
      var s = zn(t, r),
        h = zn(e, r),
        u = a.get(h);
      if (u) cn(t, r, u);else {
        var d = o ? o(s, h, r + "", t, e, a) : void 0,
          c = void 0 === d;
        if (c) {
          var l = vn(h),
            f = !l && bn(h),
            g = !l && !f && xn(h);
          d = h, l || f || g ? vn(s) ? d = s : mn(s) ? d = gn(s) : f ? (c = !1, d = ln(h, !0)) : g ? (c = !1, d = fn(h, !0)) : d = [] : An(h) || yn(h) ? (d = s, yn(s) ? d = Mn(s) : En(s) && !wn(s) || (d = pn(h))) : c = !1;
        }
        c && (a.set(h, d), i(d, h, n, o, a), a["delete"](h)), cn(t, r, d);
      }
    },
    Cn = yt,
    On = hn,
    Wn = Ir;
  var jn = function t(e, r, n, i, o) {
    e !== r && Nn(r, function (a, s) {
      if (o || (o = new Sn()), Cn(a)) kn(e, r, s, n, t, i, o);else {
        var h = i ? i(Wn(e, s), a, s + "", e, r, o) : void 0;
        void 0 === h && (h = a), Dn(e, s, h);
      }
    }, On);
  };
  var _n = function _n(t) {
    return t;
  };
  var Pn = function Pn(t, e, r) {
      switch (r.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, r[0]);
        case 2:
          return t.call(e, r[0], r[1]);
        case 3:
          return t.call(e, r[0], r[1], r[2]);
      }
      return t.apply(e, r);
    },
    Un = Math.max;
  var In = function In(t, e, r) {
    return e = Un(void 0 === e ? t.length - 1 : e, 0), function () {
      for (var n = arguments, i = -1, o = Un(n.length - e, 0), a = Array(o); ++i < o;) a[i] = n[e + i];
      i = -1;
      for (var s = Array(e + 1); ++i < e;) s[i] = n[i];
      return s[e] = r(a), Pn(t, this, s);
    };
  };
  var Fn = function Fn(t) {
      return function () {
        return t;
      };
    },
    Tn = Ne,
    Ln = Tn ? function (t, e) {
      return Tn(t, "toString", {
        configurable: !0,
        enumerable: !1,
        value: Fn(e),
        writable: !0
      });
    } : _n,
    Rn = Date.now;
  var Gn = function Gn(t) {
      var e = 0,
        r = 0;
      return function () {
        var n = Rn(),
          i = 16 - (n - r);
        if (r = n, i > 0) {
          if (++e >= 800) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    },
    qn = Gn(Ln),
    Bn = _n,
    Hn = In,
    Vn = qn;
  var Yn = _,
    Kn = dr,
    $n = Hr,
    Xn = yt;
  var Jn = function Jn(t, e) {
      return Vn(Hn(t, e, Bn), t + "");
    },
    Qn = function Qn(t, e, r) {
      if (!Xn(r)) return !1;
      var n = typeof e;
      return !!("number" == n ? Kn(r) && $n(e, r.length) : "string" == n && e in r) && Yn(r[e], t);
    };
  var Zn = jn,
    ti = function (t) {
      return Jn(function (e, r) {
        var n = -1,
          i = r.length,
          o = i > 1 ? r[i - 1] : void 0,
          a = i > 2 ? r[2] : void 0;
        for (o = t.length > 3 && "function" == typeof o ? (i--, o) : void 0, a && Qn(r[0], r[1], a) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
          var s = r[n];
          s && t(e, s, n, o);
        }
        return e;
      });
    }(function (t, e, r) {
      Zn(t, e, r);
    }),
    ei = {
      batchSize: 500,
      padding: 20,
      width: 2048,
      height: 2048,
      nodes: {
        reducer: null,
        defaultColor: "#999"
      },
      edges: {
        reducer: null,
        defaultColor: "#ccc"
      }
    };
  W.DEFAULTS = ei, W.refineSettings = function (t) {
    var e = {
      width: (t = t || {}).width,
      height: t.height
    };
    if (e.width && !e.height && (e.height = e.width), e.height && !e.width && (e.width = e.height), !(t = ti({}, ei, t, e)).width && !t.height) throw new Error("graphology-canvas: need at least a valid width or height!");
    return t;
  }, W.DEFAULT_NODE_REDUCER = function (t, e, r) {
    var n = {
      type: r.type || "circle",
      label: r.label || e,
      x: r.x,
      y: r.y,
      size: r.size || 1,
      color: r.color || t.nodes.defaultColor
    };
    if ("number" != typeof n.x || "number" != typeof n.y) throw new Error('graphology-canvas: the "' + e + '" node has no valid x or y position.');
    return n;
  }, W.DEFAULT_EDGE_REDUCER = function (t, e, r) {
    return {
      type: r.type || "line",
      size: r.size || 1,
      color: r.color || t.edges.defaultColor
    };
  };
  var ri = W,
    ni = w.createGraphToViewportConversionFunction;
  b.reduceNodes = function (t, e) {
    var r = e.width,
      n = e.height,
      i = 1 / 0,
      o = -1 / 0,
      a = 1 / 0,
      s = -1 / 0,
      h = {};
    t.forEachNode(function (t, r) {
      "function" == typeof e.nodes.reducer && (r = e.nodes.reducer(e, t, r)), r = ri.DEFAULT_NODE_REDUCER(e, t, r), h[t] = r;
      var n = r.x,
        u = r.y;
      n < i && (i = n), n > o && (o = n), u < a && (a = u), u > s && (s = u);
    });
    var u = ni({
      x: [i, o],
      y: [a, s]
    }, {
      width: r,
      height: n
    }, {
      padding: e.padding
    });
    for (var d in h) u.assign(h[d]);
    return h;
  };
  var ii = 2 * Math.PI,
    oi = b,
    ai = W,
    si = function si(t, e, r, n) {
      t.fillStyle = e, t.fillRect(0, 0, r, n);
    },
    hi = {
      nodes: {
        circle: function circle(t, e, r) {
          e.fillStyle = r.color, e.beginPath(), e.arc(r.x, r.y, r.size, 0, ii, !0), e.closePath(), e.fill();
        }
      },
      edges: {
        line: function line(t, e, r, n, i) {
          e.strokeStyle = r.color, e.lineWidth = r.size, e.beginPath(), e.moveTo(n.x, n.y), e.lineTo(i.x, i.y), e.stroke();
        }
      }
    };
  m.renderSync = function (t, e, r) {
    var n,
      i,
      o,
      a,
      s = oi.reduceNodes(t, r);
    for (o in si(e, "white", r.width, r.height), t.forEachEdge(function (t, o, a, h) {
      "function" == typeof r.edges.reducer && (o = r.edges.reducer(r, t, o)), o = ai.DEFAULT_EDGE_REDUCER(r, t, o), n = s[a], i = s[h], hi.edges[o.type](r, e, o, n, i);
    }), s) a = s[o], hi.nodes[a.type](r, e, a);
  };
  var ui = function ui(t) {
    return setTimeout(t, 16);
  };
  function di(t, e, r) {
    return t() ? (e(), t() ? ui(function () {
      di(t, e, r);
    }) : r()) : r();
  }
  "undefined" != typeof requestAnimationFrame && (ui = requestAnimationFrame), m.renderAsync = function (t, e, r, n) {
    var i = oi.reduceNodes(t, r);
    si(e, "white", r.width, r.height);
    var o = t.edges(),
      a = 0;
    var s = new Array(t.order),
      h = 0;
    for (var u in i) s[h++] = i[u];
    var d = 0;
    function c() {
      var t, n;
      for (t = Math.min(d + r.batchSize, s.length); d < t; d++) n = s[d], hi.nodes[n.type](r, e, n);
    }
    function l() {
      return d < s.length;
    }
    di(function () {
      return a < o.length;
    }, function () {
      var n, s, h, u, d, c, l, f;
      for (n = Math.min(a + r.batchSize, o.length); a < n; a++) s = o[a], h = t.getEdgeAttributes(s), d = (u = t.extremities(s))[0], c = u[1], "function" == typeof r.edges.reducer && (h = r.edges.reducer(r, s, h)), h = ai.DEFAULT_EDGE_REDUCER(r, s, h), l = i[d], f = i[c], hi.edges[h.type](r, e, h, l, f);
    }, function () {
      di(l, c, function () {
        return n();
      });
    });
  };
  var ci = i,
    li = m,
    fi = W.refineSettings;
  v.render = function (t, e, r) {
    if (!ci(t)) throw new Error("graphology-canvas/render: expecting a valid graphology instance.");
    r = fi(r), li.renderSync(t, e, r);
  }, v.renderAsync = function (t, e, r, n) {
    3 === arguments.length && (n = r, r = {}), r = fi(r), li.renderAsync(t, e, r, n);
  };
  var gi = v,
    pi = i,
    yi = function yi(t) {
      if (!pi(t)) throw new Error("graphology-utils/infer-type: expecting a valid graphology instance.");
      var e = t.type;
      return "mixed" !== e ? e : 0 === t.directedSize && 0 === t.undirectedSize || t.directedSize > 0 && t.undirectedSize > 0 ? "mixed" : t.directedSize > 0 ? "directed" : "undirected";
    };
  function vi(t) {
    if ("function" != typeof t) throw new Error("obliterator/iterator: expecting a function!");
    this.next = t;
  }
  "undefined" != typeof Symbol && (vi.prototype[Symbol.iterator] = function () {
    return this;
  }), vi.of = function () {
    var t = arguments,
      e = t.length,
      r = 0;
    return new vi(function () {
      return r >= e ? {
        done: !0
      } : {
        done: !1,
        value: t[r++]
      };
    });
  }, vi.empty = function () {
    return new vi(function () {
      return {
        done: !0
      };
    });
  }, vi.fromSequence = function (t) {
    var e = 0,
      r = t.length;
    return new vi(function () {
      return e >= r ? {
        done: !0
      } : {
        done: !1,
        value: t[e++]
      };
    });
  }, vi.is = function (t) {
    return t instanceof vi || "object" == typeof t && null !== t && "function" == typeof t.next;
  };
  var mi = vi,
    bi = {};
  !function (t) {
    var e = Math.pow(2, 8) - 1,
      r = Math.pow(2, 16) - 1,
      n = Math.pow(2, 32) - 1,
      i = Math.pow(2, 7) - 1,
      o = Math.pow(2, 15) - 1,
      a = Math.pow(2, 31) - 1;
    t.getPointerArray = function (t) {
      var i = t - 1;
      if (i <= e) return Uint8Array;
      if (i <= r) return Uint16Array;
      if (i <= n) return Uint32Array;
      throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.");
    }, t.getSignedPointerArray = function (t) {
      var e = t - 1;
      return e <= i ? Int8Array : e <= o ? Int16Array : e <= a ? Int32Array : Float64Array;
    }, t.getNumberType = function (t) {
      return t === (0 | t) ? -1 === Math.sign(t) ? t <= 127 && t >= -128 ? Int8Array : t <= 32767 && t >= -32768 ? Int16Array : Int32Array : t <= 255 ? Uint8Array : t <= 65535 ? Uint16Array : Uint32Array : Float64Array;
    };
    var s = {
      Uint8Array: 1,
      Int8Array: 2,
      Uint16Array: 3,
      Int16Array: 4,
      Uint32Array: 5,
      Int32Array: 6,
      Float32Array: 7,
      Float64Array: 8
    };
    t.getMinimalRepresentation = function (e, r) {
      var n,
        i,
        o,
        a,
        h,
        u = null,
        d = 0;
      for (a = 0, h = e.length; a < h; a++) o = r ? r(e[a]) : e[a], i = t.getNumberType(o), (n = s[i.name]) > d && (d = n, u = i);
      return u;
    }, t.isTypedArray = function (t) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView(t);
    }, t.concat = function () {
      var t,
        e,
        r,
        n = 0;
      for (t = 0, r = arguments.length; t < r; t++) n += arguments[t].length;
      var i = new arguments[0].constructor(n);
      for (t = 0, e = 0; t < r; t++) i.set(arguments[t], e), e += arguments[t].length;
      return i;
    }, t.indices = function (e) {
      for (var r = new (t.getPointerArray(e))(e), n = 0; n < e; n++) r[n] = n;
      return r;
    };
  }(bi);
  var wi = mi,
    Ei = bi.getPointerArray;
  function Ai(t, e) {
    arguments.length < 2 && (e = t, t = Array);
    var r = Ei(e);
    this.size = 0, this.length = e, this.dense = new r(e), this.sparse = new r(e), this.vals = new t(e);
  }
  Ai.prototype.clear = function () {
    this.size = 0;
  }, Ai.prototype.has = function (t) {
    var e = this.sparse[t];
    return e < this.size && this.dense[e] === t;
  }, Ai.prototype.get = function (t) {
    var e = this.sparse[t];
    if (e < this.size && this.dense[e] === t) return this.vals[e];
  }, Ai.prototype.set = function (t, e) {
    var r = this.sparse[t];
    return r < this.size && this.dense[r] === t ? (this.vals[r] = e, this) : (this.dense[this.size] = t, this.sparse[t] = this.size, this.vals[this.size] = e, this.size++, this);
  }, Ai.prototype["delete"] = function (t) {
    var e = this.sparse[t];
    return !(e >= this.size || this.dense[e] !== t) && (e = this.dense[this.size - 1], this.dense[this.sparse[t]] = e, this.sparse[e] = this.sparse[t], this.size--, !0);
  }, Ai.prototype.forEach = function (t, e) {
    e = arguments.length > 1 ? e : this;
    for (var r = 0; r < this.size; r++) t.call(e, this.vals[r], this.dense[r]);
  }, Ai.prototype.keys = function () {
    var t = this.size,
      e = this.dense,
      r = 0;
    return new wi(function () {
      if (r < t) {
        var n = e[r];
        return r++, {
          value: n
        };
      }
      return {
        done: !0
      };
    });
  }, Ai.prototype.values = function () {
    var t = this.size,
      e = this.vals,
      r = 0;
    return new wi(function () {
      if (r < t) {
        var n = e[r];
        return r++, {
          value: n
        };
      }
      return {
        done: !0
      };
    });
  }, Ai.prototype.entries = function () {
    var t = this.size,
      e = this.dense,
      r = this.vals,
      n = 0;
    return new wi(function () {
      if (n < t) {
        var i = [e[n], r[n]];
        return n++, {
          value: i
        };
      }
      return {
        done: !0
      };
    });
  }, "undefined" != typeof Symbol && (Ai.prototype[Symbol.iterator] = Ai.prototype.entries), Ai.prototype.inspect = function () {
    for (var t = new Map(), e = 0; e < this.size; e++) t.set(this.dense[e], this.vals[e]);
    return Object.defineProperty(t, "constructor", {
      value: Ai,
      enumerable: !1
    }), t.length = this.length, this.vals.constructor !== Array && (t.type = this.vals.constructor.name), t;
  }, "undefined" != typeof Symbol && (Ai.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = Ai.prototype.inspect);
  var xi = Ai,
    zi = mi,
    Mi = bi.getPointerArray;
  function Si(t) {
    var e = Mi(t);
    this.start = 0, this.size = 0, this.capacity = t, this.dense = new e(t), this.sparse = new e(t);
  }
  Si.prototype.clear = function () {
    this.start = 0, this.size = 0;
  }, Si.prototype.has = function (t) {
    if (0 === this.size) return !1;
    var e = this.sparse[t];
    return (e < this.capacity && e >= this.start && e < this.start + this.size || e < (this.start + this.size) % this.capacity) && this.dense[e] === t;
  }, Si.prototype.enqueue = function (t) {
    var e = this.sparse[t];
    if (0 !== this.size && (e < this.capacity && e >= this.start && e < this.start + this.size || e < (this.start + this.size) % this.capacity) && this.dense[e] === t) return this;
    return e = (this.start + this.size) % this.capacity, this.dense[e] = t, this.sparse[t] = e, this.size++, this;
  }, Si.prototype.dequeue = function () {
    if (0 !== this.size) {
      var t = this.start;
      this.size--, this.start++, this.start === this.capacity && (this.start = 0);
      var e = this.dense[t];
      return this.sparse[e] = this.capacity, e;
    }
  }, Si.prototype.forEach = function (t, e) {
    e = arguments.length > 1 ? e : this;
    for (var r = this.capacity, n = this.size, i = this.start, o = 0; o < n;) t.call(e, this.dense[i], o, this), o++, ++i === r && (i = 0);
  }, Si.prototype.values = function () {
    var t = this.dense,
      e = this.capacity,
      r = this.size,
      n = this.start,
      i = 0;
    return new zi(function () {
      if (i >= r) return {
        done: !0
      };
      var o = t[n];
      return n++, i++, n === e && (n = 0), {
        value: o,
        done: !1
      };
    });
  }, "undefined" != typeof Symbol && (Si.prototype[Symbol.iterator] = Si.prototype.values), Si.prototype.inspect = function () {
    var t = [];
    return this.forEach(function (e) {
      t.push(e);
    }), Object.defineProperty(t, "constructor", {
      value: Si,
      enumerable: !1
    }), t.capacity = this.capacity, t;
  }, "undefined" != typeof Symbol && (Si.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = Si.prototype.inspect);
  var Di = Si;
  function Ni(t) {
    return function (e) {
      return "number" != typeof e && (e = e.length), Math.floor(t() * e);
    };
  }
  var ki = Ni(Math.random);
  ki.createRandomIndex = Ni;
  var Ci = ki,
    Oi = {},
    Wi = {};
  function ji(t) {
    return "number" != typeof t || isNaN(t) ? 1 : t;
  }
  function _i(t, e) {
    var r = {},
      n = function n(t) {
        return void 0 === t ? e : t;
      };
    "function" == typeof e && (n = e);
    var i = function i(e) {
        return n(e[t]);
      },
      o = function o() {
        return n(void 0);
      };
    return "string" == typeof t ? (r.fromAttributes = i, r.fromGraph = function (t, e) {
      return i(t.getEdgeAttributes(e));
    }, r.fromEntry = function (t, e) {
      return i(e);
    }, r.fromPartialEntry = r.fromEntry, r.fromMinimalEntry = r.fromEntry) : "function" == typeof t ? (r.fromAttributes = function () {
      throw new Error("graphology-utils/getters/createEdgeValueGetter: irrelevant usage.");
    }, r.fromGraph = function (e, r) {
      var i = e.extremities(r);
      return n(t(r, e.getEdgeAttributes(r), i[0], i[1], e.getNodeAttributes(i[0]), e.getNodeAttributes(i[1]), e.isUndirected(r)));
    }, r.fromEntry = function (e, r, i, o, a, s, h) {
      return n(t(e, r, i, o, a, s, h));
    }, r.fromPartialEntry = function (e, r, i, o) {
      return n(t(e, r, i, o));
    }, r.fromMinimalEntry = function (e, r) {
      return n(t(e, r));
    }) : (r.fromAttributes = o, r.fromGraph = o, r.fromEntry = o, r.fromMinimalEntry = o), r;
  }
  Wi.createNodeValueGetter = function (t, e) {
    var r = {},
      n = function n(t) {
        return void 0 === t ? e : t;
      };
    "function" == typeof e && (n = e);
    var i = function i(e) {
        return n(e[t]);
      },
      o = function o() {
        return n(void 0);
      };
    return "string" == typeof t ? (r.fromAttributes = i, r.fromGraph = function (t, e) {
      return i(t.getNodeAttributes(e));
    }, r.fromEntry = function (t, e) {
      return i(e);
    }) : "function" == typeof t ? (r.fromAttributes = function () {
      throw new Error("graphology-utils/getters/createNodeValueGetter: irrelevant usage.");
    }, r.fromGraph = function (e, r) {
      return n(t(r, e.getNodeAttributes(r)));
    }, r.fromEntry = function (e, r) {
      return n(t(e, r));
    }) : (r.fromAttributes = o, r.fromGraph = o, r.fromEntry = o), r;
  }, Wi.createEdgeValueGetter = _i, Wi.createEdgeWeightGetter = function (t) {
    return _i(t, ji);
  };
  var Pi = bi,
    Ui = E,
    Ii = Wi.createEdgeWeightGetter,
    Fi = Symbol["for"]("nodejs.util.inspect.custom"),
    Ti = {
      getEdgeWeight: "weight",
      keepDendrogram: !1,
      resolution: 1
    };
  function Li(t, e) {
    var r = (e = Ui(e, Ti)).resolution,
      n = Ii(e.getEdgeWeight).fromEntry,
      i = 2 * (t.size - t.selfLoopCount),
      o = Pi.getPointerArray(i),
      a = Pi.getPointerArray(t.order + 1),
      s = e.getEdgeWeight ? Float64Array : Pi.getPointerArray(2 * t.size);
    this.C = t.order, this.M = 0, this.E = i, this.U = 0, this.resolution = r, this.level = 0, this.graph = t, this.nodes = new Array(t.order), this.keepDendrogram = e.keepDendrogram, this.neighborhood = new a(i), this.weights = new s(i), this.loops = new s(t.order), this.starts = new o(t.order + 1), this.belongings = new a(t.order), this.dendrogram = [], this.mapping = null, this.counts = new a(t.order), this.unused = new a(t.order), this.totalWeights = new s(t.order);
    var h,
      u = {},
      d = 0,
      c = 0,
      l = this;
    t.forEachNode(function (e) {
      l.nodes[d] = e, u[e] = d, c += t.undirectedDegreeWithoutSelfLoops(e), l.starts[d] = c, l.belongings[d] = d, l.counts[d] = 1, d++;
    }), t.forEachEdge(function (t, e, r, i, o, a, s) {
      if (h = n(t, e, r, i, o, a, s), r = u[r], i = u[i], l.M += h, r === i) l.totalWeights[r] += 2 * h, l.loops[r] = 2 * h;else {
        l.totalWeights[r] += h, l.totalWeights[i] += h;
        var d = --l.starts[r],
          c = --l.starts[i];
        l.neighborhood[d] = i, l.neighborhood[c] = r, l.weights[d] = h, l.weights[c] = h;
      }
    }), this.starts[d] = this.E, this.keepDendrogram ? this.dendrogram.push(this.belongings.slice()) : this.mapping = this.belongings.slice();
  }
  function Ri(t, e) {
    var r = (e = Ui(e, Ti)).resolution,
      n = Ii(e.getEdgeWeight).fromEntry,
      i = 2 * (t.size - t.selfLoopCount),
      o = Pi.getPointerArray(i),
      a = Pi.getPointerArray(t.order + 1),
      s = e.getEdgeWeight ? Float64Array : Pi.getPointerArray(2 * t.size);
    this.C = t.order, this.M = 0, this.E = i, this.U = 0, this.resolution = r, this.level = 0, this.graph = t, this.nodes = new Array(t.order), this.keepDendrogram = e.keepDendrogram, this.neighborhood = new a(i), this.weights = new s(i), this.loops = new s(t.order), this.starts = new o(t.order + 1), this.offsets = new o(t.order), this.belongings = new a(t.order), this.dendrogram = [], this.counts = new a(t.order), this.unused = new a(t.order), this.totalInWeights = new s(t.order), this.totalOutWeights = new s(t.order);
    var h,
      u = {},
      d = 0,
      c = 0,
      l = this;
    t.forEachNode(function (e) {
      l.nodes[d] = e, u[e] = d, c += t.outDegreeWithoutSelfLoops(e), l.starts[d] = c, c += t.inDegreeWithoutSelfLoops(e), l.offsets[d] = c, l.belongings[d] = d, l.counts[d] = 1, d++;
    }), t.forEachEdge(function (t, e, r, i, o, a, s) {
      if (h = n(t, e, r, i, o, a, s), r = u[r], i = u[i], l.M += h, r === i) l.loops[r] += h, l.totalInWeights[r] += h, l.totalOutWeights[r] += h;else {
        l.totalOutWeights[r] += h, l.totalInWeights[i] += h;
        var d = --l.starts[r],
          c = --l.offsets[i];
        l.neighborhood[d] = i, l.neighborhood[c] = r, l.weights[d] = h, l.weights[c] = h;
      }
    }), this.starts[d] = this.E, this.keepDendrogram ? this.dendrogram.push(this.belongings.slice()) : this.mapping = this.belongings.slice();
  }
  Li.prototype.isolate = function (t, e) {
    var r = this.belongings[t];
    if (1 === this.counts[r]) return r;
    var n = this.unused[--this.U],
      i = this.loops[t];
    return this.totalWeights[r] -= e + i, this.totalWeights[n] += e + i, this.belongings[t] = n, this.counts[r]--, this.counts[n]++, n;
  }, Li.prototype.move = function (t, e, r) {
    var n = this.belongings[t],
      i = this.loops[t];
    this.totalWeights[n] -= e + i, this.totalWeights[r] += e + i, this.belongings[t] = r;
    var o = 1 == this.counts[n]--;
    this.counts[r]++, o && (this.unused[this.U++] = n);
  }, Li.prototype.computeNodeDegree = function (t) {
    var e,
      r,
      n = 0;
    for (e = this.starts[t], r = this.starts[t + 1]; e < r; e++) n += this.weights[e];
    return n;
  }, Li.prototype.expensiveIsolate = function (t) {
    var e = this.computeNodeDegree(t);
    return this.isolate(t, e);
  }, Li.prototype.expensiveMove = function (t, e) {
    var r = this.computeNodeDegree(t);
    this.move(t, r, e);
  }, Li.prototype.zoomOut = function () {
    var t,
      e,
      r,
      n,
      i,
      o,
      a,
      s,
      h,
      u,
      d,
      c = new Array(this.C - this.U),
      l = {},
      f = this.nodes.length,
      g = 0,
      p = 0;
    for (t = 0, r = this.C; t < r; t++) (o = this.belongings[t]) in l || (l[o] = g, c[g] = {
      adj: {},
      totalWeights: this.totalWeights[o],
      internalWeights: 0
    }, g++), this.belongings[t] = l[o];
    if (this.keepDendrogram) {
      for (u = this.dendrogram[this.level], d = new (Pi.getPointerArray(g))(f), t = 0; t < f; t++) d[t] = this.belongings[u[t]];
      this.dendrogram.push(d);
    } else for (t = 0; t < f; t++) this.mapping[t] = this.belongings[this.mapping[t]];
    for (t = 0, r = this.C; t < r; t++) for (h = (s = c[o = this.belongings[t]]).adj, s.internalWeights += this.loops[t], e = this.starts[t], n = this.starts[t + 1]; e < n; e++) i = this.neighborhood[e], o !== (a = this.belongings[i]) ? (a in h || (h[a] = 0), h[a] += this.weights[e]) : s.internalWeights += this.weights[e];
    for (this.C = g, i = 0, o = 0; o < g; o++) for (a in h = (s = c[o]).adj, o = +o, this.totalWeights[o] = s.totalWeights, this.loops[o] = s.internalWeights, this.counts[o] = 1, this.starts[o] = i, this.belongings[o] = o, h) this.neighborhood[i] = +a, this.weights[i] = h[a], p++, i++;
    return this.starts[g] = p, this.E = p, this.U = 0, this.level++, l;
  }, Li.prototype.modularity = function () {
    var t,
      e,
      r,
      n,
      i = 0,
      o = 2 * this.M,
      a = new Float64Array(this.C);
    for (e = 0; e < this.C; e++) for (a[t = this.belongings[e]] += this.loops[e], r = this.starts[e], n = this.starts[e + 1]; r < n; r++) t === this.belongings[this.neighborhood[r]] && (a[t] += this.weights[r]);
    for (e = 0; e < this.C; e++) i += a[e] / o - Math.pow(this.totalWeights[e] / o, 2) * this.resolution;
    return i;
  }, Li.prototype.delta = function (t, e, r, n) {
    var i = this.M;
    return r / i - this.totalWeights[n] * (e += this.loops[t]) * this.resolution / (2 * i * i);
  }, Li.prototype.deltaWithOwnCommunity = function (t, e, r, n) {
    var i = this.M;
    return r / i - (this.totalWeights[n] - (e += this.loops[t])) * e * this.resolution / (2 * i * i);
  }, Li.prototype.fastDelta = function (t, e, r, n) {
    var i = this.M,
      o = this.totalWeights[n];
    return r - (e += this.loops[t]) * o * this.resolution / (2 * i);
  }, Li.prototype.fastDeltaWithOwnCommunity = function (t, e, r, n) {
    var i = this.M,
      o = this.totalWeights[n];
    return r - (e += this.loops[t]) * (o - e) * this.resolution / (2 * i);
  }, Li.prototype.bounds = function (t) {
    return [this.starts[t], this.starts[t + 1]];
  }, Li.prototype.project = function () {
    var t = this,
      e = {};
    return t.nodes.slice(0, this.C).forEach(function (r, n) {
      e[r] = Array.from(t.neighborhood.slice(t.starts[n], t.starts[n + 1])).map(function (e) {
        return t.nodes[e];
      });
    }), e;
  }, Li.prototype.collect = function (t) {
    arguments.length < 1 && (t = this.level);
    var e,
      r,
      n = {},
      i = this.keepDendrogram ? this.dendrogram[t] : this.mapping;
    for (e = 0, r = i.length; e < r; e++) n[this.nodes[e]] = i[e];
    return n;
  }, Li.prototype.assign = function (t, e) {
    arguments.length < 2 && (e = this.level);
    var r,
      n,
      i = this.keepDendrogram ? this.dendrogram[e] : this.mapping;
    for (r = 0, n = i.length; r < n; r++) this.graph.setNodeAttribute(this.nodes[r], t, i[r]);
  }, Li.prototype[Fi] = function () {
    var t = {};
    Object.defineProperty(t, "constructor", {
      value: Li,
      enumerable: !1
    }), t.C = this.C, t.M = this.M, t.E = this.E, t.U = this.U, t.resolution = this.resolution, t.level = this.level, t.nodes = this.nodes, t.starts = this.starts.slice(0, t.C + 1);
    var e = this;
    return ["neighborhood", "weights"].forEach(function (r) {
      t[r] = e[r].slice(0, t.E);
    }), ["counts", "loops", "belongings", "totalWeights"].forEach(function (r) {
      t[r] = e[r].slice(0, t.C);
    }), t.unused = this.unused.slice(0, this.U), this.keepDendrogram ? t.dendrogram = this.dendrogram : t.mapping = this.mapping, t;
  }, Ri.prototype.bounds = Li.prototype.bounds, Ri.prototype.inBounds = function (t) {
    return [this.offsets[t], this.starts[t + 1]];
  }, Ri.prototype.outBounds = function (t) {
    return [this.starts[t], this.offsets[t]];
  }, Ri.prototype.project = Li.prototype.project, Ri.prototype.projectIn = function () {
    var t = this,
      e = {};
    return t.nodes.slice(0, this.C).forEach(function (r, n) {
      e[r] = Array.from(t.neighborhood.slice(t.offsets[n], t.starts[n + 1])).map(function (e) {
        return t.nodes[e];
      });
    }), e;
  }, Ri.prototype.projectOut = function () {
    var t = this,
      e = {};
    return t.nodes.slice(0, this.C).forEach(function (r, n) {
      e[r] = Array.from(t.neighborhood.slice(t.starts[n], t.offsets[n])).map(function (e) {
        return t.nodes[e];
      });
    }), e;
  }, Ri.prototype.isolate = function (t, e, r) {
    var n = this.belongings[t];
    if (1 === this.counts[n]) return n;
    var i = this.unused[--this.U],
      o = this.loops[t];
    return this.totalInWeights[n] -= e + o, this.totalInWeights[i] += e + o, this.totalOutWeights[n] -= r + o, this.totalOutWeights[i] += r + o, this.belongings[t] = i, this.counts[n]--, this.counts[i]++, i;
  }, Ri.prototype.move = function (t, e, r, n) {
    var i = this.belongings[t],
      o = this.loops[t];
    this.totalInWeights[i] -= e + o, this.totalInWeights[n] += e + o, this.totalOutWeights[i] -= r + o, this.totalOutWeights[n] += r + o, this.belongings[t] = n;
    var a = 1 == this.counts[i]--;
    this.counts[n]++, a && (this.unused[this.U++] = i);
  }, Ri.prototype.computeNodeInDegree = function (t) {
    var e,
      r,
      n = 0;
    for (e = this.offsets[t], r = this.starts[t + 1]; e < r; e++) n += this.weights[e];
    return n;
  }, Ri.prototype.computeNodeOutDegree = function (t) {
    var e,
      r,
      n = 0;
    for (e = this.starts[t], r = this.offsets[t]; e < r; e++) n += this.weights[e];
    return n;
  }, Ri.prototype.expensiveMove = function (t, e) {
    var r = this.computeNodeInDegree(t),
      n = this.computeNodeOutDegree(t);
    this.move(t, r, n, e);
  }, Ri.prototype.zoomOut = function () {
    var t,
      e,
      r,
      n,
      i,
      o,
      a,
      s,
      h,
      u,
      d,
      c,
      l,
      f,
      g,
      p = new Array(this.C - this.U),
      y = {},
      v = this.nodes.length,
      m = 0,
      b = 0;
    for (t = 0, r = this.C; t < r; t++) (o = this.belongings[t]) in y || (y[o] = m, p[m] = {
      inAdj: {},
      outAdj: {},
      totalInWeights: this.totalInWeights[o],
      totalOutWeights: this.totalOutWeights[o],
      internalWeights: 0
    }, m++), this.belongings[t] = y[o];
    if (this.keepDendrogram) {
      for (f = this.dendrogram[this.level], g = new (Pi.getPointerArray(m))(v), t = 0; t < v; t++) g[t] = this.belongings[f[t]];
      this.dendrogram.push(g);
    } else for (t = 0; t < v; t++) this.mapping[t] = this.belongings[this.mapping[t]];
    for (t = 0, r = this.C; t < r; t++) for (o = this.belongings[t], h = this.offsets[t], c = (s = p[o]).inAdj, l = s.outAdj, s.internalWeights += this.loops[t], e = this.starts[t], n = this.starts[t + 1]; e < n; e++) i = this.neighborhood[e], d = (u = e < h) ? l : c, o !== (a = this.belongings[i]) ? (a in d || (d[a] = 0), d[a] += this.weights[e]) : u && (s.internalWeights += this.weights[e]);
    for (this.C = m, i = 0, o = 0; o < m; o++) {
      for (a in c = (s = p[o]).inAdj, l = s.outAdj, o = +o, this.totalInWeights[o] = s.totalInWeights, this.totalOutWeights[o] = s.totalOutWeights, this.loops[o] = s.internalWeights, this.counts[o] = 1, this.starts[o] = i, this.belongings[o] = o, l) this.neighborhood[i] = +a, this.weights[i] = l[a], b++, i++;
      for (a in this.offsets[o] = i, c) this.neighborhood[i] = +a, this.weights[i] = c[a], b++, i++;
    }
    return this.starts[m] = b, this.E = b, this.U = 0, this.level++, y;
  }, Ri.prototype.modularity = function () {
    var t,
      e,
      r,
      n,
      i = 0,
      o = this.M,
      a = new Float64Array(this.C);
    for (e = 0; e < this.C; e++) for (a[t = this.belongings[e]] += this.loops[e], r = this.starts[e], n = this.offsets[e]; r < n; r++) t === this.belongings[this.neighborhood[r]] && (a[t] += this.weights[r]);
    for (e = 0; e < this.C; e++) i += a[e] / o - this.totalInWeights[e] * this.totalOutWeights[e] / Math.pow(o, 2) * this.resolution;
    return i;
  }, Ri.prototype.delta = function (t, e, r, n, i) {
    var o = this.M,
      a = this.totalInWeights[i],
      s = this.totalOutWeights[i],
      h = this.loops[t];
    return n / o - ((r += h) * a + (e += h) * s) * this.resolution / (o * o);
  }, Ri.prototype.deltaWithOwnCommunity = function (t, e, r, n, i) {
    var o = this.M,
      a = this.totalInWeights[i],
      s = this.totalOutWeights[i],
      h = this.loops[t];
    return n / o - ((r += h) * (a - (e += h)) + e * (s - r)) * this.resolution / (o * o);
  }, Ri.prototype.collect = Li.prototype.collect, Ri.prototype.assign = Li.prototype.assign, Ri.prototype[Fi] = function () {
    var t = {};
    Object.defineProperty(t, "constructor", {
      value: Ri,
      enumerable: !1
    }), t.C = this.C, t.M = this.M, t.E = this.E, t.U = this.U, t.resolution = this.resolution, t.level = this.level, t.nodes = this.nodes, t.starts = this.starts.slice(0, t.C + 1);
    var e = this;
    return ["neighborhood", "weights"].forEach(function (r) {
      t[r] = e[r].slice(0, t.E);
    }), ["counts", "offsets", "loops", "belongings", "totalInWeights", "totalOutWeights"].forEach(function (r) {
      t[r] = e[r].slice(0, t.C);
    }), t.unused = this.unused.slice(0, this.U), this.keepDendrogram ? t.dendrogram = this.dendrogram : t.mapping = this.mapping, t;
  }, Oi.UndirectedLouvainIndex = Li, Oi.DirectedLouvainIndex = Ri;
  var Gi = E,
    qi = i,
    Bi = yi,
    Hi = xi,
    Vi = Di,
    Yi = Ci.createRandomIndex,
    Ki = Oi,
    $i = Ki.UndirectedLouvainIndex,
    Xi = Ki.DirectedLouvainIndex,
    Ji = {
      nodeCommunityAttribute: "community",
      getEdgeWeight: "weight",
      fastLocalMoves: !0,
      randomWalk: !0,
      resolution: 1,
      rng: Math.random
    };
  function Qi(t, e, r) {
    var n = t.get(e);
    void 0 === n && (n = 0), n += r, t.set(e, n);
  }
  function Zi(t, e, r, n, i) {
    return Math.abs(n - i) < 1e-10 ? t !== e && r > t : n > i;
  }
  function to(t, e, r) {
    var n,
      i,
      o,
      a,
      s,
      h,
      u,
      d,
      c,
      l,
      f,
      g,
      p,
      y,
      v,
      m,
      b,
      w,
      E,
      A = new $i(e, {
        getEdgeWeight: r.getEdgeWeight,
        keepDendrogram: t,
        resolution: r.resolution
      }),
      x = Yi(r.rng),
      z = !0,
      M = !0,
      S = new Hi(Float64Array, A.C),
      D = 0,
      N = 0,
      k = [];
    for (r.fastLocalMoves && (o = new Vi(A.C)); z;) {
      if (g = A.C, z = !1, M = !0, r.fastLocalMoves) {
        for (E = 0, d = r.randomWalk ? x(g) : 0, c = 0; c < g; c++, d++) l = d % g, o.enqueue(l);
        for (; 0 !== o.size;) {
          for (l = o.dequeue(), N++, p = 0, S.clear(), n = A.belongings[l], a = A.starts[l], s = A.starts[l + 1]; a < s; a++) f = A.neighborhood[a], p += h = A.weights[a], Qi(S, i = A.belongings[f], h);
          for (m = A.fastDeltaWithOwnCommunity(l, p, S.get(n) || 0, n), v = n, u = 0; u < S.size; u++) (i = S.dense[u]) !== n && (y = S.vals[u], D++, Zi(v, n, i, b = A.fastDelta(l, p, y, i), m) && (m = b, v = i));
          if (m < 0) {
            if ((v = A.isolate(l, p)) === n) continue;
          } else {
            if (v === n) continue;
            A.move(l, p, v);
          }
          for (z = !0, E++, a = A.starts[l], s = A.starts[l + 1]; a < s; a++) f = A.neighborhood[a], (i = A.belongings[f]) !== v && o.enqueue(f);
        }
        k.push(E);
      } else for (w = [], k.push(w); M;) {
        for (M = !1, E = 0, d = r.randomWalk ? x(g) : 0, c = 0; c < g; c++, d++) {
          for (l = d % g, N++, p = 0, S.clear(), n = A.belongings[l], a = A.starts[l], s = A.starts[l + 1]; a < s; a++) f = A.neighborhood[a], p += h = A.weights[a], Qi(S, i = A.belongings[f], h);
          for (m = A.fastDeltaWithOwnCommunity(l, p, S.get(n) || 0, n), v = n, u = 0; u < S.size; u++) (i = S.dense[u]) !== n && (y = S.vals[u], D++, Zi(v, n, i, b = A.fastDelta(l, p, y, i), m) && (m = b, v = i));
          if (m < 0) {
            if ((v = A.isolate(l, p)) === n) continue;
          } else {
            if (v === n) continue;
            A.move(l, p, v);
          }
          M = !0, E++;
        }
        w.push(E), z = M || z;
      }
      z && A.zoomOut();
    }
    return {
      index: A,
      deltaComputations: D,
      nodesVisited: N,
      moves: k
    };
  }
  function eo(t, e, r) {
    var n,
      i,
      o,
      a,
      s,
      h,
      u,
      d,
      c,
      l,
      f,
      g,
      p,
      y,
      v,
      m,
      b,
      w,
      E,
      A,
      x,
      z,
      M = new Xi(e, {
        getEdgeWeight: r.getEdgeWeight,
        keepDendrogram: t,
        resolution: r.resolution
      }),
      S = Yi(r.rng),
      D = !0,
      N = !0,
      k = new Hi(Float64Array, M.C),
      C = 0,
      O = 0,
      W = [];
    for (r.fastLocalMoves && (o = new Vi(M.C)); D;) {
      if (y = M.C, D = !1, N = !0, r.fastLocalMoves) {
        for (z = 0, l = r.randomWalk ? S(y) : 0, f = 0; f < y; f++, l++) g = l % y, o.enqueue(g);
        for (; 0 !== o.size;) {
          for (g = o.dequeue(), O++, v = 0, m = 0, k.clear(), n = M.belongings[g], a = M.starts[g], s = M.starts[g + 1], h = M.offsets[g]; a < s; a++) u = a < h, p = M.neighborhood[a], d = M.weights[a], u ? m += d : v += d, Qi(k, i = M.belongings[p], d);
          for (E = M.deltaWithOwnCommunity(g, v, m, k.get(n) || 0, n), w = n, c = 0; c < k.size; c++) (i = k.dense[c]) !== n && (b = k.vals[c], C++, Zi(w, n, i, A = M.delta(g, v, m, b, i), E) && (E = A, w = i));
          if (E < 0) {
            if ((w = M.isolate(g, v, m)) === n) continue;
          } else {
            if (w === n) continue;
            M.move(g, v, m, w);
          }
          for (D = !0, z++, a = M.starts[g], s = M.starts[g + 1]; a < s; a++) p = M.neighborhood[a], (i = M.belongings[p]) !== w && o.enqueue(p);
        }
        W.push(z);
      } else for (x = [], W.push(x); N;) {
        for (N = !1, z = 0, l = r.randomWalk ? S(y) : 0, f = 0; f < y; f++, l++) {
          for (g = l % y, O++, v = 0, m = 0, k.clear(), n = M.belongings[g], a = M.starts[g], s = M.starts[g + 1], h = M.offsets[g]; a < s; a++) u = a < h, p = M.neighborhood[a], d = M.weights[a], u ? m += d : v += d, Qi(k, i = M.belongings[p], d);
          for (E = M.deltaWithOwnCommunity(g, v, m, k.get(n) || 0, n), w = n, c = 0; c < k.size; c++) (i = k.dense[c]) !== n && (b = k.vals[c], C++, Zi(w, n, i, A = M.delta(g, v, m, b, i), E) && (E = A, w = i));
          if (E < 0) {
            if ((w = M.isolate(g, v, m)) === n) continue;
          } else {
            if (w === n) continue;
            M.move(g, v, m, w);
          }
          N = !0, z++;
        }
        x.push(z), D = N || D;
      }
      D && M.zoomOut();
    }
    return {
      index: M,
      deltaComputations: C,
      nodesVisited: O,
      moves: W
    };
  }
  function ro(t, e, r, n) {
    if (!qi(r)) throw new Error("graphology-communities-louvain: the given graph is not a valid graphology instance.");
    var i = Bi(r);
    if ("mixed" === i) throw new Error("graphology-communities-louvain: cannot run the algorithm on a true mixed graph.");
    n = Gi(n, Ji);
    var o = 0;
    if (0 === r.size) {
      if (t) return void r.forEachNode(function (t) {
        r.setNodeAttribute(t, n.nodeCommunityAttribute, o++);
      });
      var a = {};
      return r.forEachNode(function (t) {
        a[t] = o++;
      }), e ? {
        communities: a,
        count: r.order,
        deltaComputations: 0,
        dendrogram: null,
        level: 0,
        modularity: NaN,
        moves: null,
        nodesVisited: 0,
        resolution: n.resolution
      } : a;
    }
    var s = ("undirected" === i ? to : eo)(e, r, n),
      h = s.index;
    if (!e) return t ? void h.assign(n.nodeCommunityAttribute) : h.collect();
    var u = {
      count: h.C,
      deltaComputations: s.deltaComputations,
      dendrogram: h.dendrogram,
      level: h.level,
      modularity: h.modularity(),
      moves: s.moves,
      nodesVisited: s.nodesVisited,
      resolution: n.resolution
    };
    return t ? (h.assign(n.nodeCommunityAttribute), u) : (u.communities = h.collect(), u);
  }
  var no = ro.bind(null, !1, !1);
  no.assign = ro.bind(null, !0, !1), no.detailed = ro.bind(null, !1, !0), no.defaults = Ji;
  var io = no,
    oo = {},
    ao = {
      copyNode: function copyNode(t, e, r) {
        return r = Object.assign({}, r), t.addNode(e, r);
      }
    },
    so = {};
  function ho(t) {
    this.graph = t, this.stack = new Array(t.order), this.seen = new Set(), this.size = 0;
  }
  so.addEdge = function (t, e, r, n, i, o) {
    return e ? null == r ? t.addUndirectedEdge(n, i, o) : t.addUndirectedEdgeWithKey(r, n, i, o) : null == r ? t.addDirectedEdge(n, i, o) : t.addDirectedEdgeWithKey(r, n, i, o);
  }, so.copyEdge = function (t, e, r, n, i, o) {
    return o = Object.assign({}, o), e ? null == r ? t.addUndirectedEdge(n, i, o) : t.addUndirectedEdgeWithKey(r, n, i, o) : null == r ? t.addDirectedEdge(n, i, o) : t.addDirectedEdgeWithKey(r, n, i, o);
  }, so.mergeEdge = function (t, e, r, n, i, o) {
    return e ? null == r ? t.mergeUndirectedEdge(n, i, o) : t.mergeUndirectedEdgeWithKey(r, n, i, o) : null == r ? t.mergeDirectedEdge(n, i, o) : t.mergeDirectedEdgeWithKey(r, n, i, o);
  }, so.updateEdge = function (t, e, r, n, i, o) {
    return e ? null == r ? t.updateUndirectedEdge(n, i, o) : t.updateUndirectedEdgeWithKey(r, n, i, o) : null == r ? t.updateDirectedEdge(n, i, o) : t.updateDirectedEdgeWithKey(r, n, i, o);
  }, ho.prototype.hasAlreadySeenEverything = function () {
    return this.seen.size === this.graph.order;
  }, ho.prototype.countUnseenNodes = function () {
    return this.graph.order - this.seen.size;
  }, ho.prototype.forEachNodeYetUnseen = function (t) {
    var e = this.seen,
      r = this.graph;
    r.someNode(function (n, i) {
      return e.size === r.order || !e.has(n) && !!t(n, i);
    });
  }, ho.prototype.has = function (t) {
    return this.seen.has(t);
  }, ho.prototype.push = function (t) {
    var e = this.seen.size;
    return this.seen.add(t), e !== this.seen.size && (this.stack[this.size++] = t, !0);
  }, ho.prototype.pushWith = function (t, e) {
    var r = this.seen.size;
    return this.seen.add(t), r !== this.seen.size && (this.stack[this.size++] = e, !0);
  }, ho.prototype.pop = function () {
    if (0 !== this.size) return this.stack[--this.size];
  };
  var uo = ho,
    co = i,
    lo = ao.copyNode,
    fo = so.copyEdge,
    go = uo;
  function po(t, e) {
    if (!co(t)) throw new Error("graphology-components: the given graph is not a valid graphology instance.");
    if (t.order) {
      var r = new go(t),
        n = r.push.bind(r);
      r.forEachNodeYetUnseen(function (i) {
        var o,
          a = [];
        for (r.push(i); 0 !== r.size;) o = r.pop(), a.push(o), t.forEachNeighbor(o, n);
        e(a);
      });
    }
  }
  function yo(t, e) {
    if (!co(t)) throw new Error("graphology-components: the given graph is not a valid graphology instance.");
    if (t.order) {
      var r = new go(t),
        n = r.push.bind(r);
      r.forEachNodeYetUnseen(function (i) {
        var o,
          a = 0;
        for (r.push(i); 0 !== r.size;) o = r.pop(), a++, t.forEachNeighbor(o, n);
        e(a);
      });
    }
  }
  function vo(t) {
    if (!co(t)) throw new Error("graphology-components: the given graph is not a valid graphology instance.");
    if (!t.order) return [];
    var e,
      r = new go(t),
      n = r.push.bind(r),
      i = [];
    return r.forEachNodeYetUnseen(function (o) {
      var a;
      for (e = [], r.push(o); 0 !== r.size;) a = r.pop(), e.push(a), t.forEachNeighbor(a, n);
      return e.length > i.length && (i = e), i.length > r.countUnseenNodes();
    }), i;
  }
  oo.forEachConnectedComponent = po, oo.forEachConnectedComponentOrder = yo, oo.forEachConnectedComponentOrderWithEdgeFilter = function (t, e, r) {
    if (!co(t)) throw new Error("graphology-components: the given graph is not a valid graphology instance.");
    if (t.order) {
      var n,
        i = new go(t);
      i.forEachNodeYetUnseen(function (e) {
        var a = 0;
        for (i.push(e); 0 !== i.size;) n = i.pop(), a++, t.forEachEdge(n, o);
        r(a);
      });
    }
    function o(t, r, o, a, s, h, u) {
      n === a && (a = o), e(t, r, o, a, s, h, u) && i.push(a);
    }
  }, oo.countConnectedComponents = function (t) {
    var e = 0;
    return yo(t, function () {
      e++;
    }), e;
  }, oo.connectedComponents = function (t) {
    var e = [];
    return po(t, function (t) {
      e.push(t);
    }), e;
  }, oo.largestConnectedComponent = vo, oo.largestConnectedComponentSubgraph = function (t) {
    var e = vo(t),
      r = t.nullCopy();
    return e.forEach(function (e) {
      lo(r, e, t.getNodeAttributes(e));
    }), t.forEachEdge(function (t, e, n, i, o, a, s) {
      r.hasNode(n) && fo(r, s, t, n, i, e);
    }), r;
  }, oo.cropToLargestConnectedComponent = function (t) {
    var e = new Set(vo(t));
    t.forEachNode(function (r) {
      e.has(r) || t.dropNode(r);
    });
  }, oo.stronglyConnectedComponents = function (t) {
    if (!co(t)) throw new Error("graphology-components: the given graph is not a valid graphology instance.");
    if (!t.order) return [];
    if ("undirected" === t.type) throw new Error("graphology-components: the given graph is undirected");
    var e,
      r,
      n = t.nodes(),
      i = [];
    if (!t.size) {
      for (e = 0, r = n.length; e < r; e++) i.push([n[e]]);
      return i;
    }
    var o,
      a,
      s,
      h = 1,
      u = [],
      d = [],
      c = new Map(),
      l = new Set(),
      f = function f(e) {
        var r,
          n,
          s = t.outboundNeighbors(e);
        c.set(e, h++), u.push(e), d.push(e);
        for (var g = 0, p = s.length; g < p; g++) if (r = s[g], c.has(r)) {
          if (n = c.get(r), !l.has(r)) for (; c.get(u[u.length - 1]) > n;) u.pop();
        } else f(r);
        if (c.get(u[u.length - 1]) === c.get(e)) {
          o = [];
          do {
            a = d.pop(), o.push(a), l.add(a);
          } while (a !== e);
          i.push(o), u.pop();
        }
      };
    for (e = 0, r = n.length; e < r; e++) s = n[e], l.has(s) || f(s);
    return i;
  };
  var mo = oo,
    bo = {},
    wo = {},
    Eo = o,
    Ao = o,
    xo = function xo(t, e) {
      if (!Ao(t)) throw new Error("graphology-generators/classic/empty: invalid Graph constructor.");
      var r,
        n = new t();
      for (r = 0; r < e; r++) n.addNode(r);
      return n;
    },
    zo = o,
    Mo = o;
  wo.complete = function (t, e) {
    if (!Eo(t)) throw new Error("graphology-generators/classic/complete: invalid Graph constructor.");
    var r,
      n,
      i = new t();
    for (r = 0; r < e; r++) i.addNode(r);
    for (r = 0; r < e; r++) for (n = r + 1; n < e; n++) "directed" !== i.type && i.addUndirectedEdge(r, n), "undirected" !== i.type && (i.addDirectedEdge(r, n), i.addDirectedEdge(n, r));
    return i;
  }, wo.empty = xo, wo.ladder = function (t, e) {
    if (!zo(t)) throw new Error("graphology-generators/classic/ladder: invalid Graph constructor.");
    var r,
      n = new t();
    for (r = 0; r < e - 1; r++) n.mergeEdge(r, r + 1);
    for (r = e; r < 2 * e - 1; r++) n.mergeEdge(r, r + 1);
    for (r = 0; r < e; r++) n.addEdge(r, r + e);
    return n;
  }, wo.path = function (t, e) {
    if (!Mo(t)) throw new Error("graphology-generators/classic/path: invalid Graph constructor.");
    for (var r = new t(), n = 0; n < e - 1; n++) r.mergeEdge(n, n + 1);
    return r;
  };
  var So = {},
    Do = o,
    No = xo,
    ko = o,
    Co = xo;
  So.caveman = function (t, e, r) {
    if (!Do(t)) throw new Error("graphology-generators/community/caveman: invalid Graph constructor.");
    var n,
      i,
      o,
      a = e * r,
      s = No(t, a);
    if (r < 2) return s;
    for (n = 0; n < a; n += r) for (i = n; i < n + r; i++) for (o = i + 1; o < n + r; o++) s.addEdge(i, o);
    return s;
  }, So.connectedCaveman = function (t, e, r) {
    if (!ko(t)) throw new Error("graphology-generators/community/connected-caveman: invalid Graph constructor.");
    var n,
      i,
      o,
      a = e * r,
      s = Co(t, a);
    if (r < 2) return s;
    for (n = 0; n < a; n += r) {
      for (i = n; i < n + r; i++) for (o = i + 1; o < n + r; o++) i === n && i === o - 1 || s.addEdge(i, o);
      n > 0 && s.addEdge(n, (n - 1) % a);
    }
    return s.addEdge(0, a - 1), s;
  };
  var Oo = {},
    Wo = o,
    jo = {},
    _o = i,
    Po = function Po(t) {
      if (!_o(t)) throw new Error("graphology-metrics/simple-size: the given graph is not a valid graphology instance.");
      if (!t.multi) return t.size;
      var e = 0,
        r = 0;
      function n() {
        e++;
      }
      function i() {
        r++;
      }
      return t.forEachNode(function (e) {
        "directed" !== t.type && t.forEachUndirectedNeighbor(e, n), "undirected" !== t.type && t.forEachOutNeighbor(e, i);
      }), e / 2 + r;
    },
    Uo = i,
    Io = Po;
  function Fo(t, e) {
    return 2 * e / (t * (t - 1));
  }
  function To(t, e) {
    return e / (t * (t - 1));
  }
  function Lo(t, e) {
    var r = t * (t - 1);
    return e / (r + r / 2);
  }
  function Ro(t, e, r) {
    var n, i;
    if (arguments.length > 3) {
      if (i = arguments[3], "number" != typeof (n = r) || n < 0) throw new Error("graphology-metrics/density: given order is not a valid number.");
      if ("number" != typeof i || i < 0) throw new Error("graphology-metrics/density: given size is not a valid number.");
    } else {
      if (!Uo(r)) throw new Error("graphology-metrics/density: given graph is not a valid graphology instance.");
      n = r.order, i = r.size, r.multi && !1 === e && (i = Io(r));
    }
    return n < 2 ? 0 : (null === t && (t = r.type), null === e && (e = r.multi), ("undirected" === t ? Fo : "directed" === t ? To : Lo)(n, i));
  }
  jo.abstractDensity = Ro, jo.density = Ro.bind(null, null, null), jo.directedDensity = Ro.bind(null, "directed", !1), jo.undirectedDensity = Ro.bind(null, "undirected", !1), jo.mixedDensity = Ro.bind(null, "mixed", !1), jo.multiDirectedDensity = Ro.bind(null, "directed", !0), jo.multiUndirectedDensity = Ro.bind(null, "undirected", !0), jo.multiMixedDensity = Ro.bind(null, "mixed", !0);
  var Go = o,
    qo = jo.abstractDensity;
  function Bo(t, e) {
    if (!Go(t)) throw new Error("graphology-generators/random/erdos-renyi: invalid Graph constructor.");
    var r,
      n,
      i = e.order,
      o = e.probability,
      a = e.rng || Math.random,
      s = new t();
    if ("number" == typeof e.approximateSize && (o = qo(s.type, !1, i, e.approximateSize)), "number" != typeof i || i <= 0) throw new Error("graphology-generators/random/erdos-renyi: invalid `order`. Should be a positive number.");
    if ("number" != typeof o || o < 0 || o > 1) throw new Error("graphology-generators/random/erdos-renyi: invalid `probability`. Should be a number between 0 and 1. Or maybe you gave an `approximateSize` exceeding the graph's density.");
    if ("function" != typeof a) throw new Error("graphology-generators/random/erdos-renyi: invalid `rng`. Should be a function.");
    for (r = 0; r < i; r++) s.addNode(r);
    if (o <= 0) return s;
    for (r = 0; r < i; r++) for (n = r + 1; n < i; n++) "directed" !== s.type && a() < o && s.addUndirectedEdge(r, n), "undirected" !== s.type && (a() < o && s.addDirectedEdge(r, n), a() < o && s.addDirectedEdge(n, r));
    return s;
  }
  Bo.sparse = function (t, e) {
    if (!Go(t)) throw new Error("graphology-generators/random/erdos-renyi: invalid Graph constructor.");
    var r = e.order,
      n = e.probability,
      i = e.rng || Math.random,
      o = new t();
    if ("number" == typeof e.approximateSize && (n = qo(o.type, !1, r, e.approximateSize)), "number" != typeof r || r <= 0) throw new Error("graphology-generators/random/erdos-renyi: invalid `order`. Should be a positive number.");
    if ("number" != typeof n || n < 0 || n > 1) throw new Error("graphology-generators/random/erdos-renyi: invalid `probability`. Should be a number between 0 and 1. Or maybe you gave an `approximateSize` exceeding the graph's density.");
    if ("function" != typeof i) throw new Error("graphology-generators/random/erdos-renyi: invalid `rng`. Should be a function.");
    for (var a = 0; a < r; a++) o.addNode(a);
    if (n <= 0) return o;
    var s,
      h = -1,
      u = Math.log(1 - n);
    if ("undirected" !== o.type) for (s = 0; s < r;) {
      for (s === (h += 1 + (Math.log(1 - i()) / u | 0)) && h++; s < r && r <= h;) ++s === (h -= r) && h++;
      s < r && o.addDirectedEdge(s, h);
    }
    if (h = -1, "directed" !== o.type) for (s = 1; s < r;) {
      for (h += 1 + (Math.log(1 - i()) / u | 0); h >= s && s < r;) h -= s, s++;
      s < r && o.addUndirectedEdge(s, h);
    }
    return o;
  };
  var Ho = Bo,
    Vo = o;
  Oo.clusters = function (t, e) {
    if (!Wo(t)) throw new Error("graphology-generators/random/clusters: invalid Graph constructor.");
    var r = "clusterDensity" in (e = e || {}) ? e.clusterDensity : .5,
      n = e.rng || Math.random,
      i = e.order,
      o = e.size,
      a = e.clusters;
    if ("number" != typeof r || r > 1 || r < 0) throw new Error("graphology-generators/random/clusters: `clusterDensity` option should be a number between 0 and 1.");
    if ("function" != typeof n) throw new Error("graphology-generators/random/clusters: `rng` option should be a function.");
    if ("number" != typeof i || i <= 0) throw new Error("graphology-generators/random/clusters: `order` option should be a positive number.");
    if ("number" != typeof o || o <= 0) throw new Error("graphology-generators/random/clusters: `size` option should be a positive number.");
    if ("number" != typeof a || a <= 0) throw new Error("graphology-generators/random/clusters: `clusters` option should be a positive number.");
    var s = new t();
    if (!i) return s;
    var h,
      u,
      d,
      c,
      l,
      f,
      g = new Array(a);
    for (d = 0; d < a; d++) g[d] = [];
    for (d = 0; d < i; d++) h = n() * a | 0, s.addNode(d, {
      cluster: h
    }), g[h].push(d);
    if (!o) return s;
    for (d = 0; d < o; d++) {
      if (n() < 1 - r) {
        c = n() * i | 0;
        do {
          l = n() * i | 0;
        } while (c === l);
      } else {
        if (!(f = (u = g[h = n() * a | 0]).length) || f < 2) continue;
        c = u[n() * f | 0];
        do {
          l = u[n() * f | 0];
        } while (c === l);
      }
      s.multi ? s.addEdge(c, l) : s.mergeEdge(c, l);
    }
    return s;
  }, Oo.erdosRenyi = Ho, Oo.girvanNewman = function (t, e) {
    if (!Vo(t)) throw new Error("graphology-generators/random/girvan-newman: invalid Graph constructor.");
    var r = e.zOut,
      n = e.rng || Math.random;
    if ("number" != typeof r) throw new Error("graphology-generators/random/girvan-newman: invalid `zOut`. Should be a number.");
    if ("function" != typeof n) throw new Error("graphology-generators/random/girvan-newman: invalid `rng`. Should be a function.");
    var i,
      o,
      a,
      s = r / 96,
      h = (16 - 96 * s) / 31,
      u = new t();
    for (o = 0; o < 128; o++) u.addNode(o);
    for (o = 0; o < 128; o++) for (a = o + 1; a < 128; a++) i = n(), o % 4 == a % 4 ? i < h && u.addEdge(o, a) : i < s && u.addEdge(o, a);
    return u;
  };
  var Yo = {},
    Ko = function Ko(t, e) {
      if (0 !== e.length) {
        var r,
          n,
          i,
          o = e[0];
        for (t.mergeNode(o), n = 1, i = e.length; n < i; n++) r = e[n], t.mergeEdge(o, r);
      }
    },
    $o = o,
    Xo = Ko,
    Jo = [["Andre", "Beverley", "Carol", "Diane", "Fernando"], ["Beverley", "Andre", "Ed", "Garth"], ["Carol", "Andre", "Diane", "Fernando"], ["Diane", "Andre", "Beverley", "Carol", "Ed", "Fernando", "Garth"], ["Ed", "Beverley", "Diane", "Garth"], ["Fernando", "Andre", "Carol", "Diane", "Garth", "Heather"], ["Garth", "Beverley", "Diane", "Ed", "Fernando", "Heather"], ["Heather", "Fernando", "Garth", "Ike"], ["Ike", "Heather", "Jane"], ["Jane", "Ike"]];
  Yo.krackhardtKite = function (t) {
    if (!$o(t)) throw new Error("graphology-generators/social/krackhardt-kite: invalid Graph constructor.");
    var e,
      r,
      n = new t();
    for (e = 0, r = Jo.length; e < r; e++) Xo(n, Jo[e]);
    return n;
  };
  var Qo = {},
    Zo = o,
    ta = [["Acciaiuoli", "Medici"], ["Castellani", "Peruzzi"], ["Castellani", "Strozzi"], ["Castellani", "Barbadori"], ["Medici", "Barbadori"], ["Medici", "Ridolfi"], ["Medici", "Tornabuoni"], ["Medici", "Albizzi"], ["Medici", "Salviati"], ["Salviati", "Pazzi"], ["Peruzzi", "Strozzi"], ["Peruzzi", "Bischeri"], ["Strozzi", "Ridolfi"], ["Strozzi", "Bischeri"], ["Ridolfi", "Tornabuoni"], ["Tornabuoni", "Guadagni"], ["Albizzi", "Ginori"], ["Albizzi", "Guadagni"], ["Bischeri", "Guadagni"], ["Guadagni", "Lamberteschi"]],
    ea = o,
    ra = ["0111111110111100010101000000000100", "1011000100000100010101000000001000", "1101000111000100000000000001100010", "1110000100001100000000000000000000", "1000001000100000000000000000000000", "1000001000100000100000000000000000", "1000110000000000100000000000000000", "1111000000000000000000000000000000", "1010000000000000000000000000001011", "0010000000000000000000000000000001", "1000110000000000000000000000000000", "1000000000000000000000000000000000", "1001000000000000000000000000000000", "1111000000000000000000000000000001", "0000000000000000000000000000000011", "0000000000000000000000000000000011", "0000011000000000000000000000000000", "1100000000000000000000000000000000", "0000000000000000000000000000000011", "1100000000000000000000000000000001", "0000000000000000000000000000000011", "1100000000000000000000000000000000", "0000000000000000000000000000000011", "0000000000000000000000000101010011", "0000000000000000000000000101000100", "0000000000000000000000011000000100", "0000000000000000000000000000010001", "0010000000000000000000011000000001", "0010000000000000000000000000000101", "0000000000000000000000010010000011", "0100000010000000000000000000000011", "1000000000000000000000001100100011", "0010000010000011001010110000011101", "0000000011000111001110110011111110"],
    na = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 16, 17, 19, 21]);
  Qo.florentineFamilies = function (t) {
    if (!Zo(t)) throw new Error("graphology-generators/social/florentine-families: invalid Graph constructor.");
    var e,
      r,
      n,
      i = new t();
    for (r = 0, n = ta.length; r < n; r++) e = ta[r], i.mergeEdge(e[0], e[1]);
    return i;
  }, Qo.karateClub = function (t) {
    if (!ea(t)) throw new Error("graphology-generators/social/karate: invalid Graph constructor.");
    for (var e, r, n, i, o, a, s = new t(), h = 0; h < 34; h++) e = na.has(h) ? "Mr. Hi" : "Officer", s.addNode(h, {
      club: e
    });
    for (n = 0, o = ra.length; n < o; n++) for (i = n + 1, a = (r = ra[n].split("")).length; i < a; i++) +r[i] && s.addEdgeWithKey(n + "->" + i, n, i);
    return s;
  }, bo.classic = wo, bo.community = So, bo.random = Oo, bo.small = Yo, bo.social = Qo;
  var ia = bo,
    oa = {};
  function aa(t) {
    return function (e, r) {
      return e + Math.floor(t() * (r - e + 1));
    };
  }
  var sa = aa(Math.random);
  sa.createRandom = aa;
  var ha = sa.createRandom;
  function ua(t) {
    var e = ha(t);
    return function (t) {
      for (var r = t.length, n = r - 1, i = -1; ++i < r;) {
        var o = e(i, n),
          a = t[o];
        t[o] = t[i], t[i] = a;
      }
    };
  }
  var da = ua(Math.random);
  da.createShuffleInPlace = ua;
  var ca = E,
    la = i,
    fa = da,
    ga = {
      attributes: {
        x: "x",
        y: "y"
      },
      center: 0,
      hierarchyAttributes: [],
      rng: Math.random,
      scale: 1
    };
  function pa(t, e, r, n, i) {
    this.wrappedCircle = i || null, this.children = {}, this.countChildren = 0, this.id = t || null, this.next = null, this.previous = null, this.x = e || null, this.y = r || null, this.r = i ? 1010101 : n || 999;
  }
  function ya(t, e, r) {
    for (var n in e.children) {
      var i = e.children[n];
      i.hasChildren() ? ya(t, i, r) : r[i.id] = {
        x: i.x,
        y: i.y
      };
    }
  }
  function va(t, e) {
    var r = t.r - e.r,
      n = e.x - t.x,
      i = e.y - t.y;
    return r < 0 || r * r < n * n + i * i;
  }
  function ma(t, e) {
    var r = t.r - e.r + 1e-6,
      n = e.x - t.x,
      i = e.y - t.y;
    return r > 0 && r * r > n * n + i * i;
  }
  function ba(t, e) {
    for (var r = 0; r < e.length; ++r) if (!ma(t, e[r])) return !1;
    return !0;
  }
  function wa(t, e) {
    var r = t.x,
      n = t.y,
      i = t.r,
      o = e.x,
      a = e.y,
      s = e.r,
      h = o - r,
      u = a - n,
      d = s - i,
      c = Math.sqrt(h * h + u * u);
    return new pa(null, (r + o + h / c * d) / 2, (n + a + u / c * d) / 2, (c + i + s) / 2);
  }
  function Ea(t, e, r) {
    var n = t.x,
      i = t.y,
      o = t.r,
      a = e.x,
      s = e.y,
      h = e.r,
      u = r.x,
      d = r.y,
      c = r.r,
      l = n - a,
      f = n - u,
      g = i - s,
      p = i - d,
      y = h - o,
      v = c - o,
      m = n * n + i * i - o * o,
      b = m - a * a - s * s + h * h,
      w = m - u * u - d * d + c * c,
      E = f * g - l * p,
      A = (g * w - p * b) / (2 * E) - n,
      x = (p * y - g * v) / E,
      z = (f * b - l * w) / (2 * E) - i,
      M = (l * v - f * y) / E,
      S = x * x + M * M - 1,
      D = 2 * (o + A * x + z * M),
      N = A * A + z * z - o * o,
      k = -(S ? (D + Math.sqrt(D * D - 4 * S * N)) / (2 * S) : N / D);
    return new pa(null, n + A + x * k, i + z + M * k, k);
  }
  function Aa(t) {
    switch (t.length) {
      case 1:
        return new pa(null, (e = t[0]).x, e.y, e.r);
      case 2:
        return wa(t[0], t[1]);
      case 3:
        return Ea(t[0], t[1], t[2]);
      default:
        throw new Error("graphology-layout/circlepack: Invalid basis length " + t.length);
    }
    var e;
  }
  function xa(t, e) {
    var r, n;
    if (ba(e, t)) return [e];
    for (r = 0; r < t.length; ++r) if (va(e, t[r]) && ba(wa(t[r], e), t)) return [t[r], e];
    for (r = 0; r < t.length - 1; ++r) for (n = r + 1; n < t.length; ++n) if (va(wa(t[r], t[n]), e) && va(wa(t[r], e), t[n]) && va(wa(t[n], e), t[r]) && ba(Ea(t[r], t[n], e), t)) return [t[r], t[n], e];
    throw new Error("graphology-layout/circlepack: extendBasis failure !");
  }
  function za(t) {
    var e = t.wrappedCircle,
      r = t.next.wrappedCircle,
      n = e.r + r.r,
      i = (e.x * r.r + r.x * e.r) / n,
      o = (e.y * r.r + r.y * e.r) / n;
    return i * i + o * o;
  }
  function Ma(t, e, r) {
    var n,
      i,
      o,
      a,
      s = t.x - e.x,
      h = t.y - e.y,
      u = s * s + h * h;
    u ? (i = e.r + r.r, i *= i, a = t.r + r.r, i > (a *= a) ? (n = (u + a - i) / (2 * u), o = Math.sqrt(Math.max(0, a / u - n * n)), r.x = t.x - n * s - o * h, r.y = t.y - n * h + o * s) : (n = (u + i - a) / (2 * u), o = Math.sqrt(Math.max(0, i / u - n * n)), r.x = e.x + n * s - o * h, r.y = e.y + n * h + o * s)) : (r.x = e.x + r.r, r.y = e.y);
  }
  function Sa(t, e) {
    var r = t.r + e.r - 1e-6,
      n = e.x - t.x,
      i = e.y - t.y;
    return r > 0 && r * r > n * n + i * i;
  }
  function Da(t, e) {
    var r,
      n,
      i,
      o,
      a,
      s,
      h,
      u,
      d,
      c,
      l = t.length;
    if (0 === l) return 0;
    if ((r = t[0]).x = 0, r.y = 0, l <= 1) return r.r;
    if (n = t[1], r.x = -n.r, n.x = r.r, n.y = 0, l <= 2) return r.r + n.r;
    Ma(n, r, i = t[2]), r = new pa(null, null, null, null, r), n = new pa(null, null, null, null, n), i = new pa(null, null, null, null, i), r.next = i.previous = n, n.next = r.previous = i, i.next = n.previous = r;
    t: for (s = 3; s < l; ++s) {
      i = t[s], Ma(r.wrappedCircle, n.wrappedCircle, i), i = new pa(null, null, null, null, i), h = n.next, u = r.previous, d = n.wrappedCircle.r, c = r.wrappedCircle.r;
      do {
        if (d <= c) {
          if (Sa(h.wrappedCircle, i.wrappedCircle)) {
            n = h, r.next = n, n.previous = r, --s;
            continue t;
          }
          d += h.wrappedCircle.r, h = h.next;
        } else {
          if (Sa(u.wrappedCircle, i.wrappedCircle)) {
            (r = u).next = n, n.previous = r, --s;
            continue t;
          }
          c += u.wrappedCircle.r, u = u.previous;
        }
      } while (h !== u.next);
      for (i.previous = r, i.next = n, r.next = n.previous = n = i, o = za(r); (i = i.next) !== n;) (a = za(i)) < o && (r = i, o = a);
      n = r.next;
    }
    r = [n.wrappedCircle], i = n;
    for (var f = 1e4; (i = i.next) !== n && 0 != --f;) r.push(i.wrappedCircle);
    for (i = function (t, e) {
      var r,
        n,
        i = 0,
        o = t.slice(),
        a = t.length,
        s = [];
      for (e(o); i < a;) r = o[i], n && ma(n, r) ? ++i : (n = Aa(s = xa(s, r)), i = 0);
      return n;
    }(r, e), s = 0; s < l; ++s) (r = t[s]).x -= i.x, r.y -= i.y;
    return i.r;
  }
  function Na(t, e) {
    var r = 0;
    if (t.hasChildren()) {
      for (var n in t.children) {
        var i = t.children[n];
        i.hasChildren() && (i.r = Na(i, e));
      }
      r = Da(Object.values(t.children), e);
    }
    return r;
  }
  function ka(t, e) {
    for (var r in Na(t, e), t.children) {
      t.children[r].applyPositionToChildren();
    }
  }
  function Ca(t, e, r) {
    if (!la(e)) throw new Error("graphology-layout/circlepack: the given graph is not a valid graphology instance.");
    r = ca(r, ga);
    var n = {},
      i = {},
      o = e.nodes(),
      a = r.center,
      s = r.hierarchyAttributes,
      h = fa.createShuffleInPlace(r.rng),
      u = r.scale,
      d = new pa();
    e.forEachNode(function (t, e) {
      var r = new pa(t, null, null, e.size ? e.size : 1),
        n = d;
      s.forEach(function (t) {
        var r = e[t];
        n = n.getChild(r);
      }), n.addChild(t, r);
    }), ka(d, h), ya(e, d, n);
    var c,
      l,
      f,
      g = o.length;
    for (f = 0; f < g; f++) {
      var p = o[f];
      c = a + u * n[p].x, l = a + u * n[p].y, i[p] = {
        x: c,
        y: l
      }, t && (e.setNodeAttribute(p, r.attributes.x, c), e.setNodeAttribute(p, r.attributes.y, l));
    }
    return i;
  }
  pa.prototype.hasChildren = function () {
    return this.countChildren > 0;
  }, pa.prototype.addChild = function (t, e) {
    this.children[t] = e, ++this.countChildren;
  }, pa.prototype.getChild = function (t) {
    if (!this.children.hasOwnProperty(t)) {
      var e = new pa();
      this.children[t] = e, ++this.countChildren;
    }
    return this.children[t];
  }, pa.prototype.applyPositionToChildren = function () {
    if (this.hasChildren()) {
      var t = this;
      for (var e in t.children) {
        var r = t.children[e];
        r.x += t.x, r.y += t.y, r.applyPositionToChildren();
      }
    }
  };
  var Oa = Ca.bind(null, !1);
  Oa.assign = Ca.bind(null, !0);
  var Wa = Oa,
    ja = E,
    _a = i,
    Pa = {
      dimensions: ["x", "y"],
      center: .5,
      scale: 1
    };
  function Ua(t, e, r) {
    if (!_a(e)) throw new Error("graphology-layout/random: the given graph is not a valid graphology instance.");
    var n = (r = ja(r, Pa)).dimensions;
    if (!Array.isArray(n) || 2 !== n.length) throw new Error("graphology-layout/random: given dimensions are invalid.");
    var i = r.center,
      o = r.scale,
      a = 2 * Math.PI,
      s = (i - .5) * o,
      h = e.order,
      u = n[0],
      d = n[1];
    function c(t, e) {
      return e[u] = o * Math.cos(t * a / h) + s, e[d] = o * Math.sin(t * a / h) + s, e;
    }
    var l = 0;
    if (!t) {
      var f = {};
      return e.forEachNode(function (t) {
        f[t] = c(l++, {});
      }), f;
    }
    e.updateEachNodeAttributes(function (t, e) {
      return c(l++, e), e;
    }, {
      attributes: n
    });
  }
  var Ia = Ua.bind(null, !1);
  Ia.assign = Ua.bind(null, !0);
  var Fa = Ia,
    Ta = E,
    La = i,
    Ra = {
      dimensions: ["x", "y"],
      center: .5,
      rng: Math.random,
      scale: 1
    };
  function Ga(t, e, r) {
    if (!La(e)) throw new Error("graphology-layout/random: the given graph is not a valid graphology instance.");
    var n = (r = Ta(r, Ra)).dimensions;
    if (!Array.isArray(n) || n.length < 1) throw new Error("graphology-layout/random: given dimensions are invalid.");
    var i = n.length,
      o = r.center,
      a = r.rng,
      s = r.scale,
      h = (o - .5) * s;
    function u(t) {
      for (var e = 0; e < i; e++) t[n[e]] = a() * s + h;
      return t;
    }
    if (!t) {
      var d = {};
      return e.forEachNode(function (t) {
        d[t] = u({});
      }), d;
    }
    e.updateEachNodeAttributes(function (t, e) {
      return u(e), e;
    }, {
      attributes: n
    });
  }
  var qa = Ga.bind(null, !1);
  qa.assign = Ga.bind(null, !0);
  var Ba = qa,
    Ha = E,
    Va = i,
    Ya = Math.PI / 180,
    Ka = {
      dimensions: ["x", "y"],
      centeredOnZero: !1,
      degrees: !1
    };
  function $a(t, e, r, n) {
    if (!Va(e)) throw new Error("graphology-layout/rotation: the given graph is not a valid graphology instance.");
    (n = Ha(n, Ka)).degrees && (r *= Ya);
    var i = n.dimensions;
    if (!Array.isArray(i) || 2 !== i.length) throw new Error("graphology-layout/random: given dimensions are invalid.");
    if (0 === e.order) {
      if (t) return;
      return {};
    }
    var o = i[0],
      a = i[1],
      s = 0,
      h = 0;
    if (!n.centeredOnZero) {
      var u = 1 / 0,
        d = -1 / 0,
        c = 1 / 0,
        l = -1 / 0;
      e.forEachNode(function (t, e) {
        var r = e[o],
          n = e[a];
        r < u && (u = r), r > d && (d = r), n < c && (c = n), n > l && (l = n);
      }), s = (u + d) / 2, h = (c + l) / 2;
    }
    var f = Math.cos(r),
      g = Math.sin(r);
    function p(t) {
      var e = t[o],
        r = t[a];
      return t[o] = s + (e - s) * f - (r - h) * g, t[a] = h + (e - s) * g + (r - h) * f, t;
    }
    if (!t) {
      var y = {};
      return e.forEachNode(function (t, e) {
        var r = {};
        r[o] = e[o], r[a] = e[a], y[t] = p(r);
      }), y;
    }
    e.updateEachNodeAttributes(function (t, e) {
      return p(e), e;
    }, {
      attributes: i
    });
  }
  var Xa = $a.bind(null, !1);
  Xa.assign = $a.bind(null, !0);
  var Ja = Xa;
  oa.circlepack = Wa, oa.circular = Fa, oa.random = Ba, oa.rotation = Ja;
  var Qa = oa,
    Za = oa,
    ts = 10,
    es = {};
  es.assign = function (t) {
    t = t || {};
    var e,
      r,
      n,
      i = Array.prototype.slice.call(arguments).slice(1);
    for (e = 0, n = i.length; e < n; e++) if (i[e]) for (r in i[e]) t[r] = i[e][r];
    return t;
  }, es.validateSettings = function (t) {
    return "linLogMode" in t && "boolean" != typeof t.linLogMode ? {
      message: "the `linLogMode` setting should be a boolean."
    } : "outboundAttractionDistribution" in t && "boolean" != typeof t.outboundAttractionDistribution ? {
      message: "the `outboundAttractionDistribution` setting should be a boolean."
    } : "adjustSizes" in t && "boolean" != typeof t.adjustSizes ? {
      message: "the `adjustSizes` setting should be a boolean."
    } : "edgeWeightInfluence" in t && "number" != typeof t.edgeWeightInfluence ? {
      message: "the `edgeWeightInfluence` setting should be a number."
    } : !("scalingRatio" in t) || "number" == typeof t.scalingRatio && t.scalingRatio >= 0 ? "strongGravityMode" in t && "boolean" != typeof t.strongGravityMode ? {
      message: "the `strongGravityMode` setting should be a boolean."
    } : !("gravity" in t) || "number" == typeof t.gravity && t.gravity >= 0 ? "slowDown" in t && !("number" == typeof t.slowDown || t.slowDown >= 0) ? {
      message: "the `slowDown` setting should be a number >= 0."
    } : "barnesHutOptimize" in t && "boolean" != typeof t.barnesHutOptimize ? {
      message: "the `barnesHutOptimize` setting should be a boolean."
    } : !("barnesHutTheta" in t) || "number" == typeof t.barnesHutTheta && t.barnesHutTheta >= 0 ? null : {
      message: "the `barnesHutTheta` setting should be a number >= 0."
    } : {
      message: "the `gravity` setting should be a number >= 0."
    } : {
      message: "the `scalingRatio` setting should be a number >= 0."
    };
  }, es.graphToByteArrays = function (t, e) {
    var r,
      n = t.order,
      i = t.size,
      o = {},
      a = new Float32Array(10 * n),
      s = new Float32Array(3 * i);
    return r = 0, t.forEachNode(function (t, e) {
      o[t] = r, a[r] = e.x, a[r + 1] = e.y, a[r + 2] = 0, a[r + 3] = 0, a[r + 4] = 0, a[r + 5] = 0, a[r + 6] = 1, a[r + 7] = 1, a[r + 8] = e.size || 1, a[r + 9] = e.fixed ? 1 : 0, r += 10;
    }), r = 0, t.forEachEdge(function (t, n, i, h, u, d, c) {
      var l = o[i],
        f = o[h],
        g = e(t, n, i, h, u, d, c);
      a[l + 6] += g, a[f + 6] += g, s[r] = l, s[r + 1] = f, s[r + 2] = g, r += 3;
    }), {
      nodes: a,
      edges: s
    };
  }, es.assignLayoutChanges = function (t, e, r) {
    var n = 0;
    t.updateEachNodeAttributes(function (t, i) {
      return i.x = e[n], i.y = e[n + 1], n += 10, r ? r(t, i) : i;
    });
  }, es.readGraphPositions = function (t, e) {
    var r = 0;
    t.forEachNode(function (t, n) {
      e[r] = n.x, e[r + 1] = n.y, r += 10;
    });
  }, es.collectLayoutChanges = function (t, e, r) {
    for (var n = t.nodes(), i = {}, o = 0, a = 0, s = e.length; o < s; o += 10) {
      if (r) {
        var h = Object.assign({}, t.getNodeAttributes(n[a]));
        h.x = e[o], h.y = e[o + 1], h = r(n[a], h), i[n[a]] = {
          x: h.x,
          y: h.y
        };
      } else i[n[a]] = {
        x: e[o],
        y: e[o + 1]
      };
      a++;
    }
    return i;
  }, es.createWorker = function (t) {
    var e = window.URL || window.webkitURL,
      r = t.toString(),
      n = e.createObjectURL(new Blob(["(" + r + ").call(this);"], {
        type: "text/javascript"
      })),
      i = new Worker(n);
    return e.revokeObjectURL(n), i;
  };
  var rs = {
      linLogMode: !1,
      outboundAttractionDistribution: !1,
      adjustSizes: !1,
      edgeWeightInfluence: 1,
      scalingRatio: 1,
      strongGravityMode: !1,
      gravity: 1,
      slowDown: 1,
      barnesHutOptimize: !1,
      barnesHutTheta: .5
    },
    ns = i,
    is = Wi.createEdgeWeightGetter,
    os = function os(t, e, r) {
      var n,
        i,
        o,
        a,
        s,
        h,
        u,
        d,
        c,
        l,
        f,
        g,
        p,
        y,
        v,
        m,
        b,
        w,
        E,
        A,
        x,
        z,
        M,
        S = e.length,
        D = r.length,
        N = t.adjustSizes,
        k = t.barnesHutTheta * t.barnesHutTheta,
        C = [];
      for (o = 0; o < S; o += ts) e[o + 4] = e[o + 2], e[o + 5] = e[o + 3], e[o + 2] = 0, e[o + 3] = 0;
      if (t.outboundAttractionDistribution) {
        for (f = 0, o = 0; o < S; o += ts) f += e[o + 6];
        f /= S / ts;
      }
      if (t.barnesHutOptimize) {
        var O,
          W,
          j,
          _ = 1 / 0,
          P = -1 / 0,
          U = 1 / 0,
          I = -1 / 0;
        for (o = 0; o < S; o += ts) _ = Math.min(_, e[o + 0]), P = Math.max(P, e[o + 0]), U = Math.min(U, e[o + 1]), I = Math.max(I, e[o + 1]);
        var F = P - _,
          T = I - U;
        for (F > T ? I = (U -= (F - T) / 2) + F : P = (_ -= (T - F) / 2) + T, C[0] = -1, C[1] = (_ + P) / 2, C[2] = (U + I) / 2, C[3] = Math.max(P - _, I - U), C[4] = -1, C[5] = -1, C[6] = 0, C[7] = 0, C[8] = 0, n = 1, o = 0; o < S; o += ts) for (i = 0, j = 3;;) {
          if (!(C[i + 5] >= 0)) {
            if (C[i + 0] < 0) {
              C[i + 0] = o;
              break;
            }
            if (C[i + 5] = 9 * n, d = C[i + 3] / 2, C[(c = C[i + 5]) + 0] = -1, C[c + 1] = C[i + 1] - d, C[c + 2] = C[i + 2] - d, C[c + 3] = d, C[c + 4] = c + 9, C[c + 5] = -1, C[c + 6] = 0, C[c + 7] = 0, C[c + 8] = 0, C[(c += 9) + 0] = -1, C[c + 1] = C[i + 1] - d, C[c + 2] = C[i + 2] + d, C[c + 3] = d, C[c + 4] = c + 9, C[c + 5] = -1, C[c + 6] = 0, C[c + 7] = 0, C[c + 8] = 0, C[(c += 9) + 0] = -1, C[c + 1] = C[i + 1] + d, C[c + 2] = C[i + 2] - d, C[c + 3] = d, C[c + 4] = c + 9, C[c + 5] = -1, C[c + 6] = 0, C[c + 7] = 0, C[c + 8] = 0, C[(c += 9) + 0] = -1, C[c + 1] = C[i + 1] + d, C[c + 2] = C[i + 2] + d, C[c + 3] = d, C[c + 4] = C[i + 4], C[c + 5] = -1, C[c + 6] = 0, C[c + 7] = 0, C[c + 8] = 0, n += 4, O = e[C[i + 0] + 0] < C[i + 1] ? e[C[i + 0] + 1] < C[i + 2] ? C[i + 5] : C[i + 5] + 9 : e[C[i + 0] + 1] < C[i + 2] ? C[i + 5] + 18 : C[i + 5] + 27, C[i + 6] = e[C[i + 0] + 6], C[i + 7] = e[C[i + 0] + 0], C[i + 8] = e[C[i + 0] + 1], C[O + 0] = C[i + 0], C[i + 0] = -1, O === (W = e[o + 0] < C[i + 1] ? e[o + 1] < C[i + 2] ? C[i + 5] : C[i + 5] + 9 : e[o + 1] < C[i + 2] ? C[i + 5] + 18 : C[i + 5] + 27)) {
              if (j--) {
                i = O;
                continue;
              }
              j = 3;
              break;
            }
            C[W + 0] = o;
            break;
          }
          O = e[o + 0] < C[i + 1] ? e[o + 1] < C[i + 2] ? C[i + 5] : C[i + 5] + 9 : e[o + 1] < C[i + 2] ? C[i + 5] + 18 : C[i + 5] + 27, C[i + 7] = (C[i + 7] * C[i + 6] + e[o + 0] * e[o + 6]) / (C[i + 6] + e[o + 6]), C[i + 8] = (C[i + 8] * C[i + 6] + e[o + 1] * e[o + 6]) / (C[i + 6] + e[o + 6]), C[i + 6] += e[o + 6], i = O;
        }
      }
      if (t.barnesHutOptimize) {
        for (g = t.scalingRatio, o = 0; o < S; o += ts) for (i = 0;;) if (C[i + 5] >= 0) {
          if (m = Math.pow(e[o + 0] - C[i + 7], 2) + Math.pow(e[o + 1] - C[i + 8], 2), 4 * (l = C[i + 3]) * l / m < k) {
            if (p = e[o + 0] - C[i + 7], y = e[o + 1] - C[i + 8], !0 === N ? m > 0 ? (b = g * e[o + 6] * C[i + 6] / m, e[o + 2] += p * b, e[o + 3] += y * b) : m < 0 && (b = -g * e[o + 6] * C[i + 6] / Math.sqrt(m), e[o + 2] += p * b, e[o + 3] += y * b) : m > 0 && (b = g * e[o + 6] * C[i + 6] / m, e[o + 2] += p * b, e[o + 3] += y * b), (i = C[i + 4]) < 0) break;
            continue;
          }
          i = C[i + 5];
        } else if ((h = C[i + 0]) >= 0 && h !== o && (m = (p = e[o + 0] - e[h + 0]) * p + (y = e[o + 1] - e[h + 1]) * y, !0 === N ? m > 0 ? (b = g * e[o + 6] * e[h + 6] / m, e[o + 2] += p * b, e[o + 3] += y * b) : m < 0 && (b = -g * e[o + 6] * e[h + 6] / Math.sqrt(m), e[o + 2] += p * b, e[o + 3] += y * b) : m > 0 && (b = g * e[o + 6] * e[h + 6] / m, e[o + 2] += p * b, e[o + 3] += y * b)), (i = C[i + 4]) < 0) break;
      } else for (g = t.scalingRatio, a = 0; a < S; a += ts) for (s = 0; s < a; s += ts) p = e[a + 0] - e[s + 0], y = e[a + 1] - e[s + 1], !0 === N ? (m = Math.sqrt(p * p + y * y) - e[a + 8] - e[s + 8]) > 0 ? (b = g * e[a + 6] * e[s + 6] / m / m, e[a + 2] += p * b, e[a + 3] += y * b, e[s + 2] -= p * b, e[s + 3] -= y * b) : m < 0 && (b = 100 * g * e[a + 6] * e[s + 6], e[a + 2] += p * b, e[a + 3] += y * b, e[s + 2] -= p * b, e[s + 3] -= y * b) : (m = Math.sqrt(p * p + y * y)) > 0 && (b = g * e[a + 6] * e[s + 6] / m / m, e[a + 2] += p * b, e[a + 3] += y * b, e[s + 2] -= p * b, e[s + 3] -= y * b);
      for (c = t.gravity / t.scalingRatio, g = t.scalingRatio, o = 0; o < S; o += ts) b = 0, p = e[o + 0], y = e[o + 1], m = Math.sqrt(Math.pow(p, 2) + Math.pow(y, 2)), t.strongGravityMode ? m > 0 && (b = g * e[o + 6] * c) : m > 0 && (b = g * e[o + 6] * c / m), e[o + 2] -= p * b, e[o + 3] -= y * b;
      for (g = 1 * (t.outboundAttractionDistribution ? f : 1), u = 0; u < D; u += 3) a = r[u + 0], s = r[u + 1], d = r[u + 2], v = Math.pow(d, t.edgeWeightInfluence), p = e[a + 0] - e[s + 0], y = e[a + 1] - e[s + 1], !0 === N ? (m = Math.sqrt(p * p + y * y) - e[a + 8] - e[s + 8], t.linLogMode ? t.outboundAttractionDistribution ? m > 0 && (b = -g * v * Math.log(1 + m) / m / e[a + 6]) : m > 0 && (b = -g * v * Math.log(1 + m) / m) : t.outboundAttractionDistribution ? m > 0 && (b = -g * v / e[a + 6]) : m > 0 && (b = -g * v)) : (m = Math.sqrt(Math.pow(p, 2) + Math.pow(y, 2)), t.linLogMode ? t.outboundAttractionDistribution ? m > 0 && (b = -g * v * Math.log(1 + m) / m / e[a + 6]) : m > 0 && (b = -g * v * Math.log(1 + m) / m) : t.outboundAttractionDistribution ? (m = 1, b = -g * v / e[a + 6]) : (m = 1, b = -g * v)), m > 0 && (e[a + 2] += p * b, e[a + 3] += y * b, e[s + 2] -= p * b, e[s + 3] -= y * b);
      if (!0 === N) for (o = 0; o < S; o += ts) 1 !== e[o + 9] && ((w = Math.sqrt(Math.pow(e[o + 2], 2) + Math.pow(e[o + 3], 2))) > 10 && (e[o + 2] = 10 * e[o + 2] / w, e[o + 3] = 10 * e[o + 3] / w), E = e[o + 6] * Math.sqrt((e[o + 4] - e[o + 2]) * (e[o + 4] - e[o + 2]) + (e[o + 5] - e[o + 3]) * (e[o + 5] - e[o + 3])), A = Math.sqrt((e[o + 4] + e[o + 2]) * (e[o + 4] + e[o + 2]) + (e[o + 5] + e[o + 3]) * (e[o + 5] + e[o + 3])) / 2, x = .1 * Math.log(1 + A) / (1 + Math.sqrt(E)), z = e[o + 0] + e[o + 2] * (x / t.slowDown), e[o + 0] = z, M = e[o + 1] + e[o + 3] * (x / t.slowDown), e[o + 1] = M);else for (o = 0; o < S; o += ts) 1 !== e[o + 9] && (E = e[o + 6] * Math.sqrt((e[o + 4] - e[o + 2]) * (e[o + 4] - e[o + 2]) + (e[o + 5] - e[o + 3]) * (e[o + 5] - e[o + 3])), A = Math.sqrt((e[o + 4] + e[o + 2]) * (e[o + 4] + e[o + 2]) + (e[o + 5] + e[o + 3]) * (e[o + 5] + e[o + 3])) / 2, x = e[o + 7] * Math.log(1 + A) / (1 + Math.sqrt(E)), e[o + 7] = Math.min(1, Math.sqrt(x * (Math.pow(e[o + 2], 2) + Math.pow(e[o + 3], 2)) / (1 + Math.sqrt(E)))), z = e[o + 0] + e[o + 2] * (x / t.slowDown), e[o + 0] = z, M = e[o + 1] + e[o + 3] * (x / t.slowDown), e[o + 1] = M);
      return {};
    },
    as = es,
    ss = rs;
  function hs(t, e, r) {
    if (!ns(e)) throw new Error("graphology-layout-forceatlas2: the given graph is not a valid graphology instance.");
    "number" == typeof r && (r = {
      iterations: r
    });
    var n = r.iterations;
    if ("number" != typeof n) throw new Error("graphology-layout-forceatlas2: invalid number of iterations.");
    if (n <= 0) throw new Error("graphology-layout-forceatlas2: you should provide a positive number of iterations.");
    var i = is("getEdgeWeight" in r ? r.getEdgeWeight : "weight").fromEntry,
      o = "function" == typeof r.outputReducer ? r.outputReducer : null,
      a = as.assign({}, ss, r.settings),
      s = as.validateSettings(a);
    if (s) throw new Error("graphology-layout-forceatlas2: " + s.message);
    var h,
      u = as.graphToByteArrays(e, i);
    for (h = 0; h < n; h++) os(a, u.nodes, u.edges);
    if (!t) return as.collectLayoutChanges(e, u.nodes);
    as.assignLayoutChanges(e, u.nodes, o);
  }
  var us = hs.bind(null, !1);
  us.assign = hs.bind(null, !0), us.inferSettings = function (t) {
    var e = "number" == typeof t ? t : t.order;
    return {
      barnesHutOptimize: e > 2e3,
      strongGravityMode: !0,
      gravity: .05,
      scalingRatio: 10,
      slowDown: 1 + Math.log(e)
    };
  };
  var ds = us;
  function cs() {
    return .01 * (.5 - Math.random());
  }
  var ls = {};
  ls.validateSettings = function (t) {
    return "gridSize" in t && "number" != typeof t.gridSize || t.gridSize <= 0 ? {
      message: "the `gridSize` setting should be a positive number."
    } : "margin" in t && "number" != typeof t.margin || t.margin < 0 ? {
      message: "the `margin` setting should be 0 or a positive number."
    } : "expansion" in t && "number" != typeof t.expansion || t.expansion <= 0 ? {
      message: "the `expansion` setting should be a positive number."
    } : "ratio" in t && "number" != typeof t.ratio || t.ratio <= 0 ? {
      message: "the `ratio` setting should be a positive number."
    } : "speed" in t && "number" != typeof t.speed || t.speed <= 0 ? {
      message: "the `speed` setting should be a positive number."
    } : null;
  }, ls.graphToByteArray = function (t, e) {
    var r = t.order,
      n = new Float32Array(3 * r),
      i = 0;
    return t.forEachNode(function (t, r) {
      "function" == typeof e && (r = e(t, r)), n[i] = r.x, n[i + 1] = r.y, n[i + 2] = r.size || 1, i += 3;
    }), n;
  }, ls.assignLayoutChanges = function (t, e, r) {
    var n = 0;
    t.forEachNode(function (i) {
      var o = {
        x: e[n],
        y: e[n + 1]
      };
      "function" == typeof r && (o = r(i, o)), t.mergeNodeAttributes(i, o), n += 3;
    });
  }, ls.collectLayoutChanges = function (t, e, r) {
    var n = {},
      i = 0;
    return t.forEachNode(function (t) {
      var o = {
        x: e[i],
        y: e[i + 1]
      };
      "function" == typeof r && (o = r(t, o)), n[t] = o, i += 3;
    }), n;
  }, ls.createWorker = function (t) {
    var e = window.URL || window.webkitURL,
      r = t.toString(),
      n = e.createObjectURL(new Blob(["(" + r + ").call(this);"], {
        type: "text/javascript"
      })),
      i = new Worker(n);
    return e.revokeObjectURL(n), i;
  };
  var fs = {
      gridSize: 20,
      margin: 5,
      expansion: 1.1,
      ratio: 1,
      speed: 3
    },
    gs = i,
    ps = function ps(t, e) {
      var r,
        n,
        i,
        o,
        a,
        s,
        h = t.margin,
        u = t.ratio,
        d = t.expansion,
        c = t.gridSize,
        l = t.speed,
        f = !0,
        g = e.length,
        p = g / 3 | 0,
        y = new Float32Array(p),
        v = new Float32Array(p),
        m = 1 / 0,
        b = 1 / 0,
        w = -1 / 0,
        E = -1 / 0;
      for (r = 0; r < g; r += 3) i = e[r + 0], o = e[r + 1], s = e[r + 2] * u + h, m = Math.min(m, i - s), w = Math.max(w, i + s), b = Math.min(b, o - s), E = Math.max(E, o + s);
      var A = w - m,
        x = E - b,
        z = (m + w) / 2,
        M = (b + E) / 2;
      m = z - d * A / 2, w = z + d * A / 2, b = M - d * x / 2, E = M + d * x / 2;
      var S,
        D,
        N,
        k,
        C,
        O,
        W,
        j,
        _,
        P,
        U,
        I,
        F = new Array(c * c),
        T = F.length;
      for (S = 0; S < T; S++) F[S] = [];
      for (r = 0; r < g; r += 3) for (i = e[r + 0], o = e[r + 1], D = i - (s = e[r + 2] * u + h), N = i + s, k = o - s, C = o + s, O = Math.floor(c * (D - m) / (w - m)), W = Math.floor(c * (N - m) / (w - m)), j = Math.floor(c * (k - b) / (E - b)), _ = Math.floor(c * (C - b) / (E - b)), P = O; P <= W; P++) for (U = j; U <= _; U++) F[P * c + U].push(r);
      var L,
        R,
        G,
        q,
        B,
        H,
        V,
        Y,
        K,
        $,
        X,
        J,
        Q = new Set();
      for (S = 0; S < T; S++) for (r = 0, a = (I = F[S]).length; r < a; r++) for (G = e[(L = I[r]) + 0], B = e[L + 1], V = e[L + 2], n = r + 1; n < a; n++) R = I[n], K = L + "§" + R, T > 1 && Q.has(K) || (T > 1 && Q.add(K), q = e[R + 0], H = e[R + 1], Y = e[R + 2], $ = q - G, X = H - B, (J = Math.sqrt($ * $ + X * X)) < V * u + h + (Y * u + h) && (f = !1, R = R / 3 | 0, J > 0 ? (y[R] += $ / J * (1 + V), v[R] += X / J * (1 + V)) : (y[R] += A * cs(), v[R] += x * cs())));
      for (r = 0, n = 0; r < g; r += 3, n++) e[r + 0] += .1 * y[n] * l, e[r + 1] += .1 * v[n] * l;
      return {
        converged: f
      };
    },
    ys = ls,
    vs = fs;
  function ms(t, e, r) {
    if (!gs(e)) throw new Error("graphology-layout-noverlap: the given graph is not a valid graphology instance.");
    var n = (r = "number" == typeof r ? {
      maxIterations: r
    } : r || {}).maxIterations || 500;
    if ("number" != typeof n || n <= 0) throw new Error("graphology-layout-force: you should provide a positive number of maximum iterations.");
    var i = Object.assign({}, vs, r.settings),
      o = ys.validateSettings(i);
    if (o) throw new Error("graphology-layout-noverlap: " + o.message);
    var a,
      s = ys.graphToByteArray(e, r.inputReducer),
      h = !1;
    for (a = 0; a < n && !h; a++) h = ps(i, s).converged;
    if (!t) return ys.collectLayoutChanges(e, s, r.outputReducer);
    ys.assignLayoutChanges(e, s, r.outputReducer);
  }
  var bs = ms.bind(null, !1);
  bs.assign = ms.bind(null, !0);
  var ws = bs,
    Es = {},
    As = {},
    xs = {},
    zs = i;
  function Ms(t, e, r, n) {
    var i = e + "Centrality";
    if (!zs(r)) throw new Error("graphology-centrality/" + i + ": the given graph is not a valid graphology instance.");
    if ("degree" !== e && "undirected" === r.type) throw new Error("graphology-centrality/" + i + ": cannot compute " + e + " centrality on an undirected graph.");
    var o = (n = n || {}).nodeCentralityAttribute || i,
      a = r.order - 1,
      s = r[e].bind(r);
    if (!t) {
      var h = {};
      return r.forEachNode(function (t) {
        h[t] = s(t) / a;
      }), h;
    }
    r.updateEachNodeAttributes(function (t, e) {
      return e[o] = s(t) / a, e;
    }, {
      attributes: [o]
    });
  }
  var Ss = Ms.bind(null, !1, "degree"),
    Ds = Ms.bind(null, !1, "inDegree"),
    Ns = Ms.bind(null, !1, "outDegree");
  Ss.assign = Ms.bind(null, !0, "degree"), Ds.assign = Ms.bind(null, !0, "inDegree"), Ns.assign = Ms.bind(null, !0, "outDegree"), xs.degreeCentrality = Ss, xs.inDegreeCentrality = Ds, xs.outDegreeCentrality = Ns;
  var ks = {},
    Cs = {},
    Os = {};
  Os.ARRAY_BUFFER_SUPPORT = "undefined" != typeof ArrayBuffer, Os.SYMBOL_SUPPORT = "undefined" != typeof Symbol;
  var Ws = Os,
    js = Ws.ARRAY_BUFFER_SUPPORT,
    _s = Ws.SYMBOL_SUPPORT,
    Ps = function Ps(t, e) {
      var r, n, i, o, a;
      if (!t) throw new Error("obliterator/forEach: invalid iterable.");
      if ("function" != typeof e) throw new Error("obliterator/forEach: expecting a callback.");
      if (Array.isArray(t) || js && ArrayBuffer.isView(t) || "string" == typeof t || "[object Arguments]" === t.toString()) for (i = 0, o = t.length; i < o; i++) e(t[i], i);else if ("function" != typeof t.forEach) {
        if (_s && Symbol.iterator in t && "function" != typeof t.next && (t = t[Symbol.iterator]()), "function" != typeof t.next) for (n in t) t.hasOwnProperty(n) && e(t[n], n);else for (r = t, i = 0; !0 !== (a = r.next()).done;) e(a.value, i), i++;
      } else t.forEach(e);
    },
    Us = Ps,
    Is = bi;
  function Fs(t) {
    return "number" == typeof t.length ? t.length : "number" == typeof t.size ? t.size : void 0;
  }
  Cs.isArrayLike = function (t) {
    return Array.isArray(t) || Is.isTypedArray(t);
  }, Cs.guessLength = Fs, Cs.toArray = function (t) {
    var e = Fs(t),
      r = "number" == typeof e ? new Array(e) : [],
      n = 0;
    return Us(t, function (t) {
      r[n++] = t;
    }), r;
  }, Cs.toArrayWithIndices = function (t) {
    var e = Fs(t),
      r = "number" == typeof e ? Is.getPointerArray(e) : Array,
      n = "number" == typeof e ? new Array(e) : [],
      i = "number" == typeof e ? new r(e) : [],
      o = 0;
    return Us(t, function (t) {
      n[o] = t, i[o] = o++;
    }), [n, i];
  };
  var Ts = Cs,
    Ls = mi;
  function Rs(t, e) {
    if (arguments.length < 2) throw new Error("mnemonist/fixed-deque: expecting an Array class and a capacity.");
    if ("number" != typeof e || e <= 0) throw new Error("mnemonist/fixed-deque: `capacity` should be a positive number.");
    this.ArrayClass = t, this.capacity = e, this.items = new t(this.capacity), this.clear();
  }
  Rs.prototype.clear = function () {
    this.start = 0, this.size = 0;
  }, Rs.prototype.push = function (t) {
    if (this.size === this.capacity) throw new Error("mnemonist/fixed-deque.push: deque capacity (" + this.capacity + ") exceeded!");
    var e = (this.start + this.size) % this.capacity;
    return this.items[e] = t, ++this.size;
  }, Rs.prototype.unshift = function (t) {
    if (this.size === this.capacity) throw new Error("mnemonist/fixed-deque.unshift: deque capacity (" + this.capacity + ") exceeded!");
    var e = this.start - 1;
    return 0 === this.start && (e = this.capacity - 1), this.items[e] = t, this.start = e, ++this.size;
  }, Rs.prototype.pop = function () {
    if (0 === this.size) return;
    var t = (this.start + this.size - 1) % this.capacity;
    return this.size--, this.items[t];
  }, Rs.prototype.shift = function () {
    if (0 !== this.size) {
      var t = this.start;
      return this.size--, this.start++, this.start === this.capacity && (this.start = 0), this.items[t];
    }
  }, Rs.prototype.peekFirst = function () {
    if (0 !== this.size) return this.items[this.start];
  }, Rs.prototype.peekLast = function () {
    if (0 !== this.size) {
      var t = this.start + this.size - 1;
      return t > this.capacity && (t -= this.capacity), this.items[t];
    }
  }, Rs.prototype.get = function (t) {
    if (0 !== this.size) return (t = this.start + t) > this.capacity && (t -= this.capacity), this.items[t];
  }, Rs.prototype.forEach = function (t, e) {
    e = arguments.length > 1 ? e : this;
    for (var r = this.capacity, n = this.size, i = this.start, o = 0; o < n;) t.call(e, this.items[i], o, this), o++, ++i === r && (i = 0);
  }, Rs.prototype.toArray = function () {
    var t = this.start + this.size;
    if (t < this.capacity) return this.items.slice(this.start, t);
    for (var e = new this.ArrayClass(this.size), r = this.capacity, n = this.size, i = this.start, o = 0; o < n;) e[o] = this.items[i], o++, ++i === r && (i = 0);
    return e;
  }, Rs.prototype.values = function () {
    var t = this.items,
      e = this.capacity,
      r = this.size,
      n = this.start,
      i = 0;
    return new Ls(function () {
      if (i >= r) return {
        done: !0
      };
      var o = t[n];
      return n++, i++, n === e && (n = 0), {
        value: o,
        done: !1
      };
    });
  }, Rs.prototype.entries = function () {
    var t = this.items,
      e = this.capacity,
      r = this.size,
      n = this.start,
      i = 0;
    return new Ls(function () {
      if (i >= r) return {
        done: !0
      };
      var o = t[n];
      return ++n === e && (n = 0), {
        value: [i++, o],
        done: !1
      };
    });
  }, "undefined" != typeof Symbol && (Rs.prototype[Symbol.iterator] = Rs.prototype.values), Rs.prototype.inspect = function () {
    var t = this.toArray();
    return t.type = this.ArrayClass.name, t.capacity = this.capacity, Object.defineProperty(t, "constructor", {
      value: Rs,
      enumerable: !1
    }), t;
  }, "undefined" != typeof Symbol && (Rs.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = Rs.prototype.inspect), Rs.from = function (t, e, r) {
    if (arguments.length < 3 && "number" != typeof (r = Ts.guessLength(t))) throw new Error("mnemonist/fixed-deque.from: could not guess iterable length. Please provide desired capacity as last argument.");
    var n = new Rs(e, r);
    if (Ts.isArrayLike(t)) {
      var i, o;
      for (i = 0, o = t.length; i < o; i++) n.items[i] = t[i];
      return n.size = o, n;
    }
    return Ts.forEach(t, function (t) {
      n.push(t);
    }), n;
  };
  var Gs = Rs,
    qs = mi,
    Bs = Cs;
  function Hs(t, e) {
    if (arguments.length < 2) throw new Error("mnemonist/fixed-stack: expecting an Array class and a capacity.");
    if ("number" != typeof e || e <= 0) throw new Error("mnemonist/fixed-stack: `capacity` should be a positive number.");
    this.capacity = e, this.ArrayClass = t, this.items = new this.ArrayClass(this.capacity), this.clear();
  }
  Hs.prototype.clear = function () {
    this.size = 0;
  }, Hs.prototype.push = function (t) {
    if (this.size === this.capacity) throw new Error("mnemonist/fixed-stack.push: stack capacity (" + this.capacity + ") exceeded!");
    return this.items[this.size++] = t, this.size;
  }, Hs.prototype.pop = function () {
    if (0 !== this.size) return this.items[--this.size];
  }, Hs.prototype.peek = function () {
    return this.items[this.size - 1];
  }, Hs.prototype.forEach = function (t, e) {
    e = arguments.length > 1 ? e : this;
    for (var r = 0, n = this.items.length; r < n; r++) t.call(e, this.items[n - r - 1], r, this);
  }, Hs.prototype.toArray = function () {
    for (var t = new this.ArrayClass(this.size), e = this.size - 1, r = this.size; r--;) t[r] = this.items[e - r];
    return t;
  }, Hs.prototype.values = function () {
    var t = this.items,
      e = this.size,
      r = 0;
    return new qs(function () {
      if (r >= e) return {
        done: !0
      };
      var n = t[e - r - 1];
      return r++, {
        value: n,
        done: !1
      };
    });
  }, Hs.prototype.entries = function () {
    var t = this.items,
      e = this.size,
      r = 0;
    return new qs(function () {
      if (r >= e) return {
        done: !0
      };
      var n = t[e - r - 1];
      return {
        value: [r++, n],
        done: !1
      };
    });
  }, "undefined" != typeof Symbol && (Hs.prototype[Symbol.iterator] = Hs.prototype.values), Hs.prototype.toString = function () {
    return this.toArray().join(",");
  }, Hs.prototype.toJSON = function () {
    return this.toArray();
  }, Hs.prototype.inspect = function () {
    var t = this.toArray();
    return t.type = this.ArrayClass.name, t.capacity = this.capacity, Object.defineProperty(t, "constructor", {
      value: Hs,
      enumerable: !1
    }), t;
  }, "undefined" != typeof Symbol && (Hs.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = Hs.prototype.inspect), Hs.from = function (t, e, r) {
    if (arguments.length < 3 && "number" != typeof (r = Bs.guessLength(t))) throw new Error("mnemonist/fixed-stack.from: could not guess iterable length. Please provide desired capacity as last argument.");
    var n = new Hs(e, r);
    if (Bs.isArrayLike(t)) {
      var i, o;
      for (i = 0, o = t.length; i < o; i++) n.items[i] = t[i];
      return n.size = o, n;
    }
    return Bs.forEach(t, function (t) {
      n.push(t);
    }), n;
  };
  var Vs = Hs,
    Ys = {};
  Ys.DEFAULT_COMPARATOR = function (t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
  }, Ys.DEFAULT_REVERSE_COMPARATOR = function (t, e) {
    return t < e ? 1 : t > e ? -1 : 0;
  }, Ys.reverseComparator = function (t) {
    return function (e, r) {
      return t(r, e);
    };
  }, Ys.createTupleComparator = function (t) {
    return 2 === t ? function (t, e) {
      return t[0] < e[0] ? -1 : t[0] > e[0] ? 1 : t[1] < e[1] ? -1 : t[1] > e[1] ? 1 : 0;
    } : function (e, r) {
      for (var n = 0; n < t;) {
        if (e[n] < r[n]) return -1;
        if (e[n] > r[n]) return 1;
        n++;
      }
      return 0;
    };
  };
  var Ks = Ps,
    $s = Ys,
    Xs = Cs,
    Js = $s.DEFAULT_COMPARATOR,
    Qs = $s.reverseComparator;
  function Zs(t, e, r, n) {
    for (var i, o, a = e[n]; n > r && t(a, o = e[i = n - 1 >> 1]) < 0;) e[n] = o, n = i;
    e[n] = a;
  }
  function th(t, e, r) {
    for (var n, i = e.length, o = r, a = e[r], s = 2 * r + 1; s < i;) (n = s + 1) < i && t(e[s], e[n]) >= 0 && (s = n), e[r] = e[s], s = 2 * (r = s) + 1;
    e[r] = a, Zs(t, e, o, r);
  }
  function eh(t, e, r) {
    e.push(r), Zs(t, e, 0, e.length - 1);
  }
  function rh(t, e) {
    var r = e.pop();
    if (0 !== e.length) {
      var n = e[0];
      return e[0] = r, th(t, e, 0), n;
    }
    return r;
  }
  function nh(t, e, r) {
    if (0 === e.length) throw new Error("mnemonist/heap.replace: cannot pop an empty heap.");
    var n = e[0];
    return e[0] = r, th(t, e, 0), n;
  }
  function ih(t, e, r) {
    var n;
    return 0 !== e.length && t(e[0], r) < 0 && (n = e[0], e[0] = r, r = n, th(t, e, 0)), r;
  }
  function oh(t, e) {
    for (var r = e.length >> 1; --r >= 0;) th(t, e, r);
  }
  function ah(t, e) {
    for (var r = e.length, n = 0, i = new Array(r); n < r;) i[n++] = rh(t, e);
    return i;
  }
  function sh(t) {
    if (this.clear(), this.comparator = t || Js, "function" != typeof this.comparator) throw new Error("mnemonist/Heap.constructor: given comparator should be a function.");
  }
  function hh(t) {
    if (this.clear(), this.comparator = t || Js, "function" != typeof this.comparator) throw new Error("mnemonist/MaxHeap.constructor: given comparator should be a function.");
    this.comparator = Qs(this.comparator);
  }
  sh.prototype.clear = function () {
    this.items = [], this.size = 0;
  }, sh.prototype.push = function (t) {
    return eh(this.comparator, this.items, t), ++this.size;
  }, sh.prototype.peek = function () {
    return this.items[0];
  }, sh.prototype.pop = function () {
    return 0 !== this.size && this.size--, rh(this.comparator, this.items);
  }, sh.prototype.replace = function (t) {
    return nh(this.comparator, this.items, t);
  }, sh.prototype.pushpop = function (t) {
    return ih(this.comparator, this.items, t);
  }, sh.prototype.consume = function () {
    return this.size = 0, ah(this.comparator, this.items);
  }, sh.prototype.toArray = function () {
    return ah(this.comparator, this.items.slice());
  }, sh.prototype.inspect = function () {
    var t = this.toArray();
    return Object.defineProperty(t, "constructor", {
      value: sh,
      enumerable: !1
    }), t;
  }, "undefined" != typeof Symbol && (sh.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = sh.prototype.inspect), hh.prototype = sh.prototype, sh.from = function (t, e) {
    var r,
      n = new sh(e);
    return r = Xs.isArrayLike(t) ? t.slice() : Xs.toArray(t), oh(n.comparator, r), n.items = r, n.size = r.length, n;
  }, hh.from = function (t, e) {
    var r,
      n = new hh(e);
    return r = Xs.isArrayLike(t) ? t.slice() : Xs.toArray(t), oh(n.comparator, r), n.items = r, n.size = r.length, n;
  }, sh.siftUp = th, sh.siftDown = Zs, sh.push = eh, sh.pop = rh, sh.replace = nh, sh.pushpop = ih, sh.heapify = oh, sh.consume = ah, sh.nsmallest = function (t, e, r) {
    2 === arguments.length && (r = e, e = t, t = Js);
    var n,
      i,
      o,
      a,
      s = Qs(t),
      h = 1 / 0;
    if (1 === e) {
      if (Xs.isArrayLike(r)) {
        for (n = 0, i = r.length; n < i; n++) o = r[n], (h === 1 / 0 || t(o, h) < 0) && (h = o);
        return (a = new r.constructor(1))[0] = h, a;
      }
      return Ks(r, function (e) {
        (h === 1 / 0 || t(e, h) < 0) && (h = e);
      }), [h];
    }
    if (Xs.isArrayLike(r)) {
      if (e >= r.length) return r.slice().sort(t);
      for (a = r.slice(0, e), oh(s, a), n = e, i = r.length; n < i; n++) s(r[n], a[0]) > 0 && nh(s, a, r[n]);
      return a.sort(t);
    }
    var u = Xs.guessLength(r);
    return null !== u && u < e && (e = u), a = new Array(e), n = 0, Ks(r, function (t) {
      n < e ? a[n] = t : (n === e && oh(s, a), s(t, a[0]) > 0 && nh(s, a, t)), n++;
    }), a.length > n && (a.length = n), a.sort(t);
  }, sh.nlargest = function (t, e, r) {
    2 === arguments.length && (r = e, e = t, t = Js);
    var n,
      i,
      o,
      a,
      s = Qs(t),
      h = -1 / 0;
    if (1 === e) {
      if (Xs.isArrayLike(r)) {
        for (n = 0, i = r.length; n < i; n++) o = r[n], (h === -1 / 0 || t(o, h) > 0) && (h = o);
        return (a = new r.constructor(1))[0] = h, a;
      }
      return Ks(r, function (e) {
        (h === -1 / 0 || t(e, h) > 0) && (h = e);
      }), [h];
    }
    if (Xs.isArrayLike(r)) {
      if (e >= r.length) return r.slice().sort(s);
      for (a = r.slice(0, e), oh(t, a), n = e, i = r.length; n < i; n++) t(r[n], a[0]) > 0 && nh(t, a, r[n]);
      return a.sort(s);
    }
    var u = Xs.guessLength(r);
    return null !== u && u < e && (e = u), a = new Array(e), n = 0, Ks(r, function (r) {
      n < e ? a[n] = r : (n === e && oh(t, a), t(r, a[0]) > 0 && nh(t, a, r)), n++;
    }), a.length > n && (a.length = n), a.sort(s);
  }, sh.MinHeap = sh, sh.MaxHeap = hh;
  var uh = sh,
    dh = {},
    ch = bi,
    lh = Wi.createEdgeWeightGetter;
  function fh(t, e) {
    return "outbound" === t || "inbound" === t ? e.directedSize + 2 * e.undirectedSize : "in" === t || "out" === t || "directed" === t ? e.directedSize : 2 * e.undirectedSize;
  }
  function gh(t, e) {
    var r = t[(e = e || "outbound") + "Neighbors"].bind(t),
      n = fh(e, t),
      i = ch.getPointerArray(n),
      o = ch.getPointerArray(t.order);
    this.graph = t, this.neighborhood = new o(n), this.starts = new i(t.order + 1), this.nodes = t.nodes();
    var a,
      s,
      h,
      u,
      d,
      c = {},
      l = 0;
    for (a = 0, s = t.order; a < s; a++) c[this.nodes[a]] = a;
    for (a = 0, s = t.order; a < s; a++) for (d = r(this.nodes[a]), this.starts[a] = l, h = 0, u = d.length; h < u; h++) this.neighborhood[l++] = c[d[h]];
    this.starts[a] = n;
  }
  function ph(t, e, r) {
    var n = t[(r = r || "outbound") + "Edges"].bind(t),
      i = fh(r, t),
      o = ch.getPointerArray(i),
      a = ch.getPointerArray(t.order),
      s = lh(e).fromMinimalEntry;
    this.graph = t, this.neighborhood = new a(i), this.weights = new Float64Array(i), this.outDegrees = new Float64Array(t.order), this.starts = new o(t.order + 1), this.nodes = t.nodes();
    var h,
      u,
      d,
      c,
      l,
      f,
      g,
      p,
      y,
      v = {},
      m = 0;
    for (h = 0, u = t.order; h < u; h++) v[this.nodes[h]] = h;
    for (h = 0, u = t.order; h < u; h++) for (g = n(l = this.nodes[h]), this.starts[h] = m, d = 0, c = g.length; d < c; d++) p = g[d], f = t.opposite(l, p), y = s(p, t.getEdgeAttributes(p)), this.neighborhood[m] = v[f], this.weights[m++] = y, this.outDegrees[h] += y;
    this.starts[h] = i;
  }
  gh.prototype.bounds = function (t) {
    return [this.starts[t], this.starts[t + 1]];
  }, gh.prototype.project = function () {
    var t = this,
      e = {};
    return t.nodes.forEach(function (r, n) {
      e[r] = Array.from(t.neighborhood.slice(t.starts[n], t.starts[n + 1])).map(function (e) {
        return t.nodes[e];
      });
    }), e;
  }, gh.prototype.collect = function (t) {
    var e,
      r,
      n = {};
    for (e = 0, r = t.length; e < r; e++) n[this.nodes[e]] = t[e];
    return n;
  }, gh.prototype.assign = function (t, e) {
    var r = 0;
    this.graph.updateEachNodeAttributes(function (n, i) {
      return i[t] = e[r++], i;
    }, {
      attributes: [t]
    });
  }, dh.NeighborhoodIndex = gh, ph.prototype.bounds = gh.prototype.bounds, ph.prototype.project = gh.prototype.project, ph.prototype.collect = gh.prototype.collect, ph.prototype.assign = gh.prototype.assign, dh.WeightedNeighborhoodIndex = ph;
  var yh = Gs,
    vh = Vs,
    mh = uh,
    bh = bi,
    wh = dh,
    Eh = wh.NeighborhoodIndex,
    Ah = wh.WeightedNeighborhoodIndex;
  function xh(t, e) {
    return t[0] > e[0] ? 1 : t[0] < e[0] ? -1 : t[1] > e[1] ? 1 : t[1] < e[1] ? -1 : t[2] > e[2] ? 1 : t[2] < e[2] ? -1 : t[3] > e[3] ? 1 : t[3] < e[3] ? -1 : 0;
  }
  ks.createUnweightedIndexedBrandes = function (t) {
    var e = new Eh(t),
      r = e.neighborhood,
      n = e.starts,
      i = t.order,
      o = new vh(bh.getPointerArray(i), i),
      a = new Uint32Array(i),
      s = new Array(i),
      h = new Int32Array(i),
      u = new yh(Uint32Array, i),
      d = function d(t) {
        var e, d, c, l, f, g, p;
        for (g = 0; g < i; g++) s[g] = [], a[g] = 0, h[g] = -1;
        for (a[t] = 1, h[t] = 0, u.push(t); 0 !== u.size;) for (g = u.shift(), o.push(g), e = h[g], d = a[g], c = n[g], l = n[g + 1], f = c; f < l; f++) p = r[f], -1 === h[p] && (u.push(p), h[p] = e + 1), h[p] === e + 1 && (a[p] += d, s[p].push(g));
        return [o, s, a];
      };
    return d.index = e, d;
  }, ks.createDijkstraIndexedBrandes = function (t, e) {
    var r = new Ah(t, e || "weight"),
      n = r.neighborhood,
      i = r.weights,
      o = r.starts,
      a = t.order,
      s = new vh(bh.getPointerArray(a), a),
      h = new Uint32Array(a),
      u = new Array(a),
      d = new Float64Array(a),
      c = new Float64Array(a),
      l = new mh(xh),
      f = function f(t) {
        var e,
          r,
          f,
          g,
          p,
          y,
          v,
          m,
          b,
          w = 0;
        for (m = 0; m < a; m++) u[m] = [], h[m] = 0, d[m] = -1, c[m] = -1;
        for (h[t] = 1, c[t] = 0, l.push([0, w++, t, t]); 0 !== l.size;) if (g = (f = l.pop())[0], p = f[2], m = f[3], -1 === d[m]) for (s.push(m), d[m] = g, h[m] += h[p], e = o[m], r = o[m + 1], v = e; v < r; v++) b = n[v], y = g + i[v], -1 === d[b] && (-1 === c[b] || y < c[b]) ? (c[b] = y, l.push([y, w++, m, b]), h[b] = 0, u[b] = [m]) : y === c[b] && (h[b] += h[m], u[b].push(m));
        return [s, u, h];
      };
    return f.index = r, f;
  };
  var zh = i,
    Mh = ks,
    Sh = E,
    Dh = Mh.createUnweightedIndexedBrandes,
    Nh = Mh.createDijkstraIndexedBrandes,
    kh = {
      nodeCentralityAttribute: "betweennessCentrality",
      getEdgeWeight: "weight",
      normalized: !0
    };
  function Ch(t, e, r) {
    if (!zh(e)) throw new Error("graphology-centrality/beetweenness-centrality: the given graph is not a valid graphology instance.");
    var n,
      i,
      o,
      a,
      s,
      h,
      u,
      d,
      c,
      l,
      f = (r = Sh(r, kh)).nodeCentralityAttribute,
      g = r.normalized,
      p = r.getEdgeWeight ? Nh(e, r.getEdgeWeight) : Dh(e),
      y = e.order,
      v = new Float64Array(y),
      m = new Float64Array(y);
    for (h = 0; h < y; h++) {
      for (i = (n = p(h))[0], o = n[1], a = n[2], u = i.size; u--;) v[i.items[i.size - u]] = 0;
      for (; 0 !== i.size;) {
        for (s = (1 + v[l = i.pop()]) / a[l], u = 0, d = o[l].length; u < d; u++) v[c = o[l][u]] += a[c] * s;
        l !== h && (m[l] += v[l]);
      }
    }
    var b = null;
    if (null !== (b = g ? y <= 2 ? null : 1 / ((y - 1) * (y - 2)) : "undirected" === e.type ? .5 : null)) for (h = 0; h < y; h++) m[h] *= b;
    return t ? p.index.assign(f, m) : p.index.collect(m);
  }
  var Oh = Ch.bind(null, !1);
  Oh.assign = Ch.bind(null, !0);
  var Wh = Oh,
    jh = mi,
    _h = bi.getPointerArray;
  function Ph(t) {
    var e = _h(t);
    this.size = 0, this.length = t, this.dense = new e(t), this.sparse = new e(t);
  }
  Ph.prototype.clear = function () {
    this.size = 0;
  }, Ph.prototype.has = function (t) {
    var e = this.sparse[t];
    return e < this.size && this.dense[e] === t;
  }, Ph.prototype.add = function (t) {
    var e = this.sparse[t];
    return e < this.size && this.dense[e] === t || (this.dense[this.size] = t, this.sparse[t] = this.size, this.size++), this;
  }, Ph.prototype["delete"] = function (t) {
    var e = this.sparse[t];
    return !(e >= this.size || this.dense[e] !== t) && (e = this.dense[this.size - 1], this.dense[this.sparse[t]] = e, this.sparse[e] = this.sparse[t], this.size--, !0);
  }, Ph.prototype.forEach = function (t, e) {
    var r;
    e = arguments.length > 1 ? e : this;
    for (var n = 0; n < this.size; n++) r = this.dense[n], t.call(e, r, r);
  }, Ph.prototype.values = function () {
    var t = this.size,
      e = this.dense,
      r = 0;
    return new jh(function () {
      if (r < t) {
        var n = e[r];
        return r++, {
          value: n
        };
      }
      return {
        done: !0
      };
    });
  }, "undefined" != typeof Symbol && (Ph.prototype[Symbol.iterator] = Ph.prototype.values), Ph.prototype.inspect = function () {
    for (var t = new Set(), e = 0; e < this.size; e++) t.add(this.dense[e]);
    return Object.defineProperty(t, "constructor", {
      value: Ph,
      enumerable: !1
    }), t.length = this.length, t;
  }, "undefined" != typeof Symbol && (Ph.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = Ph.prototype.inspect);
  var Uh = i,
    Ih = E,
    Fh = Gs,
    Th = Ph,
    Lh = dh.NeighborhoodIndex,
    Rh = {
      nodeCentralityAttribute: "closenessCentrality",
      wassermanFaust: !1
    };
  function Gh(t) {
    this.index = new Lh(t, "inbound"), this.queue = new Fh(Array, t.order), this.seen = new Th(t.order);
  }
  function qh(t, e, r) {
    if (!Uh(e)) throw new Error("graphology-metrics/centrality/closeness: the given graph is not a valid graphology instance.");
    var n,
      i,
      o,
      a,
      s,
      h = (r = Ih(r, Rh)).wassermanFaust,
      u = new Gh(e),
      d = e.order,
      c = new Float64Array(d);
    for (n = 0; n < d; n++) o = (i = u.fromNode(n))[0], s = 0, (a = i[1]) > 0 && d > 1 && (s = o / a, h && (s *= o / (d - 1))), c[n] = s;
    return t ? u.index.assign(r.nodeCentralityAttribute, c) : u.index.collect(c);
  }
  Gh.prototype.fromNode = function (t) {
    var e,
      r,
      n,
      i,
      o,
      a,
      s = this.index,
      h = this.queue,
      u = this.seen;
    u.clear(), h.clear(), u.add(t), h.push([t, 0]);
    for (var d = 0, c = 0; 0 !== h.size;) for (r = (e = h.shift())[0], 0 !== (n = e[1]) && (d += n, c += 1), o = s.starts[r + 1], i = s.starts[r]; i < o; i++) a = s.neighborhood[i], u.has(a) || (u.add(a), h.push([a, n + 1]));
    return [c, d];
  };
  var Bh = qh.bind(null, !1);
  Bh.assign = qh.bind(null, !0);
  var Hh = Bh,
    Vh = i,
    Yh = E,
    Kh = dh.WeightedNeighborhoodIndex,
    $h = {
      nodeCentralityAttribute: "eigenvectorCentrality",
      getEdgeWeight: "weight",
      maxIterations: 100,
      tolerance: 1e-6
    };
  function Xh(t) {
    for (var e = 0, r = 0, n = 0, i = t.length; n < i; n++) {
      var o = Math.abs(t[n]);
      o > e && (r *= e / o * (e / o), e = o), r += 0 === o && 0 === e ? 0 : o / e * (o / e);
    }
    return e === 1 / 0 ? 1 : e * Math.sqrt(r);
  }
  function Jh(t, e, r) {
    if (!Vh(e)) throw new Error("graphology-metrics/centrality/eigenvector: the given graph is not a valid graphology instance.");
    var n,
      i,
      o,
      a,
      s = (r = Yh(r, $h)).maxIterations,
      h = r.tolerance,
      u = e.order,
      d = new Kh(e, r.getEdgeWeight),
      c = new Float64Array(e.order);
    for (n = 0; n < u; n++) c[n] = 1 / u;
    for (var l, f, g, p = 0, y = 0, v = !1; p < s;) {
      for (f = c, c = new Float64Array(f), n = 0; n < u; n++) for (o = d.starts[n + 1], i = d.starts[n]; i < o; i++) l = d.neighborhood[i], a = d.weights[i], c[l] += f[n] * a;
      for (g = Xh(c), n = 0; n < u; n++) c[n] /= g;
      for (y = 0, n = 0; n < u; n++) y += Math.abs(c[n] - f[n]);
      if (y < u * h) {
        v = !0;
        break;
      }
      p++;
    }
    if (!v) throw Error("graphology-metrics/centrality/eigenvector: failed to converge.");
    if (!t) return d.collect(c);
    d.assign(r.nodeCentralityAttribute, c);
  }
  var Qh = Jh.bind(null, !1);
  Qh.assign = Jh.bind(null, !0);
  var Zh = Qh,
    tu = E,
    eu = i,
    ru = Wi.createEdgeWeightGetter,
    nu = {
      nodeAuthorityAttribute: "authority",
      nodeHubAttribute: "hub",
      getEdgeWeight: "weight",
      maxIterations: 100,
      normalize: !0,
      tolerance: 1e-8
    };
  function iu(t, e) {
    var r,
      n,
      i = Object.create(null);
    for (r = 0, n = t.length; r < n; r++) i[t[r]] = e;
    return i;
  }
  function ou(t) {
    var e = 0;
    for (var r in t) e += t[r];
    return e;
  }
  function au(t, e, r) {
    if (!eu(e)) throw new Error("graphology-hits: the given graph is not a valid graphology instance.");
    if (e.multi) throw new Error("graphology-hits: the HITS algorithm does not work with MultiGraphs.");
    r = tu(r, nu);
    var n,
      i,
      o,
      a,
      s,
      h,
      u,
      d,
      c,
      l,
      f,
      g,
      p,
      y,
      v = ru(r.getEdgeWeight).fromEntry,
      m = e.order,
      b = e.nodes(),
      w = iu(b, 1 / m),
      E = {},
      A = !1;
    for (e.forEachEdge(function (t, e, r, n, i, o, a) {
      E[t] = v(t, e, r, n, i, o, a);
    }), u = 0; u < r.maxIterations; u++) {
      for (i = w, w = iu(b, 0), o = iu(b, 0), c = 0, d = 0, g = 0; g < m; g++) for (a = b[g], p = 0, y = (n = e.outboundEdges(a)).length; p < y; p++) h = n[p], s = e.opposite(a, h), o[s] += i[a] * E[h], o[s] > d && (d = o[s]);
      for (g = 0; g < m; g++) for (a = b[g], p = 0, y = (n = e.outboundEdges(a)).length; p < y; p++) h = n[p], s = e.opposite(a, h), w[a] += o[s] * E[h], w[s] > c && (c = w[s]);
      for (a in f = 1 / c, w) w[a] *= f;
      for (a in f = 1 / d, o) o[a] *= f;
      for (a in l = 0, w) l += Math.abs(w[a] - i[a]);
      if (l < r.tolerance) {
        A = !0;
        break;
      }
    }
    if (!A) throw Error("graphology-metrics/centrality/hits: failed to converge.");
    if (r.normalize) {
      for (a in f = 1 / ou(o), o) o[a] *= f;
      for (a in f = 1 / ou(w), w) w[a] *= f;
    }
    if (!t) return {
      hubs: w,
      authorities: o
    };
    e.updateEachNodeAttributes(function (t, e) {
      return e[r.nodeAuthorityAttribute] = o[t], e[r.nodeHubAttribute] = w[t], e;
    }, {
      attributes: [r.nodeAuthorityAttribute, r.nodeHubAttribute]
    });
  }
  var su = au.bind(null, !1);
  su.assign = au.bind(null, !0);
  var hu = su,
    uu = i,
    du = E,
    cu = dh.WeightedNeighborhoodIndex,
    lu = {
      nodePagerankAttribute: "pagerank",
      getEdgeWeight: "weight",
      alpha: .85,
      maxIterations: 100,
      tolerance: 1e-6
    };
  function fu(t, e, r) {
    if (!uu(e)) throw new Error("graphology-metrics/centrality/pagerank: the given graph is not a valid graphology instance.");
    var n,
      i,
      o,
      a,
      s = (r = du(r, lu)).alpha,
      h = r.maxIterations,
      u = r.tolerance,
      d = r.nodePagerankAttribute,
      c = e.order,
      l = 1 / c,
      f = new cu(e, r.getEdgeWeight),
      g = new Float64Array(e.order),
      p = new Float64Array(f.weights.length),
      y = [];
    for (n = 0; n < c; n++) for (g[n] = l, o = f.starts[n + 1], 0 === (a = f.outDegrees[n]) && y.push(n), i = f.starts[n]; i < o; i++) p[i] = f.weights[i] / a;
    for (var v, m, b = 0, w = 0, E = !1; b < h;) {
      for (m = g, g = new Float64Array(e.order), v = 0, n = 0, o = y.length; n < o; n++) v += m[y[n]];
      for (v *= s, n = 0; n < c; n++) {
        for (o = f.starts[n + 1], i = f.starts[n]; i < o; i++) g[f.neighborhood[i]] += s * m[n] * p[i];
        g[n] += v * l + (1 - s) * l;
      }
      for (w = 0, n = 0; n < c; n++) w += Math.abs(g[n] - m[n]);
      if (w < c * u) {
        E = !0;
        break;
      }
      b++;
    }
    if (!E) throw Error("graphology-metrics/centrality/pagerank: failed to converge.");
    if (!t) return f.collect(g);
    f.assign(d, g);
  }
  var gu = fu.bind(null, !1);
  gu.assign = fu.bind(null, !0);
  var pu = gu,
    yu = xs;
  As.betweenness = Wh, As.closeness = Hh, As.eigenvector = Zh, As.hits = hu, As.pagerank = pu, As.degree = yu.degreeCentrality, As.inDegree = yu.inDegreeCentrality, As.outDegree = yu.outDegreeCentrality;
  var vu = {},
    mu = i,
    bu = yi,
    wu = E,
    Eu = Wi.createEdgeWeightGetter,
    Au = {
      edgeDisparityAttribute: "disparity",
      getEdgeWeight: "weight"
    };
  function xu(t, e, r) {
    if (!mu(e)) throw new Error("graphology-metrics/edge/disparity: the given graph is not a valid graphology instance.");
    if (e.multi || "mixed" === bu(e)) throw new Error("graphology-metrics/edge/disparity: not defined for multi nor mixed graphs.");
    r = wu(r, Au);
    var n,
      i,
      o,
      a = Eu(r.getEdgeWeight).fromEntry,
      s = {};
    e.forEachNode(function (t) {
      s[t] = 0;
    }), e.forEachEdge(function (t, e, r, n, i, o, h) {
      var u = a(t, e, r, n, i, o, h);
      s[r] += u, s[n] += u;
    });
    var h = {};
    if (e.forEachAssymetricAdjacencyEntry(function (t, r, u, d, c, l, f) {
      var g = a(c, l, t, r, u, d, f);
      n !== t && (n = t, i = e.degree(t), o = s[t]);
      var p = e.degree(r),
        y = s[r],
        v = g / o,
        m = g / y,
        b = Math.pow(1 - v, i - 1),
        w = Math.pow(1 - m, p - 1);
      h[c] = Math.min(b, w);
    }), !t) return h;
    e.updateEachEdgeAttributes(function (t, e) {
      return e[r.edgeDisparityAttribute] = h[t], e;
    }, {
      attributes: [r.edgeDisparityAttribute]
    });
  }
  var zu = xu.bind(null, !1);
  zu.assign = xu.bind(null, !0);
  var Mu = zu,
    Su = {};
  !function (t) {
    t.intersection = function () {
      if (arguments.length < 2) throw new Error("mnemonist/Set.intersection: needs at least two arguments.");
      var t,
        e,
        r = new Set(),
        n = 1 / 0,
        i = null,
        o = arguments.length;
      for (e = 0; e < o; e++) {
        if (0 === (t = arguments[e]).size) return r;
        t.size < n && (n = t.size, i = t);
      }
      for (var a, s, h, u, d = i.values(); !(a = d.next()).done;) {
        for (s = a.value, h = !0, e = 0; e < o; e++) if ((u = arguments[e]) !== i && !u.has(s)) {
          h = !1;
          break;
        }
        h && r.add(s);
      }
      return r;
    }, t.union = function () {
      if (arguments.length < 2) throw new Error("mnemonist/Set.union: needs at least two arguments.");
      var t,
        e,
        r,
        n = new Set(),
        i = arguments.length;
      for (t = 0; t < i; t++) for (e = arguments[t].values(); !(r = e.next()).done;) n.add(r.value);
      return n;
    }, t.difference = function (t, e) {
      if (!t.size) return new Set();
      if (!e.size) return new Set(t);
      for (var r, n = new Set(), i = t.values(); !(r = i.next()).done;) e.has(r.value) || n.add(r.value);
      return n;
    }, t.symmetricDifference = function (t, e) {
      for (var r, n = new Set(), i = t.values(); !(r = i.next()).done;) e.has(r.value) || n.add(r.value);
      for (i = e.values(); !(r = i.next()).done;) t.has(r.value) || n.add(r.value);
      return n;
    }, t.isSubset = function (t, e) {
      var r,
        n = t.values();
      if (t === e) return !0;
      if (t.size > e.size) return !1;
      for (; !(r = n.next()).done;) if (!e.has(r.value)) return !1;
      return !0;
    }, t.isSuperset = function (e, r) {
      return t.isSubset(r, e);
    }, t.add = function (t, e) {
      for (var r, n = e.values(); !(r = n.next()).done;) t.add(r.value);
    }, t.subtract = function (t, e) {
      for (var r, n = e.values(); !(r = n.next()).done;) t["delete"](r.value);
    }, t.intersect = function (t, e) {
      for (var r, n = t.values(); !(r = n.next()).done;) e.has(r.value) || t["delete"](r.value);
    }, t.disjunct = function (t, e) {
      for (var r, n = t.values(), i = []; !(r = n.next()).done;) e.has(r.value) && i.push(r.value);
      for (n = e.values(); !(r = n.next()).done;) t.has(r.value) || t.add(r.value);
      for (var o = 0, a = i.length; o < a; o++) t["delete"](i[o]);
    }, t.intersectionSize = function (t, e) {
      var r;
      if (t.size > e.size && (r = t, t = e, e = r), 0 === t.size) return 0;
      if (t === e) return t.size;
      for (var n, i = t.values(), o = 0; !(n = i.next()).done;) e.has(n.value) && o++;
      return o;
    }, t.unionSize = function (e, r) {
      var n = t.intersectionSize(e, r);
      return e.size + r.size - n;
    }, t.jaccard = function (e, r) {
      var n = t.intersectionSize(e, r);
      return 0 === n ? 0 : n / (e.size + r.size - n);
    }, t.overlap = function (e, r) {
      var n = t.intersectionSize(e, r);
      return 0 === n ? 0 : n / Math.min(e.size, r.size);
    };
  }(Su);
  var Du = i,
    Nu = Su.intersectionSize;
  function ku(t, e) {
    if (!Du(e)) throw new Error("graphology-metrics/simmelian-strength: given graph is not a valid graphology instance.");
    var r = {};
    if (e.forEachNode(function (t) {
      r[t] = new Set(e.neighbors(t));
    }), !t) {
      var n = {};
      return e.forEachEdge(function (t, e, i, o) {
        n[t] = Nu(r[i], r[o]);
      }), n;
    }
    e.updateEachEdgeAttributes(function (t, e, n, i) {
      return e.simmelianStrength = Nu(r[n], r[i]), e;
    }, {
      attributes: ["simmelianStrength"]
    });
  }
  var Cu = ku.bind(null, !1);
  Cu.assign = ku.bind(null, !0);
  var Ou = Cu;
  vu.disparity = Mu, vu.simmelianStrength = Ou;
  var Wu = {},
    ju = {},
    _u = i;
  ju.nodeExtent = function (t, e) {
    if (!_u(t)) throw new Error("graphology-metrics/extent: the given graph is not a valid graphology instance.");
    var r,
      n,
      i,
      o = [].concat(e),
      a = {};
    for (i = 0; i < o.length; i++) n = o[i], a[n] = [1 / 0, -1 / 0];
    return t.forEachNode(function (t, e) {
      for (i = 0; i < o.length; i++) n = o[i], (r = e[n]) < a[n][0] && (a[n][0] = r), r > a[n][1] && (a[n][1] = r);
    }), "string" == typeof e ? a[e] : a;
  }, ju.edgeExtent = function (t, e) {
    if (!_u(t)) throw new Error("graphology-metrics/extent: the given graph is not a valid graphology instance.");
    var r,
      n,
      i,
      o = [].concat(e),
      a = {};
    for (i = 0; i < o.length; i++) n = o[i], a[n] = [1 / 0, -1 / 0];
    return t.forEachEdge(function (t, e) {
      for (i = 0; i < o.length; i++) n = o[i], (r = e[n]) < a[n][0] && (a[n][0] = r), r > a[n][1] && (a[n][1] = r);
    }), "string" == typeof e ? a[e] : a;
  };
  var Pu = {},
    Uu = mi,
    Iu = Ps;
  function Fu() {
    this.clear();
  }
  Fu.prototype.clear = function () {
    this.items = [], this.offset = 0, this.size = 0;
  }, Fu.prototype.enqueue = function (t) {
    return this.items.push(t), ++this.size;
  }, Fu.prototype.dequeue = function () {
    if (this.size) {
      var t = this.items[this.offset];
      return 2 * ++this.offset >= this.items.length && (this.items = this.items.slice(this.offset), this.offset = 0), this.size--, t;
    }
  }, Fu.prototype.peek = function () {
    if (this.size) return this.items[this.offset];
  }, Fu.prototype.forEach = function (t, e) {
    e = arguments.length > 1 ? e : this;
    for (var r = this.offset, n = 0, i = this.items.length; r < i; r++, n++) t.call(e, this.items[r], n, this);
  }, Fu.prototype.toArray = function () {
    return this.items.slice(this.offset);
  }, Fu.prototype.values = function () {
    var t = this.items,
      e = this.offset;
    return new Uu(function () {
      if (e >= t.length) return {
        done: !0
      };
      var r = t[e];
      return e++, {
        value: r,
        done: !1
      };
    });
  }, Fu.prototype.entries = function () {
    var t = this.items,
      e = this.offset,
      r = 0;
    return new Uu(function () {
      if (e >= t.length) return {
        done: !0
      };
      var n = t[e];
      return e++, {
        value: [r++, n],
        done: !1
      };
    });
  }, "undefined" != typeof Symbol && (Fu.prototype[Symbol.iterator] = Fu.prototype.values), Fu.prototype.toString = function () {
    return this.toArray().join(",");
  }, Fu.prototype.toJSON = function () {
    return this.toArray();
  }, Fu.prototype.inspect = function () {
    var t = this.toArray();
    return Object.defineProperty(t, "constructor", {
      value: Fu,
      enumerable: !1
    }), t;
  }, "undefined" != typeof Symbol && (Fu.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = Fu.prototype.inspect), Fu.from = function (t) {
    var e = new Fu();
    return Iu(t, function (t) {
      e.enqueue(t);
    }), e;
  }, Fu.of = function () {
    return Fu.from(arguments);
  };
  var Tu = i,
    Lu = Fu,
    Ru = function Ru(t, e) {
      var r = e.length;
      if (0 !== r) {
        var n = t.length;
        t.length += r;
        for (var i = 0; i < r; i++) t[n + i] = e[i];
      }
    };
  function Gu(t, e, r) {
    if (!Tu(e)) throw new Error("graphology-shortest-path: invalid graphology instance.");
    if (!e.hasNode(r)) throw new Error('graphology-shortest-path: the "' + r + '" source node does not exist in the given graph.');
    r = "" + r;
    var n = new Set(),
      i = {},
      o = 0;
    i[r] = 0;
    for (var a, s, h, u = [r]; 0 !== u.length;) {
      var d = [];
      for (a = 0, s = u.length; a < s; a++) h = u[a], n.has(h) || (n.add(h), Ru(d, e[t](h)), i[h] = o);
      o++, u = d;
    }
    return i;
  }
  var qu = Gu.bind(null, "outboundNeighbors"),
    Bu = Gu.bind(null, "neighbors");
  Pu.bidirectional = function (t, e, r) {
    if (!Tu(t)) throw new Error("graphology-shortest-path: invalid graphology instance.");
    if (arguments.length < 3) throw new Error("graphology-shortest-path: invalid number of arguments. Expecting at least 3.");
    if (!t.hasNode(e)) throw new Error('graphology-shortest-path: the "' + e + '" source node does not exist in the given graph.');
    if (!t.hasNode(r)) throw new Error('graphology-shortest-path: the "' + r + '" target node does not exist in the given graph.');
    if ((e = "" + e) === (r = "" + r)) return [e];
    var n = t.inboundNeighbors.bind(t),
      i = t.outboundNeighbors.bind(t),
      o = {},
      a = {};
    o[e] = null, a[r] = null;
    var s,
      h,
      u,
      d,
      c,
      l,
      f,
      g,
      p = [e],
      y = [r],
      v = !1;
    t: for (; p.length && y.length;) if (p.length <= y.length) {
      for (s = p, p = [], c = 0, f = s.length; c < f; c++) for (l = 0, g = (u = i(h = s[c])).length; l < g; l++) if ((d = u[l]) in o || (p.push(d), o[d] = h), d in a) {
        v = !0;
        break t;
      }
    } else for (s = y, y = [], c = 0, f = s.length; c < f; c++) for (l = 0, g = (u = n(h = s[c])).length; l < g; l++) if ((d = u[l]) in a || (y.push(d), a[d] = h), d in o) {
      v = !0;
      break t;
    }
    if (!v) return null;
    for (var m = []; d;) m.unshift(d), d = o[d];
    for (d = a[m[m.length - 1]]; d;) m.push(d), d = a[d];
    return m.length ? m : null;
  }, Pu.singleSource = function (t, e) {
    if (!Tu(t)) throw new Error("graphology-shortest-path: invalid graphology instance.");
    if (arguments.length < 2) throw new Error("graphology-shortest-path: invalid number of arguments. Expecting at least 2.");
    if (!t.hasNode(e)) throw new Error('graphology-shortest-path: the "' + e + '" source node does not exist in the given graph.');
    var r,
      n,
      i,
      o,
      a,
      s,
      h = {},
      u = {};
    for (h[e = "" + e] = !0, u[e] = [e]; Object.keys(h).length;) for (i in r = h, h = {}, r) for (a = 0, s = (n = t.outboundNeighbors(i)).length; a < s; a++) u[o = n[a]] || (u[o] = u[i].concat(o), h[o] = !0);
    return u;
  }, Pu.singleSourceLength = qu, Pu.undirectedSingleSourceLength = Bu, Pu.brandes = function (t, e) {
    e = "" + e;
    var r,
      n,
      i,
      o,
      a,
      s,
      h,
      u,
      d,
      c = [],
      l = {},
      f = {},
      g = t.nodes();
    for (s = 0, u = g.length; s < u; s++) l[o = g[s]] = [], f[o] = 0;
    var p = {};
    f[e] = 1, p[e] = 0;
    for (var y = Lu.of(e); y.size;) for (o = y.dequeue(), c.push(o), r = p[o], n = f[o], h = 0, d = (i = t.outboundNeighbors(o)).length; h < d; h++) (a = i[h]) in p || (y.enqueue(a), p[a] = r + 1), p[a] === r + 1 && (f[a] += n, l[a].push(o));
    return [c, l, f];
  };
  var Hu = i,
    Vu = Pu.singleSourceLength,
    Yu = function Yu(t, e) {
      if (!Hu(t)) throw new Error("graphology-metrics/eccentricity: given graph is not a valid graphology instance.");
      if (0 === t.size) return 1 / 0;
      var r,
        n,
        i = -1 / 0,
        o = Vu(t, e),
        a = 0;
      for (r in o) (n = o[r]) > i && (i = n), a++;
      return a < t.order ? 1 / 0 : i;
    },
    Ku = i,
    $u = Yu,
    Xu = E,
    Ju = i,
    Qu = yi,
    Zu = Wi,
    td = {
      getNodeCommunity: "community",
      getEdgeWeight: "weight",
      resolution: 1
    };
  function ed(t, e) {
    var r,
      n,
      i,
      o,
      a,
      s,
      h = e.resolution,
      u = function (t, e) {
        var r = new Array(t.order),
          n = new Float64Array(t.order),
          i = {},
          o = 0,
          a = Zu.createEdgeWeightGetter(e.getEdgeWeight).fromEntry,
          s = Zu.createNodeValueGetter(e.getNodeCommunity).fromEntry,
          h = 0,
          u = {};
        return t.forEachNode(function (t, e) {
          u[t] = h, r[h++] = s(t, e);
        }), t.forEachUndirectedEdge(function (t, e, r, s, h, d, c) {
          var l = a(t, e, r, s, h, d, c);
          o += l, i[t] = l, n[u[r]] += l, r !== s && (n[u[s]] += l);
        }), {
          weights: i,
          communities: r,
          weightedDegrees: n,
          M: o
        };
      }(t, e),
      d = u.communities,
      c = u.weightedDegrees,
      l = u.M,
      f = t.nodes(),
      g = 0,
      p = 2 * l;
    for (r = 0, i = t.order; r < i; r++) for (n = 0; n < i; n++) d[r] === d[n] && (s = t.undirectedEdge(f[r], f[n]), o = u.weights[s] || 0, a = c[r] * c[n], g += r === n && void 0 !== s ? 2 * (o - a / p * h) : o - a / p * h);
    return g / p;
  }
  function rd(t, e) {
    var r,
      n,
      i,
      o,
      a = e.resolution,
      s = function (t, e) {
        var r = new Array(t.order),
          n = new Float64Array(t.order),
          i = new Float64Array(t.order),
          o = {},
          a = 0,
          s = Zu.createEdgeWeightGetter(e.getEdgeWeight).fromEntry,
          h = Zu.createNodeValueGetter(e.getNodeCommunity).fromEntry,
          u = 0,
          d = {};
        return t.forEachNode(function (t, e) {
          d[t] = u, r[u++] = h(t, e);
        }), t.forEachDirectedEdge(function (t, e, r, h, u, c, l) {
          var f = s(t, e, r, h, u, c, l);
          a += f, o[t] = f, i[d[r]] += f, n[d[h]] += f;
        }), {
          weights: o,
          communities: r,
          weightedInDegrees: n,
          weightedOutDegrees: i,
          M: a
        };
      }(t, e),
      h = s.communities,
      u = s.weightedInDegrees,
      d = s.weightedOutDegrees,
      c = s.M,
      l = t.nodes(),
      f = 0;
    for (r = 0, i = t.order; r < i; r++) for (n = 0; n < i; n++) h[r] === h[n] && (o = t.directedEdge(l[r], l[n]), f += (s.weights[o] || 0) - u[r] * d[n] / c * a);
    return f / c;
  }
  function nd(t, e) {
    var r = e.resolution,
      n = function (t, e) {
        var r = {},
          n = {},
          i = {},
          o = Zu.createNodeValueGetter(e.getNodeCommunity).fromEntry;
        return t.forEachNode(function (t, e) {
          var a = o(t, e);
          if (r[t] = a, void 0 === a) throw new Error('graphology-metrics/modularity: the "' + t + '" node is not in the partition.');
          n[a] = 0, i[a] = 0;
        }), {
          communities: r,
          totalWeights: n,
          internalWeights: i
        };
      }(t, e),
      i = 0,
      o = n.totalWeights,
      a = n.internalWeights,
      s = n.communities,
      h = Zu.createEdgeWeightGetter(e.getEdgeWeight).fromEntry;
    t.forEachUndirectedEdge(function (t, e, r, n, u, d, c) {
      var l = h(t, e, r, n, u, d, c);
      i += l;
      var f = s[r],
        g = s[n];
      o[f] += l, o[g] += l, f === g && (a[f] += 2 * l);
    });
    var u = 0,
      d = 2 * i;
    for (var c in a) u += a[c] / d - Math.pow(o[c] / d, 2) * r;
    return u;
  }
  function id(t, e) {
    var r = e.resolution,
      n = function (t, e) {
        var r = {},
          n = {},
          i = {},
          o = {},
          a = Zu.createNodeValueGetter(e.getNodeCommunity).fromEntry;
        return t.forEachNode(function (t, e) {
          var s = a(t, e);
          if (r[t] = s, void 0 === s) throw new Error('graphology-metrics/modularity: the "' + t + '" node is not in the partition.');
          n[s] = 0, i[s] = 0, o[s] = 0;
        }), {
          communities: r,
          totalInWeights: n,
          totalOutWeights: i,
          internalWeights: o
        };
      }(t, e),
      i = 0,
      o = n.totalInWeights,
      a = n.totalOutWeights,
      s = n.internalWeights,
      h = n.communities,
      u = Zu.createEdgeWeightGetter(e.getEdgeWeight).fromEntry;
    t.forEachDirectedEdge(function (t, e, r, n, d, c, l) {
      var f = u(t, e, r, n, d, c, l);
      i += f;
      var g = h[r],
        p = h[n];
      a[g] += f, o[p] += f, g === p && (s[g] += f);
    });
    var d = 0;
    for (var c in s) d += s[c] / i - o[c] * a[c] / Math.pow(i, 2) * r;
    return d;
  }
  function od(t, e) {
    if (!Ju(t)) throw new Error("graphology-metrics/modularity: given graph is not a valid graphology instance.");
    if (0 === t.size) throw new Error("graphology-metrics/modularity: cannot compute modularity of an empty graph.");
    if (t.multi) throw new Error("graphology-metrics/modularity: cannot compute modularity of a multi graph. Cast it to a simple one beforehand.");
    var r = Qu(t);
    if ("mixed" === r) throw new Error("graphology-metrics/modularity: cannot compute modularity of a mixed graph.");
    return e = Xu(e, td), "directed" === r ? id(t, e) : nd(t, e);
  }
  var ad = od;
  ad.sparse = od, ad.dense = function (t, e) {
    if (!Ju(t)) throw new Error("graphology-metrics/modularity: given graph is not a valid graphology instance.");
    if (0 === t.size) throw new Error("graphology-metrics/modularity: cannot compute modularity of an empty graph.");
    if (t.multi) throw new Error("graphology-metrics/modularity: cannot compute modularity of a multi graph. Cast it to a simple one beforehand.");
    var r = Qu(t);
    if ("mixed" === r) throw new Error("graphology-metrics/modularity: cannot compute modularity of a mixed graph.");
    return e = Xu(e, td), "directed" === r ? rd(t, e) : ed(t, e);
  }, ad.undirectedDelta = function (t, e, r, n) {
    return n / (2 * t) - e * r / (t * t * 2);
  }, ad.directedDelta = function (t, e, r, n, i, o) {
    return o / t - (i * e + n * r) / (t * t);
  };
  var sd = ad,
    hd = i,
    ud = Wi.createEdgeWeightGetter,
    dd = jo,
    cd = ju;
  Wu.diameter = function (t) {
    if (!Ku(t)) throw new Error("graphology-metrics/diameter: given graph is not a valid graphology instance.");
    if (0 === t.size) return 1 / 0;
    var e = -1 / 0;
    return t.someNode(function (r) {
      var n = $u(t, r);
      return n > e && (e = n), e === 1 / 0;
    }), e;
  }, Wu.modularity = sd, Wu.simpleSize = Po, Wu.weightedSize = function (t, e) {
    if (!hd(t)) throw new Error("graphology-metrics/weighted-size: the given graph is not a valid graphology instance.");
    e = ud(e || "weight").fromEntry;
    var r = 0;
    return t.forEachEdge(function (t, n, i, o, a, s, h) {
      r += e(t, n, i, o, a, s, h);
    }), r;
  }, Wu.abstractDensity = dd.abstractDensity, Wu.density = dd.density, Wu.directedDensity = dd.directedDensity, Wu.undirectedDensity = dd.undirectedDensity, Wu.mixedDensity = dd.mixedDensity, Wu.multiDirectedDensity = dd.multiDirectedDensity, Wu.multiUndirectedDensity = dd.multiUndirectedDensity, Wu.multiMixedDensity = dd.multiMixedDensity, Wu.nodeExtent = cd.nodeExtent, Wu.edgeExtent = cd.edgeExtent;
  var ld = {},
    fd = i;
  var gd = Ys,
    pd = uh,
    yd = gd.DEFAULT_COMPARATOR,
    vd = gd.reverseComparator;
  function md(t, e, r, n) {
    for (var i, o = r, a = n, s = e[n], h = 2 * n + 1; h < o;) (i = h + 1) < o && t(e[h], e[i]) >= 0 && (h = i), e[n] = e[h], h = 2 * (n = h) + 1;
    e[n] = s, pd.siftDown(t, e, a, n);
  }
  function bd(t, e, r, n) {
    for (var i, o, a = n, s = new t(n); a > 0;) i = r[--a], 0 !== a && (o = r[0], r[0] = i, md(e, r, --n, 0), i = o), s[a] = i;
    return s;
  }
  function wd(t, e, r) {
    if (2 === arguments.length && (r = e, e = null), this.ArrayClass = t, this.capacity = r, this.items = new t(r), this.clear(), this.comparator = e || yd, "number" != typeof r && r <= 0) throw new Error("mnemonist/FixedReverseHeap.constructor: capacity should be a number > 0.");
    if ("function" != typeof this.comparator) throw new Error("mnemonist/FixedReverseHeap.constructor: given comparator should be a function.");
    this.comparator = vd(this.comparator);
  }
  wd.prototype.clear = function () {
    this.size = 0;
  }, wd.prototype.push = function (t) {
    return this.size < this.capacity ? (this.items[this.size] = t, pd.siftDown(this.comparator, this.items, 0, this.size), this.size++) : this.comparator(t, this.items[0]) > 0 && pd.replace(this.comparator, this.items, t), this.size;
  }, wd.prototype.peek = function () {
    return this.items[0];
  }, wd.prototype.consume = function () {
    var t = bd(this.ArrayClass, this.comparator, this.items, this.size);
    return this.size = 0, t;
  }, wd.prototype.toArray = function () {
    return bd(this.ArrayClass, this.comparator, this.items.slice(0, this.size), this.size);
  }, wd.prototype.inspect = function () {
    var t = this.toArray();
    return Object.defineProperty(t, "constructor", {
      value: wd,
      enumerable: !1
    }), t;
  }, "undefined" != typeof Symbol && (wd.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = wd.prototype.inspect);
  var Ed = wd,
    Ad = {},
    xd = new Float64Array(64),
    zd = new Float64Array(64);
  Ad.inplaceQuickSort = function (t, e, r) {
    var n, i, o, a, s;
    for (xd[0] = e, zd[0] = r, i = 0; i >= 0;) if ((o = xd[i]) < (a = zd[i] - 1)) {
      for (n = t[o]; o < a;) {
        for (; t[a] >= n && o < a;) a--;
        for (o < a && (t[o++] = t[a]); t[o] <= n && o < a;) o++;
        o < a && (t[a--] = t[o]);
      }
      t[o] = n, xd[i + 1] = o + 1, zd[i + 1] = zd[i], zd[i++] = o, zd[i] - xd[i] > zd[i - 1] - xd[i - 1] && (s = xd[i], xd[i] = xd[i - 1], xd[i - 1] = s, s = zd[i], zd[i] = zd[i - 1], zd[i - 1] = s);
    } else i--;
    return t;
  }, Ad.inplaceQuickSortIndices = function (t, e, r, n) {
    var i, o, a, s, h, u;
    for (xd[0] = r, zd[0] = n, o = 0; o >= 0;) if ((a = xd[o]) < (s = zd[o] - 1)) {
      for (i = t[h = e[a]]; a < s;) {
        for (; t[e[s]] >= i && a < s;) s--;
        for (a < s && (e[a++] = e[s]); t[e[a]] <= i && a < s;) a++;
        a < s && (e[s--] = e[a]);
      }
      e[a] = h, xd[o + 1] = a + 1, zd[o + 1] = zd[o], zd[o++] = a, zd[o] - xd[o] > zd[o - 1] - xd[o - 1] && (u = xd[o], xd[o] = xd[o - 1], xd[o - 1] = u, u = zd[o], zd[o] = zd[o - 1], zd[o - 1] = u);
    } else o--;
    return e;
  };
  var Md = Cs,
    Sd = bi,
    Dd = Ys.createTupleComparator,
    Nd = Ed,
    kd = Ad.inplaceQuickSortIndices;
  function Cd(t, e, r, n) {
    var i,
      o,
      a = 0;
    for (i = 0; i < t; i++) a += (o = e[i][r] - n[i]) * o;
    return a;
  }
  function Od(t, e, r, n) {
    for (var i, o, a, s, h, u, d, c, l = n.length, f = Sd.getPointerArray(l + 1), g = new f(l), p = new f(l), y = new f(l), v = [[0, 0, r.length, -1, 0]], m = 0; 0 !== v.length;) c = (i = v.pop())[0], u = i[1], d = i[2], o = i[3], a = i[4], kd(e[c], r, u, d), h = r[s = u + ((l = d - u) >>> 1)], g[m] = h, o > -1 && (0 === a ? p[o] = m + 1 : y[o] = m + 1), c = (c + 1) % t, s !== u && s !== d - 1 && v.push([c, s + 1, d, m, 1]), s !== u && v.push([c, u, s, m, 0]), m++;
    return {
      axes: e,
      labels: n,
      pivots: g,
      lefts: p,
      rights: y
    };
  }
  function Wd(t, e) {
    this.dimensions = t, this.visited = 0, this.axes = e.axes, this.labels = e.labels, this.pivots = e.pivots, this.lefts = e.lefts, this.rights = e.rights, this.size = this.labels.length;
  }
  Wd.prototype.nearestNeighbor = function (t) {
    var e = 1 / 0,
      r = null,
      n = this.dimensions,
      i = this.axes,
      o = this.pivots,
      a = this.lefts,
      s = this.rights,
      h = 0;
    return function u(d, c) {
      h++;
      var l = a[c],
        f = s[c],
        g = o[c],
        p = Cd(n, i, g, t);
      if (!(p < e && (r = g, e = p, 0 === p))) {
        var y = i[d][g] - t[d];
        d = (d + 1) % n, y > 0 ? 0 !== l && u(d, l - 1) : 0 !== f && u(d, f - 1), y * y < e && (y > 0 ? 0 !== f && u(d, f - 1) : 0 !== l && u(d, l - 1));
      }
    }(0, 0), this.visited = h, this.labels[r];
  };
  var jd = Dd(3),
    _d = Dd(2);
  Wd.prototype.kNearestNeighbors = function (t, e) {
    if (t <= 0) throw new Error("mnemonist/kd-tree.kNearestNeighbors: k should be a positive number.");
    if (1 === (t = Math.min(t, this.size))) return [this.nearestNeighbor(e)];
    var r = new Nd(Array, jd, t),
      n = this.dimensions,
      i = this.axes,
      o = this.pivots,
      a = this.lefts,
      s = this.rights,
      h = 0;
    !function u(d, c) {
      var l = a[c],
        f = s[c],
        g = o[c],
        p = Cd(n, i, g, e);
      r.push([p, h++, g]);
      var y = e[d],
        v = i[d][g],
        m = y - v;
      d = (d + 1) % n, y < v ? 0 !== l && u(d, l - 1) : 0 !== f && u(d, f - 1), (m * m < r.peek()[0] || r.size < t) && (y < v ? 0 !== f && u(d, f - 1) : 0 !== l && u(d, l - 1));
    }(0, 0), this.visited = h;
    for (var u = r.consume(), d = 0; d < u.length; d++) u[d] = this.labels[u[d][2]];
    return u;
  }, Wd.prototype.linearKNearestNeighbors = function (t, e) {
    if (t <= 0) throw new Error("mnemonist/kd-tree.kNearestNeighbors: k should be a positive number.");
    t = Math.min(t, this.size);
    var r,
      n,
      i,
      o = new Nd(Array, _d, t);
    for (r = 0, n = this.size; r < n; r++) i = Cd(this.dimensions, this.axes, this.pivots[r], e), o.push([i, r]);
    var a = o.consume();
    for (r = 0; r < a.length; r++) a[r] = this.labels[this.pivots[a[r][1]]];
    return a;
  }, Wd.prototype.inspect = function () {
    var t,
      e,
      r,
      n = new Map();
    for (n.dimensions = this.dimensions, Object.defineProperty(n, "constructor", {
      value: Wd,
      enumerable: !1
    }), t = 0; t < this.size; t++) {
      for (r = new Array(this.dimensions), e = 0; e < this.dimensions; e++) r[e] = this.axes[e][t];
      n.set(this.labels[t], r);
    }
    return n;
  }, "undefined" != typeof Symbol && (Wd.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = Wd.prototype.inspect), Wd.from = function (t, e) {
    var r = function (t, e) {
      var r,
        n,
        i,
        o,
        a = e.length,
        s = new Array(t),
        h = new Array(a),
        u = new (Sd.getPointerArray(a))(a),
        d = !0;
      for (n = 0; n < t; n++) {
        for (r = new Float64Array(a), i = 0; i < a; i++) o = e[i], r[i] = o[1][n], d && (h[i] = o[0], u[i] = i);
        d = !1, s[n] = r;
      }
      return {
        axes: s,
        ids: u,
        labels: h
      };
    }(e, Md.toArray(t));
    return new Wd(e, Od(e, r.axes, r.ids, r.labels));
  }, Wd.fromAxes = function (t, e) {
    return e || (e = Sd.indices(t[0].length)), new Wd(t.length, Od(t.length, t, Sd.indices(e.length), e));
  };
  var Pd = i,
    Ud = Wd,
    Id = Su.intersectionSize,
    Fd = i,
    Td = Pu.undirectedSingleSourceLength;
  ld.edgeUniformity = function (t) {
    if (!fd(t)) throw new Error("graphology-metrics/layout-quality/edge-uniformity: given graph is not a valid graphology instance.");
    if (0 === t.size) return 0;
    var e,
      r = 0,
      n = 0,
      i = new Float64Array(t.size);
    t.forEachEdge(function (t, e, o, a, s, h) {
      var u,
        d,
        c = (u = s, d = h, Math.sqrt(Math.pow(u.x - d.x, 2) + Math.pow(u.y - d.y, 2)));
      i[n++] = c, r += c;
    });
    var o = r / t.size,
      a = 0;
    for (n = 0, e = t.size; n < e; n++) a += Math.pow(o - i[n], 2);
    var s = a / (t.size * Math.pow(o, 2));
    return Math.sqrt(s);
  }, ld.neighborhoodPreservation = function (t) {
    if (!Pd(t)) throw new Error("graphology-metrics/layout-quality/neighborhood-preservation: given graph is not a valid graphology instance.");
    if (0 === t.order) throw new Error("graphology-metrics/layout-quality/neighborhood-preservation: cannot compute stress for a null graph.");
    if (0 === t.size) return 0;
    var e = [new Float64Array(t.order), new Float64Array(t.order)],
      r = 0;
    t.forEachNode(function (t, n) {
      e[0][r] = n.x, e[1][r++] = n.y;
    });
    var n = Ud.fromAxes(e, t.nodes()),
      i = 0;
    return t.forEachNode(function (e, r) {
      var o = new Set(t.neighbors(e));
      if (0 !== o.size && o.size !== t.order - 1) {
        var a = n.kNearestNeighbors(o.size + 1, [r.x, r.y]);
        a = new Set(a.slice(1));
        var s = Id(o, a);
        i += s / a.size;
      } else i += 1;
    }), i / t.order;
  }, ld.stress = function (t) {
    if (!Fd(t)) throw new Error("graphology-metrics/layout-quality/stress: given graph is not a valid graphology instance.");
    if (0 === t.order) throw new Error("graphology-metrics/layout-quality/stress: cannot compute stress for a null graph.");
    var e,
      r,
      n,
      i,
      o,
      a,
      s,
      h = new Array(t.order),
      u = new Array(t.order),
      d = 0,
      c = 4 * t.order;
    t.forEachNode(function (t, e) {
      h[d] = t, u[d++] = e;
    });
    var l,
      f,
      g = 0;
    for (d = 0, r = t.order; d < r; d++) for (o = Td(t, h[d]), n = u[d], e = d + 1; e < r; e++) i = u[e], void 0 === (a = o[h[e]]) && (a = c), l = n, f = i, s = Math.sqrt(Math.pow(l.x - f.x, 2) + Math.pow(l.y - f.y, 2)), g += 1 / (a * a) * Math.pow(s - a, 2);
    return g;
  };
  var Ld = {},
    Rd = {},
    Gd = i;
  function qd(t, e, r, n, i) {
    if (!Gd(r)) throw new Error("graphology-metrics/" + t + ": the given graph is not a valid graphology instance.");
    i = i || "weight";
    var o = 0;
    return r[e](n, function (t, e, r, n, a, s, h) {
      var u = "function" == typeof i ? i(t, e, r, n, a, s, h) : e[i];
      ("number" != typeof u || isNaN(u)) && (u = 1), o += u;
    }), o;
  }
  Rd.weightedDegree = qd.bind(null, "weightedDegree", "forEachEdge"), Rd.weightedInDegree = qd.bind(null, "weightedInDegree", "forEachInEdge"), Rd.weightedOutDegree = qd.bind(null, "weightedOutDegree", "forEachOutEdge"), Rd.weightedInboundDegree = qd.bind(null, "weightedInboundDegree", "forEachInboundEdge"), Rd.weightedOutboundDegree = qd.bind(null, "weightedOutboundDegree", "forEachOutboundEdge"), Rd.weightedUndirectedDegree = qd.bind(null, "weightedUndirectedDegree", "forEachUndirectedEdge"), Rd.weightedDirectedDegree = qd.bind(null, "weightedDirectedDegree", "forEachDirectedEdge");
  var Bd = Rd;
  Ld.eccentricity = Yu, Ld.weightedDegree = Bd.weightedDegree, Ld.weightedInDegree = Bd.weightedInDegree, Ld.weightedOutDegree = Bd.weightedOutDegree, Ld.weightedInboundDegree = Bd.weightedInboundDegree, Ld.weightedOutboundDegree = Bd.weightedOutboundDegree, Ld.weightedUndirectedDegree = Bd.weightedUndirectedDegree, Ld.weightedDirectedDegree = Bd.weightedDirectedDegree, Es.centrality = As, Es.edge = vu, Es.graph = Wu, Es.layoutQuality = ld, Es.node = Ld;
  var Hd = Es,
    Vd = {},
    Yd = i,
    Kd = ao.copyNode,
    $d = so.copyEdge,
    Xd = i,
    Jd = so.copyEdge,
    Qd = i,
    Zd = ao.copyNode,
    tc = so.copyEdge,
    ec = i,
    rc = so.copyEdge,
    nc = i,
    ic = function ic(t) {
      if (!nc(t)) throw new Error("graphology-operators/to-mixed: expecting a valid graphology instance.");
      return t.copy({
        type: "mixed"
      });
    },
    oc = i,
    ac = function ac(t) {
      if (!oc(t)) throw new Error("graphology-operators/to-multi: expecting a valid graphology instance.");
      return t.copy({
        multi: !0
      });
    },
    sc = i,
    hc = so.copyEdge,
    uc = i,
    dc = so.copyEdge,
    cc = i;
  Vd.disjointUnion = function (t, e) {
    if (!Yd(t) || !Yd(e)) throw new Error("graphology-operators/disjoint-union: invalid graph.");
    if (t.multi !== e.multi) throw new Error("graphology-operators/disjoint-union: both graph should be simple or multi.");
    var r = t.nullCopy();
    r.mergeAttributes(t.getAttributes());
    var n = {},
      i = {},
      o = 0;
    return t.forEachNode(function (t, e) {
      n[t] = o, Kd(r, o, e), o++;
    }), e.forEachNode(function (t, e) {
      i[t] = o, Kd(r, o, e), o++;
    }), o = 0, t.forEachEdge(function (t, e, i, a, s, h, u) {
      $d(r, u, o++, n[i], n[a], a, e);
    }), e.forEachEdge(function (t, e, n, a, s, h, u) {
      $d(r, u, o++, i[n], i[a], a, e);
    }), r;
  }, Vd.reverse = function (t) {
    if (!Xd(t)) throw new Error("graphology-operators/reverse: invalid graph.");
    var e = t.emptyCopy();
    return t.forEachUndirectedEdge(function (t, r, n, i) {
      Jd(e, !0, t, n, i, r);
    }), t.forEachDirectedEdge(function (t, r, n, i) {
      Jd(e, !1, t, i, n, r);
    }), e;
  }, Vd.subgraph = function (t, e) {
    if (!Qd(t)) throw new Error("graphology-operators/subgraph: invalid graph instance.");
    var r = t.nullCopy(),
      n = e;
    if (Array.isArray(e)) {
      if (0 === e.length) return r;
      e = new Set(e);
    }
    if (e instanceof Set) {
      if (0 === e.size) return r;
      n = function n(t) {
        return e.has(t);
      };
      var i = e;
      e = new Set(), i.forEach(function (t) {
        e.add("" + t);
      });
    }
    if ("function" != typeof n) throw new Error("graphology-operators/subgraph: invalid nodes. Expecting an array or a set or a filtering function.");
    if ("function" == typeof e) {
      if (t.forEachNode(function (t, e) {
        n(t, e) && Zd(r, t, e);
      }), 0 === r.order) return r;
    } else e.forEach(function (e) {
      if (!t.hasNode(e)) throw new Error('graphology-operators/subgraph: the "' + e + '" node was not found in the graph.');
      Zd(r, e, t.getNodeAttributes(e));
    });
    return t.forEachEdge(function (t, e, i, o, a, s, h) {
      n(i, a) && (o === i || n(o, s)) && tc(r, h, t, i, o, e);
    }), r;
  }, Vd.toDirected = function (t, e) {
    if (!ec(t)) throw new Error("graphology-operators/to-directed: expecting a valid graphology instance.");
    "function" == typeof e && (e = {
      mergeEdge: e
    });
    var r = "function" == typeof (e = e || {}).mergeEdge ? e.mergeEdge : null;
    if ("directed" === t.type) return t.copy();
    var n = t.emptyCopy({
      type: "directed"
    });
    return t.forEachDirectedEdge(function (t, e, r, i) {
      rc(n, !1, t, r, i, e);
    }), t.forEachUndirectedEdge(function (e, i, o, a) {
      var s = !t.multi && "mixed" === t.type && n.edge(o, a),
        h = !t.multi && "mixed" === t.type && n.edge(a, o);
      s ? n.replaceEdgeAttributes(s, r(n.getEdgeAttributes(s), i)) : rc(n, !1, null, o, a, i), o !== a && (h ? n.replaceEdgeAttributes(h, r(n.getEdgeAttributes(h), i)) : rc(n, !1, null, a, o, i));
    }), n;
  }, Vd.toMixed = ic, Vd.toMulti = ac, Vd.toSimple = function (t, e) {
    if (!sc(t)) throw new Error("graphology-operators/to-simple: expecting a valid graphology instance.");
    "function" == typeof e && (e = {
      mergeEdge: e
    });
    var r = "function" == typeof (e = e || {}).mergeEdge ? e.mergeEdge : null;
    if (!t.multi) return t.copy();
    var n = t.emptyCopy({
      multi: !1
    });
    return t.forEachEdge(function (t, e, i, o, a, s, h) {
      var u = h ? n.undirectedEdge(i, o) : n.directedEdge(i, o);
      u ? r && n.replaceEdgeAttributes(u, r(n.getEdgeAttributes(u), e)) : hc(n, h, t, i, o, e);
    }), n;
  }, Vd.toUndirected = function (t, e) {
    if (!uc(t)) throw new Error("graphology-operators/to-undirected: expecting a valid graphology instance.");
    "function" == typeof e && (e = {
      mergeEdge: e
    });
    var r = "function" == typeof (e = e || {}).mergeEdge ? e.mergeEdge : null;
    if ("undirected" === t.type) return t.copy();
    var n = t.emptyCopy({
      type: "undirected"
    });
    return t.forEachUndirectedEdge(function (t, e, r, i) {
      dc(n, !0, t, r, i, e);
    }), t.forEachDirectedEdge(function (e, i, o, a) {
      if (!t.multi) {
        var s = n.edge(o, a);
        if (s) return void (r && n.replaceEdgeAttributes(s, r(n.getEdgeAttributes(s), i)));
      }
      dc(n, !0, null, o, a, i);
    }), n;
  }, Vd.union = function (t, e) {
    if (!cc(t) || !cc(e)) throw new Error("graphology-operators/union: invalid graph.");
    if (t.multi !== e.multi) throw new Error("graphology-operators/union: both graph should be simple or multi.");
    var r = t.copy();
    return r["import"](e, !0), r;
  };
  var lc = Vd,
    fc = {},
    gc = {},
    pc = function pc() {
      return !0;
    };
  gc.edgePathFromNodePath = function (t, e) {
    var r,
      n,
      i,
      o,
      a = e.length;
    if (a < 2) return n = e[0], (o = t.multi ? t.findEdge(n, n, pc) : t.edge(n, n)) ? [o] : [];
    a--;
    var s = new Array(a);
    for (r = 0; r < a; r++) {
      if (n = e[r], i = e[r + 1], void 0 === (o = t.multi ? t.findOutboundEdge(n, i, pc) : t.edge(n, i))) throw new Error("graphology-shortest-path: given path is impossible in given graph.");
      s[r] = o;
    }
    return s;
  };
  var yc = {},
    vc = i,
    mc = Wi.createEdgeWeightGetter,
    bc = uh,
    wc = "weight";
  function Ec(t, e) {
    return t[0] > e[0] ? 1 : t[0] < e[0] ? -1 : t[1] > e[1] ? 1 : t[1] < e[1] ? -1 : t[2] > e[2] ? 1 : t[2] < e[2] ? -1 : 0;
  }
  function Ac(t, e) {
    return t[0] > e[0] ? 1 : t[0] < e[0] ? -1 : t[1] > e[1] ? 1 : t[1] < e[1] ? -1 : t[2] > e[2] ? 1 : t[2] < e[2] ? -1 : t[3] > e[3] ? 1 : t[3] < e[3] ? -1 : 0;
  }
  yc.bidirectional = function (t, e, r, n) {
    return function (t, e, r, n) {
      if (e = "" + e, r = "" + r, !vc(t)) throw new Error("graphology-shortest-path/dijkstra: invalid graphology instance.");
      if (e && !t.hasNode(e)) throw new Error('graphology-shortest-path/dijkstra: the "' + e + '" source node does not exist in the given graph.');
      if (r && !t.hasNode(r)) throw new Error('graphology-shortest-path/dijkstra: the "' + r + '" target node does not exist in the given graph.');
      if (n = mc(n || wc).fromMinimalEntry, e === r) return [0, [e]];
      var i = [{}, {}],
        o = [{}, {}],
        a = [new bc(Ec), new bc(Ec)],
        s = [{}, {}];
      o[0][e] = [e], o[1][r] = [r], s[0][e] = 0, s[1][r] = 0;
      var h,
        u,
        d,
        c,
        l,
        f,
        g,
        p,
        y,
        v = [],
        m = 1 / 0,
        b = 0,
        w = 1;
      for (a[0].push([0, b++, e]), a[1].push([0, b++, r]); a[0].size && a[1].size;) if (c = (h = a[w = 1 - w].pop())[0], !((l = h[2]) in i[w])) {
        if (i[w][l] = c, l in i[1 - w]) return [m, v];
        for (p = 0, y = (u = 1 === w ? t.inboundEdges(l) : t.outboundEdges(l)).length; p < y; p++) {
          if (g = u[p], f = t.opposite(l, g), d = i[w][l] + n(g, t.getEdgeAttributes(g)), f in i[w] && d < i[w][f]) throw Error("graphology-shortest-path/dijkstra: contradictory paths found. Do some of your edges have a negative weight?");
          (!(f in s[w]) || d < s[w][f]) && (s[w][f] = d, a[w].push([d, b++, f]), o[w][f] = o[w][l].concat(f), f in s[0] && f in s[1] && (c = s[0][f] + s[1][f], (0 === v.length || m > c) && (m = c, v = o[0][f].concat(o[1][f].slice(0, -1).reverse()))));
        }
      }
      return [1 / 0, null];
    }(t, e, r, n)[1];
  }, yc.singleSource = function (t, e, r) {
    var n = {};
    return function (t, e, r, n, i, o) {
      if (!vc(t)) throw new Error("graphology-shortest-path/dijkstra: invalid graphology instance.");
      if (i && !t.hasNode(i)) throw new Error('graphology-shortest-path/dijkstra: the "' + i + '" target node does not exist in the given graph.');
      r = mc(r || wc).fromMinimalEntry;
      var a,
        s,
        h,
        u,
        d,
        c,
        l,
        f,
        g,
        p,
        y,
        v = {},
        m = {},
        b = new bc(Ec),
        w = 0;
      for (f = 0, p = e.length; f < p; f++) m[u = e[f]] = 0, b.push([0, w++, u]), o && (o[u] = [u]);
      for (; b.size;) if (l = (s = b.pop())[0], !((u = s[2]) in v)) {
        if (v[u] = l, u === i) break;
        for (g = 0, y = (a = t.outboundEdges(u)).length; g < y; g++) if (c = a[g], d = t.opposite(u, c), h = r(c, t.getEdgeAttributes(c)) + v[u], !(n && h > n)) {
          if (d in v && h < v[d]) throw Error("graphology-shortest-path/dijkstra: contradictory paths found. Do some of your edges have a negative weight?");
          (!(d in m) || h < m[d]) && (m[d] = h, b.push([h, w++, d]), o && (o[d] = o[u].concat(d)));
        }
      }
    }(t, [e], r, 0, null, n), n;
  }, yc.brandes = function (t, e, r) {
    e = "" + e, r = mc(r || wc).fromMinimalEntry;
    var n,
      i,
      o,
      a,
      s,
      h,
      u,
      d,
      c,
      l,
      f = [],
      g = {},
      p = {},
      y = t.nodes();
    for (c = 0, l = y.length; c < l; c++) g[h = y[c]] = [], p[h] = 0;
    var v = {};
    p[e] = 1;
    var m = {};
    m[e] = 0;
    var b = 0,
      w = new bc(Ac);
    for (w.push([0, b++, e, e]); w.size;) if (a = (i = w.pop())[0], o = i[2], !((h = i[3]) in v)) for (p[h] += p[o], f.push(h), v[h] = a, c = 0, l = (n = t.outboundEdges(h)).length; c < l; c++) d = n[c], u = t.opposite(h, d), s = a + r(d, t.getEdgeAttributes(d)), u in v || u in m && !(s < m[u]) ? s === m[u] && (p[u] += p[h], g[u].push(h)) : (m[u] = s, w.push([s, b++, h, u]), p[u] = 0, g[u] = [h]);
    return [f, g, p];
  };
  var xc = Pu,
    zc = gc;
  fc.unweighted = xc, fc.dijkstra = yc, fc.bidirectional = xc.bidirectional, fc.singleSource = xc.singleSource, fc.singleSourceLength = xc.singleSourceLength, fc.undirectedSingleSourceLength = xc.undirectedSingleSourceLength, fc.brandes = xc.brandes, fc.edgePathFromNodePath = zc.edgePathFromNodePath;
  var Mc = fc,
    Sc = {},
    Dc = function Dc(t) {
      return null !== t && "object" == typeof t && "function" == typeof t.addUndirectedEdgeWithKey && "function" == typeof t.dropNode && "boolean" == typeof t.multi;
    };
  function Nc() {
    this.set = new Set(), this.stack = [];
  }
  function kc() {
    this.set = new Set(), this.stack = [];
  }
  function Cc(t, e) {
    var r = [];
    return t.forEachOutboundEdge(e, function (t, n, i, o) {
      r.push([t, e === i ? o : i]);
    }), r;
  }
  function Oc(t, e) {
    var r,
      n = {};
    t.forEachOutboundEdge(e, function (t, i, o, a) {
      (r = e === o ? a : o) in n || (n[r] = []), n[r].push(t);
    });
    var i = [];
    for (r in n) i.push([n[r], r]);
    return i;
  }
  Nc.prototype.has = function (t) {
    return this.set.has(t);
  }, Nc.prototype.push = function (t) {
    this.stack.push(t), this.set.add(t);
  }, Nc.prototype.pop = function () {
    this.set["delete"](this.stack.pop());
  }, Nc.prototype.path = function (t) {
    return this.stack.concat(t);
  }, Nc.of = function (t, e) {
    var r = new Nc();
    return e ? r.stack.push(t) : r.push(t), r;
  }, kc.prototype.has = function (t) {
    return this.set.has(t);
  }, kc.prototype.push = function (t) {
    this.stack.push(t), this.set.add(t[1]);
  }, kc.prototype.pop = function () {
    this.set["delete"](this.stack.pop()[1]);
  }, kc.prototype.path = function (t) {
    return this.stack.slice(1).map(function (t) {
      return t[0];
    }).concat([t[0]]);
  }, kc.of = function (t, e) {
    var r = new kc(),
      n = [null, t];
    return e ? r.stack.push(n) : r.push(n), r;
  }, Sc.allSimplePaths = function (t, e, r, n) {
    if (!Dc(t)) throw new Error("graphology-simple-path.allSimplePaths: expecting a graphology instance.");
    if (!t.hasNode(e)) throw new Error('graphology-simple-path.allSimplePaths: expecting: could not find source node "' + e + '" in the graph.');
    if (!t.hasNode(r)) throw new Error('graphology-simple-path.allSimplePaths: expecting: could not find target node "' + r + '" in the graph.');
    for (var i, o, a = "number" == typeof (n = n || {}).maxDepth ? n.maxDepth : 1 / 0, s = (e = "" + e) === (r = "" + r), h = [t.outboundNeighbors(e)], u = Nc.of(e, s), d = []; 0 !== h.length;) if (o = h[h.length - 1].pop()) {
      if (u.has(o)) continue;
      o === r && (i = u.path(o), d.push(i)), u.push(o), !u.has(r) && h.length < a ? h.push(t.outboundNeighbors(o)) : u.pop();
    } else h.pop(), u.pop();
    return d;
  }, Sc.allSimpleEdgePaths = function (t, e, r, n) {
    if (!Dc(t)) throw new Error("graphology-simple-path.allSimpleEdgePaths: expecting a graphology instance.");
    if (t.multi) throw new Error("graphology-simple-path.allSimpleEdgePaths: not implemented for multi graphs.");
    if (!t.hasNode(e)) throw new Error('graphology-simple-path.allSimpleEdgePaths: expecting: could not find source node "' + e + '" in the graph.');
    if (!t.hasNode(r)) throw new Error('graphology-simple-path.allSimpleEdgePaths: expecting: could not find target node "' + r + '" in the graph.');
    for (var i, o, a, s = "number" == typeof (n = n || {}).maxDepth ? n.maxDepth : 1 / 0, h = (e = "" + e) === (r = "" + r), u = [Cc(t, e)], d = kc.of(e, h), c = []; 0 !== u.length;) if (o = u[u.length - 1].pop()) {
      if (a = o[1], d.has(a)) continue;
      a === r && (i = d.path(o), c.push(i)), d.push(o), !d.has(r) && u.length < s ? u.push(Cc(t, a)) : d.pop();
    } else u.pop(), d.pop();
    return c;
  }, Sc.allSimpleEdgeGroupPaths = function (t, e, r, n) {
    if (!Dc(t)) throw new Error("graphology-simple-path.allSimpleEdgeGroupPaths: expecting a graphology instance.");
    if (!t.hasNode(e)) throw new Error('graphology-simple-path.allSimpleEdgeGroupPaths: expecting: could not find source node "' + e + '" in the graph.');
    if (!t.hasNode(r)) throw new Error('graphology-simple-path.allSimpleEdgeGroupPaths: expecting: could not find target node "' + r + '" in the graph.');
    for (var i, o, a, s = "number" == typeof (n = n || {}).maxDepth ? n.maxDepth : 1 / 0, h = (e = "" + e) === (r = "" + r), u = [Oc(t, e)], d = kc.of(e, h), c = []; 0 !== u.length;) if (o = u[u.length - 1].pop()) {
      if (a = o[1], d.has(a)) continue;
      a === r && (i = d.path(o), c.push(i)), d.push(o), !d.has(r) && u.length < s ? u.push(Oc(t, a)) : d.pop();
    } else u.pop(), d.pop();
    return c;
  };
  var Wc = Sc,
    jc = {},
    _c = {},
    Pc = Gs;
  function Uc(t) {
    this.graph = t, this.queue = new Pc(Array, t.order), this.seen = new Set(), this.size = 0;
  }
  Uc.prototype.hasAlreadySeenEverything = function () {
    return this.seen.size === this.graph.order;
  }, Uc.prototype.countUnseenNodes = function () {
    return this.graph.order - this.seen.size;
  }, Uc.prototype.forEachNodeYetUnseen = function (t) {
    var e = this.seen,
      r = this.graph;
    r.someNode(function (n, i) {
      return e.size === r.order || !e.has(n) && !!t(n, i);
    });
  }, Uc.prototype.has = function (t) {
    return this.seen.has(t);
  }, Uc.prototype.push = function (t) {
    var e = this.seen.size;
    return this.seen.add(t), e !== this.seen.size && (this.queue.push(t), this.size++, !0);
  }, Uc.prototype.pushWith = function (t, e) {
    var r = this.seen.size;
    return this.seen.add(t), r !== this.seen.size && (this.queue.push(e), this.size++, !0);
  }, Uc.prototype.shift = function () {
    var t = this.queue.shift();
    return this.size = this.queue.size, t;
  };
  var Ic = Uc,
    Fc = {};
  Fc.TraversalRecord = function (t, e, r) {
    this.node = t, this.attributes = e, this.depth = r;
  }, Fc.capitalize = function (t) {
    return t[0].toUpperCase() + t.slice(1);
  };
  var Tc = i,
    Lc = Ic,
    Rc = Fc,
    Gc = Rc.TraversalRecord,
    qc = Rc.capitalize;
  function Bc(t, e, r, n) {
    if (n = n || {}, !Tc(t)) throw new Error("graphology-traversal/bfs: expecting a graphology instance.");
    if ("function" != typeof r) throw new Error("graphology-traversal/bfs: given callback is not a function.");
    if (0 !== t.order) {
      var i,
        o,
        a = new Lc(t),
        s = t["forEach" + qc(n.mode || "outbound") + "Neighbor"].bind(t);
      i = null === e ? a.forEachNodeYetUnseen.bind(a) : function (r) {
        r(e = "" + e, t.getNodeAttributes(e));
      }, i(function (t, e) {
        for (a.pushWith(t, new Gc(t, e, 0)); 0 !== a.size;) o = a.shift(), !0 !== r(o.node, o.attributes, o.depth) && s(o.node, h);
      });
    }
    function h(t, e) {
      a.pushWith(t, new Gc(t, e, o.depth + 1));
    }
  }
  _c.bfs = function (t, e, r) {
    return Bc(t, null, e, r);
  }, _c.bfsFromNode = Bc;
  var Hc = {},
    Vc = i,
    Yc = uo,
    Kc = Fc,
    $c = Kc.TraversalRecord,
    Xc = Kc.capitalize;
  function Jc(t, e, r, n) {
    if (n = n || {}, !Vc(t)) throw new Error("graphology-traversal/dfs: expecting a graphology instance.");
    if ("function" != typeof r) throw new Error("graphology-traversal/dfs: given callback is not a function.");
    if (0 !== t.order) {
      var i,
        o,
        a = new Yc(t),
        s = t["forEach" + Xc(n.mode || "outbound") + "Neighbor"].bind(t);
      i = null === e ? a.forEachNodeYetUnseen.bind(a) : function (r) {
        r(e = "" + e, t.getNodeAttributes(e));
      }, i(function (t, e) {
        for (a.pushWith(t, new $c(t, e, 0)); 0 !== a.size;) o = a.pop(), !0 !== r(o.node, o.attributes, o.depth) && s(o.node, h);
      });
    }
    function h(t, e) {
      a.pushWith(t, new $c(t, e, o.depth + 1));
    }
  }
  Hc.dfs = function (t, e, r) {
    return Jc(t, null, e, r);
  }, Hc.dfsFromNode = Jc;
  var Qc = _c,
    Zc = Hc;
  jc.bfs = Qc.bfs, jc.bfsFromNode = Qc.bfsFromNode, jc.dfs = Zc.dfs, jc.dfsFromNode = Zc.dfsFromNode;
  var tl = jc,
    el = {},
    rl = i,
    nl = so.copyEdge,
    il = so.copyEdge;
  el.inferMulti = function (t) {
    if (!rl(t)) throw new Error("graphology-utils/infer-multi: expecting a valid graphology instance.");
    if (!t.multi || 0 === t.order || t.size < 2) return !1;
    var e,
      r,
      n,
      i,
      o = !1;
    return t.forEachAssymetricAdjacencyEntry(function (t, a, s, h, u, d, c) {
      o || (c && t > a && (i = a, a = t, t = i), t !== e || a !== r || c !== n ? (e = t, r = a, n = c) : o = !0);
    }), o;
  }, el.inferType = yi, el.isGraph = i, el.isGraphConstructor = o, el.mergeClique = function (t, e) {
    var r, n, i, o, a;
    if (0 !== e.length) for (i = 0, a = e.length; i < a; i++) for (r = e[i], o = i + 1; o < a; o++) n = e[o], t.mergeEdge(r, n);
  }, el.mergeCycle = function (t, e) {
    var r, n, i, o;
    if (0 !== e.length && (t.mergeNode(e[0]), 1 !== e.length)) {
      for (i = 1, o = e.length; i < o; i++) r = e[i - 1], n = e[i], t.mergeEdge(r, n);
      t.mergeEdge(n, e[0]);
    }
  }, el.mergePath = function (t, e) {
    var r, n, i, o;
    if (0 !== e.length) for (t.mergeNode(e[0]), i = 1, o = e.length; i < o; i++) r = e[i - 1], n = e[i], t.mergeEdge(r, n);
  }, el.mergeStar = Ko, el.renameGraphKeys = function (t, e, r) {
    void 0 === e && (e = {}), void 0 === r && (r = {});
    var n,
      i,
      o = t.nullCopy();
    return t.forEachNode(function (t, r) {
      var n = e[t];
      void 0 === n && (n = t), o.addNode(n, r);
    }), t.forEachAssymetricAdjacencyEntry(function (t, a, s, h, u, d, c) {
      t !== n && (n = t, void 0 === (i = e[t]) && (i = t));
      var l = e[a];
      void 0 === l && (l = a);
      var f = r[u];
      void 0 === f && (f = u), nl(o, c, f, i, l, d);
    }), o;
  }, el.updateGraphKeys = function (t, e, r) {
    var n,
      i,
      o = t.nullCopy();
    return t.forEachNode(function (t, r) {
      var n = e ? e(t, r) : t;
      o.addNode(n, r);
    }), t.forEachAssymetricAdjacencyEntry(function (t, a, s, h, u, d, c) {
      t !== n && (n = t, i = e ? e(t, s) : t);
      var l = e ? e(a, h) : a,
        f = r ? r(u, d, t, a, s, h, c) : u;
      il(o, c, f, i, l, d);
    }), o;
  };
  var ol = el;
  var al = Wi.createNodeValueGetter,
    sl = Wi.createEdgeValueGetter;
  var hl = {
    assignLayoutChanges: function assignLayoutChanges(t, e, r) {
      var n = r.nodeXAttribute,
        i = r.nodeYAttribute;
      t.updateEachNodeAttributes(function (t, r) {
        var o = e[t];
        return !o || o.fixed || (r[n] = o.x, r[i] = o.y), r;
      }, {
        attributes: ["x", "y"]
      });
    },
    collectLayoutChanges: function collectLayoutChanges(t) {
      var e = {};
      for (var _r2 in t) {
        var _n2 = t[_r2];
        e[_r2] = {
          x: _n2.x,
          y: _n2.y
        };
      }
      return e;
    }
  };
  var ul = i,
    dl = E,
    cl = function cl(t, e, r) {
      var n = r.nodeXAttribute,
        i = r.nodeYAttribute,
        _r$settings = r.settings,
        o = _r$settings.attraction,
        a = _r$settings.repulsion,
        s = _r$settings.gravity,
        h = _r$settings.inertia,
        u = _r$settings.maxMove;
      var d = r.shouldSkipNode,
        c = r.shouldSkipEdge,
        l = r.isNodeFixed;
      l = al(l), d = al(d, !1), c = sl(c, !1);
      var f = t.filterNodes(function (t, e) {
          return !d.fromEntry(t, e);
        }),
        g = f.length;
      for (var _r3 = 0; _r3 < g; _r3++) {
        var _o2 = f[_r3],
          _a2 = t.getNodeAttributes(_o2),
          _s2 = e[_o2];
        e[_o2] = _s2 ? {
          dx: _s2.dx * h,
          dy: _s2.dy * h,
          x: _a2[n] || 0,
          y: _a2[i] || 0
        } : {
          dx: 0,
          dy: 0,
          x: _a2[n] || 0,
          y: _a2[i] || 0
        };
      }
      if (a) for (var _t2 = 0; _t2 < g; _t2++) {
        var _r4 = f[_t2],
          _n3 = e[_r4];
        for (var _r5 = _t2 + 1; _r5 < g; _r5++) {
          var _t3 = f[_r5],
            _i2 = e[_t3],
            _o3 = _i2.x - _n3.x,
            _s3 = _i2.y - _n3.y,
            _h2 = Math.sqrt(_o3 * _o3 + _s3 * _s3) || 1,
            _u2 = a / _h2 * _o3,
            _d2 = a / _h2 * _s3;
          _n3.dx -= _u2, _n3.dy -= _d2, _i2.dx += _u2, _i2.dy += _d2;
        }
      }
      if (o && t.forEachEdge(function (t, r, n, i, a, s, h) {
        if (n === i) return;
        if (d.fromEntry(n, a) || d.fromEntry(i, s)) return;
        if (c.fromEntry(t, r, n, i, a, s, h)) return;
        var u = e[n],
          l = e[i],
          f = l.x - u.x,
          g = l.y - u.y,
          p = Math.sqrt(f * f + g * g) || 1,
          y = o * p * f,
          v = o * p * g;
        u.dx += y, u.dy += v, l.dx -= y, l.dy -= v;
      }), s) for (var _t4 = 0; _t4 < g; _t4++) {
        var _r6 = f[_t4],
          _n4 = e[_r6],
          _i3 = _n4.x,
          _o4 = _n4.y,
          _a3 = Math.sqrt(_i3 * _i3 + _o4 * _o4) || 1;
        e[_r6].dx -= _i3 * s * _a3, e[_r6].dy -= _o4 * s * _a3;
      }
      for (var _r7 = 0; _r7 < g; _r7++) {
        var _n5 = f[_r7],
          _i4 = e[_n5],
          _o5 = Math.sqrt(_i4.dx * _i4.dx + _i4.dy * _i4.dy);
        _o5 > u && (_i4.dx *= u / _o5, _i4.dy *= u / _o5), l.fromGraph(t, _n5) ? _i4.fixed = !0 : (_i4.x += _i4.dx, _i4.y += _i4.dy, _i4.fixed = !1);
      }
      return {
        converged: !1
      };
    },
    ll = hl,
    fl = {
      nodeXAttribute: "x",
      nodeYAttribute: "y",
      isNodeFixed: "fixed",
      shouldSkipNode: null,
      shouldSkipEdge: null,
      settings: {
        attraction: 5e-4,
        repulsion: .1,
        gravity: 1e-4,
        inertia: .6,
        maxMove: 200
      }
    };
  function gl(t, e) {
    if (!ul(t)) throw new Error("graphology-layout-force/worker: the given graph is not a valid graphology instance.");
    e = dl(e, fl), this.callbacks = {}, e.onConverged && (this.callbacks.onConverged = e.onConverged), this.graph = t, this.params = e, this.nodeStates = {}, this.frameID = null, this.running = !1, this.killed = !1;
  }
  gl.prototype.isRunning = function () {
    return this.running;
  }, gl.prototype.runFrame = function () {
    var _this = this;
    var _cl = cl(this.graph, this.nodeStates, this.params),
      t = _cl.converged;
    ll.assignLayoutChanges(this.graph, this.nodeStates, this.params), t = !1, t ? (this.callbacks.onConverged && this.callbacks.onConverged(), this.stop()) : this.frameID = window.requestAnimationFrame(function () {
      return _this.runFrame();
    });
  }, gl.prototype.stop = function () {
    return this.running = !1, null !== this.frameID && (window.cancelAnimationFrame(this.frameID), this.frameID = null), this;
  }, gl.prototype.start = function () {
    if (this.killed) throw new Error("graphology-layout-force/worker.start: layout was killed.");
    this.running || (this.running = !0, this.runFrame());
  }, gl.prototype.kill = function () {
    this.stop(), delete this.nodeStates, this.killed = !0;
  };
  var pl = gl,
    yl = function yl() {
      var t,
        e,
        r = {};
      !function () {
        var t = 10;
        r.exports = function (e, r, n) {
          var i,
            o,
            a,
            s,
            h,
            u,
            d,
            c,
            l,
            f,
            g,
            p,
            y,
            v,
            m,
            b,
            w,
            E,
            A,
            x,
            z,
            M,
            S,
            D = r.length,
            N = n.length,
            k = e.adjustSizes,
            C = e.barnesHutTheta * e.barnesHutTheta,
            O = [];
          for (a = 0; a < D; a += t) r[a + 4] = r[a + 2], r[a + 5] = r[a + 3], r[a + 2] = 0, r[a + 3] = 0;
          if (e.outboundAttractionDistribution) {
            for (g = 0, a = 0; a < D; a += t) g += r[a + 6];
            g /= D / t;
          }
          if (e.barnesHutOptimize) {
            var W,
              j,
              _,
              P = 1 / 0,
              U = -1 / 0,
              I = 1 / 0,
              F = -1 / 0;
            for (a = 0; a < D; a += t) P = Math.min(P, r[a + 0]), U = Math.max(U, r[a + 0]), I = Math.min(I, r[a + 1]), F = Math.max(F, r[a + 1]);
            var T = U - P,
              L = F - I;
            for (T > L ? F = (I -= (T - L) / 2) + T : U = (P -= (L - T) / 2) + L, O[0] = -1, O[1] = (P + U) / 2, O[2] = (I + F) / 2, O[3] = Math.max(U - P, F - I), O[4] = -1, O[5] = -1, O[6] = 0, O[7] = 0, O[8] = 0, i = 1, a = 0; a < D; a += t) for (o = 0, _ = 3;;) {
              if (!(O[o + 5] >= 0)) {
                if (O[o + 0] < 0) {
                  O[o + 0] = a;
                  break;
                }
                if (O[o + 5] = 9 * i, c = O[o + 3] / 2, O[(l = O[o + 5]) + 0] = -1, O[l + 1] = O[o + 1] - c, O[l + 2] = O[o + 2] - c, O[l + 3] = c, O[l + 4] = l + 9, O[l + 5] = -1, O[l + 6] = 0, O[l + 7] = 0, O[l + 8] = 0, O[(l += 9) + 0] = -1, O[l + 1] = O[o + 1] - c, O[l + 2] = O[o + 2] + c, O[l + 3] = c, O[l + 4] = l + 9, O[l + 5] = -1, O[l + 6] = 0, O[l + 7] = 0, O[l + 8] = 0, O[(l += 9) + 0] = -1, O[l + 1] = O[o + 1] + c, O[l + 2] = O[o + 2] - c, O[l + 3] = c, O[l + 4] = l + 9, O[l + 5] = -1, O[l + 6] = 0, O[l + 7] = 0, O[l + 8] = 0, O[(l += 9) + 0] = -1, O[l + 1] = O[o + 1] + c, O[l + 2] = O[o + 2] + c, O[l + 3] = c, O[l + 4] = O[o + 4], O[l + 5] = -1, O[l + 6] = 0, O[l + 7] = 0, O[l + 8] = 0, i += 4, W = r[O[o + 0] + 0] < O[o + 1] ? r[O[o + 0] + 1] < O[o + 2] ? O[o + 5] : O[o + 5] + 9 : r[O[o + 0] + 1] < O[o + 2] ? O[o + 5] + 18 : O[o + 5] + 27, O[o + 6] = r[O[o + 0] + 6], O[o + 7] = r[O[o + 0] + 0], O[o + 8] = r[O[o + 0] + 1], O[W + 0] = O[o + 0], O[o + 0] = -1, W === (j = r[a + 0] < O[o + 1] ? r[a + 1] < O[o + 2] ? O[o + 5] : O[o + 5] + 9 : r[a + 1] < O[o + 2] ? O[o + 5] + 18 : O[o + 5] + 27)) {
                  if (_--) {
                    o = W;
                    continue;
                  }
                  _ = 3;
                  break;
                }
                O[j + 0] = a;
                break;
              }
              W = r[a + 0] < O[o + 1] ? r[a + 1] < O[o + 2] ? O[o + 5] : O[o + 5] + 9 : r[a + 1] < O[o + 2] ? O[o + 5] + 18 : O[o + 5] + 27, O[o + 7] = (O[o + 7] * O[o + 6] + r[a + 0] * r[a + 6]) / (O[o + 6] + r[a + 6]), O[o + 8] = (O[o + 8] * O[o + 6] + r[a + 1] * r[a + 6]) / (O[o + 6] + r[a + 6]), O[o + 6] += r[a + 6], o = W;
            }
          }
          if (e.barnesHutOptimize) {
            for (p = e.scalingRatio, a = 0; a < D; a += t) for (o = 0;;) if (O[o + 5] >= 0) {
              if (b = Math.pow(r[a + 0] - O[o + 7], 2) + Math.pow(r[a + 1] - O[o + 8], 2), 4 * (f = O[o + 3]) * f / b < C) {
                if (y = r[a + 0] - O[o + 7], v = r[a + 1] - O[o + 8], !0 === k ? b > 0 ? (w = p * r[a + 6] * O[o + 6] / b, r[a + 2] += y * w, r[a + 3] += v * w) : b < 0 && (w = -p * r[a + 6] * O[o + 6] / Math.sqrt(b), r[a + 2] += y * w, r[a + 3] += v * w) : b > 0 && (w = p * r[a + 6] * O[o + 6] / b, r[a + 2] += y * w, r[a + 3] += v * w), (o = O[o + 4]) < 0) break;
                continue;
              }
              o = O[o + 5];
            } else if ((u = O[o + 0]) >= 0 && u !== a && (b = (y = r[a + 0] - r[u + 0]) * y + (v = r[a + 1] - r[u + 1]) * v, !0 === k ? b > 0 ? (w = p * r[a + 6] * r[u + 6] / b, r[a + 2] += y * w, r[a + 3] += v * w) : b < 0 && (w = -p * r[a + 6] * r[u + 6] / Math.sqrt(b), r[a + 2] += y * w, r[a + 3] += v * w) : b > 0 && (w = p * r[a + 6] * r[u + 6] / b, r[a + 2] += y * w, r[a + 3] += v * w)), (o = O[o + 4]) < 0) break;
          } else for (p = e.scalingRatio, s = 0; s < D; s += t) for (h = 0; h < s; h += t) y = r[s + 0] - r[h + 0], v = r[s + 1] - r[h + 1], !0 === k ? (b = Math.sqrt(y * y + v * v) - r[s + 8] - r[h + 8]) > 0 ? (w = p * r[s + 6] * r[h + 6] / b / b, r[s + 2] += y * w, r[s + 3] += v * w, r[h + 2] -= y * w, r[h + 3] -= v * w) : b < 0 && (w = 100 * p * r[s + 6] * r[h + 6], r[s + 2] += y * w, r[s + 3] += v * w, r[h + 2] -= y * w, r[h + 3] -= v * w) : (b = Math.sqrt(y * y + v * v)) > 0 && (w = p * r[s + 6] * r[h + 6] / b / b, r[s + 2] += y * w, r[s + 3] += v * w, r[h + 2] -= y * w, r[h + 3] -= v * w);
          for (l = e.gravity / e.scalingRatio, p = e.scalingRatio, a = 0; a < D; a += t) w = 0, y = r[a + 0], v = r[a + 1], b = Math.sqrt(Math.pow(y, 2) + Math.pow(v, 2)), e.strongGravityMode ? b > 0 && (w = p * r[a + 6] * l) : b > 0 && (w = p * r[a + 6] * l / b), r[a + 2] -= y * w, r[a + 3] -= v * w;
          for (p = 1 * (e.outboundAttractionDistribution ? g : 1), d = 0; d < N; d += 3) s = n[d + 0], h = n[d + 1], c = n[d + 2], m = Math.pow(c, e.edgeWeightInfluence), y = r[s + 0] - r[h + 0], v = r[s + 1] - r[h + 1], !0 === k ? (b = Math.sqrt(y * y + v * v) - r[s + 8] - r[h + 8], e.linLogMode ? e.outboundAttractionDistribution ? b > 0 && (w = -p * m * Math.log(1 + b) / b / r[s + 6]) : b > 0 && (w = -p * m * Math.log(1 + b) / b) : e.outboundAttractionDistribution ? b > 0 && (w = -p * m / r[s + 6]) : b > 0 && (w = -p * m)) : (b = Math.sqrt(Math.pow(y, 2) + Math.pow(v, 2)), e.linLogMode ? e.outboundAttractionDistribution ? b > 0 && (w = -p * m * Math.log(1 + b) / b / r[s + 6]) : b > 0 && (w = -p * m * Math.log(1 + b) / b) : e.outboundAttractionDistribution ? (b = 1, w = -p * m / r[s + 6]) : (b = 1, w = -p * m)), b > 0 && (r[s + 2] += y * w, r[s + 3] += v * w, r[h + 2] -= y * w, r[h + 3] -= v * w);
          if (!0 === k) for (a = 0; a < D; a += t) 1 !== r[a + 9] && ((E = Math.sqrt(Math.pow(r[a + 2], 2) + Math.pow(r[a + 3], 2))) > 10 && (r[a + 2] = 10 * r[a + 2] / E, r[a + 3] = 10 * r[a + 3] / E), A = r[a + 6] * Math.sqrt((r[a + 4] - r[a + 2]) * (r[a + 4] - r[a + 2]) + (r[a + 5] - r[a + 3]) * (r[a + 5] - r[a + 3])), x = Math.sqrt((r[a + 4] + r[a + 2]) * (r[a + 4] + r[a + 2]) + (r[a + 5] + r[a + 3]) * (r[a + 5] + r[a + 3])) / 2, z = .1 * Math.log(1 + x) / (1 + Math.sqrt(A)), M = r[a + 0] + r[a + 2] * (z / e.slowDown), r[a + 0] = M, S = r[a + 1] + r[a + 3] * (z / e.slowDown), r[a + 1] = S);else for (a = 0; a < D; a += t) 1 !== r[a + 9] && (A = r[a + 6] * Math.sqrt((r[a + 4] - r[a + 2]) * (r[a + 4] - r[a + 2]) + (r[a + 5] - r[a + 3]) * (r[a + 5] - r[a + 3])), x = Math.sqrt((r[a + 4] + r[a + 2]) * (r[a + 4] + r[a + 2]) + (r[a + 5] + r[a + 3]) * (r[a + 5] + r[a + 3])) / 2, z = r[a + 7] * Math.log(1 + x) / (1 + Math.sqrt(A)), r[a + 7] = Math.min(1, Math.sqrt(z * (Math.pow(r[a + 2], 2) + Math.pow(r[a + 3], 2)) / (1 + Math.sqrt(A)))), M = r[a + 0] + r[a + 2] * (z / e.slowDown), r[a + 0] = M, S = r[a + 1] + r[a + 3] * (z / e.slowDown), r[a + 1] = S);
          return {};
        };
      }();
      var n = r.exports;
      self.addEventListener("message", function (r) {
        var i = r.data;
        t = new Float32Array(i.nodes), i.edges && (e = new Float32Array(i.edges)), n(i.settings, t, e), self.postMessage({
          nodes: t.buffer
        }, [t.buffer]);
      });
    },
    vl = i,
    ml = Wi.createEdgeWeightGetter,
    bl = es,
    wl = rs;
  function El(t, e) {
    if (e = e || {}, !vl(t)) throw new Error("graphology-layout-forceatlas2/worker: the given graph is not a valid graphology instance.");
    var r = ml("getEdgeWeight" in e ? e.getEdgeWeight : "weight").fromEntry,
      n = bl.assign({}, wl, e.settings),
      i = bl.validateSettings(n);
    if (i) throw new Error("graphology-layout-forceatlas2/worker: " + i.message);
    this.worker = null, this.graph = t, this.settings = n, this.getEdgeWeight = r, this.matrices = null, this.running = !1, this.killed = !1, this.outputReducer = "function" == typeof e.outputReducer ? e.outputReducer : null, this.handleMessage = this.handleMessage.bind(this);
    var o = void 0,
      a = this;
    this.handleGraphUpdate = function () {
      a.worker && a.worker.terminate(), o && clearTimeout(o), o = setTimeout(function () {
        o = void 0, a.spawnWorker();
      }, 0);
    }, t.on("nodeAdded", this.handleGraphUpdate), t.on("edgeAdded", this.handleGraphUpdate), t.on("nodeDropped", this.handleGraphUpdate), t.on("edgeDropped", this.handleGraphUpdate), this.spawnWorker();
  }
  El.prototype.isRunning = function () {
    return this.running;
  }, El.prototype.spawnWorker = function () {
    this.worker && this.worker.terminate(), this.worker = bl.createWorker(yl), this.worker.addEventListener("message", this.handleMessage), this.running && (this.running = !1, this.start());
  }, El.prototype.handleMessage = function (t) {
    if (this.running) {
      var e = new Float32Array(t.data.nodes);
      bl.assignLayoutChanges(this.graph, e, this.outputReducer), this.outputReducer && bl.readGraphPositions(this.graph, e), this.matrices.nodes = e, this.askForIterations();
    }
  }, El.prototype.askForIterations = function (t) {
    var e = this.matrices,
      r = {
        settings: this.settings,
        nodes: e.nodes.buffer
      },
      n = [e.nodes.buffer];
    return t && (r.edges = e.edges.buffer, n.push(e.edges.buffer)), this.worker.postMessage(r, n), this;
  }, El.prototype.start = function () {
    if (this.killed) throw new Error("graphology-layout-forceatlas2/worker.start: layout was killed.");
    return this.running || (this.matrices = bl.graphToByteArrays(this.graph, this.getEdgeWeight), this.running = !0, this.askForIterations(!0)), this;
  }, El.prototype.stop = function () {
    return this.running = !1, this;
  }, El.prototype.kill = function () {
    if (this.killed) return this;
    this.running = !1, this.killed = !0, this.matrices = null, this.worker.terminate(), this.graph.removeListener("nodeAdded", this.handleGraphUpdate), this.graph.removeListener("edgeAdded", this.handleGraphUpdate), this.graph.removeListener("nodeDropped", this.handleGraphUpdate), this.graph.removeListener("edgeDropped", this.handleGraphUpdate);
  };
  var Al = El,
    xl = function xl() {
      var t,
        e = {};
      !function () {
        function t() {
          return .01 * (.5 - Math.random());
        }
        e.exports = function (e, r) {
          var n,
            i,
            o,
            a,
            s,
            h,
            u = e.margin,
            d = e.ratio,
            c = e.expansion,
            l = e.gridSize,
            f = e.speed,
            g = !0,
            p = r.length,
            y = p / 3 | 0,
            v = new Float32Array(y),
            m = new Float32Array(y),
            b = 1 / 0,
            w = 1 / 0,
            E = -1 / 0,
            A = -1 / 0;
          for (n = 0; n < p; n += 3) o = r[n + 0], a = r[n + 1], h = r[n + 2] * d + u, b = Math.min(b, o - h), E = Math.max(E, o + h), w = Math.min(w, a - h), A = Math.max(A, a + h);
          var x = E - b,
            z = A - w,
            M = (b + E) / 2,
            S = (w + A) / 2;
          b = M - c * x / 2, E = M + c * x / 2, w = S - c * z / 2, A = S + c * z / 2;
          var D,
            N,
            k,
            C,
            O,
            W,
            j,
            _,
            P,
            U,
            I,
            F,
            T = new Array(l * l),
            L = T.length;
          for (D = 0; D < L; D++) T[D] = [];
          for (n = 0; n < p; n += 3) for (o = r[n + 0], a = r[n + 1], N = o - (h = r[n + 2] * d + u), k = o + h, C = a - h, O = a + h, W = Math.floor(l * (N - b) / (E - b)), j = Math.floor(l * (k - b) / (E - b)), _ = Math.floor(l * (C - w) / (A - w)), P = Math.floor(l * (O - w) / (A - w)), U = W; U <= j; U++) for (I = _; I <= P; I++) T[U * l + I].push(n);
          var R,
            G,
            q,
            B,
            H,
            V,
            Y,
            K,
            $,
            X,
            J,
            Q,
            Z = new Set();
          for (D = 0; D < L; D++) for (n = 0, s = (F = T[D]).length; n < s; n++) for (q = r[(R = F[n]) + 0], H = r[R + 1], Y = r[R + 2], i = n + 1; i < s; i++) G = F[i], $ = R + "§" + G, L > 1 && Z.has($) || (L > 1 && Z.add($), B = r[G + 0], V = r[G + 1], K = r[G + 2], X = B - q, J = V - H, (Q = Math.sqrt(X * X + J * J)) < Y * d + u + (K * d + u) && (g = !1, G = G / 3 | 0, Q > 0 ? (v[G] += X / Q * (1 + Y), m[G] += J / Q * (1 + Y)) : (v[G] += x * t(), m[G] += z * t())));
          for (n = 0, i = 0; n < p; n += 3, i++) r[n + 0] += .1 * v[i] * f, r[n + 1] += .1 * m[i] * f;
          return {
            converged: g
          };
        };
      }();
      var r = e.exports;
      self.addEventListener("message", function (e) {
        var n = e.data;
        t = new Float32Array(n.nodes);
        var i = r(n.settings, t);
        self.postMessage({
          result: i,
          nodes: t.buffer
        }, [t.buffer]);
      });
    },
    zl = i,
    Ml = ls,
    Sl = fs;
  function Dl(t, e) {
    if (e = e || {}, !zl(t)) throw new Error("graphology-layout-noverlap/worker: the given graph is not a valid graphology instance.");
    var r = Object.assign({}, Sl, e.settings),
      n = Ml.validateSettings(r);
    if (n) throw new Error("graphology-layout-noverlap/worker: " + n.message);
    this.worker = null, this.graph = t, this.settings = r, this.matrices = null, this.running = !1, this.killed = !1, this.inputReducer = e.inputReducer, this.outputReducer = e.outputReducer, this.callbacks = {
      onConverged: "function" == typeof e.onConverged ? e.onConverged : null
    }, this.handleMessage = this.handleMessage.bind(this);
    var i = !1,
      o = this;
    this.handleAddition = function () {
      i || (i = !0, o.spawnWorker(), setTimeout(function () {
        i = !1;
      }, 0));
    }, t.on("nodeAdded", this.handleAddition), t.on("edgeAdded", this.handleAddition), this.spawnWorker();
  }
  Dl.prototype.isRunning = function () {
    return this.running;
  }, Dl.prototype.spawnWorker = function () {
    this.worker && this.worker.terminate(), this.worker = Ml.createWorker(xl), this.worker.addEventListener("message", this.handleMessage), this.running && (this.running = !1, this.start());
  }, Dl.prototype.handleMessage = function (t) {
    if (this.running) {
      var e = new Float32Array(t.data.nodes);
      if (Ml.assignLayoutChanges(this.graph, e, this.outputReducer), this.matrices.nodes = e, t.data.result.converged) return this.callbacks.onConverged && this.callbacks.onConverged(), void this.stop();
      this.askForIterations();
    }
  }, Dl.prototype.askForIterations = function () {
    var t = this.matrices,
      e = {
        settings: this.settings,
        nodes: t.nodes.buffer
      },
      r = [t.nodes.buffer];
    return this.worker.postMessage(e, r), this;
  }, Dl.prototype.start = function () {
    if (this.killed) throw new Error("graphology-layout-noverlap/worker.start: layout was killed.");
    return this.running || (this.matrices = {
      nodes: Ml.graphToByteArray(this.graph, this.inputReducer)
    }, this.running = !0, this.askForIterations()), this;
  }, Dl.prototype.stop = function () {
    return this.running = !1, this;
  }, Dl.prototype.kill = function () {
    if (this.killed) return this;
    this.running = !1, this.killed = !0, this.matrices = null, this.worker.terminate(), this.graph.removeListener("nodeAdded", this.handleAddition), this.graph.removeListener("edgeAdded", this.handleAddition);
  };
  var Nl = Dl,
    kl = {},
    Cl = {
      cast: function cast(t, e) {
        switch (t) {
          case "boolean":
            e = "true" === e;
            break;
          case "integer":
          case "long":
          case "float":
          case "double":
            e = +e;
            break;
          case "liststring":
            e = e ? e.split("|") : [];
        }
        return e;
      }
    },
    Ol = /["'<>&\s]/g;
  Cl.sanitizeTagName = function (t) {
    return t.replace(Ol, "").trim();
  };
  var Wl = o,
    jl = so.mergeEdge,
    _l = ic,
    Pl = ac,
    Ul = Cl.cast;
  function Il(t, e) {
    var r = t.getElementsByTagName("viz:" + e)[0];
    return r || (r = t.getElementsByTagNameNS("viz", e)[0]), r || (r = t.getElementsByTagName(e)[0]), r;
  }
  function Fl(t) {
    for (var e, r, n, i, o = {}, a = {}, s = 0, h = t.length; s < h; s++) o[n = (e = t[s]).getAttribute("id") || e.getAttribute("for")] = {
      id: n,
      type: e.getAttribute("type") || "string",
      title: (i = +n, i == i && e.getAttribute("title") || n)
    }, (r = e.getElementsByTagName("default")[0]) && (a[o[n].title] = Ul(o[n].type, r.textContent));
    return [o, a];
  }
  function Tl(t, e, r) {
    var n = {},
      i = r.getAttribute("label"),
      o = r.getAttribute("weight");
    i && (n.label = i), o && (n.weight = +o);
    for (var a, s, h, u = r.getElementsByTagName("attvalue"), d = 0, c = u.length; d < c; d++) n[t[s = (a = u[d]).getAttribute("id") || a.getAttribute("for")].title] = Ul(t[s].type, a.getAttribute("value"));
    for (h in e) h in n || (n[h] = e[h]);
    var l,
      f,
      g,
      p = Il(r, "color");
    return p && (n.color = function (t) {
      var e = t.getAttribute("a"),
        r = t.getAttribute("r"),
        n = t.getAttribute("g"),
        i = t.getAttribute("b");
      return e ? "rgba(" + r + "," + n + "," + i + "," + e + ")" : "rgb(" + r + "," + n + "," + i + ")";
    }(p)), (p = Il(r, "size")) && (n.size = +p.getAttribute("value")), (p = Il(r, "position")) && (l = p.getAttribute("x"), f = p.getAttribute("y"), g = p.getAttribute("z"), l && (n.x = +l), f && (n.y = +f), g && (n.z = +g)), (p = Il(r, "shape")) && (n.shape = p.getAttribute("value")), (p = Il(r, "thickness")) && (n.thickness = +p.getAttribute("value")), n;
  }
  var Ll = function Ll(t, e) {
      return function (r, n, i) {
        var o,
          a,
          s,
          h,
          u,
          d,
          c,
          l,
          f,
          g,
          p = !0 === (i = i || {}).addMissingNodes,
          y = n;
        if (!Wl(r)) throw new Error("graphology-gexf/parser: invalid Graph constructor.");
        if ("string" == typeof n && (y = new t().parseFromString(n, "application/xml")), !(y instanceof e)) throw new Error("graphology-gexf/parser: source should either be a XML document or a string.");
        var v = y.getElementsByTagName("graph")[0],
          m = y.getElementsByTagName("meta")[0],
          b = m && m.childNodes || [],
          w = y.getElementsByTagName("node"),
          E = y.getElementsByTagName("edge"),
          A = y.getElementsByTagName("attributes"),
          x = [],
          z = [];
        for (f = 0, g = A.length; f < g; f++) "node" === (a = A[f]).getAttribute("class") ? x = a.getElementsByTagName("attribute") : "edge" === a.getAttribute("class") && (z = a.getElementsByTagName("attribute"));
        var M = v.getAttribute("defaultedgetype") || "undirected";
        "mutual" === M && (M = "undirected");
        var S = (s = Fl(x))[0],
          D = s[1],
          N = (s = Fl(z))[0],
          k = s[1],
          C = new r({
            type: E[0] ? E[0].getAttribute("type") || M : "mixed"
          }),
          O = function (t) {
            for (var e, r = {}, n = 0, i = t.length; n < i; n++) "#text" !== (e = t[n]).nodeName && e.textContent.trim() && (r[e.tagName.toLowerCase()] = e.textContent);
            return r;
          }(b),
          W = m && m.getAttribute("lastmodifieddate");
        for (C.replaceAttributes(O), W && C.setAttribute("lastModifiedDate", W), f = 0, g = w.length; f < g; f++) a = w[f], C.addNode(a.getAttribute("id"), Tl(S, D, a));
        for (f = 0, g = E.length; f < g; f++) if (d = (a = E[f]).getAttribute("id"), h = a.getAttribute("type") || M, c = a.getAttribute("source"), l = a.getAttribute("target"), u = Tl(N, k, a), h !== C.type && "mixed" !== C.type && (C = _l(C)), !C.multi && ("directed" === h && C.hasDirectedEdge(c, l) || C.hasUndirectedEdge(c, l)) && (C = Pl(C)), o = jl(C, "directed" !== h, d || null, c, l, u), !p && (o[2] || o[3])) throw new Error("graphology-gexf/parser: one of your gexf file edges points to an inexisting node. Set the parser `addMissingNodes` option to `true` if you do not care.");
        return C;
      };
    },
    Rl = Ll(DOMParser, Document);
  function Gl(t) {
    return "number" != typeof t && !t;
  }
  function ql(t) {
    if ("string" == typeof t) return t;
    if ("number" == typeof t) return t + "";
    if ("function" == typeof t) return t();
    if (t instanceof Bl) return t.toString();
    throw Error("Bad Parameter");
  }
  function Bl(t, e) {
    if (!(this instanceof Bl)) return new Bl();
    this.name_regex = /[_:A-Za-z][-._:A-Za-z0-9]*/, this.indent = !!t, this.indentString = this.indent && "string" == typeof t ? t : "    ", this.output = "", this.stack = [], this.tags = 0, this.attributes = 0, this.attribute = 0, this.texts = 0, this.comment = 0, this.dtd = 0, this.root = "", this.pi = 0, this.cdata = 0, this.started_write = !1, this.writer, this.writer_encoding = "UTF-8", this.writer = "function" == typeof e ? e : function (t, e) {
      this.output += t;
    };
  }
  Bl.prototype = {
    toString: function toString() {
      return this.flush(), this.output;
    },
    indenter: function indenter() {
      if (this.indent) {
        this.write("\n");
        for (var t = 1; t < this.tags; t++) this.write(this.indentString);
      }
    },
    write: function write() {
      for (var t = 0; t < arguments.length; t++) this.writer(arguments[t], this.writer_encoding);
    },
    flush: function flush() {
      for (var t = this.tags; t > 0; t--) this.endElement();
      this.tags = 0;
    },
    startDocument: function startDocument(t, e, r) {
      return this.tags || this.attributes || (this.startPI("xml"), this.startAttribute("version"), this.text("string" == typeof t ? t : "1.0"), this.endAttribute(), "string" == typeof e && (this.startAttribute("encoding"), this.text(e), this.endAttribute(), this.writer_encoding = e), r && (this.startAttribute("standalone"), this.text("yes"), this.endAttribute()), this.endPI(), this.indent || this.write("\n")), this;
    },
    endDocument: function endDocument() {
      return this.attributes && this.endAttributes(), this;
    },
    writeElement: function writeElement(t, e) {
      return this.startElement(t).text(e).endElement();
    },
    writeElementNS: function writeElementNS(t, e, r, n) {
      return n || (n = r), this.startElementNS(t, e, r).text(n).endElement();
    },
    startElement: function startElement(t) {
      if (!(t = ql(t)).match(this.name_regex)) throw Error("Invalid Parameter");
      if (0 === this.tags && this.root && this.root !== t) throw Error("Invalid Parameter");
      return this.attributes && this.endAttributes(), ++this.tags, this.texts = 0, this.stack.length > 0 && (this.stack[this.stack.length - 1].containsTag = !0), this.stack.push({
        name: t,
        tags: this.tags
      }), this.started_write && this.indenter(), this.write("<", t), this.startAttributes(), this.started_write = !0, this;
    },
    startElementNS: function startElementNS(t, e, r) {
      if (t = ql(t), e = ql(e), !t.match(this.name_regex)) throw Error("Invalid Parameter");
      if (!e.match(this.name_regex)) throw Error("Invalid Parameter");
      return this.attributes && this.endAttributes(), ++this.tags, this.texts = 0, this.stack.length > 0 && (this.stack[this.stack.length - 1].containsTag = !0), this.stack.push({
        name: t + ":" + e,
        tags: this.tags
      }), this.started_write && this.indenter(), this.write("<", t + ":" + e), this.startAttributes(), this.started_write = !0, this;
    },
    endElement: function endElement() {
      if (!this.tags) return this;
      var t = this.stack.pop();
      return this.attributes > 0 ? (this.attribute && (this.texts && this.endAttribute(), this.endAttribute()), this.write("/"), this.endAttributes()) : (t.containsTag && this.indenter(), this.write("</", t.name, ">")), --this.tags, this.texts = 0, this;
    },
    writeAttribute: function writeAttribute(t, e) {
      return "function" == typeof e && (e = e()), Gl(e) ? this : this.startAttribute(t).text(e).endAttribute();
    },
    writeAttributeNS: function writeAttributeNS(t, e, r, n) {
      return n || (n = r), "function" == typeof n && (n = n()), Gl(n) ? this : this.startAttributeNS(t, e, r).text(n).endAttribute();
    },
    startAttributes: function startAttributes() {
      return this.attributes = 1, this;
    },
    endAttributes: function endAttributes() {
      return this.attributes ? (this.attribute && this.endAttribute(), this.attributes = 0, this.attribute = 0, this.texts = 0, this.write(">"), this) : this;
    },
    startAttribute: function startAttribute(t) {
      if (!(t = ql(t)).match(this.name_regex)) throw Error("Invalid Parameter");
      return this.attributes || this.pi ? (this.attribute || (this.attribute = 1, this.write(" ", t, '="')), this) : this;
    },
    startAttributeNS: function startAttributeNS(t, e, r) {
      if (t = ql(t), e = ql(e), !t.match(this.name_regex)) throw Error("Invalid Parameter");
      if (!e.match(this.name_regex)) throw Error("Invalid Parameter");
      return this.attributes || this.pi ? (this.attribute || (this.attribute = 1, this.write(" ", t + ":" + e, '="')), this) : this;
    },
    endAttribute: function endAttribute() {
      return this.attribute ? (this.attribute = 0, this.texts = 0, this.write('"'), this) : this;
    },
    text: function text(t) {
      return t = ql(t), this.tags || this.comment || this.pi || this.cdata ? this.attributes && this.attribute ? (++this.texts, this.write(t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;")), this) : (this.attributes && !this.attribute && this.endAttributes(), this.comment || this.cdata ? this.write(t) : this.write(t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")), ++this.texts, this.started_write = !0, this) : this;
    },
    writeComment: function writeComment(t) {
      return this.startComment().text(t).endComment();
    },
    startComment: function startComment() {
      return this.comment || (this.attributes && this.endAttributes(), this.indenter(), this.write("\x3c!--"), this.comment = 1, this.started_write = !0), this;
    },
    endComment: function endComment() {
      return this.comment ? (this.write("--\x3e"), this.comment = 0, this) : this;
    },
    writeDocType: function writeDocType(t, e, r, n) {
      return this.startDocType(t, e, r, n).endDocType();
    },
    startDocType: function startDocType(t, e, r, n) {
      if (this.dtd || this.tags) return this;
      if (t = ql(t), e = e ? ql(e) : e, r = r ? ql(r) : r, n = n ? ql(n) : n, !t.match(this.name_regex)) throw Error("Invalid Parameter");
      if (e && !e.match(/^[\w\-][\w\s\-\/\+\:\.]*/)) throw Error("Invalid Parameter");
      if (r && !r.match(/^[\w\.][\w\-\/\\\:\.]*/)) throw Error("Invalid Parameter");
      if (n && !n.match(/[\w\s\<\>\+\.\!\#\-\?\*\,\(\)\|]*/)) throw Error("Invalid Parameter");
      return e = e ? ' PUBLIC "' + e + '"' : r ? " SYSTEM" : "", r = r ? ' "' + r + '"' : "", n = n ? " [" + n + "]" : "", this.started_write && this.indenter(), this.write("<!DOCTYPE ", t, e, r, n), this.root = t, this.dtd = 1, this.started_write = !0, this;
    },
    endDocType: function endDocType() {
      return this.dtd ? (this.write(">"), this) : this;
    },
    writePI: function writePI(t, e) {
      return this.startPI(t).text(e).endPI();
    },
    startPI: function startPI(t) {
      if (!(t = ql(t)).match(this.name_regex)) throw Error("Invalid Parameter");
      return this.pi || (this.attributes && this.endAttributes(), this.started_write && this.indenter(), this.write("<?", t), this.pi = 1, this.started_write = !0), this;
    },
    endPI: function endPI() {
      return this.pi ? (this.write("?>"), this.pi = 0, this) : this;
    },
    writeCData: function writeCData(t) {
      return this.startCData().text(t).endCData();
    },
    startCData: function startCData() {
      return this.cdata || (this.attributes && this.endAttributes(), this.indenter(), this.write("<![CDATA["), this.cdata = 1, this.started_write = !0), this;
    },
    endCData: function endCData() {
      return this.cdata ? (this.write("]]>"), this.cdata = 0, this) : this;
    },
    writeRaw: function writeRaw(t) {
      return t = ql(t), this.tags || this.comment || this.pi || this.cdata ? this.attributes && this.attribute ? (++this.texts, this.write(t.replace("&", "&amp;").replace('"', "&quot;")), this) : (this.attributes && !this.attribute && this.endAttributes(), ++this.texts, this.write(t), this.started_write = !0, this) : this;
    }
  };
  var Hl = i,
    Vl = yi,
    Yl = Bl,
    Kl = Cl.sanitizeTagName,
    $l = new Set(["color", "size", "x", "y", "z", "shape", "thickness"]),
    Xl = /^\s*rgba?\s*\(/i,
    Jl = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)\s*(?:,\s*([.0-9]*))?\)\s*$/;
  function Ql(t) {
    if (!t || "string" != typeof t) return {};
    if ("#" === t[0]) return 3 === (t = t.slice(1)).length ? {
      r: parseInt(t[0] + t[0], 16),
      g: parseInt(t[1] + t[1], 16),
      b: parseInt(t[2] + t[2], 16)
    } : {
      r: parseInt(t[0] + t[1], 16),
      g: parseInt(t[2] + t[3], 16),
      b: parseInt(t[4] + t[5], 16)
    };
    if (Xl.test(t)) {
      var e = {};
      return t = t.match(Jl), e.r = +t[1], e.g = +t[2], e.b = +t[3], t[4] && (e.a = +t[4]), e;
    }
    return {};
  }
  function Zl(t, e, r) {
    var n,
      i = {};
    for (n in r) "label" === n ? i.label = r.label : "edge" === t && "weight" === n ? i.weight = r.weight : $l.has(n) ? (i.viz = i.viz || {}, i.viz[n] = r[n]) : (i.attributes = i.attributes || {}, i.attributes[n] = r[n]);
    return i;
  }
  function tf(t) {
    return null == t || "" === t || t != t;
  }
  function ef(t, e) {
    return "liststring" === t && Array.isArray(e) ? e.join("|") : "" + e;
  }
  function rf(t) {
    for (var e, r, n, i, o, a = {}, s = 0, h = t.length; s < h; s++) if (e = t[s].attributes) for (n in e) i = e[n], o = void 0, "empty" !== (r = tf(i) ? "empty" : Array.isArray(i) ? "liststring" : "boolean" == typeof i ? "boolean" : "object" == typeof i ? "string" : "number" == typeof i ? i === (0 | i) ? (o = i) <= 2147483647 && o >= -2147483647 ? "integer" : "long" : "double" : "string") && (a[n] ? "integer" === a[n] && "long" === r ? a[n] = r : a[n] !== r && (a[n] = "string") : a[n] = r);
    return a;
  }
  function nf(t, e, r) {
    var n;
    if (Object.keys(e).length) {
      for (n in t.startElement("attributes"), t.writeAttribute("class", r), e) t.startElement("attribute"), t.writeAttribute("id", n), t.writeAttribute("title", n), t.writeAttribute("type", e[n]), t.endElement();
      t.endElement();
    }
  }
  function of(t, e, r, n) {
    var i,
      o,
      a,
      s,
      h,
      u,
      d,
      c,
      l,
      f,
      g,
      p = !Object.keys(r).length;
    for (t.startElement(e + "s"), f = 0, g = n.length; f < g; f++) {
      if (u = (i = n[f]).attributes, c = i.viz, t.startElement(e), t.writeAttribute("id", i.key), "edge" === e && ((h = i.undirected ? "undirected" : "directed") !== t.defaultEdgeType && t.writeAttribute("type", h), t.writeAttribute("source", i.source), t.writeAttribute("target", i.target), ("number" == typeof (d = i.weight) && !isNaN(d) || "string" == typeof d) && t.writeAttribute("weight", i.weight)), i.label && t.writeAttribute("label", i.label), !p && u) {
        for (o in t.startElement("attvalues"), r) if (o in u) {
          if (tf(s = u[o])) continue;
          t.startElement("attvalue"), t.writeAttribute("for", o), t.writeAttribute("value", ef(r[o], s)), t.endElement();
        }
        t.endElement();
      }
      if (c) {
        if (c.color) {
          for (l in a = Ql(c.color), t.startElementNS("viz", "color"), a) t.writeAttribute(l, a[l]);
          t.endElement();
        }
        "size" in c && (t.startElementNS("viz", "size"), t.writeAttribute("value", c.size), t.endElement()), ("x" in c || "y" in c || "z" in c) && (t.startElementNS("viz", "position"), "x" in c && t.writeAttribute("x", c.x), "y" in c && t.writeAttribute("y", c.y), "z" in c && t.writeAttribute("z", c.z), t.endElement()), c.shape && (t.startElementNS("viz", "shape"), t.writeAttribute("value", c.shape), t.endElement()), "thickness" in c && (t.startElementNS("viz", "thickness"), t.writeAttribute("value", c.thickness), t.endElement());
      }
      t.endElement();
    }
    t.endElement();
  }
  var af = {
    encoding: "UTF-8",
    pretty: !0,
    formatNode: Zl.bind(null, "node"),
    formatEdge: Zl.bind(null, "edge")
  };
  kl.parse = Rl, kl.write = function (t, e) {
    if (!Hl(t)) throw new Error("graphology-gexf/writer: invalid graphology instance.");
    var r = !1 !== (e = e || {}).pretty && "  ",
      n = e.formatNode || af.formatNode,
      i = e.formatEdge || af.formatEdge,
      o = new Yl(r);
    o.startDocument("1.0", e.encoding || af.encoding), o.startElement("gexf"), o.writeAttribute("version", "1.2"), o.writeAttribute("xmlns", "http://www.gexf.net/1.2draft"), o.writeAttribute("xmlns:viz", "http:///www.gexf.net/1.1draft/viz"), o.startElement("meta");
    var a,
      s,
      h = t.getAttributes();
    for (var u in h.lastModifiedDate && o.writeAttribute("lastmodifieddate", h.lastModifiedDate), h) "lastModifiedDate" !== u && (a = Kl(u)) && ("string" != typeof (s = h[u]) && "number" != typeof s && "boolean" != typeof s || o.writeElement(a, "" + s));
    o.endElement(), o.startElement("graph");
    var d = Vl(t);
    o.defaultEdgeType = "mixed" === d ? "directed" : d, o.writeAttribute("defaultedgetype", o.defaultEdgeType);
    var c = function (t, e) {
        var r = new Array(t.order),
          n = 0;
        return t.forEachNode(function (t, i) {
          var o = e(t, i);
          o.key = t, r[n++] = o;
        }), r;
      }(t, n),
      l = function (t, e) {
        var r = new Array(t.size),
          n = 0;
        return t.forEachEdge(function (t, i, o, a, s, h, u) {
          var d = e(t, i);
          d.key = t, d.source = o, d.target = a, d.undirected = u, r[n++] = d;
        }), r;
      }(t, i),
      f = rf(c);
    nf(o, f, "node");
    var g = rf(l);
    return nf(o, g, "edge"), of(o, "node", f, c), of(o, "edge", g, l), o.toString();
  };
  var sf = {},
    hf = {};
  function uf(t) {
    return ("0" + (0 | t).toString(16)).slice(-2);
  }
  hf.DEFAULT_FORMATTER = function (t) {
    var e, r, n, i;
    return "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b ? ((e = function (t) {
      var e = {};
      for (var r in t) "r" !== r && "g" !== r && "b" !== r && (e[r] = t[r]);
      return e;
    }(t)).color = (r = t.r, n = t.g, i = t.b, "#" + uf(r) + uf(n) + uf(i)), e) : t;
  };
  var df = o,
    cf = so.mergeEdge,
    lf = ic,
    ff = ac,
    gf = hf.DEFAULT_FORMATTER;
  function pf(t) {
    return +t;
  }
  var yf = {
    "boolean": function boolean(t) {
      return "true" === t.toLowerCase();
    },
    "int": pf,
    "long": pf,
    "float": pf,
    "double": pf,
    string: function string(t) {
      return t;
    }
  };
  function vf(t, e, r) {
    var n,
      i,
      o,
      a,
      s,
      h = r.getElementsByTagName("data"),
      u = {};
    for (i = 0, o = h.length; i < o; i++) void 0 === (s = t[a = (n = h[i]).getAttribute("key")]) ? u[a] = n.textContent : u[s.name] = s.cast(n.textContent);
    for (a in e) a in u || (u[a] = e[a]);
    return u;
  }
  var mf = function mf(t, e) {
      return function (r, n, i) {
        var o,
          a = !0 === (i = i || {}).addMissingNodes,
          s = n;
        if (!df(r)) throw new Error("graphology-graphml/parser: invalid Graph constructor.");
        if ("string" == typeof n && (s = new t().parseFromString(n, "application/xml")), !(s instanceof e)) throw new Error("graphology-gexf/parser: source should either be a XML document or a string.");
        var h = s.getElementsByTagName("graph")[0],
          u = function (t) {
            for (var e, r = t.childNodes, n = [], i = 0, o = r.length; i < o; i++) if (1 === (e = r[i]).nodeType) {
              if ("data" !== e.tagName.toLowerCase()) break;
              n.push(e);
            }
            return n;
          }(h),
          d = s.getElementsByTagName("key"),
          c = s.getElementsByTagName("node"),
          l = s.getElementsByTagName("edge"),
          f = h.getAttribute("edgedefault") || "undirected",
          g = function (t) {
            var e,
              r,
              n,
              i,
              o,
              a,
              s,
              h,
              u,
              d = {
                graph: {},
                node: {},
                edge: {}
              },
              c = {
                graph: {},
                node: {},
                edge: {}
              };
            for (e = 0, r = t.length; e < r; e++) n = (s = t[e]).getAttribute("for") || "node", i = s.getAttribute("id"), o = s.getAttribute("attr.name"), a = s.getAttribute("attr.type") || "string", u = void 0, 0 !== (h = s.getElementsByTagName("default")).length && (u = h[0].textContent), d[n][i] = {
              name: o,
              cast: yf[a]
            }, void 0 !== u && (c[n][o] = u);
            return {
              models: d,
              defaults: c
            };
          }(d),
          p = new r({
            type: f
          }),
          y = h.getAttribute("id");
        y && p.setAttribute("id", y);
        var v = s.createElement("graph");
        u.forEach(function (t) {
          v.appendChild(t);
        });
        var m,
          b,
          w,
          E,
          A,
          x,
          z,
          M,
          S,
          D = vf(g.models.graph, g.defaults.graph, v);
        for (p.mergeAttributes(D), m = 0, b = c.length; m < b; m++) E = (w = c[m]).getAttribute("id"), A = vf(g.models.node, g.defaults.node, w), A = gf(A), p.addNode(E, A);
        for (m = 0, b = l.length; m < b; m++) if (E = (x = l[m]).getAttribute("id"), z = x.getAttribute("source"), M = x.getAttribute("target"), S = "true" === x.getAttribute("directed") ? "directed" : f, A = vf(g.models.edge, g.defaults.edge, x), A = gf(A), "mixed" !== !p.type && S !== p.type && (p = lf(p)), p.multi || ("undirected" === S ? p.hasUndirectedEdge(z, M) && (p = ff(p)) : p.hasDirectedEdge(z, M) && (p = ff(p))), o = cf(p, "undirected" === S, E || null, z, M, A), !a && (o[2] || o[3])) throw new Error("graphology-graphml/parser: one of your graphml file edges points to an inexisting node. Set the parser `addMissingNodes` option to `true` if you do not care.");
        return p;
      };
    },
    bf = mf(DOMParser, Document);
  sf.parse = bf;
  var wf = r.assertions = y,
    Ef = r.canvas = gi,
    Af = r.communitiesLouvain = io,
    xf = r.components = mo,
    zf = r.generators = ia,
    Mf = r.layout = Qa,
    Sf = r.layoutForce = Za,
    Df = r.layoutForceAtlas2 = ds,
    Nf = r.layoutNoverlap = ws,
    kf = r.metrics = Hd,
    Cf = r.operators = lc,
    Of = r.shortestPath = Mc,
    Wf = r.simplePath = Wc,
    jf = r.traversal = tl,
    _f = r.utils = ol,
    Pf = r.ForceLayout = pl,
    Uf = r.FA2Layout = Al,
    If = r.NoverlapLayout = Nl,
    Ff = r.gexf = kl,
    Tf = r.graphml = sf;
  t.FA2Layout = Uf, t.ForceLayout = Pf, t.NoverlapLayout = If, t.assertions = wf, t.canvas = Ef, t.communitiesLouvain = Af, t.components = xf, t["default"] = r, t.generators = zf, t.gexf = Ff, t.graphml = Tf, t.layout = Mf, t.layoutForce = Sf, t.layoutForceAtlas2 = Df, t.layoutNoverlap = Nf, t.metrics = kf, t.operators = Cf, t.shortestPath = Of, t.simplePath = Wf, t.traversal = jf, t.utils = _f, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/javascript/vendors/graphology.min.js":
/*!**************************************************!*\
  !*** ./app/javascript/vendors/graphology.min.js ***!
  \**************************************************/
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

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
  return this;
}();
try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ })

/******/ });
//# sourceMappingURL=application-8d1d30ef632e5f285378.js.map