"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./projects-section.tsx":
/*!******************************!*\
  !*** ./projects-section.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectsSection: function() { return /* binding */ ProjectsSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/badge */ \"(app-pages-browser)/./components/ui/badge.tsx\");\n/* harmony import */ var _barrel_optimize_names_ExternalLink_Github_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ExternalLink,Github!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/github.js\");\n/* harmony import */ var _barrel_optimize_names_ExternalLink_Github_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ExternalLink,Github!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/external-link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/section-header */ \"(app-pages-browser)/./components/section-header.tsx\");\n/* __next_internal_client_entry_do_not_use__ ProjectsSection auto */ \n\n\n\n\n\n\nfunction ProjectsSection() {\n    const container = {\n        hidden: {\n            opacity: 0\n        },\n        show: {\n            opacity: 1,\n            transition: {\n                staggerChildren: 0.1\n            }\n        }\n    };\n    const item = {\n        hidden: {\n            opacity: 0,\n            y: 20\n        },\n        show: {\n            opacity: 1,\n            y: 0\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects-section\",\n        className: \"py-12 md:py-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_header__WEBPACK_IMPORTED_MODULE_4__.SectionHeader, {\n                title: \"Featured Projects\",\n                subtitle: \"A selection of my recent work and personal projects\"\n            }, void 0, false, {\n                fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: \"grid gap-6 md:grid-cols-2\",\n                variants: container,\n                initial: \"hidden\",\n                whileInView: \"show\",\n                viewport: {\n                    amount: 0.2\n                },\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        variants: item,\n                        whileHover: {\n                            y: -5\n                        },\n                        transition: {\n                            duration: 0.2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                            className: \"group relative h-full overflow-hidden bg-[#1a365d]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#edf0fc]/10 transition-transform duration-500 group-hover:scale-150\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                                    className: \"relative space-y-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"space-y-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center gap-2\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-[rgb(204,214,246)]\",\n                                                            children: [\n                                                                \"0\",\n                                                                index + 1\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                                            lineNumber: 51,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {\n                                                            className: \"text-white\",\n                                                            children: project.title\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardDescription, {\n                                                    className: \"text-[rgb(204,214,246)]\",\n                                                    children: project.description\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-wrap gap-2\",\n                                            children: project.technologies.map((tech)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_2__.Badge, {\n                                                    variant: \"outline\",\n                                                    className: \"border-[#edf0fc] text-[rgb(204,214,246)]\",\n                                                    children: tech\n                                                }, tech, false, {\n                                                    fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 21\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                                    className: \"relative\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-4\",\n                                        children: [\n                                            project.github && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                href: project.github,\n                                                target: \"_blank\",\n                                                className: \"flex items-center gap-1 text-[rgb(204,214,246)] hover:text-white\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ExternalLink_Github_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        className: \"h-4 w-4\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"View Code\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 21\n                                            }, this),\n                                            project.live && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                href: project.live,\n                                                target: \"_blank\",\n                                                className: \"flex items-center gap-1 text-[rgb(204,214,246)] hover:text-white\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ExternalLink_Github_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                        className: \"h-4 w-4\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"Live Demo\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                                        lineNumber: 89,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    }, project.title, false, {\n                        fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anubhavgargwork/Desktop/SoftwareDevWork/new_portfolio_version/projects-section.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c = ProjectsSection;\nconst projects = [\n    {\n        title: \"Amploy\",\n        description: \"Helping employers amplify their hiring process with a job description improvement engine.\",\n        technologies: [\n            \"React\",\n            \"Node.js\",\n            \"Python\",\n            \"LangChain\",\n            \"\"\n        ],\n        github: \"https://github.com/username/project-two\"\n    },\n    {\n        title: \"RentScan\",\n        description: \"A data aggregation and analysis tool to help landlords price their apartment units\",\n        technologies: [\n            \"Django\",\n            \"Python\",\n            \"BigQuery\",\n            \"AWS\"\n        ],\n        github: \"https://github.com/username/project-three\"\n    },\n    {\n        title: \"Havenly\",\n        description: \"A month to month apartment rental platform with search and user authentication\",\n        technologies: [\n            \"React\",\n            \"Node.js\",\n            \"PostgreSQL\",\n            \"Tailwind CSS\"\n        ],\n        github: \"https://github.com/username/project-one\"\n    },\n    {\n        title: \"SES\",\n        description: \"SES stands for simple email scheduler. It takes inputs on a one page form to help users schedule email campaigns quickly\",\n        technologies: [\n            \"Python\",\n            \"Cron Jobs\",\n            \"Hertzner\",\n            \"Docker\"\n        ],\n        github: \"https://github.com/username/project-four\"\n    },\n    {\n        title: \"Candidate Scan\",\n        description: \"An API that takes a stackoverflow link and returns candidate information from multiple sources\",\n        technologies: [\n            \"Python\",\n            \"Google App Script\",\n            \"Supabase\",\n            \"Selenium\"\n        ],\n        github: \"https://github.com/garg-anubhav53/SOGHFunctionVercel\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3Byb2plY3RzLXNlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFc0M7QUFDMEQ7QUFDbkQ7QUFDb0I7QUFDckM7QUFDK0I7QUFFcEQsU0FBU1c7SUFDZCxNQUFNQyxZQUFZO1FBQ2hCQyxRQUFRO1lBQUVDLFNBQVM7UUFBRTtRQUNyQkMsTUFBTTtZQUNKRCxTQUFTO1lBQ1RFLFlBQVk7Z0JBQ1ZDLGlCQUFpQjtZQUNuQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxPQUFPO1FBQ1hMLFFBQVE7WUFBRUMsU0FBUztZQUFHSyxHQUFHO1FBQUc7UUFDNUJKLE1BQU07WUFBRUQsU0FBUztZQUFHSyxHQUFHO1FBQUU7SUFDM0I7SUFFQSxxQkFDRSw4REFBQ0M7UUFBUUMsSUFBRztRQUFtQkMsV0FBVTs7MEJBQ3ZDLDhEQUFDWixxRUFBYUE7Z0JBQ1phLE9BQU07Z0JBQ05DLFVBQVM7Ozs7OzswQkFFWCw4REFBQ3hCLGlEQUFNQSxDQUFDeUIsR0FBRztnQkFDVEgsV0FBVTtnQkFDVkksVUFBVWQ7Z0JBQ1ZlLFNBQVE7Z0JBQ1JDLGFBQVk7Z0JBQ1pDLFVBQVU7b0JBQUVDLFFBQVE7Z0JBQUk7MEJBRXZCQyxTQUFTQyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDbEMsaURBQU1BLENBQUN5QixHQUFHO3dCQUVUQyxVQUFVUjt3QkFDVmlCLFlBQVk7NEJBQUVoQixHQUFHLENBQUM7d0JBQUU7d0JBQ3BCSCxZQUFZOzRCQUFFb0IsVUFBVTt3QkFBSTtrQ0FFNUIsNEVBQUNuQyxxREFBSUE7NEJBQUNxQixXQUFVOzs4Q0FDZCw4REFBQ0c7b0NBQUlILFdBQVU7Ozs7Ozs4Q0FDZiw4REFBQ2xCLDJEQUFVQTtvQ0FBQ2tCLFdBQVU7O3NEQUNwQiw4REFBQ0c7NENBQUlILFdBQVU7OzhEQUNiLDhEQUFDRztvREFBSUgsV0FBVTs7c0VBQ2IsOERBQUNlOzREQUFLZixXQUFVOztnRUFBMEI7Z0VBQUVZLFFBQVE7Ozs7Ozs7c0VBQ3BELDhEQUFDN0IsMERBQVNBOzREQUFDaUIsV0FBVTtzRUFBY1csUUFBUVYsS0FBSzs7Ozs7Ozs7Ozs7OzhEQUVsRCw4REFBQ3BCLGdFQUFlQTtvREFBQ21CLFdBQVU7OERBQ3hCVyxRQUFRSyxXQUFXOzs7Ozs7Ozs7Ozs7c0RBR3hCLDhEQUFDYjs0Q0FBSUgsV0FBVTtzREFDWlcsUUFBUU0sWUFBWSxDQUFDUCxHQUFHLENBQUMsQ0FBQ1EscUJBQ3pCLDhEQUFDbEMsdURBQUtBO29EQUVKbUMsU0FBUTtvREFDUm5CLFdBQVU7OERBRVRrQjttREFKSUE7Ozs7Ozs7Ozs7Ozs7Ozs7OENBU2IsOERBQUN0Qyw0REFBV0E7b0NBQUNvQixXQUFVOzhDQUNyQiw0RUFBQ0c7d0NBQUlILFdBQVU7OzRDQUNaVyxRQUFRUyxNQUFNLGtCQUNiLDhEQUFDakMsaURBQUlBO2dEQUNIa0MsTUFBTVYsUUFBUVMsTUFBTTtnREFDcEJFLFFBQU87Z0RBQ1B0QixXQUFVOztrRUFFViw4REFBQ2QsK0ZBQU1BO3dEQUFDYyxXQUFVOzs7Ozs7a0VBQ2xCLDhEQUFDZTtrRUFBSzs7Ozs7Ozs7Ozs7OzRDQUdUSixRQUFRWSxJQUFJLGtCQUNYLDhEQUFDcEMsaURBQUlBO2dEQUNIa0MsTUFBTVYsUUFBUVksSUFBSTtnREFDbEJELFFBQU87Z0RBQ1B0QixXQUFVOztrRUFFViw4REFBQ2YsK0ZBQVlBO3dEQUFDZSxXQUFVOzs7Ozs7a0VBQ3hCLDhEQUFDZTtrRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBaERYSixRQUFRVixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBMkQ5QjtLQTFGZ0JaO0FBNEZoQixNQUFNb0IsV0FBVztJQUNmO1FBQ0VSLE9BQU87UUFDUGUsYUFBYTtRQUNiQyxjQUFjO1lBQUM7WUFBUztZQUFVO1lBQVU7WUFBYTtTQUFHO1FBQzVERyxRQUFRO0lBQ1Y7SUFDQTtRQUNFbkIsT0FBTztRQUNQZSxhQUFhO1FBQ2JDLGNBQWM7WUFBQztZQUFVO1lBQVU7WUFBWTtTQUFNO1FBQ3JERyxRQUFRO0lBQ1Y7SUFDQTtRQUNFbkIsT0FBTztRQUNQZSxhQUFhO1FBQ2JDLGNBQWM7WUFBQztZQUFTO1lBQVc7WUFBYztTQUFlO1FBQ2hFRyxRQUFRO0lBQ1Y7SUFDQTtRQUNFbkIsT0FBTztRQUNQZSxhQUFhO1FBQ2JDLGNBQWM7WUFBQztZQUFVO1lBQWE7WUFBWTtTQUFTO1FBQzNERyxRQUFRO0lBQ1Y7SUFDQTtRQUNFbkIsT0FBTztRQUNQZSxhQUFhO1FBQ2JDLGNBQWM7WUFBQztZQUFVO1lBQXFCO1lBQVk7U0FBVztRQUNyRUcsUUFBUTtJQUNWO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvamVjdHMtc2VjdGlvbi50c3g/MThmMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmREZXNjcmlwdGlvbiwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiXG5pbXBvcnQgeyBFeHRlcm5hbExpbmssIEdpdGh1YiwgQXJyb3dVcFJpZ2h0IH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0c1NlY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICAgIHNob3c6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaXRlbSA9IHtcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogMjAgfSxcbiAgICBzaG93OiB7IG9wYWNpdHk6IDEsIHk6IDAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInByb2plY3RzLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJweS0xMiBtZDpweS0xNlwiPlxuICAgICAgPFNlY3Rpb25IZWFkZXIgXG4gICAgICAgIHRpdGxlPVwiRmVhdHVyZWQgUHJvamVjdHNcIlxuICAgICAgICBzdWJ0aXRsZT1cIkEgc2VsZWN0aW9uIG9mIG15IHJlY2VudCB3b3JrIGFuZCBwZXJzb25hbCBwcm9qZWN0c1wiXG4gICAgICAvPlxuICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ2FwLTYgbWQ6Z3JpZC1jb2xzLTJcIlxuICAgICAgICB2YXJpYW50cz17Y29udGFpbmVyfVxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgdmlld3BvcnQ9e3sgYW1vdW50OiAwLjIgfX1cbiAgICAgID5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgIGtleT17cHJvamVjdC50aXRsZX0gXG4gICAgICAgICAgICB2YXJpYW50cz17aXRlbX1cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTUgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIGgtZnVsbCBvdmVyZmxvdy1oaWRkZW4gYmctWyMxYTM2NWRdXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXJpZ2h0LTIwIC10b3AtMjAgaC00MCB3LTQwIHJvdW5kZWQtZnVsbCBiZy1bI2VkZjBmY10vMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGdyb3VwLWhvdmVyOnNjYWxlLTE1MFwiIC8+XG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtW3JnYigyMDQsMjE0LDI0NildXCI+MHtpbmRleCArIDF9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57cHJvamVjdC50aXRsZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LVtyZ2IoMjA0LDIxNCwyNDYpXVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRlY2hub2xvZ2llcy5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17dGVjaH1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiIFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1bI2VkZjBmY10gdGV4dC1bcmdiKDIwNCwyMTQsMjQ2KV1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3RlY2h9XG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmdpdGh1YiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZ2l0aHVifVxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1bcmdiKDIwNCwyMTQsMjQ2KV0gaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8R2l0aHViIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlZpZXcgQ29kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmxpdmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0LmxpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LVtyZ2IoMjA0LDIxNCwyNDYpXSBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGl2ZSBEZW1vPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiQW1wbG95XCIsXG4gICAgZGVzY3JpcHRpb246IFwiSGVscGluZyBlbXBsb3llcnMgYW1wbGlmeSB0aGVpciBoaXJpbmcgcHJvY2VzcyB3aXRoIGEgam9iIGRlc2NyaXB0aW9uIGltcHJvdmVtZW50IGVuZ2luZS5cIixcbiAgICB0ZWNobm9sb2dpZXM6IFtcIlJlYWN0XCIsIFwiTm9kZS5qc1wiLFwiUHl0aG9uXCIsIFwiTGFuZ0NoYWluXCIsIFwiXCJdLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vdXNlcm5hbWUvcHJvamVjdC10d29cIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUmVudFNjYW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGRhdGEgYWdncmVnYXRpb24gYW5kIGFuYWx5c2lzIHRvb2wgdG8gaGVscCBsYW5kbG9yZHMgcHJpY2UgdGhlaXIgYXBhcnRtZW50IHVuaXRzXCIsXG4gICAgdGVjaG5vbG9naWVzOiBbXCJEamFuZ29cIiwgXCJQeXRob25cIiwgXCJCaWdRdWVyeVwiLCBcIkFXU1wiXSxcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3VzZXJuYW1lL3Byb2plY3QtdGhyZWVcIlxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiSGF2ZW5seVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgbW9udGggdG8gbW9udGggYXBhcnRtZW50IHJlbnRhbCBwbGF0Zm9ybSB3aXRoIHNlYXJjaCBhbmQgdXNlciBhdXRoZW50aWNhdGlvblwiLFxuICAgIHRlY2hub2xvZ2llczogW1wiUmVhY3RcIiwgXCJOb2RlLmpzXCIsIFwiUG9zdGdyZVNRTFwiLCBcIlRhaWx3aW5kIENTU1wiXSxcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3VzZXJuYW1lL3Byb2plY3Qtb25lXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNFU1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNFUyBzdGFuZHMgZm9yIHNpbXBsZSBlbWFpbCBzY2hlZHVsZXIuIEl0IHRha2VzIGlucHV0cyBvbiBhIG9uZSBwYWdlIGZvcm0gdG8gaGVscCB1c2VycyBzY2hlZHVsZSBlbWFpbCBjYW1wYWlnbnMgcXVpY2tseVwiLFxuICAgIHRlY2hub2xvZ2llczogW1wiUHl0aG9uXCIsIFwiQ3JvbiBKb2JzXCIsIFwiSGVydHpuZXJcIiwgXCJEb2NrZXJcIl0sXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS91c2VybmFtZS9wcm9qZWN0LWZvdXJcIlxuICB9LCBcbiAge1xuICAgIHRpdGxlOiBcIkNhbmRpZGF0ZSBTY2FuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW4gQVBJIHRoYXQgdGFrZXMgYSBzdGFja292ZXJmbG93IGxpbmsgYW5kIHJldHVybnMgY2FuZGlkYXRlIGluZm9ybWF0aW9uIGZyb20gbXVsdGlwbGUgc291cmNlc1wiLFxuICAgIHRlY2hub2xvZ2llczogW1wiUHl0aG9uXCIsIFwiR29vZ2xlIEFwcCBTY3JpcHRcIiwgXCJTdXBhYmFzZVwiLCBcIlNlbGVuaXVtXCJdLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vZ2FyZy1hbnViaGF2NTMvU09HSEZ1bmN0aW9uVmVyY2VsXCJcbiAgfVxuXVxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJCYWRnZSIsIkV4dGVybmFsTGluayIsIkdpdGh1YiIsIkxpbmsiLCJTZWN0aW9uSGVhZGVyIiwiUHJvamVjdHNTZWN0aW9uIiwiY29udGFpbmVyIiwiaGlkZGVuIiwib3BhY2l0eSIsInNob3ciLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwiaXRlbSIsInkiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInN1YnRpdGxlIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsImFtb3VudCIsInByb2plY3RzIiwibWFwIiwicHJvamVjdCIsImluZGV4Iiwid2hpbGVIb3ZlciIsImR1cmF0aW9uIiwic3BhbiIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwidGVjaCIsInZhcmlhbnQiLCJnaXRodWIiLCJocmVmIiwidGFyZ2V0IiwibGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./projects-section.tsx\n"));

/***/ })

});