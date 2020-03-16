webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/RSVPForm/index.js":
/*!**************************************!*\
  !*** ./components/RSVPForm/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rsvp_form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rsvp.form.scss */ "./components/RSVPForm/rsvp.form.scss");
/* harmony import */ var _rsvp_form_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rsvp_form_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _personal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal */ "./components/RSVPForm/personal/index.js");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity */ "./components/RSVPForm/entity/index.js");
/* harmony import */ var _proxy_holder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proxy-holder */ "./components/RSVPForm/proxy-holder/index.js");
/* harmony import */ var _overmind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../overmind */ "./overmind/index.js");
var _jsxFileName = "/Users/jatinderbimra/work/xlbb/rsvp-next/components/RSVPForm/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];







function RSVPForm(props) {
  var _useOvermind = Object(_overmind__WEBPACK_IMPORTED_MODULE_5__["useOvermind"])(),
      state = _useOvermind.state,
      actions = _useOvermind.actions;

  console.log('STATE from RSVP form file ', state);
  console.log('ACTIONS from RSVP form file ', actions);

  var handleRSVPTypeChange = function handleRSVPTypeChange(e) {
    e.preventDefault(); // this.setState({ rsvpType: e.target.value });

    actions.rsvp.handleChangeRSVPType(e.target.value);
    console.log('changed triggered!', e.target.value);
  };

  return __jsx("div", {
    className: "rsvp-form-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, state.rsvp.title), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Select RSVP Type: "), __jsx("select", {
    className: "form-control",
    value: state.rsvp.selectedType,
    onChange: function onChange(e) {
      return handleRSVPTypeChange(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, state.rsvp.types.map(function (type, i) {
    return __jsx("option", {
      key: i,
      value: type.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, type.text);
  }))), state.rsvp.selectedType === 'personal' && __jsx(_personal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    props: state.rsvp.personal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), state.rsvp.selectedType === 'entity' && __jsx(_entity__WEBPACK_IMPORTED_MODULE_3__["default"], {
    props: state.rsvp.entity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), state.rsvp.selectedType === 'proxyholder' && __jsx(_proxy_holder__WEBPACK_IMPORTED_MODULE_4__["default"], {
    props: state.rsvp.proxyHolder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RSVPForm);

/***/ })

})
//# sourceMappingURL=index.js.595c38ecd44e978dd77c.hot-update.js.map