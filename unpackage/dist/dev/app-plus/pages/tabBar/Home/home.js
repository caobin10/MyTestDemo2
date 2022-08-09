"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************************************************************!*\
  !*** E:/uniappSource/MyTestDemo2/main.js?{"page":"pages%2FtabBar%2FHome%2Fhome"} ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_tabBar_Home_home_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/tabBar/Home/home.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_tabBar_Home_home_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_tabBar_Home_home_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/tabBar/Home/home'\n        _pages_tabBar_Home_home_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_tabBar_Home_home_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBbUU7QUFDbkUsUUFBUSxnRkFBRztBQUNYLFFBQVEsZ0ZBQUc7QUFDWCxRQUFRLGdGQUFHO0FBQ1gsZ0JBQWdCLGdGQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy90YWJCYXIvSG9tZS9ob21lLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3RhYkJhci9Ib21lL2hvbWUnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************************************************!*\
  !*** E:/uniappSource/MyTestDemo2/main.js?{"type":"appStyle"} ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************************************************************!*\
  !*** E:/uniappSource/MyTestDemo2/App.vue?vue&type=style&index=0&lang=scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniappSource/MyTestDemo2/App.vue?vue&type=style&index=0&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".u-line-1": {
    "": {
      "lines": [
        1,
        0,
        0,
        17
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        17
      ],
      "overflow": [
        "hidden",
        0,
        0,
        17
      ],
      "flex": [
        1,
        0,
        0,
        17
      ]
    }
  },
  ".u-line-2": {
    "": {
      "lines": [
        2,
        0,
        0,
        18
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        18
      ],
      "overflow": [
        "hidden",
        0,
        0,
        18
      ],
      "flex": [
        1,
        0,
        0,
        18
      ]
    }
  },
  ".u-line-3": {
    "": {
      "lines": [
        3,
        0,
        0,
        19
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        19
      ],
      "overflow": [
        "hidden",
        0,
        0,
        19
      ],
      "flex": [
        1,
        0,
        0,
        19
      ]
    }
  },
  ".u-line-4": {
    "": {
      "lines": [
        4,
        0,
        0,
        20
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        20
      ],
      "overflow": [
        "hidden",
        0,
        0,
        20
      ],
      "flex": [
        1,
        0,
        0,
        20
      ]
    }
  },
  ".u-line-5": {
    "": {
      "lines": [
        5,
        0,
        0,
        21
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        21
      ],
      "overflow": [
        "hidden",
        0,
        0,
        21
      ],
      "flex": [
        1,
        0,
        0,
        21
      ]
    }
  },
  ".u-border": {
    "": {
      "borderWidth": [
        "0.5",
        1,
        0,
        22
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        22
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        22
      ]
    }
  },
  ".u-border-top": {
    "": {
      "borderTopWidth": [
        "0.5",
        1,
        0,
        23
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        23
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        23
      ]
    }
  },
  ".u-border-left": {
    "": {
      "borderLeftWidth": [
        "0.5",
        1,
        0,
        24
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        24
      ],
      "borderLeftStyle": [
        "solid",
        0,
        0,
        24
      ]
    }
  },
  ".u-border-right": {
    "": {
      "borderRightWidth": [
        "0.5",
        1,
        0,
        25
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        25
      ],
      "borderRightStyle": [
        "solid",
        0,
        0,
        25
      ]
    }
  },
  ".u-border-bottom": {
    "": {
      "borderBottomWidth": [
        "0.5",
        1,
        0,
        26
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        26
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        26
      ]
    }
  },
  ".u-border-top-bottom": {
    "": {
      "borderTopWidth": [
        "0.5",
        1,
        0,
        27
      ],
      "borderBottomWidth": [
        "0.5",
        1,
        0,
        27
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        27
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        27
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        27
      ]
    }
  },
  ".u-reset-button": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        28
      ],
      "paddingRight": [
        0,
        0,
        0,
        28
      ],
      "paddingBottom": [
        0,
        0,
        0,
        28
      ],
      "paddingLeft": [
        0,
        0,
        0,
        28
      ],
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        28
      ],
      "borderWidth": [
        0,
        0,
        0,
        28
      ]
    }
  },
  ".u-hover-class": {
    "": {
      "opacity": [
        0.7,
        0,
        0,
        29
      ]
    }
  },
  ".u-primary-light": {
    "": {
      "color": [
        "#ecf5ff",
        0,
        0,
        30
      ]
    }
  },
  ".u-warning-light": {
    "": {
      "color": [
        "#fdf6ec",
        0,
        0,
        31
      ]
    }
  },
  ".u-success-light": {
    "": {
      "color": [
        "#f5fff0",
        0,
        0,
        32
      ]
    }
  },
  ".u-error-light": {
    "": {
      "color": [
        "#fef0f0",
        0,
        0,
        33
      ]
    }
  },
  ".u-info-light": {
    "": {
      "color": [
        "#f4f4f5",
        0,
        0,
        34
      ]
    }
  },
  ".u-primary-light-bg": {
    "": {
      "backgroundColor": [
        "#ecf5ff",
        0,
        0,
        35
      ]
    }
  },
  ".u-warning-light-bg": {
    "": {
      "backgroundColor": [
        "#fdf6ec",
        0,
        0,
        36
      ]
    }
  },
  ".u-success-light-bg": {
    "": {
      "backgroundColor": [
        "#f5fff0",
        0,
        0,
        37
      ]
    }
  },
  ".u-error-light-bg": {
    "": {
      "backgroundColor": [
        "#fef0f0",
        0,
        0,
        38
      ]
    }
  },
  ".u-info-light-bg": {
    "": {
      "backgroundColor": [
        "#f4f4f5",
        0,
        0,
        39
      ]
    }
  },
  ".u-primary-dark": {
    "": {
      "color": [
        "#398ade",
        0,
        0,
        40
      ]
    }
  },
  ".u-warning-dark": {
    "": {
      "color": [
        "#f1a532",
        0,
        0,
        41
      ]
    }
  },
  ".u-success-dark": {
    "": {
      "color": [
        "#53c21d",
        0,
        0,
        42
      ]
    }
  },
  ".u-error-dark": {
    "": {
      "color": [
        "#e45656",
        0,
        0,
        43
      ]
    }
  },
  ".u-info-dark": {
    "": {
      "color": [
        "#767a82",
        0,
        0,
        44
      ]
    }
  },
  ".u-primary-dark-bg": {
    "": {
      "backgroundColor": [
        "#398ade",
        0,
        0,
        45
      ]
    }
  },
  ".u-warning-dark-bg": {
    "": {
      "backgroundColor": [
        "#f1a532",
        0,
        0,
        46
      ]
    }
  },
  ".u-success-dark-bg": {
    "": {
      "backgroundColor": [
        "#53c21d",
        0,
        0,
        47
      ]
    }
  },
  ".u-error-dark-bg": {
    "": {
      "backgroundColor": [
        "#e45656",
        0,
        0,
        48
      ]
    }
  },
  ".u-info-dark-bg": {
    "": {
      "backgroundColor": [
        "#767a82",
        0,
        0,
        49
      ]
    }
  },
  ".u-primary-disabled": {
    "": {
      "color": [
        "#9acafc",
        0,
        0,
        50
      ]
    }
  },
  ".u-warning-disabled": {
    "": {
      "color": [
        "#f9d39b",
        0,
        0,
        51
      ]
    }
  },
  ".u-success-disabled": {
    "": {
      "color": [
        "#a9e08f",
        0,
        0,
        52
      ]
    }
  },
  ".u-error-disabled": {
    "": {
      "color": [
        "#f7b2b2",
        0,
        0,
        53
      ]
    }
  },
  ".u-info-disabled": {
    "": {
      "color": [
        "#c4c6c9",
        0,
        0,
        54
      ]
    }
  },
  ".u-primary": {
    "": {
      "color": [
        "#3c9cff",
        0,
        0,
        55
      ]
    }
  },
  ".u-warning": {
    "": {
      "color": [
        "#f9ae3d",
        0,
        0,
        56
      ]
    }
  },
  ".u-success": {
    "": {
      "color": [
        "#5ac725",
        0,
        0,
        57
      ]
    }
  },
  ".u-error": {
    "": {
      "color": [
        "#f56c6c",
        0,
        0,
        58
      ]
    }
  },
  ".u-info": {
    "": {
      "color": [
        "#909399",
        0,
        0,
        59
      ]
    }
  },
  ".u-primary-bg": {
    "": {
      "backgroundColor": [
        "#3c9cff",
        0,
        0,
        60
      ]
    }
  },
  ".u-warning-bg": {
    "": {
      "backgroundColor": [
        "#f9ae3d",
        0,
        0,
        61
      ]
    }
  },
  ".u-success-bg": {
    "": {
      "backgroundColor": [
        "#5ac725",
        0,
        0,
        62
      ]
    }
  },
  ".u-error-bg": {
    "": {
      "backgroundColor": [
        "#f56c6c",
        0,
        0,
        63
      ]
    }
  },
  ".u-info-bg": {
    "": {
      "backgroundColor": [
        "#909399",
        0,
        0,
        64
      ]
    }
  },
  ".u-main-color": {
    "": {
      "color": [
        "#303133",
        0,
        0,
        65
      ]
    }
  },
  ".u-content-color": {
    "": {
      "color": [
        "#606266",
        0,
        0,
        66
      ]
    }
  },
  ".u-tips-color": {
    "": {
      "color": [
        "#909193",
        0,
        0,
        67
      ]
    }
  },
  ".u-light-color": {
    "": {
      "color": [
        "#c0c4cc",
        0,
        0,
        68
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!***************************************************************************!*\
  !*** E:/uniappSource/MyTestDemo2/pages/tabBar/Home/home.nvue?mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_nvue_vue_type_template_id_0e4a5012_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.nvue?vue&type=template&id=0e4a5012&mpType=page */ 6);\n/* harmony import */ var _home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.nvue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./home.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 20).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./home.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 20).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _home_nvue_vue_type_template_id_0e4a5012_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _home_nvue_vue_type_template_id_0e4a5012_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"4d9ff19c\",\n  false,\n  _home_nvue_vue_type_template_id_0e4a5012_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/tabBar/Home/home.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQytLO0FBQy9LLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9ob21lLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGU0YTUwMTImbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2hvbWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9ob21lLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2hvbWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9ob21lLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL3VuaWFwcOi9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNGQ5ZmYxOWNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGFiQmFyL0hvbWUvaG9tZS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*********************************************************************************************************!*\
  !*** E:/uniappSource/MyTestDemo2/pages/tabBar/Home/home.nvue?vue&type=template&id=0e4a5012&mpType=page ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_template_id_0e4a5012_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.nvue?vue&type=template&id=0e4a5012&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_template_id_0e4a5012_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_template_id_0e4a5012_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_template_id_0e4a5012_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_template_id_0e4a5012_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniappSource/MyTestDemo2/pages/tabBar/Home/home.nvue?vue&type=template&id=0e4a5012&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uSwiper: __webpack_require__(/*! @/uni_modules/uview-ui/components/u-swiper/u-swiper.vue */ 8)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", { staticClass: ["u-page"] }, [
        _c(
          "view",
          { staticClass: ["u-demo-block"] },
          [
            _c(
              "u-swiper",
              {
                attrs: {
                  list: _vm.list,
                  radius: "5px",
                  autoplay: true,
                  circular: true
                },
                on: {
                  change: function(e) {
                    return (_vm.current = e.current)
                  }
                }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: ["indicator"],
                    attrs: { slot: "indicator" },
                    slot: "indicator"
                  },
                  _vm._l(_vm.list, function(item, index) {
                    return _c("view", {
                      key: index,
                      staticClass: ["indicator__dot"],
                      class: [index === _vm.current && "indicator__dot--active"]
                    })
                  }),
                  0
                )
              ]
            )
          ],
          1
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!*****************************************************************************************!*\
  !*** E:/uniappSource/MyTestDemo2/uni_modules/uview-ui/components/u-swiper/u-swiper.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _u_swiper_vue_vue_type_template_id_6b019429_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-swiper.vue?vue&type=template&id=6b019429&scoped=true& */ 9);\n/* harmony import */ var _u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-swiper.vue?vue&type=script&lang=js& */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./u-swiper.vue?vue&type=style&index=0&id=6b019429&lang=scss&scoped=true& */ 14).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./u-swiper.vue?vue&type=style&index=0&id=6b019429&lang=scss&scoped=true& */ 14).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _u_swiper_vue_vue_type_template_id_6b019429_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _u_swiper_vue_vue_type_template_id_6b019429_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6b019429\",\n  \"3f076951\",\n  false,\n  _u_swiper_vue_vue_type_template_id_6b019429_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uview-ui/components/u-swiper/u-swiper.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDNEQ7QUFDTDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtGQUEwRTtBQUM5SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0ZBQTBFO0FBQ25JOztBQUVBOztBQUVBO0FBQ2tMO0FBQ2xMLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91LXN3aXBlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmIwMTk0Mjkmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91LXN3aXBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Utc3dpcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3Utc3dpcGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZiMDE5NDI5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdS1zd2lwZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmIwMTk0MjkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vdW5pYXBw6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2YjAxOTQyOVwiLFxuICBcIjNmMDc2OTUxXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1zd2lwZXIvdS1zd2lwZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!************************************************************************************************************************************!*\
  !*** E:/uniappSource/MyTestDemo2/uni_modules/uview-ui/components/u-swiper/u-swiper.vue?vue&type=template&id=6b019429&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_template_id_6b019429_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-swiper.vue?vue&type=template&id=6b019429&scoped=true& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_template_id_6b019429_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_template_id_6b019429_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_template_id_6b019429_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_template_id_6b019429_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniappSource/MyTestDemo2/uni_modules/uview-ui/components/u-swiper/u-swiper.vue?vue&type=template&id=6b019429&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["u-swiper"],
      style: {
        backgroundColor: _vm.bgColor,
        height: _vm.$u.addUnit(_vm.height),
        borderRadius: _vm.$u.addUnit(_vm.radius)
      }
    },
    [
      _vm.loading
        ? _c(
            "view",
            { staticClass: ["u-swiper__loading"] },
            [_c("u-loading-icon", { attrs: { mode: "circle" } })],
            1
          )
        : _c(
            "swiper",
            {
              staticClass: ["u-swiper__wrapper"],
              style: {
                height: _vm.$u.addUnit(_vm.height)
              },
              attrs: {
                circular: _vm.circular,
                interval: _vm.interval,
                duration: _vm.duration,
                autoplay: _vm.autoplay,
                current: _vm.current,
                currentItemId: _vm.currentItemId,
                previousMargin: _vm.$u.addUnit(_vm.previousMargin),
                nextMargin: _vm.$u.addUnit(_vm.nextMargin),
                acceleration: _vm.acceleration,
                displayMultipleItems: _vm.displayMultipleItems,
                easingFunction: _vm.easingFunction
              },
              on: { change: _vm.change }
            },
            _vm._l(_vm.list, function(item, index) {
              return _c(
                "swiper-item",
                { key: index, staticClass: ["u-swiper__wrapper__item"] },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["u-swiper__wrapper__item__wrapper"],
                      style: [_vm.itemStyle(index)]
                    },
                    [
                      _vm.getItemType(item) === "image"
                        ? _c("u-image", {
                            staticClass: [
                              "u-swiper__wrapper__item__wrapper__image"
                            ],
                            style: {
                              height: _vm.$u.addUnit(_vm.height),
                              borderRadius: _vm.$u.addUnit(_vm.radius)
                            },
                            attrs: {
                              src: _vm.getSource(item),
                              mode: _vm.imgMode
                            },
                            on: {
                              click: function($event) {
                                _vm.clickHandler(index)
                              }
                            }
                          })
                        : _vm._e(),
                      _vm.getItemType(item) === "video"
                        ? _c("u-video", {
                            staticClass: [
                              "u-swiper__wrapper__item__wrapper__video"
                            ],
                            style: {
                              height: _vm.$u.addUnit(_vm.height)
                            },
                            attrs: {
                              id: "video-" + index,
                              enableProgressGesture: false,
                              src: _vm.getSource(item),
                              poster: _vm.getPoster(item),
                              title:
                                _vm.showTitle &&
                                _vm.$u.test.object(item) &&
                                item.title
                                  ? item.title
                                  : "",
                              controls: true
                            },
                            on: {
                              click: function($event) {
                                _vm.clickHandler(index)
                              }
                            }
                          })
                        : _vm._e(),
                      _vm.showTitle &&
                      _vm.$u.test.object(item) &&
                      item.title &&
                      _vm.$u.test.image(_vm.getSource(item))
                        ? _c(
                            "u-text",
                            {
                              staticClass: [
                                "u-swiper__wrapper__item__wrapper__title",
                                "u-line-1"
                              ],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v(_vm._s(item.title))]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ]
              )
            }),
            1
          ),
      _c(
        "view",
        {
          staticClass: ["u-swiper__indicator"],
          style: [_vm.$u.addStyle(_vm.indicatorStyle)]
        },
        [
          _vm._t("indicator", [
            !_vm.loading && _vm.indicator && !_vm.showTitle
              ? _c("u-swiper-indicator", {
                  attrs: {
                    indicatorActiveColor: _vm.indicatorActiveColor,
                    indicatorInactiveColor: _vm.indicatorInactiveColor,
                    length: _vm.list.length,
                    current: _vm.currentIndex,
                    indicatorMode: _vm.indicatorMode
                  }
                })
              : _vm._e()
          ])
        ],
        2
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!******************************************************************************************************************!*\
  !*** E:/uniappSource/MyTestDemo2/uni_modules/uview-ui/components/u-swiper/u-swiper.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-swiper.vue?vue&type=script&lang=js& */ 12);\n/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9kLENBQWdCLGllQUFHLEVBQUMiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL3VuaWFwcOi9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi91bmlhcHDova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi91bmlhcHDova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdS1zd2lwZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL3VuaWFwcOi9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi91bmlhcHDova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi91bmlhcHDova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdS1zd2lwZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniappSource/MyTestDemo2/uni_modules/uview-ui/components/u-swiper/u-swiper.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _props = _interopRequireDefault(__webpack_require__(/*! ./props.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\n * Swiper 轮播图\n * @description 该组件一般用于导航轮播，广告展示等场景,可开箱即用，\n * @tutorial https://www.uviewui.com/components/swiper.html\n * @property {Array}\t\t\tlist\t\t\t\t\t轮播图数据\n * @property {Boolean}\t\t\tindicator\t\t\t\t是否显示面板指示器（默认 false ）\n * @property {String}\t\t\tindicatorActiveColor\t指示器非激活颜色（默认 '#FFFFFF' ）\n * @property {String}\t\t\tindicatorInactiveColor\t指示器的激活颜色（默认 'rgba(255, 255, 255, 0.35)' ）\n * @property {String | Object}\tindicatorStyle\t\t\t指示器样式，可通过bottom，left，right进行定位\n * @property {String}\t\t\tindicatorMode\t\t\t指示器模式（默认 'line' ）\n * @property {Boolean}\t\t\tautoplay\t\t\t\t是否自动切换（默认 true ）\n * @property {String | Number}\tcurrent\t\t\t\t\t当前所在滑块的 index（默认 0 ）\n * @property {String}\t\t\tcurrentItemId\t\t\t当前所在滑块的 item-id ，不能与 current 被同时指定\n * @property {String | Number}\tinterval\t\t\t\t滑块自动切换时间间隔（ms）（默认 3000 ）\n * @property {String | Number}\tduration\t\t\t\t滑块切换过程所需时间（ms）（默认 300 ）\n * @property {Boolean}\t\t\tcircular\t\t\t\t播放到末尾后是否重新回到开头（默认 false ）\n * @property {String | Number}\tpreviousMargin\t\t\t前边距，可用于露出前一项的一小部分，nvue和支付宝不支持（默认 0 ）\n * @property {String | Number}\tnextMargin\t\t\t\t后边距，可用于露出后一项的一小部分，nvue和支付宝不支持（默认 0 ）\n * @property {Boolean}\t\t\tacceleration\t\t\t当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持（默认 false ）\n * @property {Number}\t\t\tdisplayMultipleItems\t同时显示的滑块数量，nvue、支付宝小程序不支持（默认 1 ）\n * @property {String}\t\t\teasingFunction\t\t\t指定swiper切换缓动动画类型， 只对微信小程序有效（默认 'default' ）\n * @property {String}\t\t\tkeyName\t\t\t\t\tlist数组中指定对象的目标属性名（默认 'url' ）\n * @property {String}\t\t\timgMode\t\t\t\t\t图片的裁剪模式（默认 'aspectFill' ）\n * @property {String | Number}\theight\t\t\t\t\t组件高度（默认 130 ）\n * @property {String}\t\t\tbgColor\t\t\t\t\t背景颜色（默认 \t'#f3f4f6' ）\n * @property {String | Number}\tradius\t\t\t\t\t组件圆角，数值或带单位的字符串（默认 4 ）\n * @property {Boolean}\t\t\tloading\t\t\t\t\t是否加载中（默认 false ）\n * @property {Boolean}\t\t\tshowTitle\t\t\t\t是否显示标题，要求数组对象中有title属性（默认 false ）\n * @event {Function(index)}\tclick\t点击轮播图时触发\tindex：点击了第几张图片，从0开始\n * @event {Function(index)}\tchange\t轮播图切换时触发(自动或者手动切换)\tindex：切换到了第几张图片，从0开始\n * @example\t<u-swiper :list=\"list4\" keyName=\"url\" :autoplay=\"false\"></u-swiper>\n */var _default = { name: 'u-swiper', mixins: [uni.$u.mpMixin, uni.$u.mixin, _props.default], data: function data() {return { currentIndex: 0 };}, watch: { current: function current(val, preVal) {if (val === preVal) return;this.currentIndex = val; // 和上游数据关联上\n    } }, computed: { itemStyle: function itemStyle() {return function (index) {var style = {};return style;};} }, methods: { getItemType: function getItemType(item) {if (typeof item === 'string') return uni.$u.test.video(this.getSource(item)) ? 'video' : 'image';if (typeof item === 'object' && this.keyName) {if (!item.type) return uni.$u.test.video(this.getSource(item)) ? 'video' : 'image';if (item.type === 'image') return 'image';if (item.type === 'video') return 'video';return 'image';}}, // 获取目标路径，可能数组中为字符串，对象的形式，额外可指定对象的目标属性名keyName\n    getSource: function getSource(item) {if (typeof item === 'string') return item;if (typeof item === 'object' && this.keyName) return item[this.keyName];else uni.$u.error('请按格式传递列表参数');return '';}, // 轮播切换事件\n    change: function change(e) {// 当前的激活索引\n      var current = e.detail.current;this.pauseVideo(this.currentIndex);this.currentIndex = current;this.$emit('change', e.detail);}, // 切换轮播时，暂停视频播放\n    pauseVideo: function pauseVideo(index) {var lastItem = this.getSource(this.list[index]);if (uni.$u.test.video(lastItem)) {// 当视频隐藏时，暂停播放\n        var video = uni.createVideoContext(\"video-\".concat(index), this);video.pause();}}, // 当一个轮播item为视频时，获取它的视频海报\n    getPoster: function getPoster(item) {return typeof item === 'object' && item.poster ? item.poster : '';}, // 点击某个item\n    clickHandler: function clickHandler(index) {this.$emit('click', index);} } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXN3aXBlci91LXN3aXBlci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RkEsK0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFnQ0EsRUFDQSxnQkFEQSxFQUVBLHNEQUZBLEVBR0EsSUFIQSxrQkFHQSxDQUNBLFNBQ0EsZUFEQSxHQUdBLENBUEEsRUFRQSxTQUNBLE9BREEsbUJBQ0EsR0FEQSxFQUNBLE1BREEsRUFDQSxDQUNBLDJCQUNBLHdCQUZBLENBRUE7QUFDQSxLQUpBLEVBUkEsRUFjQSxZQUNBLFNBREEsdUJBQ0EsQ0FDQSx5QkFDQSxlQVNBLGFBQ0EsQ0FYQSxDQVlBLENBZEEsRUFkQSxFQThCQSxXQUNBLFdBREEsdUJBQ0EsSUFEQSxFQUNBLENBQ0EsaUdBQ0EsK0NBQ0EsbUZBQ0EsMENBQ0EsMENBQ0EsZUFDQSxDQUNBLENBVEEsRUFVQTtBQUNBLGFBWEEscUJBV0EsSUFYQSxFQVdBLENBQ0EsMENBQ0EsNkVBQ0EsMkJBQ0EsVUFDQSxDQWhCQSxFQWlCQTtBQUNBLFVBbEJBLGtCQWtCQSxDQWxCQSxFQWtCQSxDQUNBO0FBREEsVUFHQSxPQUhBLEdBSUEsUUFKQSxDQUdBLE9BSEEsQ0FLQSxtQ0FDQSw0QkFDQSwrQkFDQSxDQTFCQSxFQTJCQTtBQUNBLGNBNUJBLHNCQTRCQSxLQTVCQSxFQTRCQSxDQUNBLGdEQUNBLGtDQUNBO0FBQ0EseUVBQ0EsY0FDQSxDQUNBLENBbkNBLEVBb0NBO0FBQ0EsYUFyQ0EscUJBcUNBLElBckNBLEVBcUNBLENBQ0Esa0VBQ0EsQ0F2Q0EsRUF3Q0E7QUFDQSxnQkF6Q0Esd0JBeUNBLEtBekNBLEVBeUNBLENBQ0EsMkJBQ0EsQ0EzQ0EsRUE5QkEsRSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlld1xyXG5cdFx0Y2xhc3M9XCJ1LXN3aXBlclwiXHJcblx0XHQ6c3R5bGU9XCJ7XHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogYmdDb2xvcixcclxuXHRcdFx0aGVpZ2h0OiAkdS5hZGRVbml0KGhlaWdodCksXHJcblx0XHRcdGJvcmRlclJhZGl1czogJHUuYWRkVW5pdChyYWRpdXMpXHJcblx0XHR9XCJcclxuXHQ+XHJcblx0XHQ8dmlld1xyXG5cdFx0XHRjbGFzcz1cInUtc3dpcGVyX19sb2FkaW5nXCJcclxuXHRcdFx0di1pZj1cImxvYWRpbmdcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8dS1sb2FkaW5nLWljb24gbW9kZT1cImNpcmNsZVwiPjwvdS1sb2FkaW5nLWljb24+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8c3dpcGVyXHJcblx0XHRcdHYtZWxzZVxyXG5cdFx0XHRjbGFzcz1cInUtc3dpcGVyX193cmFwcGVyXCJcclxuXHRcdFx0OnN0eWxlPVwie1xyXG5cdFx0XHRcdGhlaWdodDogJHUuYWRkVW5pdChoZWlnaHQpLFxyXG5cdFx0XHR9XCJcclxuXHRcdFx0QGNoYW5nZT1cImNoYW5nZVwiXHJcblx0XHRcdDpjaXJjdWxhcj1cImNpcmN1bGFyXCJcclxuXHRcdFx0OmludGVydmFsPVwiaW50ZXJ2YWxcIlxyXG5cdFx0XHQ6ZHVyYXRpb249XCJkdXJhdGlvblwiXHJcblx0XHRcdDphdXRvcGxheT1cImF1dG9wbGF5XCJcclxuXHRcdFx0OmN1cnJlbnQ9XCJjdXJyZW50XCJcclxuXHRcdFx0OmN1cnJlbnRJdGVtSWQ9XCJjdXJyZW50SXRlbUlkXCJcclxuXHRcdFx0OnByZXZpb3VzTWFyZ2luPVwiJHUuYWRkVW5pdChwcmV2aW91c01hcmdpbilcIlxyXG5cdFx0XHQ6bmV4dE1hcmdpbj1cIiR1LmFkZFVuaXQobmV4dE1hcmdpbilcIlxyXG5cdFx0XHQ6YWNjZWxlcmF0aW9uPVwiYWNjZWxlcmF0aW9uXCJcclxuXHRcdFx0OmRpc3BsYXlNdWx0aXBsZUl0ZW1zPVwiZGlzcGxheU11bHRpcGxlSXRlbXNcIlxyXG5cdFx0XHQ6ZWFzaW5nRnVuY3Rpb249XCJlYXNpbmdGdW5jdGlvblwiXHJcblx0XHQ+XHJcblx0XHRcdDxzd2lwZXItaXRlbVxyXG5cdFx0XHRcdGNsYXNzPVwidS1zd2lwZXJfX3dyYXBwZXJfX2l0ZW1cIlxyXG5cdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBsaXN0XCJcclxuXHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHZpZXdcclxuXHRcdFx0XHRcdGNsYXNzPVwidS1zd2lwZXJfX3dyYXBwZXJfX2l0ZW1fX3dyYXBwZXJcIlxyXG5cdFx0XHRcdFx0OnN0eWxlPVwiW2l0ZW1TdHlsZShpbmRleCldXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8IS0tIOWcqG52dWXkuK3vvIxpbWFnZeWbvueJh+eahOWuveW6pum7mOiupOS4uuWxj+W5leWuveW6pu+8jOmcgOimgemAmui/h2ZsZXg6MeaSkeW8gO+8jOWPpuWkluW/hemhu+iuvue9rumrmOW6puaJjeiDveaYvuekuuWbvueJhyAtLT5cclxuXHRcdFx0XHRcdDxpbWFnZVxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInUtc3dpcGVyX193cmFwcGVyX19pdGVtX193cmFwcGVyX19pbWFnZVwiXHJcblx0XHRcdFx0XHRcdHYtaWY9XCJnZXRJdGVtVHlwZShpdGVtKSA9PT0gJ2ltYWdlJ1wiXHJcblx0XHRcdFx0XHRcdDpzcmM9XCJnZXRTb3VyY2UoaXRlbSlcIlxyXG5cdFx0XHRcdFx0XHQ6bW9kZT1cImltZ01vZGVcIlxyXG5cdFx0XHRcdFx0XHRAdGFwPVwiY2xpY2tIYW5kbGVyKGluZGV4KVwiXHJcblx0XHRcdFx0XHRcdDpzdHlsZT1cIntcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICR1LmFkZFVuaXQoaGVpZ2h0KSxcclxuXHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICR1LmFkZFVuaXQocmFkaXVzKVxyXG5cdFx0XHRcdFx0XHR9XCJcclxuXHRcdFx0XHRcdD48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHZpZGVvXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwidS1zd2lwZXJfX3dyYXBwZXJfX2l0ZW1fX3dyYXBwZXJfX3ZpZGVvXCJcclxuXHRcdFx0XHRcdFx0di1pZj1cImdldEl0ZW1UeXBlKGl0ZW0pID09PSAndmlkZW8nXCJcclxuXHRcdFx0XHRcdFx0OmlkPVwiYHZpZGVvLSR7aW5kZXh9YFwiXHJcblx0XHRcdFx0XHRcdDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OnNyYz1cImdldFNvdXJjZShpdGVtKVwiXHJcblx0XHRcdFx0XHRcdDpwb3N0ZXI9XCJnZXRQb3N0ZXIoaXRlbSlcIlxyXG5cdFx0XHRcdFx0XHQ6dGl0bGU9XCJzaG93VGl0bGUgJiYgJHUudGVzdC5vYmplY3QoaXRlbSkgJiYgaXRlbS50aXRsZSA/IGl0ZW0udGl0bGUgOiAnJ1wiXHJcblx0XHRcdFx0XHRcdDpzdHlsZT1cIntcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICR1LmFkZFVuaXQoaGVpZ2h0KVxyXG5cdFx0XHRcdFx0XHR9XCJcclxuXHRcdFx0XHRcdFx0Y29udHJvbHNcclxuXHRcdFx0XHRcdFx0QHRhcD1cImNsaWNrSGFuZGxlcihpbmRleClcIlxyXG5cdFx0XHRcdFx0PjwvdmlkZW8+XHJcblx0XHRcdFx0XHQ8dGV4dFxyXG5cdFx0XHRcdFx0XHR2LWlmPVwic2hvd1RpdGxlICYmICR1LnRlc3Qub2JqZWN0KGl0ZW0pICYmIGl0ZW0udGl0bGUgJiYgJHUudGVzdC5pbWFnZShnZXRTb3VyY2UoaXRlbSkpXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ1LXN3aXBlcl9fd3JhcHBlcl9faXRlbV9fd3JhcHBlcl9fdGl0bGUgdS1saW5lLTFcIlxyXG5cdFx0XHRcdFx0Pnt7IGl0ZW0udGl0bGUgfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3N3aXBlci1pdGVtPlxyXG5cdFx0PC9zd2lwZXI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInUtc3dpcGVyX19pbmRpY2F0b3JcIiA6c3R5bGU9XCJbJHUuYWRkU3R5bGUoaW5kaWNhdG9yU3R5bGUpXVwiPlxyXG5cdFx0XHQ8c2xvdCBuYW1lPVwiaW5kaWNhdG9yXCI+XHJcblx0XHRcdFx0PHUtc3dpcGVyLWluZGljYXRvclxyXG5cdFx0XHRcdFx0di1pZj1cIiFsb2FkaW5nICYmIGluZGljYXRvciAmJiAhc2hvd1RpdGxlXCJcclxuXHRcdFx0XHRcdDppbmRpY2F0b3JBY3RpdmVDb2xvcj1cImluZGljYXRvckFjdGl2ZUNvbG9yXCJcclxuXHRcdFx0XHRcdDppbmRpY2F0b3JJbmFjdGl2ZUNvbG9yPVwiaW5kaWNhdG9ySW5hY3RpdmVDb2xvclwiXHJcblx0XHRcdFx0XHQ6bGVuZ3RoPVwibGlzdC5sZW5ndGhcIlxyXG5cdFx0XHRcdFx0OmN1cnJlbnQ9XCJjdXJyZW50SW5kZXhcIlxyXG5cdFx0XHRcdFx0OmluZGljYXRvck1vZGU9XCJpbmRpY2F0b3JNb2RlXCJcclxuXHRcdFx0XHQ+PC91LXN3aXBlci1pbmRpY2F0b3I+XHJcblx0XHRcdDwvc2xvdD5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBwcm9wcyBmcm9tICcuL3Byb3BzLmpzJztcclxuXHQvKipcclxuXHQgKiBTd2lwZXIg6L2u5pKt5Zu+XHJcblx0ICogQGRlc2NyaXB0aW9uIOivpee7hOS7tuS4gOiIrOeUqOS6juWvvOiIqui9ruaSre+8jOW5v+WRiuWxleekuuetieWcuuaZryzlj6/lvIDnrrHljbPnlKjvvIxcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly93d3cudXZpZXd1aS5jb20vY29tcG9uZW50cy9zd2lwZXIuaHRtbFxyXG5cdCAqIEBwcm9wZXJ0eSB7QXJyYXl9XHRcdFx0bGlzdFx0XHRcdFx0XHTova7mkq3lm77mlbDmja5cclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59XHRcdFx0aW5kaWNhdG9yXHRcdFx0XHTmmK/lkKbmmL7npLrpnaLmnb/mjIfnpLrlmajvvIjpu5jorqQgZmFsc2Ug77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0aW5kaWNhdG9yQWN0aXZlQ29sb3JcdOaMh+ekuuWZqOmdnua/gOa0u+minOiJsu+8iOm7mOiupCAnI0ZGRkZGRicg77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0aW5kaWNhdG9ySW5hY3RpdmVDb2xvclx05oyH56S65Zmo55qE5r+A5rS76aKc6Imy77yI6buY6K6kICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpJyDvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB8IE9iamVjdH1cdGluZGljYXRvclN0eWxlXHRcdFx05oyH56S65Zmo5qC35byP77yM5Y+v6YCa6L+HYm90dG9t77yMbGVmdO+8jHJpZ2h06L+b6KGM5a6a5L2NXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0aW5kaWNhdG9yTW9kZVx0XHRcdOaMh+ekuuWZqOaooeW8j++8iOm7mOiupCAnbGluZScg77yJXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufVx0XHRcdGF1dG9wbGF5XHRcdFx0XHTmmK/lkKboh6rliqjliIfmjaLvvIjpu5jorqQgdHJ1ZSDvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn1cdGN1cnJlbnRcdFx0XHRcdFx05b2T5YmN5omA5Zyo5ruR5Z2X55qEIGluZGV477yI6buY6K6kIDAg77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0Y3VycmVudEl0ZW1JZFx0XHRcdOW9k+WJjeaJgOWcqOa7keWdl+eahCBpdGVtLWlkIO+8jOS4jeiDveS4jiBjdXJyZW50IOiiq+WQjOaXtuaMh+WumlxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfVx0aW50ZXJ2YWxcdFx0XHRcdOa7keWdl+iHquWKqOWIh+aNouaXtumXtOmXtOmalO+8iG1z77yJ77yI6buY6K6kIDMwMDAg77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9XHRkdXJhdGlvblx0XHRcdFx05ruR5Z2X5YiH5o2i6L+H56iL5omA6ZyA5pe26Ze077yIbXPvvInvvIjpu5jorqQgMzAwIO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdFx0XHRjaXJjdWxhclx0XHRcdFx05pKt5pS+5Yiw5pyr5bC+5ZCO5piv5ZCm6YeN5paw5Zue5Yiw5byA5aS077yI6buY6K6kIGZhbHNlIO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfVx0cHJldmlvdXNNYXJnaW5cdFx0XHTliY3ovrnot53vvIzlj6/nlKjkuo7pnLLlh7rliY3kuIDpobnnmoTkuIDlsI/pg6jliIbvvIxudnVl5ZKM5pSv5LuY5a6d5LiN5pSv5oyB77yI6buY6K6kIDAg77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9XHRuZXh0TWFyZ2luXHRcdFx0XHTlkI7ovrnot53vvIzlj6/nlKjkuo7pnLLlh7rlkI7kuIDpobnnmoTkuIDlsI/pg6jliIbvvIxudnVl5ZKM5pSv5LuY5a6d5LiN5pSv5oyB77yI6buY6K6kIDAg77yJXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufVx0XHRcdGFjY2VsZXJhdGlvblx0XHRcdOW9k+W8gOWQr+aXtu+8jOS8muagueaNrua7keWKqOmAn+W6pu+8jOi/nue7rea7keWKqOWkmuWxj++8jOaUr+S7mOWuneS4jeaUr+aMge+8iOm7mOiupCBmYWxzZSDvvIlcclxuXHQgKiBAcHJvcGVydHkge051bWJlcn1cdFx0XHRkaXNwbGF5TXVsdGlwbGVJdGVtc1x05ZCM5pe25pi+56S655qE5ruR5Z2X5pWw6YeP77yMbnZ1ZeOAgeaUr+S7mOWuneWwj+eoi+W6j+S4jeaUr+aMge+8iOm7mOiupCAxIO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdGVhc2luZ0Z1bmN0aW9uXHRcdFx05oyH5a6ac3dpcGVy5YiH5o2i57yT5Yqo5Yqo55S757G75Z6L77yMIOWPquWvueW+ruS/oeWwj+eoi+W6j+acieaViO+8iOm7mOiupCAnZGVmYXVsdCcg77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9XHRcdFx0a2V5TmFtZVx0XHRcdFx0XHRsaXN05pWw57uE5Lit5oyH5a6a5a+56LGh55qE55uu5qCH5bGe5oCn5ZCN77yI6buY6K6kICd1cmwnIO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdGltZ01vZGVcdFx0XHRcdFx05Zu+54mH55qE6KOB5Ymq5qih5byP77yI6buY6K6kICdhc3BlY3RGaWxsJyDvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn1cdGhlaWdodFx0XHRcdFx0XHTnu4Tku7bpq5jluqbvvIjpu5jorqQgMTMwIO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfVx0XHRcdGJnQ29sb3JcdFx0XHRcdFx06IOM5pmv6aKc6Imy77yI6buY6K6kIFx0JyNmM2Y0ZjYnIO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfVx0cmFkaXVzXHRcdFx0XHRcdOe7hOS7tuWchuinku+8jOaVsOWAvOaIluW4puWNleS9jeeahOWtl+espuS4su+8iOm7mOiupCA0IO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn1cdFx0XHRsb2FkaW5nXHRcdFx0XHRcdOaYr+WQpuWKoOi9veS4re+8iOm7mOiupCBmYWxzZSDvvIlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59XHRcdFx0c2hvd1RpdGxlXHRcdFx0XHTmmK/lkKbmmL7npLrmoIfpopjvvIzopoHmsYLmlbDnu4Tlr7nosaHkuK3mnIl0aXRsZeWxnuaAp++8iOm7mOiupCBmYWxzZSDvvIlcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9uKGluZGV4KX1cdGNsaWNrXHTngrnlh7vova7mkq3lm77ml7bop6blj5FcdGluZGV477ya54K55Ye75LqG56ys5Yeg5byg5Zu+54mH77yM5LuOMOW8gOWni1xyXG5cdCAqIEBldmVudCB7RnVuY3Rpb24oaW5kZXgpfVx0Y2hhbmdlXHTova7mkq3lm77liIfmjaLml7bop6blj5Eo6Ieq5Yqo5oiW6ICF5omL5Yqo5YiH5o2iKVx0aW5kZXjvvJrliIfmjaLliLDkuobnrKzlh6DlvKDlm77niYfvvIzku44w5byA5aeLXHJcblx0ICogQGV4YW1wbGVcdDx1LXN3aXBlciA6bGlzdD1cImxpc3Q0XCIga2V5TmFtZT1cInVybFwiIDphdXRvcGxheT1cImZhbHNlXCI+PC91LXN3aXBlcj5cclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAndS1zd2lwZXInLFxyXG5cdFx0bWl4aW5zOiBbdW5pLiR1Lm1wTWl4aW4sIHVuaS4kdS5taXhpbiwgcHJvcHNdLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjdXJyZW50SW5kZXg6IDBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdGN1cnJlbnQodmFsLCBwcmVWYWwpIHtcclxuXHRcdFx0XHRpZih2YWwgPT09IHByZVZhbCkgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gdmFsOyAvLyDlkozkuIrmuLjmlbDmja7lhbPogZTkuIpcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGl0ZW1TdHlsZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gaW5kZXggPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3Qgc3R5bGUgPSB7fVxyXG5cdFx0XHRcdFx0Ly8gI2lmbmRlZiBBUFAtTlZVRSB8fCBNUC1UT1VUSUFPXHJcblx0XHRcdFx0XHQvLyDlt6blj7PmtYHlh7rnqbrpl7TnmoTlhpnms5XkuI3mlK/mjIFudnVl5ZKM5aS05p2hXHJcblx0XHRcdFx0XHQvLyDlj6rmnInphY3nva7kuobmraTkuozlgLzvvIzmiY3liqDkuIrlr7nlupTnmoTlnIbop5LvvIzku6Xlj4rnvKnmlL5cclxuXHRcdFx0XHRcdGlmICh0aGlzLm5leHRNYXJnaW4gJiYgdGhpcy5wcmV2aW91c01hcmdpbikge1xyXG5cdFx0XHRcdFx0XHRzdHlsZS5ib3JkZXJSYWRpdXMgPSB1bmkuJHUuYWRkVW5pdCh0aGlzLnJhZGl1cylcclxuXHRcdFx0XHRcdFx0aWYgKGluZGV4ICE9PSB0aGlzLmN1cnJlbnRJbmRleCkgc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDAuOTIpJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRyZXR1cm4gc3R5bGVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcbiAgICAgIGdldEl0ZW1UeXBlKGl0ZW0pIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSByZXR1cm4gdW5pLiR1LnRlc3QudmlkZW8odGhpcy5nZXRTb3VyY2UoaXRlbSkpID8gJ3ZpZGVvJyA6ICdpbWFnZSdcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIHRoaXMua2V5TmFtZSkge1xyXG4gICAgICAgICAgaWYgKCFpdGVtLnR5cGUpIHJldHVybiB1bmkuJHUudGVzdC52aWRlbyh0aGlzLmdldFNvdXJjZShpdGVtKSkgPyAndmlkZW8nIDogJ2ltYWdlJ1xyXG4gICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2ltYWdlJykgcmV0dXJuICdpbWFnZSdcclxuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICd2aWRlbycpIHJldHVybiAndmlkZW8nXHJcbiAgICAgICAgICByZXR1cm4gJ2ltYWdlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHRcdFx0Ly8g6I635Y+W55uu5qCH6Lev5b6E77yM5Y+v6IO95pWw57uE5Lit5Li65a2X56ym5Liy77yM5a+56LGh55qE5b2i5byP77yM6aKd5aSW5Y+v5oyH5a6a5a+56LGh55qE55uu5qCH5bGe5oCn5ZCNa2V5TmFtZVxyXG5cdFx0XHRnZXRTb3VyY2UoaXRlbSkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHJldHVybiBpdGVtXHJcblx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiB0aGlzLmtleU5hbWUpIHJldHVybiBpdGVtW3RoaXMua2V5TmFtZV1cclxuXHRcdFx0XHRlbHNlIHVuaS4kdS5lcnJvcign6K+35oyJ5qC85byP5Lyg6YCS5YiX6KGo5Y+C5pWwJylcclxuXHRcdFx0XHRyZXR1cm4gJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6L2u5pKt5YiH5o2i5LqL5Lu2XHJcblx0XHRcdGNoYW5nZShlKSB7XHJcblx0XHRcdFx0Ly8g5b2T5YmN55qE5r+A5rS757Si5byVXHJcblx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0Y3VycmVudFxyXG5cdFx0XHRcdH0gPSBlLmRldGFpbFxyXG5cdFx0XHRcdHRoaXMucGF1c2VWaWRlbyh0aGlzLmN1cnJlbnRJbmRleClcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IGN1cnJlbnRcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCBlLmRldGFpbClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YiH5o2i6L2u5pKt5pe277yM5pqC5YGc6KeG6aKR5pKt5pS+XHJcblx0XHRcdHBhdXNlVmlkZW8oaW5kZXgpIHtcclxuXHRcdFx0XHRjb25zdCBsYXN0SXRlbSA9IHRoaXMuZ2V0U291cmNlKHRoaXMubGlzdFtpbmRleF0pXHJcblx0XHRcdFx0aWYgKHVuaS4kdS50ZXN0LnZpZGVvKGxhc3RJdGVtKSkge1xyXG5cdFx0XHRcdFx0Ly8g5b2T6KeG6aKR6ZqQ6JeP5pe277yM5pqC5YGc5pKt5pS+XHJcblx0XHRcdFx0XHRjb25zdCB2aWRlbyA9IHVuaS5jcmVhdGVWaWRlb0NvbnRleHQoYHZpZGVvLSR7aW5kZXh9YCwgdGhpcylcclxuXHRcdFx0XHRcdHZpZGVvLnBhdXNlKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW9k+S4gOS4qui9ruaSrWl0ZW3kuLrop4bpopHml7bvvIzojrflj5blroPnmoTop4bpopHmtbfmiqVcclxuXHRcdFx0Z2V0UG9zdGVyKGl0ZW0pIHtcclxuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0ucG9zdGVyID8gaXRlbS5wb3N0ZXIgOiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vmn5DkuKppdGVtXHJcblx0XHRcdGNsaWNrSGFuZGxlcihpbmRleCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJywgaW5kZXgpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHRAaW1wb3J0IFwiLi4vLi4vbGlicy9jc3MvY29tcG9uZW50cy5zY3NzXCI7XHJcblxyXG5cdC51LXN3aXBlciB7XHJcblx0XHRAaW5jbHVkZSBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblx0XHQmX193cmFwcGVyIHtcclxuXHRcdFx0ZmxleDogMTtcclxuXHJcblx0XHRcdCZfX2l0ZW0ge1xyXG5cdFx0XHRcdGZsZXg6IDE7XHJcblxyXG5cdFx0XHRcdCZfX3dyYXBwZXIge1xyXG5cdFx0XHRcdFx0QGluY2x1ZGUgZmxleDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblxyXG5cdFx0XHRcdFx0Jl9faW1hZ2Uge1xyXG5cdFx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCZfX3ZpZGVvIHtcclxuXHRcdFx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQmX190aXRsZSB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cdFx0XHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMnJweCAyNHJweDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Jl9faW5kaWNhdG9yIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206IDEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*************************************************************************************!*\
  !*** E:/uniappSource/MyTestDemo2/uni_modules/uview-ui/components/u-swiper/props.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {\n  props: {\n    // 列表数组，元素可为字符串，如为对象可通过keyName指定目标属性名\n    list: {\n      type: Array,\n      default: uni.$u.props.swiper.list },\n\n    // 是否显示面板指示器\n    indicator: {\n      type: Boolean,\n      default: uni.$u.props.swiper.indicator },\n\n    // 指示器非激活颜色\n    indicatorActiveColor: {\n      type: String,\n      default: uni.$u.props.swiper.indicatorActiveColor },\n\n    // 指示器的激活颜色\n    indicatorInactiveColor: {\n      type: String,\n      default: uni.$u.props.swiper.indicatorInactiveColor },\n\n    // 指示器样式，可通过bottom，left，right进行定位\n    indicatorStyle: {\n      type: [String, Object],\n      default: uni.$u.props.swiper.indicatorStyle },\n\n    // 指示器模式，line-线型，dot-点型\n    indicatorMode: {\n      type: String,\n      default: uni.$u.props.swiper.indicatorMode },\n\n    // 是否自动切换\n    autoplay: {\n      type: Boolean,\n      default: uni.$u.props.swiper.autoplay },\n\n    // 当前所在滑块的 index\n    current: {\n      type: [String, Number],\n      default: uni.$u.props.swiper.current },\n\n    // 当前所在滑块的 item-id ，不能与 current 被同时指定\n    currentItemId: {\n      type: String,\n      default: uni.$u.props.swiper.currentItemId },\n\n    // 滑块自动切换时间间隔\n    interval: {\n      type: [String, Number],\n      default: uni.$u.props.swiper.interval },\n\n    // 滑块切换过程所需时间\n    duration: {\n      type: [String, Number],\n      default: uni.$u.props.swiper.duration },\n\n    // 播放到末尾后是否重新回到开头\n    circular: {\n      type: Boolean,\n      default: uni.$u.props.swiper.circular },\n\n    // 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持\n    previousMargin: {\n      type: [String, Number],\n      default: uni.$u.props.swiper.previousMargin },\n\n    // 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持\n    nextMargin: {\n      type: [String, Number],\n      default: uni.$u.props.swiper.nextMargin },\n\n    // 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持\n    acceleration: {\n      type: Boolean,\n      default: uni.$u.props.swiper.acceleration },\n\n    // 同时显示的滑块数量，nvue、支付宝小程序不支持\n    displayMultipleItems: {\n      type: Number,\n      default: uni.$u.props.swiper.displayMultipleItems },\n\n    // 指定swiper切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic\n    // 只对微信小程序有效\n    easingFunction: {\n      type: String,\n      default: uni.$u.props.swiper.easingFunction },\n\n    // list数组中指定对象的目标属性名\n    keyName: {\n      type: String,\n      default: uni.$u.props.swiper.keyName },\n\n    // 图片的裁剪模式\n    imgMode: {\n      type: String,\n      default: uni.$u.props.swiper.imgMode },\n\n    // 组件高度\n    height: {\n      type: [String, Number],\n      default: uni.$u.props.swiper.height },\n\n    // 背景颜色\n    bgColor: {\n      type: String,\n      default: uni.$u.props.swiper.bgColor },\n\n    // 组件圆角，数值或带单位的字符串\n    radius: {\n      type: [String, Number],\n      default: uni.$u.props.swiper.radius },\n\n    // 是否加载中\n    loading: {\n      type: Boolean,\n      default: uni.$u.props.swiper.loading },\n\n    // 是否显示标题，要求数组对象中有title属性\n    showTitle: {\n      type: Boolean,\n      default: uni.$u.props.swiper.showTitle } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdXZpZXctdWkvY29tcG9uZW50cy91LXN3aXBlci9wcm9wcy5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwidW5pIiwiJHUiLCJzd2lwZXIiLCJpbmRpY2F0b3IiLCJCb29sZWFuIiwiaW5kaWNhdG9yQWN0aXZlQ29sb3IiLCJTdHJpbmciLCJpbmRpY2F0b3JJbmFjdGl2ZUNvbG9yIiwiaW5kaWNhdG9yU3R5bGUiLCJPYmplY3QiLCJpbmRpY2F0b3JNb2RlIiwiYXV0b3BsYXkiLCJjdXJyZW50IiwiTnVtYmVyIiwiY3VycmVudEl0ZW1JZCIsImludGVydmFsIiwiZHVyYXRpb24iLCJjaXJjdWxhciIsInByZXZpb3VzTWFyZ2luIiwibmV4dE1hcmdpbiIsImFjY2VsZXJhdGlvbiIsImRpc3BsYXlNdWx0aXBsZUl0ZW1zIiwiZWFzaW5nRnVuY3Rpb24iLCJrZXlOYW1lIiwiaW1nTW9kZSIsImhlaWdodCIsImJnQ29sb3IiLCJyYWRpdXMiLCJsb2FkaW5nIiwic2hvd1RpdGxlIl0sIm1hcHBpbmdzIjoic0dBQWU7QUFDWEEsT0FBSyxFQUFFO0FBQ0g7QUFDQUMsUUFBSSxFQUFFO0FBQ0ZDLFVBQUksRUFBRUMsS0FESjtBQUVGQyxhQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBSixDQUFPTixLQUFQLENBQWFPLE1BQWIsQ0FBb0JOLElBRjNCLEVBRkg7O0FBTUg7QUFDQU8sYUFBUyxFQUFFO0FBQ1BOLFVBQUksRUFBRU8sT0FEQztBQUVQTCxhQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBSixDQUFPTixLQUFQLENBQWFPLE1BQWIsQ0FBb0JDLFNBRnRCLEVBUFI7O0FBV0g7QUFDQUUsd0JBQW9CLEVBQUU7QUFDbEJSLFVBQUksRUFBRVMsTUFEWTtBQUVsQlAsYUFBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUosQ0FBT04sS0FBUCxDQUFhTyxNQUFiLENBQW9CRyxvQkFGWCxFQVpuQjs7QUFnQkg7QUFDQUUsMEJBQXNCLEVBQUU7QUFDcEJWLFVBQUksRUFBRVMsTUFEYztBQUVwQlAsYUFBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUosQ0FBT04sS0FBUCxDQUFhTyxNQUFiLENBQW9CSyxzQkFGVCxFQWpCckI7O0FBcUJIO0FBQ0FDLGtCQUFjLEVBQUU7QUFDWlgsVUFBSSxFQUFFLENBQUNTLE1BQUQsRUFBU0csTUFBVCxDQURNO0FBRVpWLGFBQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFKLENBQU9OLEtBQVAsQ0FBYU8sTUFBYixDQUFvQk0sY0FGakIsRUF0QmI7O0FBMEJIO0FBQ0FFLGlCQUFhLEVBQUU7QUFDWGIsVUFBSSxFQUFFUyxNQURLO0FBRVhQLGFBQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFKLENBQU9OLEtBQVAsQ0FBYU8sTUFBYixDQUFvQlEsYUFGbEIsRUEzQlo7O0FBK0JIO0FBQ0FDLFlBQVEsRUFBRTtBQUNOZCxVQUFJLEVBQUVPLE9BREE7QUFFTkwsYUFBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUosQ0FBT04sS0FBUCxDQUFhTyxNQUFiLENBQW9CUyxRQUZ2QixFQWhDUDs7QUFvQ0g7QUFDQUMsV0FBTyxFQUFFO0FBQ0xmLFVBQUksRUFBRSxDQUFDUyxNQUFELEVBQVNPLE1BQVQsQ0FERDtBQUVMZCxhQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBSixDQUFPTixLQUFQLENBQWFPLE1BQWIsQ0FBb0JVLE9BRnhCLEVBckNOOztBQXlDSDtBQUNBRSxpQkFBYSxFQUFFO0FBQ1hqQixVQUFJLEVBQUVTLE1BREs7QUFFWFAsYUFBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUosQ0FBT04sS0FBUCxDQUFhTyxNQUFiLENBQW9CWSxhQUZsQixFQTFDWjs7QUE4Q0g7QUFDQUMsWUFBUSxFQUFFO0FBQ05sQixVQUFJLEVBQUUsQ0FBQ1MsTUFBRCxFQUFTTyxNQUFULENBREE7QUFFTmQsYUFBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUosQ0FBT04sS0FBUCxDQUFhTyxNQUFiLENBQW9CYSxRQUZ2QixFQS9DUDs7QUFtREg7QUFDQUMsWUFBUSxFQUFFO0FBQ05uQixVQUFJLEVBQUUsQ0FBQ1MsTUFBRCxFQUFTTyxNQUFULENBREE7QUFFTmQsYUFBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUosQ0FBT04sS0FBUCxDQUFhTyxNQUFiLENBQW9CYyxRQUZ2QixFQXBEUDs7QUF3REg7QUFDQUMsWUFBUSxFQUFFO0FBQ05wQixVQUFJLEVBQUVPLE9BREE7QUFFTkwsYUFBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUosQ0FBT04sS0FBUCxDQUFhTyxNQUFiLENBQW9CZSxRQUZ2QixFQXpEUDs7QUE2REg7QUFDQUMsa0JBQWMsRUFBRTtBQUNackIsVUFBSSxFQUFFLENBQUNTLE1BQUQsRUFBU08sTUFBVCxDQURNO0FBRVpkLGFBQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFKLENBQU9OLEtBQVAsQ0FBYU8sTUFBYixDQUFvQmdCLGNBRmpCLEVBOURiOztBQWtFSDtBQUNBQyxjQUFVLEVBQUU7QUFDUnRCLFVBQUksRUFBRSxDQUFDUyxNQUFELEVBQVNPLE1BQVQsQ0FERTtBQUVSZCxhQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBSixDQUFPTixLQUFQLENBQWFPLE1BQWIsQ0FBb0JpQixVQUZyQixFQW5FVDs7QUF1RUg7QUFDQUMsZ0JBQVksRUFBRTtBQUNWdkIsVUFBSSxFQUFFTyxPQURJO0FBRVZMLGFBQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFKLENBQU9OLEtBQVAsQ0FBYU8sTUFBYixDQUFvQmtCLFlBRm5CLEVBeEVYOztBQTRFSDtBQUNBQyx3QkFBb0IsRUFBRTtBQUNsQnhCLFVBQUksRUFBRWdCLE1BRFk7QUFFbEJkLGFBQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFKLENBQU9OLEtBQVAsQ0FBYU8sTUFBYixDQUFvQm1CLG9CQUZYLEVBN0VuQjs7QUFpRkg7QUFDQTtBQUNBQyxrQkFBYyxFQUFFO0FBQ1p6QixVQUFJLEVBQUVTLE1BRE07QUFFWlAsYUFBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUosQ0FBT04sS0FBUCxDQUFhTyxNQUFiLENBQW9Cb0IsY0FGakIsRUFuRmI7O0FBdUZIO0FBQ0FDLFdBQU8sRUFBRTtBQUNMMUIsVUFBSSxFQUFFUyxNQUREO0FBRUxQLGFBQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFKLENBQU9OLEtBQVAsQ0FBYU8sTUFBYixDQUFvQnFCLE9BRnhCLEVBeEZOOztBQTRGSDtBQUNBQyxXQUFPLEVBQUU7QUFDTDNCLFVBQUksRUFBRVMsTUFERDtBQUVMUCxhQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBSixDQUFPTixLQUFQLENBQWFPLE1BQWIsQ0FBb0JzQixPQUZ4QixFQTdGTjs7QUFpR0g7QUFDQUMsVUFBTSxFQUFFO0FBQ0o1QixVQUFJLEVBQUUsQ0FBQ1MsTUFBRCxFQUFTTyxNQUFULENBREY7QUFFSmQsYUFBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUosQ0FBT04sS0FBUCxDQUFhTyxNQUFiLENBQW9CdUIsTUFGekIsRUFsR0w7O0FBc0dIO0FBQ0FDLFdBQU8sRUFBRTtBQUNMN0IsVUFBSSxFQUFFUyxNQUREO0FBRUxQLGFBQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFKLENBQU9OLEtBQVAsQ0FBYU8sTUFBYixDQUFvQndCLE9BRnhCLEVBdkdOOztBQTJHSDtBQUNBQyxVQUFNLEVBQUU7QUFDSjlCLFVBQUksRUFBRSxDQUFDUyxNQUFELEVBQVNPLE1BQVQsQ0FERjtBQUVKZCxhQUFPLEVBQUVDLEdBQUcsQ0FBQ0MsRUFBSixDQUFPTixLQUFQLENBQWFPLE1BQWIsQ0FBb0J5QixNQUZ6QixFQTVHTDs7QUFnSEg7QUFDQUMsV0FBTyxFQUFFO0FBQ0wvQixVQUFJLEVBQUVPLE9BREQ7QUFFTEwsYUFBTyxFQUFFQyxHQUFHLENBQUNDLEVBQUosQ0FBT04sS0FBUCxDQUFhTyxNQUFiLENBQW9CMEIsT0FGeEIsRUFqSE47O0FBcUhIO0FBQ0FDLGFBQVMsRUFBRTtBQUNQaEMsVUFBSSxFQUFFTyxPQURDO0FBRVBMLGFBQU8sRUFBRUMsR0FBRyxDQUFDQyxFQUFKLENBQU9OLEtBQVAsQ0FBYU8sTUFBYixDQUFvQjJCLFNBRnRCLEVBdEhSLEVBREksRSIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgLy8g5YiX6KGo5pWw57uE77yM5YWD57Sg5Y+v5Li65a2X56ym5Liy77yM5aaC5Li65a+56LGh5Y+v6YCa6L+Ha2V5TmFtZeaMh+Wumuebruagh+WxnuaAp+WQjVxyXG4gICAgICAgIGxpc3Q6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5zd2lwZXIubGlzdFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5piv5ZCm5pi+56S66Z2i5p2/5oyH56S65ZmoXHJcbiAgICAgICAgaW5kaWNhdG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5zd2lwZXIuaW5kaWNhdG9yXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmjIfnpLrlmajpnZ7mv4DmtLvpopzoibJcclxuICAgICAgICBpbmRpY2F0b3JBY3RpdmVDb2xvcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5zd2lwZXIuaW5kaWNhdG9yQWN0aXZlQ29sb3JcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaMh+ekuuWZqOeahOa/gOa0u+minOiJslxyXG4gICAgICAgIGluZGljYXRvckluYWN0aXZlQ29sb3I6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuc3dpcGVyLmluZGljYXRvckluYWN0aXZlQ29sb3JcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaMh+ekuuWZqOagt+W8j++8jOWPr+mAmui/h2JvdHRvbe+8jGxlZnTvvIxyaWdodOi/m+ihjOWumuS9jVxyXG4gICAgICAgIGluZGljYXRvclN0eWxlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5zd2lwZXIuaW5kaWNhdG9yU3R5bGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaMh+ekuuWZqOaooeW8j++8jGxpbmUt57q/5Z6L77yMZG90LeeCueWei1xyXG4gICAgICAgIGluZGljYXRvck1vZGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuc3dpcGVyLmluZGljYXRvck1vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaYr+WQpuiHquWKqOWIh+aNolxyXG4gICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5zd2lwZXIuYXV0b3BsYXlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOW9k+WJjeaJgOWcqOa7keWdl+eahCBpbmRleFxyXG4gICAgICAgIGN1cnJlbnQ6IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLnN3aXBlci5jdXJyZW50XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlvZPliY3miYDlnKjmu5HlnZfnmoQgaXRlbS1pZCDvvIzkuI3og73kuI4gY3VycmVudCDooqvlkIzml7bmjIflrppcclxuICAgICAgICBjdXJyZW50SXRlbUlkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLnN3aXBlci5jdXJyZW50SXRlbUlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmu5HlnZfoh6rliqjliIfmjaLml7bpl7Tpl7TpmpRcclxuICAgICAgICBpbnRlcnZhbDoge1xyXG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuc3dpcGVyLmludGVydmFsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmu5HlnZfliIfmjaLov4fnqIvmiYDpnIDml7bpl7RcclxuICAgICAgICBkdXJhdGlvbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuc3dpcGVyLmR1cmF0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmkq3mlL7liLDmnKvlsL7lkI7mmK/lkKbph43mlrDlm57liLDlvIDlpLRcclxuICAgICAgICBjaXJjdWxhcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuc3dpcGVyLmNpcmN1bGFyXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDliY3ovrnot53vvIzlj6/nlKjkuo7pnLLlh7rliY3kuIDpobnnmoTkuIDlsI/pg6jliIbvvIxudnVl5ZKM5pSv5LuY5a6d5LiN5pSv5oyBXHJcbiAgICAgICAgcHJldmlvdXNNYXJnaW46IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLnN3aXBlci5wcmV2aW91c01hcmdpblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5ZCO6L656Led77yM5Y+v55So5LqO6Zyy5Ye65ZCO5LiA6aG555qE5LiA5bCP6YOo5YiG77yMbnZ1ZeWSjOaUr+S7mOWuneS4jeaUr+aMgVxyXG4gICAgICAgIG5leHRNYXJnaW46IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLnN3aXBlci5uZXh0TWFyZ2luXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlvZPlvIDlkK/ml7bvvIzkvJrmoLnmja7mu5HliqjpgJ/luqbvvIzov57nu63mu5HliqjlpJrlsY/vvIzmlK/ku5jlrp3kuI3mlK/mjIFcclxuICAgICAgICBhY2NlbGVyYXRpb246IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLnN3aXBlci5hY2NlbGVyYXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOWQjOaXtuaYvuekuueahOa7keWdl+aVsOmHj++8jG52dWXjgIHmlK/ku5jlrp3lsI/nqIvluo/kuI3mlK/mjIFcclxuICAgICAgICBkaXNwbGF5TXVsdGlwbGVJdGVtczoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5zd2lwZXIuZGlzcGxheU11bHRpcGxlSXRlbXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaMh+WumnN3aXBlcuWIh+aNoue8k+WKqOWKqOeUu+exu+Wei++8jOacieaViOWAvO+8mmRlZmF1bHTjgIFsaW5lYXLjgIFlYXNlSW5DdWJpY+OAgWVhc2VPdXRDdWJpY+OAgWVhc2VJbk91dEN1YmljXHJcbiAgICAgICAgLy8g5Y+q5a+55b6u5L+h5bCP56iL5bqP5pyJ5pWIXHJcbiAgICAgICAgZWFzaW5nRnVuY3Rpb246IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuc3dpcGVyLmVhc2luZ0Z1bmN0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBsaXN05pWw57uE5Lit5oyH5a6a5a+56LGh55qE55uu5qCH5bGe5oCn5ZCNXHJcbiAgICAgICAga2V5TmFtZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5zd2lwZXIua2V5TmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5Zu+54mH55qE6KOB5Ymq5qih5byPXHJcbiAgICAgICAgaW1nTW9kZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5zd2lwZXIuaW1nTW9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g57uE5Lu26auY5bqmXHJcbiAgICAgICAgaGVpZ2h0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHVuaS4kdS5wcm9wcy5zd2lwZXIuaGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDog4zmma/popzoibJcclxuICAgICAgICBiZ0NvbG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLnN3aXBlci5iZ0NvbG9yXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDnu4Tku7blnIbop5LvvIzmlbDlgLzmiJbluKbljZXkvY3nmoTlrZfnrKbkuLJcclxuICAgICAgICByYWRpdXM6IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLnN3aXBlci5yYWRpdXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaYr+WQpuWKoOi9veS4rVxyXG4gICAgICAgIGxvYWRpbmc6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgZGVmYXVsdDogdW5pLiR1LnByb3BzLnN3aXBlci5sb2FkaW5nXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmmK/lkKbmmL7npLrmoIfpopjvvIzopoHmsYLmlbDnu4Tlr7nosaHkuK3mnIl0aXRsZeWxnuaAp1xyXG4gICAgICAgIHNob3dUaXRsZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmkuJHUucHJvcHMuc3dpcGVyLnNob3dUaXRsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***************************************************************************************************************************************************!*\
  !*** E:/uniappSource/MyTestDemo2/uni_modules/uview-ui/components/u-swiper/u-swiper.vue?vue&type=style&index=0&id=6b019429&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_style_index_0_id_6b019429_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-swiper.vue?vue&type=style&index=0&id=6b019429&lang=scss&scoped=true& */ 15);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_style_index_0_id_6b019429_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_style_index_0_id_6b019429_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_style_index_0_id_6b019429_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_style_index_0_id_6b019429_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_swiper_vue_vue_type_style_index_0_id_6b019429_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniappSource/MyTestDemo2/uni_modules/uview-ui/components/u-swiper/u-swiper.vue?vue&type=style&index=0&id=6b019429&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".u-swiper": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        16
      ],
      "justifyContent": [
        "center",
        0,
        0,
        16
      ],
      "alignItems": [
        "center",
        0,
        0,
        16
      ],
      "position": [
        "relative",
        0,
        0,
        16
      ],
      "overflow": [
        "hidden",
        0,
        0,
        16
      ]
    }
  },
  ".u-swiper__wrapper": {
    "": {
      "flex": [
        1,
        0,
        0,
        17
      ]
    }
  },
  ".u-swiper__wrapper__item": {
    "": {
      "flex": [
        1,
        0,
        0,
        18
      ]
    }
  },
  ".u-swiper__wrapper__item__wrapper": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        19
      ],
      "position": [
        "relative",
        0,
        0,
        19
      ],
      "overflow": [
        "hidden",
        0,
        0,
        19
      ],
      "transitionProperty": [
        "transform",
        0,
        0,
        19
      ],
      "transitionDuration": [
        300,
        0,
        0,
        19
      ],
      "transitionTimingFunction": [
        "ease",
        0,
        0,
        19
      ],
      "transitionDelay": [
        0,
        0,
        0,
        19
      ],
      "flex": [
        1,
        0,
        0,
        19
      ]
    }
  },
  ".u-swiper__wrapper__item__wrapper__image": {
    "": {
      "flex": [
        1,
        0,
        0,
        20
      ]
    }
  },
  ".u-swiper__wrapper__item__wrapper__video": {
    "": {
      "flex": [
        1,
        0,
        0,
        21
      ]
    }
  },
  ".u-swiper__wrapper__item__wrapper__title": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        22
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.3)",
        0,
        0,
        22
      ],
      "bottom": [
        0,
        0,
        0,
        22
      ],
      "left": [
        0,
        0,
        0,
        22
      ],
      "right": [
        0,
        0,
        0,
        22
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        22
      ],
      "paddingTop": [
        "12rpx",
        0,
        0,
        22
      ],
      "paddingRight": [
        "24rpx",
        0,
        0,
        22
      ],
      "paddingBottom": [
        "12rpx",
        0,
        0,
        22
      ],
      "paddingLeft": [
        "24rpx",
        0,
        0,
        22
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        22
      ],
      "flex": [
        1,
        0,
        0,
        22
      ]
    }
  },
  ".u-swiper__indicator": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        23
      ],
      "bottom": [
        "10",
        0,
        0,
        23
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 17 */
/*!***************************************************************************************************!*\
  !*** E:/uniappSource/MyTestDemo2/pages/tabBar/Home/home.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.nvue?vue&type=script&lang=js&mpType=page */ 18);\n/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1kLENBQWdCLHllQUFHLEVBQUMiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL3VuaWFwcOi9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi91bmlhcHDova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi91bmlhcHDova/ku7YvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaG9tZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vdW5pYXBw6L2v5Lu2L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uL3VuaWFwcOi9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL3VuaWFwcOi9r+S7ti9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob21lLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniappSource/MyTestDemo2/pages/tabBar/Home/home.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      current: 0,\n      currentNum: 0,\n      list: [\n      'https://cdn.uviewui.com/uview/swiper/swiper3.png',\n      'https://cdn.uviewui.com/uview/swiper/swiper2.png',\n      'https://cdn.uviewui.com/uview/swiper/swiper1.png'] };\n\n\n  },\n  methods: {\n    change: function change(e) {\n      // console.log('change', e);\n    },\n    click: function click(e) {\n      __f__(\"log\", 'click', e, \" at pages/tabBar/Home/home.nvue:48\");\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 19)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiQmFyL0hvbWUvaG9tZS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsbUJBRkE7QUFHQTtBQUNBLHdEQURBO0FBRUEsd0RBRkE7QUFHQSx3REFIQSxDQUhBOzs7QUFTQSxHQVhBO0FBWUE7QUFDQSxVQURBLGtCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFNBSkEsaUJBSUEsQ0FKQSxFQUlBO0FBQ0E7QUFDQSxLQU5BLEVBWkEsRSIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInUtcGFnZVwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1LWRlbW8tYmxvY2tcIj5cclxuXHRcdFx0XHJcblx0XHRcdDx1LXN3aXBlciBcclxuXHRcdFx0XHQ6bGlzdD1cImxpc3RcIiBcclxuXHRcdFx0XHRAY2hhbmdlPVwiZSA9PiBjdXJyZW50ID0gZS5jdXJyZW50XCIgXHJcblx0XHRcdFx0cmFkaXVzPVwiNXB4XCJcclxuXHRcdFx0XHQ6YXV0b3BsYXk9XCJ0cnVlXCJcclxuXHRcdFx0XHQ6Y2lyY3VsYXI9XCJ0cnVlXCI+XHJcblx0XHRcdFx0PHZpZXcgc2xvdD1cImluZGljYXRvclwiIGNsYXNzPVwiaW5kaWNhdG9yXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJpbmRpY2F0b3JfX2RvdFwiIFxyXG5cdFx0XHRcdFx0XHR2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbGlzdFwiIFxyXG5cdFx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJbaW5kZXggPT09IGN1cnJlbnQgJiYgJ2luZGljYXRvcl9fZG90LS1hY3RpdmUnXVwiPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC91LXN3aXBlcj5cclxuXHRcdFx0XHJcbiAgICAgICAgICAgIDwhLS0gPHUtZ2FwXHJcblx0XHRcdFx0YmdDb2xvcj1cInRyYW5zcGFyZW50XCJcclxuXHRcdFx0XHRoZWlnaHQ9XCIxNVwiXHJcblx0XHRcdD48L3UtZ2FwPiAtLT5cclxuXHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGN1cnJlbnQ6IDAsXHJcblx0XHRcdFx0Y3VycmVudE51bTogMCxcclxuXHRcdFx0XHRsaXN0OiBbXHJcblx0XHRcdFx0XHQnaHR0cHM6Ly9jZG4udXZpZXd1aS5jb20vdXZpZXcvc3dpcGVyL3N3aXBlcjMucG5nJyxcclxuXHRcdFx0XHRcdCdodHRwczovL2Nkbi51dmlld3VpLmNvbS91dmlldy9zd2lwZXIvc3dpcGVyMi5wbmcnLFxyXG5cdFx0XHRcdFx0J2h0dHBzOi8vY2RuLnV2aWV3dWkuY29tL3V2aWV3L3N3aXBlci9zd2lwZXIxLnBuZycsXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjaGFuZ2UoZSkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdjaGFuZ2UnLCBlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xpY2soZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjbGljaycsIGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHQuaW5kaWNhdG9yIHtcclxuXHRcdEBpbmNsdWRlIGZsZXgocm93KTtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHRcdCZfX2RvdCB7XHJcblx0XHRcdGhlaWdodDogNnB4O1xyXG5cdFx0XHR3aWR0aDogNnB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxuXHRcdFx0bWFyZ2luOiAwIDVweDtcclxuXHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG5cclxuXHRcdFx0Ji0tYWN0aXZlIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuaW5kaWNhdG9yLW51bSB7XHJcblx0XHRwYWRkaW5nOiAycHggMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHRcdHdpZHRoOiAzNXB4O1xyXG5cdFx0QGluY2x1ZGUgZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHRcdCZfX3RleHQge1xyXG5cdFx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 20 */
/*!************************************************************************************************************!*\
  !*** E:/uniappSource/MyTestDemo2/pages/tabBar/Home/home.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../uniapp软件/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 21);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniappSource/MyTestDemo2/pages/tabBar/Home/home.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".indicator": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        16
      ],
      "justifyContent": [
        "center",
        0,
        0,
        16
      ]
    }
  },
  ".indicator__dot": {
    "": {
      "height": [
        "6",
        0,
        0,
        17
      ],
      "width": [
        "6",
        0,
        0,
        17
      ],
      "borderRadius": [
        "100",
        0,
        0,
        17
      ],
      "backgroundColor": [
        "rgba(255,255,255,0.35)",
        0,
        0,
        17
      ],
      "marginTop": [
        0,
        0,
        0,
        17
      ],
      "marginRight": [
        "5",
        0,
        0,
        17
      ],
      "marginBottom": [
        0,
        0,
        0,
        17
      ],
      "marginLeft": [
        "5",
        0,
        0,
        17
      ],
      "transitionProperty": [
        "backgroundColor",
        0,
        0,
        17
      ],
      "transitionDuration": [
        300,
        0,
        0,
        17
      ],
      "transitionTimingFunction": [
        "ease",
        0,
        0,
        17
      ],
      "transitionDelay": [
        0,
        0,
        0,
        17
      ]
    }
  },
  ".indicator__dot--active": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        18
      ]
    }
  },
  ".indicator-num": {
    "": {
      "paddingTop": [
        "2",
        0,
        0,
        19
      ],
      "paddingRight": [
        0,
        0,
        0,
        19
      ],
      "paddingBottom": [
        "2",
        0,
        0,
        19
      ],
      "paddingLeft": [
        0,
        0,
        0,
        19
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.35)",
        0,
        0,
        19
      ],
      "borderRadius": [
        "100",
        0,
        0,
        19
      ],
      "width": [
        "35",
        0,
        0,
        19
      ],
      "flexDirection": [
        "row",
        0,
        0,
        19
      ],
      "justifyContent": [
        "center",
        0,
        0,
        19
      ]
    }
  },
  ".indicator-num__text": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        20
      ],
      "fontSize": [
        "12",
        0,
        0,
        20
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);