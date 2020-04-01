import window from 'global';

let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

// http://172.30.252.56:3001/services/validate-sid-ktp <<< dev
// http://172.30.252.57:3001/services/validate-sid-ktp <<< staging and prod

//FE deployed PROD IP:  172.30.251.140
//FE deployed DEV IP:  172.30.252.56

if(hostname === '172.30.251.140') { //for production
  backendHost = 'http://172.30.252.57:3001'; 
} else if(hostname === '172.30.251.140') { //for staging condition
  backendHost = 'http://172.30.252.57:3001'; 
} else if(hostname === '172.30.252.56') { //for dev server 
    backendHost = 'http://172.30.252.56:3001'; 
} else if(/^qa/.test(hostname)) { //for QA
  backendHost = `https://api.${hostname}`;
} else { //for localhost
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://153.92.5.209:3001';
}

// console.log('backendHost', backendHost)
export const API_ROOT = `${backendHost}`;