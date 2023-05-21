import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCssnKlXD10QTg-DGn8JsLe7h4UfJ0Msjw",
    authDomain: "olx-doppelganger.firebaseapp.com",
    projectId: "olx-doppelganger",
    storageBucket: "olx-doppelganger.appspot.com",
    messagingSenderId: "267334475451",
    appId: "1:267334475451:web:3e7eec92d57da654cd539e"
  };
  
// Initializing Firebase
const app = initializeApp(firebaseConfig);

// Initializing Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app);

// signup
export async function registerUser(email, password, userData) {
    return await createUserWithEmailAndPassword(auth, email, password)
     .then(async (userCred) => { 
        return await setDoc(doc(db, "users", userCred.user.uid), {
            full_name: userData.name,
        });
     })
     .then(() => { 
        return {success: true, msg: "Registration Successful!"} })
     .catch((e) => { 
        return {success: false, msg: e.message} });
}

// sign in
export async function loginUser(email, password) {
    return await signInWithEmailAndPassword(auth, email, password)
     .then((userCred) => { return {loggedIn: true, msg: "Logged in successfully!"} })
     .catch((e) => { return {loggedIn: false, msg: e.message} });
}
