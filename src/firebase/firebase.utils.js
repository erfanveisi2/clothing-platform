import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const config={
    apiKey: "AIzaSyABepbdvSbCUP1gj97roNqWMAR22tPO3so",
    authDomain: "clothing-pl.firebaseapp.com",
    projectId: "clothing-pl",
    storageBucket: "clothing-pl.appspot.com",
    messagingSenderId: "1098970500876",
    appId: "1:1098970500876:web:5bb92098100fb5ba6ac329",
    measurementId: "G-6FZM8M4W1N"
}

firebase.initializeApp(config)

export const auth =firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=() => auth.signInWithPopup(provider)

export default firebase;