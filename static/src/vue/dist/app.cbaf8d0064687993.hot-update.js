"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! papaparse */ \"./node_modules/papaparse/papaparse.min.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_3__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\nlet mapOptions = {\n  center: [40.0171, -83.0168],\n  zoom: 5\n};\nlet map = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().map)('OpenStreetMap', mapOptions);\nlet layer = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().TileLayer)('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\nmap.addLayer(layer);\nlet marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([40.0171, -83.0168]);\nmarker.addTo(map);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('tp.txt', (err, inputD) => {\n  if (err) throw err;\n  console.log(inputD.toString());\n});\npapaparse__WEBPACK_IMPORTED_MODULE_3___default().parse('/Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files/homedata.csv', {\n  download: true,\n  header: true,\n  complete: function (results) {\n    results.data.forEach(function (data) {\n      let lat = parseFloat(data.latitude);\n      let lng = parseFloat(data.longitude);\n      let marker = new (leaflet__WEBPACK_IMPORTED_MODULE_2___default().Marker)([lat, lng]);\n      marker.addTo(map);\n    });\n  }\n});\n\n// csv()\n//     .fromFile('/Users/sharyu/Documents/ICCLEProject/CapstoneProject/data_files/homedata.csv').then(response => response.text())\n//     .then((json) => {\n//         console.log(json);\n//         for (let i = 0; i < json.length; i++) {\n\n//         let marker = new L.Marker([json[i].latitude, json[i].longitude]);\n//         marker.addTo(map);\n//     }\n//   }).catch((err) => {\n//     console.log(err)\n//   })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvbWFpbi5qcz9mYmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJ1xuaW1wb3J0IEwgZnJvbSAnbGVhZmxldCdcbmltcG9ydCBQYXBhIGZyb20gJ3BhcGFwYXJzZSdcbmltcG9ydCBmcyBmcm9tICdmcydcblxuXG5cbmNyZWF0ZUFwcChBcHApLm1vdW50KCcjYXBwJylcbmxldCBtYXBPcHRpb25zID0ge1xuICAgIGNlbnRlcjpbNDAuMDE3MSwgLTgzLjAxNjhdLFxuICAgIHpvb206NVxufVxubGV0IG1hcCA9IG5ldyBMLm1hcCgnT3BlblN0cmVldE1hcCcgLCBtYXBPcHRpb25zKTtcblxubGV0IGxheWVyID0gbmV3IEwuVGlsZUxheWVyKCdodHRwOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJyk7XG5tYXAuYWRkTGF5ZXIobGF5ZXIpO1xuXG5sZXQgbWFya2VyID0gbmV3IEwuTWFya2VyKFs0MC4wMTcxLCAtODMuMDE2OF0pO1xuXG5tYXJrZXIuYWRkVG8obWFwKTtcblxuXG5mcy5yZWFkRmlsZSgndHAudHh0JywgKGVyciwgaW5wdXREKSA9PiB7XG4gICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICBjb25zb2xlLmxvZyhpbnB1dEQudG9TdHJpbmcoKSk7XG59KVxuXG5QYXBhLnBhcnNlKCcvVXNlcnMvc2hhcnl1L0RvY3VtZW50cy9JQ0NMRVByb2plY3QvQ2Fwc3RvbmVQcm9qZWN0L2RhdGFfZmlsZXMvaG9tZWRhdGEuY3N2Jywge1xuICAgIGRvd25sb2FkOiB0cnVlLFxuICAgIGhlYWRlcjogdHJ1ZSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgcmVzdWx0cy5kYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBsZXQgbGF0ID0gcGFyc2VGbG9hdChkYXRhLmxhdGl0dWRlKVxuICAgICAgICBsZXQgbG5nID0gcGFyc2VGbG9hdChkYXRhLmxvbmdpdHVkZSlcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBMLk1hcmtlcihbbGF0LCBsbmddKVxuICAgICAgICBtYXJrZXIuYWRkVG8obWFwKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbi8vIGNzdigpXG4vLyAgICAgLmZyb21GaWxlKCcvVXNlcnMvc2hhcnl1L0RvY3VtZW50cy9JQ0NMRVByb2plY3QvQ2Fwc3RvbmVQcm9qZWN0L2RhdGFfZmlsZXMvaG9tZWRhdGEuY3N2JykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4vLyAgICAgLnRoZW4oKGpzb24pID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuXG4vLyAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTC5NYXJrZXIoW2pzb25baV0ubGF0aXR1ZGUsIGpzb25baV0ubG9uZ2l0dWRlXSk7XG4vLyAgICAgICAgIG1hcmtlci5hZGRUbyhtYXApO1xuLy8gICAgIH1cbi8vICAgfSkuY2F0Y2goKGVycikgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGVycilcbi8vICAgfSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ed3dbb37762cae1d"; }
/******/ }();
/******/ 
/******/ }
);