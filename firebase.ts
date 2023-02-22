import { getApp, getApps, initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4F03FdcysSrsVCkqU9VylvmH9Ljya61E",
    authDomain: "chatgpt-ffbfd.firebaseapp.com",
    projectId: "chatgpt-ffbfd",
    storageBucket: "chatgpt-ffbfd.appspot.com",
    messagingSenderId: "1010108503777",
    appId: "1:1010108503777:web:7c0bfcd62fb740243409a0"
  };
  
  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };