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
      captcha = _ref.captcha,
      successMsgTitle = _ref.successMsgTitle,
      successMsg = _ref.successMsg,
      failedMsgTitle = _ref.failedMsgTitle,
      failedMsg = _ref.failedMsg,
      redirectURL = _ref.redirectURL;

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
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberKTUR.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, numberKTUR.label, " ", numberKTUR.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
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
      lineNumber: 77
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberKTUR.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberSID.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, numberSID.label, " ", numberSID.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
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
      lineNumber: 94
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberSID.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }))), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("label", {
    htmlFor: name.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, name.label, " ", name.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
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
      lineNumber: 115
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: name.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberKTPOrPassport.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, numberKTPOrPassport.label, " ", numberKTPOrPassport.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
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
      lineNumber: 130
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberKTPOrPassport.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("label", {
    htmlFor: address.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, address.label, " ", address.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
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
      lineNumber: 144
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: address.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberOfShares.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, numberOfShares.label, " ", numberOfShares.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
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
      lineNumber: 159
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberOfShares.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("label", {
    htmlFor: phoneNumber.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, phoneNumber.label, " ", phoneNumber.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
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
      lineNumber: 174
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: phoneNumber.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx("label", {
    htmlFor: email.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, email.label, " ", email.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
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
      lineNumber: 192
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: email.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx("div", {
    className: "file-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx("label", {
    htmlFor: uploadID.name,
    className: "input-file-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx("a", {
    className: "button button--2 button--axiata",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, uploadID.label), uploadID.placeholder, " ", uploadID.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
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
      lineNumber: 212
    },
    __self: this
  }))), uploadID.fileInfoLine1 || uploadID.fileInfoLine2 ? __jsx("div", {
    className: "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, uploadID.fileInfoLine1 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, uploadID.fileInfoLine1) : '', uploadID.fileInfoLine2 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, uploadID.fileInfoLine2) : '') : '', __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: uploadID.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx("div", {
    className: "file-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx("label", {
    htmlFor: uploadArticleOfAssociation.name,
    className: "input-file-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx("a", {
    className: "button button--2 button--axiata",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, uploadArticleOfAssociation.label), uploadArticleOfAssociation.placeholder, " ", uploadArticleOfAssociation.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
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
      lineNumber: 232
    },
    __self: this
  }))), uploadArticleOfAssociation.fileInfoLine1 || uploadArticleOfAssociation.fileInfoLine2 ? __jsx("div", {
    className: "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, uploadArticleOfAssociation.fileInfoLine1 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, uploadArticleOfAssociation.fileInfoLine1) : '', uploadArticleOfAssociation.fileInfoLine2 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, uploadArticleOfAssociation.fileInfoLine2) : '') : '', __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: uploadArticleOfAssociation.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.d54c5f38618f077ca938.hot-update.js.map