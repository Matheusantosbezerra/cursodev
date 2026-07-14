"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v1/status";
exports.ids = ["pages/api/v1/status"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./infra/database.js":
/*!***************************!*\
  !*** ./infra/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    await client.connect();\n    const result = await client.query(queryObject);\n    await client.end();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQzlCLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDdEJJLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUMvQkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQy9CQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7UUFDL0JDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztRQUNqQ0MsVUFBVVQsUUFBUUMsR0FBRyxDQUFDUyxpQkFBaUI7SUFDL0M7SUFDSSxNQUFNWixPQUFPYSxPQUFPO0lBQ3BCLE1BQU1DLFNBQVMsTUFBTWQsT0FBT0YsS0FBSyxDQUFDQztJQUNsQyxNQUFNQyxPQUFPZSxHQUFHO0lBQ2hCLE9BQU9EO0FBQ1g7QUFHQSxpRUFBZTtJQUNYaEIsT0FBT0E7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3Vyc29kZXYvLi9pbmZyYS9kYXRhYmFzZS5qcz9lMzliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ3BnJztcblxuYXN5bmMgZnVuY3Rpb24gcXVlcnkocXVlcnlPYmplY3QpIHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHtcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfSE9TVCxcbiAgICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUE9SVCxcbiAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVNFUixcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlBPU1RHUkVTX0RCLFxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUEFTU1dPUkQsXG59KTtcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeU9iamVjdCk7XG4gICAgYXdhaXQgY2xpZW50LmVuZCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHF1ZXJ5OiBxdWVyeSxcbn0iXSwibmFtZXMiOlsiQ2xpZW50IiwicXVlcnkiLCJxdWVyeU9iamVjdCIsImNsaWVudCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNfSE9TVCIsInBvcnQiLCJQT1NUR1JFU19QT1JUIiwidXNlciIsIlBPU1RHUkVTX1VTRVIiLCJkYXRhYmFzZSIsIlBPU1RHUkVTX0RCIiwicGFzc3dvcmQiLCJQT1NUR1JFU19QQVNTV09SRCIsImNvbm5lY3QiLCJyZXN1bHQiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../infra/database.js */ \"(api)/./infra/database.js\");\n\nasync function status(request, response) {\n    const result = await _infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SELECT 1 + 1 as sum;\");\n    console.log(result.rows);\n    response.status(200).json({\n        chave: \"Bom dia\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9EO0FBRXBELGVBQWVDLE9BQU9DLE9BQU8sRUFBQ0MsUUFBUSxFQUFFO0lBQ3BDLE1BQU1DLFNBQVMsTUFBTUosZ0VBQWMsQ0FBQztJQUNwQ00sUUFBUUMsR0FBRyxDQUFDSCxPQUFPSSxJQUFJO0lBQ3ZCTCxTQUFTRixNQUFNLENBQUMsS0FBS1EsSUFBSSxDQUFDO1FBQUNDLE9BQU87SUFBUztBQUMvQztBQUNBLGlFQUFlVCxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3Vyc29kZXYvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzPzg0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9pbmZyYS9kYXRhYmFzZS5qc1wiXG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXR1cyhyZXF1ZXN0LHJlc3BvbnNlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGF0YWJhc2UucXVlcnkoJ1NFTEVDVCAxICsgMSBhcyBzdW07JylcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQucm93cylcbiAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHtjaGF2ZTogXCJCb20gZGlhXCJ9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0YXR1cztcblxuXG4iXSwibmFtZXMiOlsiZGF0YWJhc2UiLCJzdGF0dXMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJyZXN1bHQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJyb3dzIiwianNvbiIsImNoYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/status/index.js"));
module.exports = __webpack_exports__;

})();