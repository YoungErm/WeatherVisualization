(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/lime-echart/components/l-echart/l-echart"],{

/***/ 40:
/*!*******************************************************************************************************************!*\
  !*** C:/home/DevelopProjects/wechat/HBuilder/WeatherApp/uni_modules/lime-echart/components/l-echart/l-echart.vue ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./l-echart.vue?vue&type=template&id=52a46d79&scoped=true& */ 41);
/* harmony import */ var _l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l-echart.vue?vue&type=script&lang=js& */ 43);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./l-echart.vue?vue&type=style&index=0&id=52a46d79&scoped=true&lang=stylus& */ 47);
/* harmony import */ var _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "52a46d79",
  null,
  false,
  _l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/lime-echart/components/l-echart/l-echart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
/*!**************************************************************************************************************************************************************!*\
  !*** C:/home/DevelopProjects/wechat/HBuilder/WeatherApp/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=template&id=52a46d79&scoped=true& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./l-echart.vue?vue&type=template&id=52a46d79&scoped=true& */ 42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_template_id_52a46d79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 42:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/home/DevelopProjects/wechat/HBuilder/WeatherApp/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=template&id=52a46d79&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 43:
/*!********************************************************************************************************************************************!*\
  !*** C:/home/DevelopProjects/wechat/HBuilder/WeatherApp/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./l-echart.vue?vue&type=script&lang=js& */ 44);
/* harmony import */ var _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 44:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/home/DevelopProjects/wechat/HBuilder/WeatherApp/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 27));










































var _canvas = _interopRequireDefault(__webpack_require__(/*! ./canvas */ 45));
var echarts = _interopRequireWildcard(__webpack_require__(/*! ./echarts */ 18));
var _utils = __webpack_require__(/*! ./utils */ 46);function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default2 =




