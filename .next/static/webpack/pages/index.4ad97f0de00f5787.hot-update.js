"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/stores/useSolBalanceStore.tsx":
/*!*******************************************!*\
  !*** ./src/stores/useSolBalanceStore.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_loktioncode_Documents_GitHub_nft_auction_sol_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_loktioncode_Documents_GitHub_nft_auction_sol_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_loktioncode_Documents_GitHub_nft_auction_sol_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar useUserSOLBalanceStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(set, _get) {\n    return {\n        balance: 0,\n        getUserSOLBalance: (function() {\n            var _ref = _asyncToGenerator(_Users_loktioncode_Documents_GitHub_nft_auction_sol_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(publicKey, connection) {\n                var balance;\n                return _Users_loktioncode_Documents_GitHub_nft_auction_sol_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            balance = 0;\n                            _ctx.prev = 1;\n                            _ctx.next = 4;\n                            return connection.getBalance(publicKey, 'confirmed');\n                        case 4:\n                            balance = _ctx.sent;\n                            balance = balance;\n                            _ctx.next = 11;\n                            break;\n                        case 8:\n                            _ctx.prev = 8;\n                            _ctx.t0 = _ctx[\"catch\"](1);\n                            console.log(\"error getting balance: \", _ctx.t0);\n                        case 11:\n                            set(function(s) {\n                                s.balance = balance;\n                                console.log(\"balance updated, \", balance);\n                            });\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        1,\n                        8\n                    ]\n                ]);\n            }));\n            return function(publicKey, connection) {\n                return _ref.apply(this, arguments);\n            };\n        })()\n    };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useUserSOLBalanceStore);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmVzL3VzZVNvbEJhbGFuY2VTdG9yZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkMsR0FBSyxDQUFDQyxzQkFBc0IsR0FBR0QsbURBQU0sQ0FBc0IsUUFBUSxDQUFQRSxHQUFHLEVBQUVDLElBQUk7SUFBSyxNQUN2RSxDQUR3RSxDQUFDO1FBQzFFQyxPQUFPLEVBQUUsQ0FBQztRQUNWQyxpQkFBaUI7d01BQUUsUUFBUSxTQUFEQyxTQUFTLEVBQUVDLFVBQVUsRUFBSyxDQUFDO29CQUMvQ0gsT0FBTzs7Ozs0QkFBUEEsT0FBTyxHQUFHLENBQUM7OzttQ0FFR0csVUFBVSxDQUFDQyxVQUFVLENBQ25DRixTQUFTLEVBQ1QsQ0FBVzs7NEJBRmJGLE9BQU87NEJBSVBBLE9BQU8sR0FBR0EsT0FBTzs7Ozs7OzRCQUVqQkssT0FBTyxDQUFDQyxHQUFHLENBQUUsQ0FBdUI7OzRCQUV0Q1IsR0FBRyxDQUFDLFFBQVEsQ0FBUFMsQ0FBQyxFQUFLLENBQUM7Z0NBQ1ZBLENBQUMsQ0FBQ1AsT0FBTyxHQUFHQSxPQUFPO2dDQUNuQkssT0FBTyxDQUFDQyxHQUFHLENBQUUsQ0FBaUIsb0JBQUdOLE9BQU87NEJBQzFDLENBQUM7Ozs7Ozs7Ozs7O1lBQ0gsQ0FBQzs0QkFmeUJFLFNBQVMsRUFBRUMsVUFBVTs7OztJQWdCakQsQ0FBQzs7QUFFRCwrREFBZU4sc0JBQXNCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3Jlcy91c2VTb2xCYWxhbmNlU3RvcmUudHN4P2NmMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZSwgeyBTdGF0ZSB9IGZyb20gJ3p1c3RhbmQnXG5pbXBvcnQgeyBDb25uZWN0aW9uLCBQdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wgfSBmcm9tICdAc29sYW5hL3dlYjMuanMnXG5cbmludGVyZmFjZSBVc2VyU09MQmFsYW5jZVN0b3JlIGV4dGVuZHMgU3RhdGUge1xuICBiYWxhbmNlOiBudW1iZXI7XG4gIGdldFVzZXJTT0xCYWxhbmNlOiAocHVibGljS2V5OiBQdWJsaWNLZXksIGNvbm5lY3Rpb246IENvbm5lY3Rpb24pID0+IHZvaWRcbn1cblxuY29uc3QgdXNlVXNlclNPTEJhbGFuY2VTdG9yZSA9IGNyZWF0ZTxVc2VyU09MQmFsYW5jZVN0b3JlPigoc2V0LCBfZ2V0KSA9PiAoe1xuICBiYWxhbmNlOiAwLFxuICBnZXRVc2VyU09MQmFsYW5jZTogYXN5bmMgKHB1YmxpY0tleSwgY29ubmVjdGlvbikgPT4ge1xuICAgIGxldCBiYWxhbmNlID0gMDtcbiAgICB0cnkge1xuICAgICAgYmFsYW5jZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QmFsYW5jZShcbiAgICAgICAgcHVibGljS2V5LFxuICAgICAgICAnY29uZmlybWVkJ1xuICAgICAgKTtcbiAgICAgIGJhbGFuY2UgPSBiYWxhbmNlIDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgZXJyb3IgZ2V0dGluZyBiYWxhbmNlOiBgLCBlKTtcbiAgICB9XG4gICAgc2V0KChzKSA9PiB7XG4gICAgICBzLmJhbGFuY2UgPSBiYWxhbmNlO1xuICAgICAgY29uc29sZS5sb2coYGJhbGFuY2UgdXBkYXRlZCwgYCwgYmFsYW5jZSk7XG4gICAgfSlcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVXNlclNPTEJhbGFuY2VTdG9yZTsiXSwibmFtZXMiOlsiY3JlYXRlIiwidXNlVXNlclNPTEJhbGFuY2VTdG9yZSIsInNldCIsIl9nZXQiLCJiYWxhbmNlIiwiZ2V0VXNlclNPTEJhbGFuY2UiLCJwdWJsaWNLZXkiLCJjb25uZWN0aW9uIiwiZ2V0QmFsYW5jZSIsImNvbnNvbGUiLCJsb2ciLCJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/stores/useSolBalanceStore.tsx\n");

/***/ })

});