/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("// Copyright (c) 2021 Dreta, all rights reserved.\n\nconst navbar = document.getElementById(\"navbar\");\n\nfunction getY(element) {\n    let e = element;\n    let top = 0;\n\n    while (!!e && e.tagName.toLowerCase() !== \"body\") {\n        top += e.offsetTop;\n        e = e.offsetParent;\n    }\n\n    return top;\n}\n\nfunction getCurrentY() {\n    if (window.pageYOffset) {\n        return window.pageYOffset;\n    }\n    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);\n}\n\nfunction isVisible(e) {\n    const rect = e.getBoundingClientRect();\n    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);\n    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);\n}\n\nconst navbarY = getY(navbar);\n\nfunction navbarFix() {\n    if (getCurrentY() >= navbarY) {\n        navbar.style.position = \"sticky\";\n        navbar.style.top = \"0\";\n    } else {\n        navbar.style.position = null;\n        navbar.style.top = null;\n    }\n}\n\n// --------------------------------\n\nconst typewriter = document.getElementById(\"cadd-d-type\");\nconst cursor = document.getElementById(\"cadd-cursor\");\nlet cursorShowing = false;\nconst text = \"VaultMC is a new Minecraft community aiming to offer simplicity to our players. We offer Survival, Creative and Factions. Looking for developers. Please email jacob@vaultmc.net if you're interested.\";\nlet intervalId;\nlet current = 0;\n\nfunction typewriterEffect() {\n    if (isVisible(typewriter)) {\n        if (current === 0) {\n            intervalId = setInterval(() => {\n                if (current >= text.length) {\n                    clearInterval(intervalId);\n                    return;\n                }\n                typewriter.innerHTML += text[current];\n                if (current % 20 === 0) {\n                    cursorShowing = !cursorShowing;\n                }\n\n                if (cursorShowing) {\n                    cursor.style.borderLeft = \"1px solid black\";\n                } else {\n                    cursor.style.borderLeft = \"1px solid transparent\";\n                }\n                current++;\n            }, 100);\n        }\n    } else {\n        typewriter.innerHTML = \"\";\n        cursor.style.borderLeft = \"1px solid transparent\";\n        cursorShowing = false;\n        clearInterval(intervalId);\n        current = 0;\n    }\n}\n\n// --------------------------------\n\nconst cText = \"javac HelloWorld.java   \";\nconst cTypewriter = document.getElementById(\"console-typewriter\");\nconst cCursor = document.getElementById(\"console-cursor\");\nconst compilerOutput = document.getElementById(\"compiler-output\");\nlet cCursorShowing = false;\nlet cCurrent = 0;\nlet cIntervalId;\n\nfunction codingTypewriter() {\n    if (isVisible(cTypewriter)) {\n        if (cCurrent === 0) {\n            cIntervalId = setInterval(() => {\n                if (cCurrent >= cText.length) {\n                    compilerOutput.classList.remove(\"hidden\");\n                    clearInterval(cIntervalId);\n                    return;\n                }\n                cTypewriter.innerHTML += cText[cCurrent];\n                if (cCurrent % 20 === 0) {\n                    cCursorShowing = !cCursorShowing;\n                }\n\n                if (cCursorShowing) {\n                    cCursor.style.borderLeft = \"1px solid white\";\n                } else {\n                    cCursor.style.borderLeft = \"1px solid transparent\";\n                }\n                cCurrent++;\n            }, 100);\n        }\n    } else {\n        cTypewriter.innerHTML = \"\";\n        cCursor.style.borderLeft = \"1px solid transparent\";\n        cCursorShowing = false;\n        compilerOutput.classList.add(\"hidden\");\n        clearInterval(cIntervalId);\n        cCurrent = 0;\n    }\n}\n\n// --------------------------------\n\nfunction animateAuto() {\n    for (let e of document.querySelectorAll(\".animate-on-show\")) {\n        if (isVisible(e)) {\n            e.classList.add(\"animate\");\n        } else {\n            e.classList.remove(\"animate\");\n        }\n    }\n}\n\n// --------------------------------\n\nfunction scrollspy() {\n    const elements = document.querySelectorAll(\".scrollspy\");\n    for (let i = elements.length - 1; i >= 0; i--) {\n        let e = elements[i];\n        if (isVisible(e)) {\n            for (let e of document.querySelectorAll(\".nav-active\")) {\n                e.classList.remove(\"nav-active\");\n                e.classList.add(\"nav-item\");\n            }\n            document.querySelector(e.dataset.target).classList.remove(\"nav-item\");\n            document.querySelector(e.dataset.target).classList.add(\"nav-active\");\n        }\n    }\n}\n\n// --------------------------------\n\nconst cardFix = document.getElementById(\"card-fix\");\nconst cardFixTop = document.getElementById(\"card-fix-top\");\nconst cardFixExit = document.getElementById(\"card-fix-exit\");\n\nfunction autoFix() {\n    let cftY = getY(cardFixTop);\n    let cfeY = getY(cardFixExit);\n\n    if (window.innerWidth < 1024) {\n        cardFix.classList.add(\"scale-fade-animation\");\n        cfeY += cardFixExit.clientHeight / 4;\n        cftY -= cardFixTop.clientHeight / 10;\n    } else {\n        cardFix.classList.remove(\"scale-fade-animation\");\n        cftY -= window.innerHeight / 4;\n    }\n\n    if (getCurrentY() >= cftY) {\n        if (getCurrentY() >= cfeY) {\n            cardFix.classList.remove(\"animate\");\n            if (window.innerWidth > 1024) {\n                cardFix.style.marginTop = (cfeY - cftY) + \"px\";\n                cardFix.style.position = null;\n            }\n        } else {\n            cardFix.style.marginTop = null;\n            cardFix.classList.add(\"animate\");\n            if (window.innerWidth < 1024) {\n                cardFix.style.position = \"fixed\";\n            } else {\n                cardFix.style.position = \"sticky\";\n            }\n        }\n    } else {\n        cardFix.classList.remove(\"animate\");\n        if (window.innerWidth > 1024) {\n            cardFix.style.marginTop = null;\n            cardFix.style.position = null;\n        }\n    }\n}\n\n// --------------------------------\n\nfunction updateCardFix() {\n    for (let e of document.querySelectorAll(\".show-on-target-centered\")) {\n        const target = document.querySelector(e.dataset.target);\n\n        if (getCurrentY() >= getY(target) - target.clientHeight / 4) {\n            for (let ea of document.querySelectorAll(\".show-on-target-centered\")) {\n                ea.classList.add(\"hidden\");\n            }\n            if (window.innerHeight >= 580) {\n                e.classList.remove(\"hidden\");\n            }\n        }\n    }\n}\n\n// --------------------------------\n\nfunction scrollEvents() {\n    navbarFix();\n    typewriterEffect();\n    codingTypewriter();\n    animateAuto();\n    scrollspy();\n    autoFix();\n    updateCardFix();\n}\n\nwindow.onscroll = scrollEvents;\nscrollEvents();\n\n// --------------------------------\n\nfunction copyDiscord() {\n    navigator.clipboard.writeText(\"Dreta#6665\");\n}\n\ndocument.getElementById(\"email\").href = \"mai\" + \"lto:\" + \"hel\" + \"lo@\" + \"dre\" + \"ta.d\" + \"ev\";\ndocument.getElementById(\"discord\").onclick = copyDiscord;\ndocument.getElementById(\"discord\").ontouchend = copyDiscord;\n\n\n//# sourceURL=webpack://dreta-website/./index.js?");

/***/ }),

/***/ "./assets/styles.pcss":
/*!****************************!*\
  !*** ./assets/styles.pcss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dreta-website/./assets/styles.pcss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./assets/styles.pcss");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./index.js");
/******/ })()
;