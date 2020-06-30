import firebase from "firebase";

//https://console.firebase.google.com/u/0/project/react-redux-firebase-d96f5/settings/general/web:YTMwMzQ3YTUtYzU5NS00MGFlLWI0NzgtNGY0M2MyYzRmY2Zl

const firebaseConfig = {
  apiKey: "AIzaSyDMA4QxOq_CR1hQ35bdceYAkA3fTC70k1w",
  authDomain: "react-redux-firebase-d96f5.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-d96f5.firebaseio.com",
  projectId: "react-redux-firebase-d96f5",
  storageBucket: "react-redux-firebase-d96f5.appspot.com",
  messagingSenderId: "655470388277",
  appId: "1:655470388277:web:077fefd447a299b6347d7c",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


