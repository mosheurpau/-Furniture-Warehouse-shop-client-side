// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAg3wqnxd14FsXs3AwY7tnji1-YtFLevE",
  authDomain: "furniture-warehouse-shop.firebaseapp.com",
  projectId: "furniture-warehouse-shop",
  storageBucket: "furniture-warehouse-shop.appspot.com",
  messagingSenderId: "964989250889",
  appId: "1:964989250889:web:ea1b77462e24da40627e98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
