// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALKe8ak_SJxJg5Oa6ZQMWkYF5AJo_o2eM",
  authDomain: "react-chat-ac762.firebaseapp.com",
  projectId: "react-chat-ac762",
  storageBucket: "react-chat-ac762.appspot.com",
  messagingSenderId: "221376609989",
  appId: "1:221376609989:web:d35ced0de89a2a0da2baac",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
