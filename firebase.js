// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzZHTu5uQISTlzxxGP1ri6z91HwwP3LqI",
  authDomain: "nfttut.firebaseapp.com",
  projectId: "nfttut",
  storageBucket: "nfttut.appspot.com",
  messagingSenderId: "441587548275",
  appId: "1:441587548275:web:3ced8d0aeb3435e8922a06",
  measurementId: "G-0V981Z9JL9",
  storageBucket : "gs://nfttut.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
// var storage = firebase.storage();

// var storageRef = storage.ref();

// let imageRef = storageRef.child("screenshot/Screenshot (2).png");
// console.log(imageRef);