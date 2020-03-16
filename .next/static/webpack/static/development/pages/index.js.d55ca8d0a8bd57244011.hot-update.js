webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.scss */ "./components/layout.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _overmind__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../overmind */ "./overmind/index.js");
/* harmony import */ var _components_RSVPForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/RSVPForm */ "./components/RSVPForm/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../i18n */ "./i18n.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
var _jsxFileName = "/Users/jatinderbimra/work/xlbb/rsvp-next/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







 //translation


 // const layoutStyle = {
//     margin: 20,
//     padding: 20,
// };

function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Layout(props) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      query = _useRouter.query;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_7__["default"])("/api/randomQuote".concat(query.author ? '?author=' + query.author : ''), fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  var author = data === null || data === void 0 ? void 0 : data.author;
  var quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = "Loading...";
  if (error) quote = "Failed to fetch quotes";

  var _useOvermind = Object(_overmind__WEBPACK_IMPORTED_MODULE_8__["useOvermind"])(),
      state = _useOvermind.state,
      actions = _useOvermind.actions; // console.log('state overmind', state);


  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: t("title"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3197201476" + " " + "container pt-4 pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3197201476" + " " + "mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3197201476" + " " + (_layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.quote || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, quote), author && __jsx("span", {
    className: "jsx-3197201476" + " " + (_layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.author || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "- ", author), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/rsvp-scanner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3197201476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Goto RSVP Scanner"))), __jsx(_components_RSVPForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3197201476",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXRpbmRlcmJpbXJhL3dvcmsveGxiYi9yc3ZwLW5leHQvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0Q0QiIsImZpbGUiOiIvVXNlcnMvamF0aW5kZXJiaW1yYS93b3JrL3hsYmIvcnN2cC1uZXh0L2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5zY3NzJztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCB7IHVzZU92ZXJtaW5kIH0gZnJvbSAnLi4vb3Zlcm1pbmQnO1xuaW1wb3J0IFJTVlBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUlNWUEZvcm0nO1xuXG4vL3RyYW5zbGF0aW9uXG5pbXBvcnQgJy4vLi4vaTE4bic7XG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cblxuLy8gY29uc3QgbGF5b3V0U3R5bGUgPSB7XG4vLyAgICAgbWFyZ2luOiAyMCxcbi8vICAgICBwYWRkaW5nOiAyMCxcbi8vIH07XG5cbmZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgICBjb25zdCB7dCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgL2FwaS9yYW5kb21RdW90ZSR7cXVlcnkuYXV0aG9yID8gJz9hdXRob3I9JyArIHF1ZXJ5LmF1dGhvciA6ICcnfWAsIGZldGNoZXIpO1xuXG4gICAgY29uc3QgYXV0aG9yID0gZGF0YT8uYXV0aG9yO1xuICAgIGxldCBxdW90ZSA9IGRhdGE/LnF1b3RlO1xuXG4gICAgaWYgKCFkYXRhKSBxdW90ZSA9IFwiTG9hZGluZy4uLlwiO1xuICAgIGlmIChlcnJvcikgcXVvdGUgPSBcIkZhaWxlZCB0byBmZXRjaCBxdW90ZXNcIjtcblxuICAgIGNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHVzZU92ZXJtaW5kKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3N0YXRlIG92ZXJtaW5kJywgc3RhdGUpO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGVyIHRpdGxlPXt0KFwidGl0bGVcIil9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC00IHBiLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdW90ZX0+e3F1b3RlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7YXV0aG9yICYmIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0+LSB7YXV0aG9yfTwvc3Bhbj59XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yc3ZwLXNjYW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkdvdG8gUlNWUCBTY2FubmVyPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8UlNWUEZvcm0+PC9SU1ZQRm9ybT5cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuXG5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxufVxuXG47Il19 */\n/*@ sourceURL=/Users/jatinderbimra/work/xlbb/rsvp-next/components/Layout.js */"), props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }));
}
;

/***/ })

})
//# sourceMappingURL=index.js.d55ca8d0a8bd57244011.hot-update.js.map