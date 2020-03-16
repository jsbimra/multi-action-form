webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/RSVPForm/proxy-holder/index.js":
/*!***************************************************!*\
  !*** ./components/RSVPForm/proxy-holder/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RSVPProxyHolder; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var _overmind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../overmind */ "./overmind/index.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/constants */ "./util/constants.js");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/index */ "./util/index.js");
/* harmony import */ var _sub_fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub-fields */ "./components/RSVPForm/proxy-holder/sub-fields.js");

var _jsxFileName = "/Users/jatinderbimra/work/xlbb/rsvp-next/components/RSVPForm/proxy-holder/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function RSVPProxyHolder(props) {
  var _useOvermind = Object(_overmind__WEBPACK_IMPORTED_MODULE_3__["useOvermind"])(),
      state = _useOvermind.state,
      actions = _useOvermind.actions; // const { methods.register, errors, handleSubmit, watch, formState } = useForm({
  //     mode: 'onChange',
  //     validateCriteriaMode: "all"
  // });


  var methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    mode: 'onChange',
    validateCriteriaMode: "all"
  });
  console.log(methods);
  var _state$rsvp$proxyHold = state.rsvp.proxyHolder,
      title = _state$rsvp$proxyHold.title,
      data = _state$rsvp$proxyHold.data;

  var _ref = data || {},
      name = _ref.name,
      passport = _ref.passport,
      address = _ref.address,
      numberOfShares = _ref.numberOfShares,
      phoneNumber = _ref.phoneNumber,
      email = _ref.email,
      uploadID = _ref.uploadID,
      uploadArticleOfAssociation = _ref.uploadArticleOfAssociation,
      uploadProxy = _ref.uploadProxy,
      proxyOfShareHolderIdentity = _ref.proxyOfShareHolderIdentity,
      captcha = _ref.captcha,
      userAcceptance = _ref.userAcceptance,
      submitButton = _ref.submitButton,
      infoText = _ref.infoText,
      successMsgTitle = _ref.successMsgTitle,
      successMsg = _ref.successMsg,
      failedMsgTitle = _ref.failedMsgTitle,
      failedMsg = _ref.failedMsg,
      redirectURL = _ref.redirectURL;

  var watchHidCaptcha = methods.watch("hidGRecaptchaElement");

  var onSubmit = function onSubmit(data, e) {
    console.log("Form submitted ", data, e);
  }; // Similar to componentDidMount and componentDidUpdate:


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {// if(!window.grecaptcha) reCaptchaInitialize('v2');
    // console.log('watchHidCaptcha', watchHidCaptcha);
  }, [watchHidCaptcha]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (state.rsvp.isSIDKTPVerified) {
      // verifyCaptcha
      Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["verifyCaptcha"])(captcha.hiddenField.name);
    } // console.log('watchNoKtur', watchNoKtur);
    // console.log('watchNoSID', watchNoSID);
    // if ((watchNoKtur && watchNoKtur.length > KTP_SID_SEARCH_HIT_MIN_CHARS) && (watchNoSID && watchNoSID.length > KTP_SID_SEARCH_HIT_MIN_CHARS)) {
    //     console.log('trigger api call to verify use is having valid sid and ktp ');
    //     // actions.rsvp.verifyValidUser();
    //     actions.rsvp.updateSIDKTPVerifedStatus();
    //     // if(window.grecaptcha) grecaptcha.reset('gRecaptchaElement');
    // }


    if (!window.grecaptcha) Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["reCaptchaInitialize"])('v2');
  });
  return __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["FormContext"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, methods, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("form", {
    className: "form",
    onSubmit: methods.handleSubmit(onSubmit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, title), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("label", {
    htmlFor: name.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, name.label, " ", name.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("input", {
    id: name.name,
    name: name.name,
    ref: methods.register({
      required: name.validation.required_msg
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    as: "p",
    errors: methods.errors,
    name: name.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("label", {
    htmlFor: passport.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, passport.label, " ", passport.required ? __jsx("span", {
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
    id: passport.name,
    name: passport.name,
    placeholder: passport.placeholder,
    ref: methods.register({
      required: passport.validation.required_msg
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    as: "p",
    errors: methods.errors,
    name: passport.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("label", {
    htmlFor: address.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, address.label, " ", address.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("input", {
    id: address.name,
    name: address.name,
    placeholder: address.placeholder,
    ref: methods.register({
      required: address.validation.required_msg
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    as: "p",
    errors: methods.errors,
    name: address.name,
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
    htmlFor: numberOfShares.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, numberOfShares.label, " ", numberOfShares.required ? __jsx("span", {
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
    id: numberOfShares.name,
    name: numberOfShares.name,
    placeholder: numberOfShares.placeholder,
    ref: methods.register({
      required: numberOfShares.validation.required_msg
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    as: "p",
    errors: methods.errors,
    name: numberOfShares.name,
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
    htmlFor: phoneNumber.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, phoneNumber.label, " ", phoneNumber.required ? __jsx("span", {
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
    id: phoneNumber.name,
    name: phoneNumber.name,
    placeholder: phoneNumber.placeholder,
    ref: methods.register({
      required: phoneNumber.validation.required_msg,
      pattern: {
        value: _util_constants__WEBPACK_IMPORTED_MODULE_4__["phonePattern1"],
        message: phoneNumber.validation.pattern_msg
      }
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    as: "p",
    errors: methods.errors,
    name: phoneNumber.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("label", {
    htmlFor: email.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, email.label, " ", email.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("input", {
    id: email.name,
    name: email.name,
    placeholder: email.placeholder,
    ref: methods.register({
      required: email.validation.required_msg,
      pattern: {
        value: _util_constants__WEBPACK_IMPORTED_MODULE_4__["emailPattern"],
        message: email.validation.pattern_msg
      }
    }),
    type: "email",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    as: "p",
    errors: methods.errors,
    name: email.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("div", {
    className: "file-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx("label", {
    htmlFor: uploadID.name,
    className: "input-file-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("a", {
    className: "button button--2 button--axiata",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, uploadID.label), uploadID.placeholder, " ", uploadID.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "*") : '', __jsx("input", {
    id: uploadID.name,
    name: uploadID.name,
    ref: methods.register({
      required: uploadID.validation.required_msg
    }),
    type: "file",
    className: "input-file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }))), uploadID.fileInfoLine1 || uploadID.fileInfoLine2 ? __jsx("div", {
    className: "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, uploadID.fileInfoLine1 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, uploadID.fileInfoLine1) : '', uploadID.fileInfoLine2 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, uploadID.fileInfoLine2) : '') : '', __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    as: "p",
    errors: methods.errors,
    name: uploadID.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })), __jsx("div", {
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
    htmlFor: uploadArticleOfAssociation.name,
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
  }, uploadArticleOfAssociation.label), uploadArticleOfAssociation.placeholder, " ", uploadArticleOfAssociation.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "*") : '', __jsx("input", {
    id: uploadArticleOfAssociation.name,
    name: uploadArticleOfAssociation.name,
    ref: methods.register({
      required: uploadArticleOfAssociation.validation.required_msg
    }),
    type: "file",
    className: "input-file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }))), uploadArticleOfAssociation.fileInfoLine1 || uploadArticleOfAssociation.fileInfoLine2 ? __jsx("div", {
    className: "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, uploadArticleOfAssociation.fileInfoLine1 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, uploadArticleOfAssociation.fileInfoLine1) : '', uploadArticleOfAssociation.fileInfoLine2 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, uploadArticleOfAssociation.fileInfoLine2) : '') : '', __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    as: "p",
    errors: methods.errors,
    name: uploadArticleOfAssociation.name,
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
    htmlFor: uploadProxy.name,
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
  }, uploadProxy.label), uploadProxy.placeholder, " ", uploadID.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "*") : '', __jsx("input", {
    id: uploadProxy.name,
    name: uploadProxy.name,
    ref: methods.register({
      required: uploadProxy.validation.required_msg
    }),
    type: "file",
    className: "input-file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }))), uploadProxy.fileInfoLine1 || uploadProxy.fileInfoLine2 ? __jsx("div", {
    className: "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, uploadProxy.fileInfoLine1 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, uploadProxy.fileInfoLine1) : '', uploadProxy.fileInfoLine2 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, uploadProxy.fileInfoLine2) : '') : '', __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    as: "p",
    errors: methods.errors,
    name: uploadProxy.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, proxyOfShareHolderIdentity.label, " ", proxyOfShareHolderIdentity.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, "*") : '')), __jsx(_sub_fields__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: proxyOfShareHolderIdentity.subFields,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx("div", {
    className: "g-recaptcha",
    id: captcha.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }), __jsx("input", {
    type: "hidden",
    name: captcha.hiddenField.name,
    defaultValue: state.rsvp.captchaValue,
    ref: methods.register({
      required: captcha.validation.required_msg
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    as: "p",
    errors: methods.errors,
    name: captcha.hiddenField.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  })), __jsx("div", {
    className: "clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx("div", {
    className: "form-check form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx("input", {
    name: userAcceptance.name,
    id: userAcceptance.name,
    ref: methods.register({
      required: userAcceptance.validation.required_msg
    }),
    type: "checkbox",
    className: "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }), __jsx("label", {
    htmlFor: userAcceptance.name,
    className: "col-form-label pl-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, " ", userAcceptance.label)), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
    as: "p",
    errors: methods.errors,
    name: userAcceptance.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  })), __jsx("div", {
    className: "form-group text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    id: submitButton.name,
    name: submitButton.name,
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, submitButton.label))))));
}

/***/ })

})
//# sourceMappingURL=index.js.e1818172126412bf1a1b.hot-update.js.map