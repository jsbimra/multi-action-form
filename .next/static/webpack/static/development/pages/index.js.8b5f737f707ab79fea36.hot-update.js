webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/RSVPForm/personal/index.js":
/*!***********************************************!*\
  !*** ./components/RSVPForm/personal/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RSVPPersonal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var _overmind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../overmind */ "./overmind/index.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/constants */ "./util/constants.js");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/index */ "./util/index.js");
var _jsxFileName = "/Users/jatinderbimra/work/xlbb/rsvp-next/components/RSVPForm/personal/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function RSVPPersonal(props) {
  var _useOvermind = Object(_overmind__WEBPACK_IMPORTED_MODULE_2__["useOvermind"])(),
      state = _useOvermind.state,
      actions = _useOvermind.actions;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])({
    mode: 'onChange',
    validateCriteriaMode: "all"
  }),
      register = _useForm.register,
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      formState = _useForm.formState;

  var _ref = state.rsvp.personal && state.rsvp.personal.data || {},
      numberKTUR = _ref.numberKTUR,
      numberSID = _ref.numberSID,
      name = _ref.name,
      numberKTPOrPassport = _ref.numberKTPOrPassport,
      address = _ref.address,
      numberOfShares = _ref.numberOfShares,
      phoneNumber = _ref.phoneNumber,
      email = _ref.email,
      uploadID = _ref.uploadID,
      captcha = _ref.captcha,
      submitButton = _ref.submitButton,
      successMsgTitle = _ref.successMsgTitle,
      successMsg = _ref.successMsg,
      failedMsgTitle = _ref.failedMsgTitle,
      failedMsg = _ref.failedMsg,
      redirectURL = _ref.redirectURL;

  var watchNoKtur = watch("numberKTUR");
  var watchNoSID = watch("numberSID");
  var watchHidCaptcha = watch('hidGRecaptchaElement');

  var onSubmit = function onSubmit(data, e) {
    console.log("Form submitted ", data, e);
  }; // Similar to componentDidMount and componentDidUpdate:


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// if(!window.grecaptcha) reCaptchaInitialize('v2');
    // console.log('watchHidCaptcha', watchHidCaptcha);
  }, [watchHidCaptcha]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (state.rsvp.isSIDKTPVerified) {
      // verifyCaptcha
      Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["verifyCaptcha"])('hidGRecaptchaElement');
    }

    console.log('watchNoKtur', watchNoKtur);
    console.log('watchNoSID', watchNoSID);

    if (watchNoKtur && watchNoKtur.length > 6 && watchNoSID && watchNoSID.length > 6) {
      console.log('trigger api call to verify use is having valid sid and ktp '); // actions.rsvp.verifyValidUser();

      actions.rsvp.updateSIDKTPVerifedStatus(); // if(window.grecaptcha) grecaptcha.reset('gRecaptchaElement');

      if (!window.grecaptcha) Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["reCaptchaInitialize"])('v2');
    }
  });
  return __jsx("form", {
    className: "form",
    onSubmit: handleSubmit(onSubmit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Personal"), __jsx("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, " ", state.rsvp.personal.data && JSON.stringify(state.rsvp.personal.data, null, 2)), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberKTUR.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "No KTUR ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
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
      lineNumber: 74
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberKTUR.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberSID.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "No SID/AKSes.KSEI ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
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
      lineNumber: 91
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberSID.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }))), state.rsvp.isSIDKTPVerified === true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("label", {
    htmlFor: name.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Name ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
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
      lineNumber: 112
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: name.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("label", {
    htmlFor: passport.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "NIK (KTP)/Passport ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("input", {
    id: passport.name,
    name: passport.name,
    placeholder: passport.placeholder,
    ref: register({
      required: 'NIK (KTP)/Passport is required'
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "passport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "address",
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Address ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("input", {
    name: "address",
    ref: register({
      required: 'Address is required'
    }),
    type: "text",
    className: "form-control",
    id: "address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "numberOfShares",
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Jumlah Saham (sesuai KTUR) ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("input", {
    name: "numberOfShares",
    ref: register({
      required: 'Jumlah Saham (sesuai KTUR) is required'
    }),
    type: "text",
    className: "form-control",
    id: "numberOfShares",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "numberOfShares",
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
    htmlFor: "phoneNumber",
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Phone/Mobile ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("input", {
    name: "phoneNumber",
    ref: register({
      required: 'Phone number is required',
      pattern: {
        value: _util_constants__WEBPACK_IMPORTED_MODULE_3__["phonePattern1"],
        message: "Invalid phone number"
      }
    }),
    type: "text",
    className: "form-control",
    id: "phoneNumber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "phoneNumber",
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
    htmlFor: "email",
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Email ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("input", {
    name: "email",
    ref: register({
      required: 'Email is required',
      pattern: {
        value: _util_constants__WEBPACK_IMPORTED_MODULE_3__["emailPattern"],
        message: "Invalid email"
      }
    }),
    type: "email",
    className: "form-control",
    id: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx("div", {
    className: "file-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx("label", {
    className: "input-file-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("a", {
    className: "button button--2 button--axiata",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Upload ID"), "No file chosen", __jsx("input", {
    name: "uploadID",
    ref: register({
      required: 'Upload ID is required'
    }),
    type: "file",
    className: "input-file",
    id: "uploadID",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }))), __jsx("div", {
    className: "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "Ukuran berkas harus kurang dari 10 MB.s"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "Jenis file yang diperbolehkan: .jpg , .jpeg, .png, .pdf")), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "uploadID",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("div", {
    className: "g-recaptcha",
    id: "gRecaptchaElement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), __jsx("input", {
    type: "hidden",
    name: "hidGRecaptchaElement",
    defaultValue: state.rsvp.captchaValue,
    ref: register({
      required: 'Please validate captcha'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "hidGRecaptchaElement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })), __jsx("div", {
    className: "clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx("div", {
    className: "form-check form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("input", {
    name: "userAcceptance",
    id: "userAcceptance",
    ref: register({
      required: 'Please accept the terms and condition'
    }),
    type: "checkbox",
    className: "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "userAcceptance",
    className: "col-form-label pl-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, " Check to agree xl axiata terms and conditions.")), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "userAcceptance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  })), __jsx("div", {
    className: "form-group text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Submit")))) : __jsx("div", {
    className: "text-center text-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Enter No KTUR & No SID/AKSes.KSEI to verify your status"));
}

/***/ })

})
//# sourceMappingURL=index.js.8b5f737f707ab79fea36.hot-update.js.map