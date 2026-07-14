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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: \"localhost\",\n        port: 5432,\n        user: \"postgres\",\n        database: \"postgres\",\n        password: \"local_password\"\n    });\n    await client.connect();\n    const result = await client.query(queryObject);\n    await client.end();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQzlCLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDdEJJLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsVUFBVTtJQUNsQjtJQUNJLE1BQU1MLE9BQU9NLE9BQU87SUFDcEIsTUFBTUMsU0FBUyxNQUFNUCxPQUFPRixLQUFLLENBQUNDO0lBQ2xDLE1BQU1DLE9BQU9RLEdBQUc7SUFDaEIsT0FBT0Q7QUFDWDtBQUdBLGlFQUFlO0lBQ1hULE9BQU9BO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N1cnNvZGV2Ly4vaW5mcmEvZGF0YWJhc2UuanM/ZTM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdwZyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5KHF1ZXJ5T2JqZWN0KSB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7XG4gICAgICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgICAgIHBvcnQ6IDU0MzIsXG4gICAgICAgIHVzZXI6IFwicG9zdGdyZXNcIixcbiAgICAgICAgZGF0YWJhc2U6IFwicG9zdGdyZXNcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwibG9jYWxfcGFzc3dvcmRcIlxufSk7XG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkocXVlcnlPYmplY3QpO1xuICAgIGF3YWl0IGNsaWVudC5lbmQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBxdWVyeTogcXVlcnksXG59Il0sIm5hbWVzIjpbIkNsaWVudCIsInF1ZXJ5IiwicXVlcnlPYmplY3QiLCJjbGllbnQiLCJob3N0IiwicG9ydCIsInVzZXIiLCJkYXRhYmFzZSIsInBhc3N3b3JkIiwiY29ubmVjdCIsInJlc3VsdCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

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