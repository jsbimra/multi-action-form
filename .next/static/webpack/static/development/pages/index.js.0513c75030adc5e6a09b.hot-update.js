webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/RSVPForm/proxy-holder/sub-fields.js":
/*!********************************************************!*\
  !*** ./components/RSVPForm/proxy-holder/sub-fields.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RSVPProxyHolderSubFields; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var _overmind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../overmind */ "./overmind/index.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/constants */ "./util/constants.js");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/index */ "./util/index.js");
var _jsxFileName = "/Users/jatinderbimra/work/xlbb/rsvp-next/components/RSVPForm/proxy-holder/sub-fields.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function RSVPProxyHolderSubFields(props) {
  var _useOvermind = Object(_overmind__WEBPACK_IMPORTED_MODULE_2__["useOvermind"])(),
      state = _useOvermind.state,
      actions = _useOvermind.actions;

  var _useFormContext = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useFormContext"])(),
      register = _useFormContext.register,
      watch = _useFormContext.watch,
      dirty = _useFormContext.formState.dirty;

  console.log('data from props', props.data);
  var data = props.data;

  var _ref = data || {},
      numberKTUR = _ref.numberKTUR,
      numberSID = _ref.numberSID,
      name = _ref.name,
      numberKTPOrPassport = _ref.numberKTPOrPassport,
      address = _ref.address,
      numberOfShares = _ref.numberOfShares,
      phoneNumber = _ref.phoneNumber,
      email = _ref.email,
      uploadID = _ref.uploadID,
      uploadArticleOfAssociation = _ref.uploadArticleOfAssociation,
      captcha = _ref.captcha;

  var watchNoKtur = watch("numberKTUR");
  var watchNoSID = watch("numberSID");
  var watchHidCaptcha = watch("hidGRecaptchaElement");

  var onSubmit = function onSubmit(data, e) {
    console.log("Form submitted ", data, e);
  }; // Similar to componentDidMount and componentDidUpdate:


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// if(!window.grecaptcha) reCaptchaInitialize('v2');
    // console.log('watchHidCaptcha', watchHidCaptcha);
  }, [watchHidCaptcha]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (state.rsvp.isSIDKTPVerified) {
      // verifyCaptcha
      Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["verifyCaptcha"])(captcha.hiddenField.name);
    } // console.log('watchNoKtur', watchNoKtur);
    // console.log('watchNoSID', watchNoSID);


    if (watchNoKtur && watchNoKtur.length > _util_constants__WEBPACK_IMPORTED_MODULE_3__["KTP_SID_SEARCH_HIT_MIN_CHARS"] && watchNoSID && watchNoSID.length > _util_constants__WEBPACK_IMPORTED_MODULE_3__["KTP_SID_SEARCH_HIT_MIN_CHARS"]) {
      console.log('trigger api call to verify use is having valid sid and ktp '); // actions.rsvp.verifyValidUser();

      actions.rsvp.updateSIDKTPVerifedStatus();
    }
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberKTUR.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, numberKTUR.label, " ", numberKTUR.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("input", {
    id: numberKTUR.name,
    name: numberKTUR.name,
    placeholder: numberKTUR.placeholder,
    ref: register({
      required: numberKTUR.validation.required_msg,
      minLength: {
        value: 6,
        message: numberKTUR.validation.minlength_msg
      }
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberKTUR.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberSID.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, numberSID.label, " ", numberSID.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("input", {
    id: numberSID.name,
    name: numberSID.name,
    placeholder: numberSID.placeholder,
    ref: register({
      required: numberSID.validation.required_msg,
      minLength: {
        value: 6,
        message: numberSID.validation.minlength_msg
      }
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberSID.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }))), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("label", {
    htmlFor: name.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, name.label, " ", name.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("input", {
    id: name.name,
    name: name.name,
    ref: register({
      required: name.validation.required_msg
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: name.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberKTPOrPassport.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, numberKTPOrPassport.label, " ", numberKTPOrPassport.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("input", {
    id: numberKTPOrPassport.name,
    name: numberKTPOrPassport.name,
    placeholder: numberKTPOrPassport.placeholder,
    ref: register({
      required: numberKTPOrPassport.validation.required_msg
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberKTPOrPassport.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("label", {
    htmlFor: address.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, address.label, " ", address.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("input", {
    id: address.name,
    name: address.name,
    placeholder: address.placeholder,
    ref: register({
      required: address.validation.required_msg
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: address.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberOfShares.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, numberOfShares.label, " ", numberOfShares.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("input", {
    id: numberOfShares.name,
    name: numberOfShares.name,
    placeholder: numberOfShares.placeholder,
    ref: register({
      required: numberOfShares.validation.required_msg
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberOfShares.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("label", {
    htmlFor: phoneNumber.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, phoneNumber.label, " ", phoneNumber.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("input", {
    id: phoneNumber.name,
    name: phoneNumber.name,
    placeholder: phoneNumber.placeholder,
    ref: register({
      required: phoneNumber.validation.required_msg,
      pattern: {
        value: _util_constants__WEBPACK_IMPORTED_MODULE_3__["phonePattern1"],
        message: phoneNumber.validation.pattern_msg
      }
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: phoneNumber.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("label", {
    htmlFor: email.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, email.label, " ", email.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("input", {
    id: email.name,
    name: email.name,
    placeholder: email.placeholder,
    ref: register({
      required: email.validation.required_msg,
      pattern: {
        value: _util_constants__WEBPACK_IMPORTED_MODULE_3__["emailPattern"],
        message: email.validation.pattern_msg
      }
    }),
    type: "email",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: email.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("div", {
    className: "file-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("label", {
    htmlFor: uploadID.name,
    className: "input-file-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx("a", {
    className: "button button--2 button--axiata",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, uploadID.label), uploadID.placeholder, " ", uploadID.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "*") : '', __jsx("input", {
    id: uploadID.name,
    name: uploadID.name,
    ref: register({
      required: uploadID.validation.required_msg
    }),
    type: "file",
    className: "input-file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }))), uploadID.fileInfoLine1 || uploadID.fileInfoLine2 ? __jsx("div", {
    className: "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, uploadID.fileInfoLine1 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, uploadID.fileInfoLine1) : '', uploadID.fileInfoLine2 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, uploadID.fileInfoLine2) : '') : '', __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: uploadID.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("div", {
    className: "file-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("label", {
    htmlFor: uploadArticleOfAssociation.name,
    className: "input-file-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx("a", {
    className: "button button--2 button--axiata",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, uploadArticleOfAssociation.label), uploadArticleOfAssociation.placeholder, " ", uploadArticleOfAssociation.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "*") : '', __jsx("input", {
    id: uploadArticleOfAssociation.name,
    name: uploadArticleOfAssociation.name,
    ref: register({
      required: uploadArticleOfAssociation.validation.required_msg
    }),
    type: "file",
    className: "input-file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }))), uploadArticleOfAssociation.fileInfoLine1 || uploadArticleOfAssociation.fileInfoLine2 ? __jsx("div", {
    className: "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, uploadArticleOfAssociation.fileInfoLine1 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, uploadArticleOfAssociation.fileInfoLine1) : '', uploadArticleOfAssociation.fileInfoLine2 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, uploadArticleOfAssociation.fileInfoLine2) : '') : '', __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: uploadArticleOfAssociation.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.0513c75030adc5e6a09b.hot-update.js.map