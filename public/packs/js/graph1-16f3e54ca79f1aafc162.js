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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/graph1.js");
/******/ })
/************************************************************************/
/******/ ({

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



/***/ })

/******/ });
//# sourceMappingURL=graph1-16f3e54ca79f1aafc162.js.map