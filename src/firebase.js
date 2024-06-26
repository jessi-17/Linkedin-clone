import firebase from "./firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDY8AddQg5Sd8Cdyd7qQttkiOpud20o7lg",
    authDomain: "linkedin-clone-d06cb.firebaseapp.com",
    projectId: "linkedin-clone-d06cb",
    storageBucket: "linkedin-clone-d06cb.appspot.com",
    messagingSenderId: "34581783075",
    appId: "1:34581783075:web:996c9c96c453e746d3c796",
    measurementId: "G-TRP3C917N0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage};

  export default db;