import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAQlFGVJLrWTDFCswxH1pjUfZSypkkqsP4",
  authDomain: "letmeask-a19aa.firebaseapp.com",
  databaseURL: "https://letmeask-a19aa-default-rtdb.firebaseio.com",
  projectId: "letmeask-a19aa",
  storageBucket: "letmeask-a19aa.appspot.com",
  messagingSenderId: "341239312344",
  appId: "1:341239312344:web:56c5a8db5846669411ccad"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();