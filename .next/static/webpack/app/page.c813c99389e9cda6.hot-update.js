/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Projects.tsx":
/*!*************************************!*\
  !*** ./src/components/Projects.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projects)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/components/ProjectCard.tsx\");\n/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/projects */ \"(app-pages-browser)/./src/data/projects.ts\");\n/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_projects__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Projects() {\n    const displayedProjects = _data_projects__WEBPACK_IMPORTED_MODULE_3__.projects.slice(0, 2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"mb-8 sm:mb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-bold mb-4 sm:mb-6 text-black dark:text-[#f0f6fc]\",\n                children: [\n                    \"Projects(\",\n                    _data_projects__WEBPACK_IMPORTED_MODULE_3__.projects.length,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/punyajain/Desktop/vs code/portfolio_pj/new copy/src/components/Projects.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6\",\n                children: displayedProjects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: project.title,\n                        description: project.description,\n                        thumbnail: project.thumbnail ? project.thumbnail : \"\",\n                        slug: project.slug,\n                        technologies: project.technologies\n                    }, project.slug, false, {\n                        fileName: \"/Users/punyajain/Desktop/vs code/portfolio_pj/new copy/src/components/Projects.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/punyajain/Desktop/vs code/portfolio_pj/new copy/src/components/Projects.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            _data_projects__WEBPACK_IMPORTED_MODULE_3__.projects.length > 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-6 sm:mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/projects\",\n                    className: \"px-4 sm:px-6 py-2 bg-gray-100 text-gray-800 dark:bg-[#21262d] dark:text-[#f0f6fc] rounded-lg hover:bg-gray-200 dark:hover:bg-[#30363d] transition-colors font-medium text-sm sm:text-base\",\n                    children: [\n                        \"View All Projects (\",\n                        _data_projects__WEBPACK_IMPORTED_MODULE_3__.projects.length,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/punyajain/Desktop/vs code/portfolio_pj/new copy/src/components/Projects.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/punyajain/Desktop/vs code/portfolio_pj/new copy/src/components/Projects.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/punyajain/Desktop/vs code/portfolio_pj/new copy/src/components/Projects.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBQ0k7QUFFN0IsU0FBU0c7SUFDdEIsTUFBTUMsb0JBQW9CRixvREFBUUEsQ0FBQ0csS0FBSyxDQUFDLEdBQUc7SUFFNUMscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUFnRTtvQkFBVUwsb0RBQVFBLENBQUNPLE1BQU07b0JBQUM7Ozs7Ozs7MEJBRXhHLDhEQUFDQztnQkFBSUgsV0FBVTswQkFDWkgsa0JBQWtCTyxHQUFHLENBQUMsQ0FBQ0Msd0JBQ3RCLDhEQUFDWCxvREFBV0E7d0JBRVZZLE9BQU9ELFFBQVFDLEtBQUs7d0JBQ3BCQyxhQUFhRixRQUFRRSxXQUFXO3dCQUNoQ0MsV0FBV0gsUUFBUUcsU0FBUyxHQUFFSCxRQUFRRyxTQUFTLEdBQUM7d0JBQ2hEQyxNQUFNSixRQUFRSSxJQUFJO3dCQUNsQkMsY0FBY0wsUUFBUUssWUFBWTt1QkFMN0JMLFFBQVFJLElBQUk7Ozs7Ozs7Ozs7WUFVdEJkLG9EQUFRQSxDQUFDTyxNQUFNLEdBQUcsbUJBQ2pCLDhEQUFDQztnQkFBSUgsV0FBVTswQkFDYiw0RUFBQ1Asa0RBQUlBO29CQUNIa0IsTUFBSztvQkFDTFgsV0FBVTs7d0JBQ1g7d0JBQ3FCTCxvREFBUUEsQ0FBQ08sTUFBTTt3QkFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhEO0tBaEN3Qk4iLCJzb3VyY2VzIjpbIi9Vc2Vycy9wdW55YWphaW4vRGVza3RvcC92cyBjb2RlL3BvcnRmb2xpb19wai9uZXcgY29weS9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tICcuL1Byb2plY3RDYXJkJztcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi4vZGF0YS9wcm9qZWN0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xuICBjb25zdCBkaXNwbGF5ZWRQcm9qZWN0cyA9IHByb2plY3RzLnNsaWNlKDAsIDIpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWItOCBzbTptYi0xMlwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTQgc206bWItNiB0ZXh0LWJsYWNrIGRhcms6dGV4dC1bI2YwZjZmY11cIj5Qcm9qZWN0cyh7cHJvamVjdHMubGVuZ3RofSk8L2gyPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTIgZ2FwLTQgc206Z2FwLTZcIj5cbiAgICAgICAge2Rpc3BsYXllZFByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAga2V5PXtwcm9qZWN0LnNsdWd9XG4gICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgdGh1bWJuYWlsPXtwcm9qZWN0LnRodW1ibmFpbD8gcHJvamVjdC50aHVtYm5haWw6XCJcIn1cbiAgICAgICAgICAgIHNsdWc9e3Byb2plY3Quc2x1Z31cbiAgICAgICAgICAgIHRlY2hub2xvZ2llcz17cHJvamVjdC50ZWNobm9sb2dpZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAge3Byb2plY3RzLmxlbmd0aCA+IDIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNiBzbTptdC04XCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvcHJvamVjdHNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBzbTpweC02IHB5LTIgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTgwMCBkYXJrOmJnLVsjMjEyNjJkXSBkYXJrOnRleHQtWyNmMGY2ZmNdIHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS0yMDAgZGFyazpob3ZlcjpiZy1bIzMwMzYzZF0gdHJhbnNpdGlvbi1jb2xvcnMgZm9udC1tZWRpdW0gdGV4dC1zbSBzbTp0ZXh0LWJhc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZXcgQWxsIFByb2plY3RzICh7cHJvamVjdHMubGVuZ3RofSlcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIlByb2plY3RDYXJkIiwicHJvamVjdHMiLCJQcm9qZWN0cyIsImRpc3BsYXllZFByb2plY3RzIiwic2xpY2UiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJsZW5ndGgiLCJkaXYiLCJtYXAiLCJwcm9qZWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRodW1ibmFpbCIsInNsdWciLCJ0ZWNobm9sb2dpZXMiLCJocmVmIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Projects.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/data/projects.ts":
/*!******************************!*\
  !*** ./src/data/projects.ts ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});