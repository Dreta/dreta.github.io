/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/styles.pcss":
/*!****************************!*\
  !*** ./assets/styles.pcss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dreta-website/./assets/styles.pcss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Copyright (c) 2021 Dreta, all rights reserved.\n\nconst csi = document.getElementById(\"csi\");\nconst discord = document.getElementById(\"discord\");\n\nconst textSwitch = [\n    \"a developer.\",\n    \"sbflanwkdf\",\n    \"xguclaivp\",\n    \"nhtloapn\",\n    \"poigoqm\",\n    \"mphtsm\",\n    \"cofjle\",\n    \"copfpe\",\n    \"copiba\",\n    \"copied!\"\n];\n\nlet intervalPlaying = false;\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    document.getElementById(\"email\").href = \"mailto:hello@dreta.dev\";\n\n    discord.onclick = async () => {\n        await navigator.clipboard.writeText(\"Dre\" + \"t\" + \"a#6\" + \"65\" + \"5\");\n\n        let i = 0;\n        let j = textSwitch.length;\n        let intervalSet = false;\n        if (intervalPlaying) {\n            return;\n        }\n        intervalPlaying = true;\n        let interval = setInterval(() => {\n            i++;\n            if (i >= textSwitch.length) {\n                if (!intervalSet) {\n                    intervalSet = true;\n                    setTimeout(() => {\n                        let interval2 = setInterval(() => {\n                            j--;\n                            if (j < 0) {\n                                clearInterval(interval2);\n                                intervalPlaying = false;\n                                return;\n                            }\n                            csi.innerText = textSwitch[j];\n                        }, 50)\n                    }, 1000);\n                }\n                clearInterval(interval);\n                return;\n            }\n            csi.innerText = textSwitch[i];\n        }, 50);\n    };\n\n    discord.onkeyup = async () => {\n        await navigator.clipboard.writeText(\"Dre\" + \"t\" + \"a#6\" + \"65\" + \"5\");\n        csi.innerText = \"copied!\";\n        setTimeout(() => csi.innerText = \"a developer.\", 2000);\n    };\n});\n\n\n//# sourceURL=webpack://dreta-website/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./assets/styles.pcss"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;