{
  // version: '0.2.9' 
  name: 'lime-echart',
  props: {

    type: {
      type: String,
      default: '2d' },


    ec: {
      type: Object,
      default: function _default() {} },

    onInit: Function,







    customStyle: String,
    isAutoPlay: Boolean,
    isDisableScroll: Boolean,
    isEnable: Boolean,
    isClickable: {
      type: Boolean,
      default: true } },


  data: function data() {
    return {

      use2dCanvas: true,




      width: null,
      height: null,
      nodeWidth: null,
      nodeHeight: null,
      canvasNode: null,
      config: {},
      inited: false,
      finished: false,
      file: '',
      platform: '' };

  },
  computed: {
    canvasId: function canvasId() {
      return "lime-echart".concat(this._uid);
    } },

  watch: {
    'ec.option': {
      deep: true,
      handler: function handler(val, oldVal) {
        if (this.isAutoPlay) {
          if (this.ec.clear) {this.clear();}
          this.setOption(val);
        }
      } } },


  beforeDestroy: function beforeDestroy() {
    this.clear();
    this.dispose();
  },
  created: function created() {




    echarts.registerPreprocessor(function (option) {
      if (option && option.series) {
        if (option.series.length > 0) {
          option.series.forEach(function (series) {
            series.progressive = 0;
          });
        } else if (typeof option.series === 'object') {
          option.series.progressive = 0;
        }
      }
    });var _uni$getSystemInfoSyn =

    uni.getSystemInfoSync(),SDKVersion = _uni$getSystemInfoSyn.SDKVersion,version = _uni$getSystemInfoSyn.version,platform = _uni$getSystemInfoSyn.platform,environment = _uni$getSystemInfoSyn.environment;


    this.isPC = /windows/i.test(platform);
    this.use2dCanvas = this.type === '2d' && (0, _utils.compareVersion)(SDKVersion, '2.9.2') >= 0 && !(/ios/i.test(platform) && /7.0.20/.test(version) || /wxwork/i.test(environment)) && !this.isPC;






  },

  mounted: function mounted() {var _this$ec;
    if (this.ec && !((_this$ec = this.ec) === null || _this$ec === void 0 ? void 0 : _this$ec.lazyLoad) || this.isEnable) {
      if (!this.onInit) {
        this.init();
        return;
      }
    }
    if (this.onInit) {
      this.init(this.onInit);
    }
  },
  methods: {





































    setChart: function setChart(callback, params) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _this.enabled());case 2:if (!(

                typeof callback === 'function' && _this.chart)) {_context.next = 5;break;}_context.next = 5;return (
                  callback(_this.chart));case 5:case "end":return _context.stop();}}}, _callee);}))();







    },
    setOption: function setOption() {var _arguments = arguments,_this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _this2$chart;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  _this2.enabled());case 2:

                if (!_this2.chart || !_this2.chart.setOption) {
                  console.warn("\u7EC4\u4EF6\u8FD8\u672A\u521D\u59CB\u5316");
                } else {
                  (_this2$chart = _this2.chart).setOption.apply(_this2$chart, _toConsumableArray(_arguments));
                }case 3:case "end":return _context2.stop();}}}, _callee2);}))();






    },
    showLoading: function showLoading() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (

                  _this3.enabled());case 2:
                if (_this3.chart) {
                  _this3.chart.showLoading();
                }case 3:case "end":return _context3.stop();}}}, _callee3);}))();




    },
    hideLoading: function hideLoading() {

      if (this.chart) {
        this.chart.hideLoading();
      }




    },
    clear: function clear() {

      if (this.chart) {
        this.chart.clear();
      }




    },
    dispose: function dispose() {

      if (this.chart) {
        this.chart.dispose();
      }




    },
    canvasToTempFilePath: function canvasToTempFilePath() {var _this4 = this;var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var

      use2dCanvas = this.use2dCanvas,canvasId = this.canvasId,canvasNode = this.canvasNode;
      return new Promise(function (resolve, reject) {
        var copyArgs = Object.assign({
          canvasId: canvasId,
          success: resolve,
          fail: reject },
        args);
        if (use2dCanvas) {
          delete copyArgs.canvasId;
          copyArgs.canvas = canvasNode;
        }
        uni.canvasToTempFilePath(copyArgs, _this4);
      });















    },
    init: function init(callback, params) {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var config, canvas;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (




                  _this5.getContext());case 2:config = _context4.sent;if (!(
                typeof callback === 'function')) {_context4.next = 9;break;}_context4.next = 6;return (
                  callback(config));case 6:_this5.chart = _context4.sent;_context4.next = 15;break;case 9:

                canvas = config.canvas;
                _this5.chart = echarts.init(canvas, null, config);
                canvas.setChart(_this5.chart);
                if (_this5.ec && _this5.ec.option) {
                  _this5.setOption(_this5.ec.option);
                }
                _this5.inited = true;
                _this5.$emit('inited', true);case 15:case "end":return _context4.stop();}}}, _callee4);}))();













    },
    enabled: function enabled() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:if (!
                _this6.isEnable) {_context5.next = 3;break;}_context5.next = 3;return (

                  _this6.getContext());case 3:case "end":return _context5.stop();}}}, _callee5);}))();














    },

    getContext: function getContext() {var _this7 = this;var
      use2dCanvas = this.use2dCanvas,_this$type = this.type,type = _this$type === void 0 ? '2d' : _this$type,config = this.config;
      var dpr = _utils.devicePixelRatio;
      if (config.canvas) {
        return Promise.resolve(config);
      }
      if (use2dCanvas) {
        return new Promise(function (resolve) {
          uni.createSelectorQuery().
          in(_this7).
          select("#".concat(_this7.canvasId)).
          fields({
            node: true,
            size: true }).

          exec(function (res) {var _res$ =
            res[0],node = _res$.node,width = _res$.width,height = _res$.height;
            width = width || 300;
            height = height || 300;
            var ctx = node.getContext(type);

            node.width = width * dpr;
            node.height = height * dpr;




            var canvas = new _canvas.default(ctx, _this7.canvasId, true, node);
            echarts.setCanvasCreator(function () {return canvas;});
            _this7.canvasNode = node;
            _this7.config = { canvas: canvas, width: width, height: height, devicePixelRatio: dpr };
            resolve(_this7.config);
          });
        });
      }
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this7).
        select("#".concat(_this7.canvasId)).
        boundingClientRect().
        exec(function (res) {
          if (res) {var _res$2 =
            res[0],width = _res$2.width,height = _res$2.height;
            width = width || 300;
            height = height || 300;







            dpr = _this7.isPC ? _utils.devicePixelRatio : 1;

            _this7.nodeWidth = width * dpr;
            _this7.nodeHeight = height * dpr;
            var ctx = uni.createCanvasContext(_this7.canvasId, _this7);
            var canvas = new _canvas.default(ctx, _this7.canvasId, false);
            echarts.setCanvasCreator(function () {return canvas;});
            _this7.config = { canvas: canvas, width: width, height: height, devicePixelRatio: dpr };
            resolve(_this7.config);
          }
        });
      });
    },
    touchStart: function touchStart(e) {
      if (this.chart && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = this.chart.getZr().handler;
        handler.dispatch('mousedown', {
          zrX: touch.x,
          zrY: touch.y });

        handler.dispatch('mousemove', {
          zrX: touch.x,
          zrY: touch.y });

        handler.processGesture((0, _utils.wrapTouch)(e), 'start');
      }
    },
    touchMove: function touchMove(e) {
      if (this.chart && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = this.chart.getZr().handler;
        handler.dispatch('mousemove', {
          zrX: touch.x,
          zrY: touch.y });

        handler.processGesture((0, _utils.wrapTouch)(e), 'change');
      }
    },
    touchEnd: function touchEnd(e) {
      if (this.chart) {
        var touch = e.changedTouches ? e.changedTouches[0] : {};
        var handler = this.chart.getZr().handler;
        handler.dispatch('mouseup', {
          zrX: touch.x,
          zrY: touch.y });

        if (this.isClickable) {
          handler.dispatch('click', {
            zrX: touch.x,
            zrY: touch.y });

        }
        handler.processGesture((0, _utils.wrapTouch)(e), 'end');
      }
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 47:
/*!*******************************************************************************************************************************************************************************!*\
  !*** C:/home/DevelopProjects/wechat/HBuilder/WeatherApp/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=style&index=0&id=52a46d79&scoped=true&lang=stylus& ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-oneOf-1-0!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-2!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-1-3!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/stylus-loader??ref--11-oneOf-1-4!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-5!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../DevelopTools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./l-echart.vue?vue&type=style&index=0&id=52a46d79&scoped=true&lang=stylus& */ 48);
/* harmony import */ var _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_DevelopTools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_echart_vue_vue_type_style_index_0_id_52a46d79_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 48:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-2!./node_modules/postcss-loader/src??ref--11-oneOf-1-3!./node_modules/stylus-loader??ref--11-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/home/DevelopProjects/wechat/HBuilder/WeatherApp/uni_modules/lime-echart/components/l-echart/l-echart.vue?vue&type=style&index=0&id=52a46d79&scoped=true&lang=stylus& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/lime-echart/components/l-echart/l-echart.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/lime-echart/components/l-echart/l-echart-create-component',
    {
        'uni_modules/lime-echart/components/l-echart/l-echart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(40))
        })
    },
    [['uni_modules/lime-echart/components/l-echart/l-echart-create-component']]
]);
