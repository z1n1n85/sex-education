/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/text-chapter/text-chapter.js":
/*!************************************************************!*\
  !*** ./src/blocks/components/text-chapter/text-chapter.js ***!
  \************************************************************/
/***/ (function() {



var firstP = document.querySelector('.chapter-text-container > p');
firstP.classList.add('p-initial-letter');

/***/ }),

/***/ "./src/blocks/modules/chapter-image-panel/chapter-image-panel.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/modules/chapter-image-panel/chapter-image-panel.js ***!
  \***********************************************************************/
/***/ (function() {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var txtPanel = document.querySelector('.chapter-text-container');
var imgPanel = document.querySelector('.chapter-image-panel');
var chapterImgs = Array.from(document.querySelectorAll('img'));
var imgsWithAnchors = new Map();
chapterImgs.forEach(function (item, i, arr) {
  imgsWithAnchors.set(item.previousElementSibling, item);
});
var _iterator = _createForOfIteratorHelper(imgsWithAnchors),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var _step$value = _slicedToArray(_step.value, 2),
      key = _step$value[0],
      value = _step$value[1];
    var imgContainer = document.createElement('div');
    imgContainer.classList.add('chapter-img-container');
    var imgAnnot = document.createElement('p');
    imgAnnot.textContent = "".concat(value.alt);
    txtPanel.removeChild(value);
    imgContainer.append(value);
    imgContainer.append(imgAnnot);
    imgPanel.appendChild(imgContainer);
    imgsWithAnchors.set(key, imgContainer);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var updateImgsPos = function updateImgsPos() {
  var extraIndent = 0;
  var imgCordY = 0;
  var prevImgHeight = 15;
  var _iterator2 = _createForOfIteratorHelper(imgsWithAnchors),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
        key = _step2$value[0],
        value = _step2$value[1];
      imgCordY = key.offsetTop - extraIndent;
      value.style.marginTop = "".concat(imgCordY, "px");
      value.style.top = "".concat(prevImgHeight, "px");
      console.log("".concat(key.offsetTop, ", ").concat(value.offsetTop, ", ").concat(value.offsetHeight, ", ").concat(extraIndent));
      prevImgHeight += value.offsetHeight + 15;
      extraIndent = 0 + key.offsetTop + value.offsetHeight;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
window.addEventListener('resize', updateImgsPos);
updateImgsPos();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************!*\
  !*** ./src/js/chapter-page.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_components_text_chapter_text_chapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/components/text-chapter/text-chapter */ "./src/blocks/components/text-chapter/text-chapter.js");
/* harmony import */ var _blocks_components_text_chapter_text_chapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_text_chapter_text_chapter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_modules_chapter_image_panel_chapter_image_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/modules/chapter-image-panel/chapter-image-panel */ "./src/blocks/modules/chapter-image-panel/chapter-image-panel.js");
/* harmony import */ var _blocks_modules_chapter_image_panel_chapter_image_panel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_chapter_image_panel_chapter_image_panel__WEBPACK_IMPORTED_MODULE_1__);


}();
/******/ })()
;
//# sourceMappingURL=chapter_page.js.map