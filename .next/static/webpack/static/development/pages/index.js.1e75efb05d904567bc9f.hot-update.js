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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
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
      lineNumber: 40
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3197201476" + " " + "container pt-4 pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3197201476" + " " + "mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3197201476" + " " + (_layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.quote || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, quote), author && __jsx("span", {
    className: "jsx-3197201476" + " " + (_layout_scss__WEBPACK_IMPORTED_MODULE_2___default.a.author || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "- ", author), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/rsvp-scanner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3197201476",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Goto RSVP Scanner"))), __jsx(_components_RSVPForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3197201476",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXRpbmRlcmJpbXJhL3dvcmsveGxiYi9yc3ZwLW5leHQvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUQ0QiIsImZpbGUiOiIvVXNlcnMvamF0aW5kZXJiaW1yYS93b3JrL3hsYmIvcnN2cC1uZXh0L2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5zY3NzJztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmltcG9ydCB7IHVzZU92ZXJtaW5kIH0gZnJvbSAnLi4vb3Zlcm1pbmQnO1xuaW1wb3J0IFJTVlBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUlNWUEZvcm0nO1xuXG4vL3RyYW5zbGF0aW9uXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5cbi8vIGNvbnN0IGxheW91dFN0eWxlID0ge1xuLy8gICAgIG1hcmdpbjogMjAsXG4vLyAgICAgcGFkZGluZzogMjAsXG4vLyB9O1xuXG5mdW5jdGlvbiBmZXRjaGVyKHVybCkge1xuICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYC9hcGkvcmFuZG9tUXVvdGUke3F1ZXJ5LmF1dGhvciA/ICc/YXV0aG9yPScgKyBxdWVyeS5hdXRob3IgOiAnJ31gLCBmZXRjaGVyKTtcblxuICAgIGNvbnN0IGF1dGhvciA9IGRhdGE/LmF1dGhvcjtcbiAgICBsZXQgcXVvdGUgPSBkYXRhPy5xdW90ZTtcblxuICAgIGlmICghZGF0YSkgcXVvdGUgPSBcIkxvYWRpbmcuLi5cIjtcbiAgICBpZiAoZXJyb3IpIHF1b3RlID0gXCJGYWlsZWQgdG8gZmV0Y2ggcXVvdGVzXCI7XG5cbiAgICBjb25zdCB7IHN0YXRlLCBhY3Rpb25zIH0gPSB1c2VPdmVybWluZCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdzdGF0ZSBvdmVybWluZCcsIHN0YXRlKTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNCBwYi00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVvdGV9PntxdW90ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2F1dGhvciAmJiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9Pi0ge2F1dGhvcn08L3NwYW4+fVxuXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcnN2cC1zY2FubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Hb3RvIFJTVlAgU2Nhbm5lcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPFJTVlBGb3JtPjwvUlNWUEZvcm0+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbn1cblxuOyJdfQ== */\n/*@ sourceURL=/Users/jatinderbimra/work/xlbb/rsvp-next/components/Layout.js */"), props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }));
}
;

/***/ })

})
//# sourceMappingURL=index.js.1e75efb05d904567bc9f.hot-update.js.map