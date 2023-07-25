
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set, get} from "firebase/database";
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAofR0_tQPc2Cvz5JO-DfCY43TKXGRBPbY",
    authDomain: "softeng-mindcheck.firebaseapp.com",
    databaseURL: "https://softeng-mindcheck-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "softeng-mindcheck",
    storageBucket: "softeng-mindcheck.appspot.com",
    messagingSenderId: "540338321211",
    appId: "1:540338321211:web:cb28c9b96be1354c4f691e",
    measurementId: "G-H788E2H82D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth();

const getUserData = async (uid) => {
    try {
      const userRef = ref(db, `users/${uid}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

export{app, analytics, db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getUserData};