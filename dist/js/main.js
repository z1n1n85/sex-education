/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/bg-paralax-sky/bg-paralax-sky.js":
/*!****************************************************************!*\
  !*** ./src/blocks/components/bg-paralax-sky/bg-paralax-sky.js ***!
  \****************************************************************/
/***/ (function() {

"use strict";


window.onload = function () {
  var bg_paralax = document.querySelectorAll('.bg-paralax-sky');
  var main_paralax = document.querySelector('.main-paralax');
  if (main_paralax) {
    var setMouseParalaxStyle = function setMouseParalaxStyle() {
      var distX = coordXprocent - positionX;
      var distY = coordYprocent - positionY;
      positionX += distX * speed;
      positionY += distY * speed;
      for (var i = 0; i < bg_paralax.length; i += 1) {
        var bg_paralax_elem = bg_paralax[i];
        console.log(bg_paralax_elem);
        bg_paralax_elem.style.backgroundPosition = "bottom ".concat(50 - positionY / bg_coleff * 10, "% right ").concat(50 - positionX / bg_coleff, "%");
      }
      requestAnimationFrame(setMouseParalaxStyle);
    };
    var bg_coleff = 15;
    var speed = 0.1;
    var positionX = 0;
    var positionY = 0;
    var coordXprocent = 0;
    var coordYprocent = 0;
    setMouseParalaxStyle();
    main_paralax.addEventListener('mousemove', function (e) {
      var paralaxWidth = main_paralax.offsetWidth;
      var paralaxHeight = main_paralax.offsetHeight;
      var coordX = e.pageX - paralaxWidth / 2;
      var coordY = e.pageY - paralaxHeight / 2;
      coordXprocent = coordX / paralaxWidth * 100;
      coordYprocent = coordY / paralaxHeight * 100;
    });
  }
};

/***/ }),

/***/ "./src/blocks/components/chapter-text/chapter-text.js":
/*!************************************************************!*\
  !*** ./src/blocks/components/chapter-text/chapter-text.js ***!
  \************************************************************/
/***/ (function() {

"use strict";


window.onload = function () {
  var firstP = document.querySelector('.chapter-text > p');
  firstP.classList.add('p-initial-letter');
  alert('hhh');
};

/***/ }),

/***/ "./src/blocks/modules/table-of-contents/table-of-contents.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/modules/table-of-contents/table-of-contents.js ***!
  \*******************************************************************/
/***/ (function() {

var table_dropdown_btn = document.querySelector('.table-of-contents__dropdown-btn');
var table_chapter_container = document.querySelector('.table-of-contents__chapter-container');
table_dropdown_btn.addEventListener("click", function () {
  if (table_chapter_container.classList.contains('table-of-contents__chapter-container--open')) {
    table_chapter_container.classList.remove('table-of-contents__chapter-container--open');
    table_dropdown_btn.textContent = '↓↓↓';
  } else {
    table_chapter_container.classList.add('table-of-contents__chapter-container--open');
    table_dropdown_btn.textContent = '↑↑↑';
  }
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_components_bg_paralax_sky_bg_paralax_sky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/components/bg-paralax-sky/bg-paralax-sky */ "./src/blocks/components/bg-paralax-sky/bg-paralax-sky.js");
/* harmony import */ var _blocks_components_bg_paralax_sky_bg_paralax_sky__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_bg_paralax_sky_bg_paralax_sky__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_components_chapter_text_chapter_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/components/chapter-text/chapter-text */ "./src/blocks/components/chapter-text/chapter-text.js");
/* harmony import */ var _blocks_components_chapter_text_chapter_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_chapter_text_chapter_text__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_table_of_contents_table_of_contents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/table-of-contents/table-of-contents */ "./src/blocks/modules/table-of-contents/table-of-contents.js");
/* harmony import */ var _modules_table_of_contents_table_of_contents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_table_of_contents_table_of_contents__WEBPACK_IMPORTED_MODULE_0__);
// import "%modules%/header/header";
// import "%modules%/title-screen/title-screen";
// import "%modules%/footer/footer";


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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");


}();
/******/ })()
;
//# sourceMappingURL=main.js.map