var firebaseConfig = {
  apiKey: "AIzaSyCfRKrRoIp-fMK5L1HZrA27o_yi-2nLBs4",
  authDomain: "tailwindcss-ee003.firebaseapp.com",
  projectId: "tailwindcss-ee003",
  storageBucket: "tailwindcss-ee003.appspot.com",
  messagingSenderId: "998085974905",
  appId: "1:998085974905:web:7c2916ff3c855cc369eda8",
  measurementId: "G-CSWFV55LZL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
