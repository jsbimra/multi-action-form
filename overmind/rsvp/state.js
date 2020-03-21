
import { i18n } from '../../i18n';
import {t } from 'next-i18next';

// const types = i18n.t("types", { returnObjects: true });
// (async() => {
  
//   const i18nData = await i18n;
// console.log('i18n.t ', i18nData.t("types", { returnObjects: true }));
  
// })();


// console.log( "types ", types);

export const state = {
  title: "Online Registration / RSVP Online",
  formNotValid: true,
  selectedType: "",
  captchaValue: "",
  isSIDKTPVerified: false,
  ktpOrPassport: 1,
  proxyKtpOrPassport: 1,
  personal: {},
  entity: {},
  proxyholder: {},
  errors: {}
}