/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/scheme/scheme.js":
/*!************************************************!*\
  !*** ./src/blocks/components/scheme/scheme.js ***!
  \************************************************/
/***/ (function() {

var schemeSrcs = new Map([['scheme-man-f', ['img/man1.png']], ['scheme-man-s', ['img/man2.png', 'img/man3.png']], ['scheme-woman-f', ['img/woman1.png']], ['scheme-woman-s', ['img/woman2.png', 'img/woman3.png']], ['scheme-woman-v', ['img/woman4.png', 'img/woman5.png']]]);
var schemes = document.querySelectorAll('.scheme');
var schemeRadioMarkup = "\n    <input type=\"radio\" name=\"select\" id=\"option-1\" checked>\n    <input type=\"radio\" name=\"select\" id=\"option-2\">\n        <label for=\"option-1\" class=\"option option-1\">\n            <div class=\"dot\"></div>\n            <span>Student</span>\n        </label>\n        <label for=\"option-2\" class=\"option option-2\">\n            <div class=\"dot\"></div>\n            <span>Teacher</span>\n        </label>";
var schemeRadio = document.createElement('div');
schemeRadio.classList.add('scheme-radio');
schemeRadio.innerHTML = schemeRadioMarkup;
schemes.forEach(function (item) {
  if (schemeSrcs.get(item.id).length == 2) {
    item.before(schemeRadio);
  }
});

/***/ }),

/***/ "./src/blocks/components/text-chapter/text-chapter.js":
/*!************************************************************!*\
  !*** ./src/blocks/components/text-chapter/text-chapter.js ***!
  \************************************************************/
/***/ (function() {

"use strict";


var firstP = document.querySelector('.chapter-text-container > p');
firstP.classList.add('p-initial-letter');

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!********************************!*\
  !*** ./src/js/chapter-page.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_components_text_chapter_text_chapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/components/text-chapter/text-chapter */ "./src/blocks/components/text-chapter/text-chapter.js");
/* harmony import */ var _blocks_components_text_chapter_text_chapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_text_chapter_text_chapter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_components_scheme_scheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/components/scheme/scheme */ "./src/blocks/components/scheme/scheme.js");
/* harmony import */ var _blocks_components_scheme_scheme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_scheme_scheme__WEBPACK_IMPORTED_MODULE_1__);


// import "../blocks/modules/chapter-image-panel/chapter-image-panel";
}();
/******/ })()
;
//# sourceMappingURL=chapter_page.js.map