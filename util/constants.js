export const CAPTCHA_SITE_KEY_V3 = '6';
export const CAPTCHA_VERSION_3 = 'V3';
// export const CAPTCHA_SITE_KEY_V2 = '';
export const CAPTCHA_SITE_KEY_V2 = ''; //TEMP

export const CAPTCHA_VERSION_2 = 'V2';
export const MESSAGE_HIDE_DURATION = 6000;
export const WELCOME_SCREEN_TIMEOUT = 1500;
export const SUCCESS_SCREEN_TIMEOUT = 2500;
export const MOBILE_MAX_WIDTH = 767;
export const TABLET_MAX_WIDTH = 1024;
export const PLACEHOLDER_IMAGE = "https://via.placeholder.com/1000";
export const ERROR_MSG_NO_DATA_SET = "No data set for this view, please set the data at CMS level or in the JSON file, consult content team/dev team. Thanks!";
export const KTP_SID_SEARCH_HIT_MIN_CHARS = 5;
export const RSVP_STAKE_HOLDER_TYPE = {
   personal: 1,
   entity: 2,
   proxyholder: 3,
}

//OLD LOCAL DEV END-POINTS
// export const API_BASE_URL = "/:3001";
// export const API_BASE_URL_2 = "//:3000";

export const API_SERVICES = {
   VALIDATE_SID_KTP: '/services/validate-sid-ktp',
   RSVP_REGISTRATION: '/services/submit-registration',
   CAPTCHA_VERIFICATION: '/services/captchaVerification',
   QR_SCAN: '/services/qrCodeScan',
};

export const LS_KEY = {
   RSVP_TOKENS: 'xvRSVPTokens',
   RSVP_FORM_DATA: 'xvRSVPFormData',
};

export const phonePattern1 = /(^(?:(?:\+|0{0,2})62(\s*[\ -]\s*)?|[0]?)?[0]|[62]$)([0-9]{5,15}$)/;
export const phonePattern2 = /^[0-9]{6,15}$/;

export const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

