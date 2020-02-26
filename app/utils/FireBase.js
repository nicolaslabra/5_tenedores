import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOJRTcn315EM80JZRU6bFRENZA4npNg9w",
  authDomain: "tenedores-5038c.firebaseapp.com",
  databaseURL: "https://tenedores-5038c.firebaseio.com",
  projectId: "tenedores-5038c",
  storageBucket: "tenedores-5038c.appspot.com",
  messagingSenderId: "490599412447",
  appId: "1:490599412447:web:f01c4ac266c1dd5c506f6a"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
