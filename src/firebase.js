import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1zJuuWhcdP4PeWTkM-Vbd3TaNUkbZerE",
    authDomain: "facebook-clone-fe281.firebaseapp.com",
    projectId: "facebook-clone-fe281",
    storageBucket: "facebook-clone-fe281.appspot.com",
    messagingSenderId: "956905333526",
    appId: "1:956905333526:web:77bd07b4f78bfe49ffe637",
    measurementId: "G-2BKX9W0PXF"
  };

  // we need to innotialise the app
  //by connecting our react front end to the firebase
  const firebaseapp =   firebase.initializeApp(firebaseConfig);

  //Get access to the data base
  const db = firebaseapp.firestore();

  //sign up Authentification
  const auth = firebase.auth();

  // telling firebase we want the google login service
  const provider = new firebase.auth.GoogleAuthProvider();

  // To access the stuffs out of the file

  export {auth, provider};
  export default db; 