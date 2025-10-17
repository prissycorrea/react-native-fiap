import { initializeApp, getApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6m_XGjdCg0SLFB99WAifQfIpFzY2M-cw",
  authDomain: "fir-daa33.firebaseapp.com",
  projectId: "fir-daa33",
  storageBucket: "fir-daa33.firebasestorage.app",
  messagingSenderId: "33537034349",
  appId: "1:33537034349:web:dcf28a9c22d420164ed764"
};

// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} else {
  app = getApp();
  auth = getAuth(app);
}

export { app, auth };