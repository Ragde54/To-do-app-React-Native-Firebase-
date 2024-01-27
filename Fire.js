import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, signInAnonymously} from "firebase/auth";
import colors from "./Colors";

// Delete these two lines (my config was stored in a separate file not committed to github, use your own on the next section)
import firebaseConfig from "./firebase-config";
const fireConfig = firebaseConfig

// Uncomment this section and paste your Firebase config here
/* 
const fireConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
*/
const app = initializeApp(fireConfig)

const auth = getAuth(app)
signInAnonymously(auth)
  .then(() => {
    console.log("Connected")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

  const db = getFirestore(app);
  
  export default Fire;
