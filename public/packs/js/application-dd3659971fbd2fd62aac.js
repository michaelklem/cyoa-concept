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
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/mk/projects/create_your_own_adventure_concept/cyoa_concept/app/javascript/graph1/graph_viewer.js: Missing semicolon. (48:11)\n\n  46 |     }\n  47 |\n> 48 |     rerturn pages;\n     |            ^\n  49 |   }\n  50 | }\n  51 |\n    at instantiate (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:64:32)\n    at constructor (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:364:12)\n    at Parser.raise (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:3253:19)\n    at Parser.semicolon (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:3624:10)\n    at Parser.parseExpressionStatement (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13089:10)\n    at Parser.parseStatementContent (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:12686:19)\n    at Parser.parseStatementLike (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:12548:17)\n    at Parser.parseStatementListItem (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:12528:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13120:61)\n    at Parser.parseBlockBody (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13113:10)\n    at Parser.parseBlock (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13101:10)\n    at Parser.parseFunctionBody (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:11911:24)\n    at Parser.parseFunctionBodyAndFinish (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:11897:10)\n    at Parser.parseMethod (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:11855:31)\n    at Parser.pushClassMethod (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13561:30)\n    at Parser.parseClassMemberWithIsStatic (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13458:14)\n    at Parser.parseClassMember (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13377:10)\n    at /home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13327:14\n    at Parser.withSmartMixTopicForbiddingContext (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:12221:14)\n    at Parser.parseClassBody (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13307:10)\n    at Parser.parseClass (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13285:22)\n    at Parser.parseExportDeclaration (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13768:25)\n    at Parser.maybeParseExportDeclaration (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13726:31)\n    at Parser.parseExport (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13650:29)\n    at Parser.parseStatementContent (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:12660:27)\n    at Parser.parseStatementLike (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:12548:17)\n    at Parser.parseModuleItem (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:12525:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13120:36)\n    at Parser.parseBlockBody (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:13113:10)\n    at Parser.parseProgram (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:12439:10)\n    at Parser.parseTopLevel (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:12429:25)\n    at Parser.parse (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:14250:10)\n    at parse (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/parser/lib/index.js:14292:38)\n    at parser (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/core/lib/transformation/normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/gensync/index.js:261:32)\n    at /home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/gensync/index.js:223:11)\n    at /home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/gensync/index.js:189:28\n    at /home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/@babel/core/lib/gensync-utils/async.js:68:7\n    at /home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/gensync/index.js:113:33\n    at step (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/gensync/index.js:287:14)\n    at /home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/mk/projects/create_your_own_adventure_concept/cyoa_concept/node_modules/gensync/index.js:223:11)");

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
/* harmony import */ var _graph1_graph_viewer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_graph1_graph_viewer__WEBPACK_IMPORTED_MODULE_1__);



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

/***/ })

/******/ });
//# sourceMappingURL=application-dd3659971fbd2fd62aac.js.map