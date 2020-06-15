import window from 'global';

let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

// http://1xx.xx.xxx.xxx:3001/services/validate-sid-ktp <<< dev
// http://1xx.xx.xxx.xxx:3001/services/validate-sid-ktp <<< staging and prod

//FE deployed PROD IP:  1xx.xx.xxx.xxx
//FE deployed DEV IP:  1xxxxx

if(hostname === '1xx.xx.xxx.xxx') { //for production
  backendHost = 'http://1xx.xx.xxx.xxx:3001'; 
} else if(hostname === '1xx.xx.xxx.xxx.140') { //for staging condition
  backendHost = 'http://11xx.xx.xxx.xxx:3001'; 
} else if(hostname === '1xx.xx.xxx.xxx') { //for dev server 
    backendHost = 'http://1xx.xx.xxx.xxx:3001'; 
} else if(/^qa/.test(hostname)) { //for QA
  backendHost = `https://api.${hostname}`;
} else { //for localhost
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://153.92.5.209:3001';
}

// console.log('backendHost', backendHost)
export const API_ROOT = `${backendHost}`;
