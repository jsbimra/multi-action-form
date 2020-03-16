export const CAPTCHA_SITE_KEY_V3 = '6LeBw48UAAAAAKdEZJS0WvRM3YId-s1kaw6rd1O8';
export const CAPTCHA_VERSION_3 = 'V3';
export const CAPTCHA_SITE_KEY_V2 = '6LdGrVUUAAAAAJ2sLr5qoMu7XMPDIxZ1MX-HRT72';
export const CAPTCHA_VERSION_2 = 'V2';
export const MESSAGE_HIDE_DURATION = 6000;
export const MOBILE_MAX_WIDTH = 767;
export const TABLET_MAX_WIDTH = 1024;
export const PLACEHOLDER_IMAGE = "https://via.placeholder.com/1000";
export const ERROR_MSG_NO_DATA_SET = "No data set for this view, please set the data at CMS level or in the JSON file, consult content team/dev team. Thanks!";
export const KTP_SID_SEARCH_HIT_MIN_CHARS = 5;

export const API = {
    TOKEN_ME: '/v1/auth/token/me',
    TOKEN_REFRESH: '/v1/auth/token/refresh',
    LOGIN: '/v1/auth/email/login',
    REGISTER: '/v1/auth/email/registration',
};

export const LS_KEY = {
    XLTOKENS: 'xlTokens',
};

export const phonePattern1 = /(^(?:(?:\+|0{0,2})62(\s*[\ -]\s*)?|[0]?)?[0]|[62]$)([0-9]{5,15}$)/;
export const phonePattern2 = /^[0-9]{6,15}$/;

export const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;