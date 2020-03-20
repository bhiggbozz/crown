import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAsEH-Z04uax9lMJkvqHOJdWRpI0uSd-eE",
  authDomain: "crown-clothings-15ede.firebaseapp.com",
  databaseURL: "https://crown-clothings-15ede.firebaseio.com",
  projectId: "crown-clothings-15ede",
  storageBucket: "crown-clothings-15ede.appspot.com",
  messagingSenderId: "901801037156",
  appId: "1:901801037156:web:07674998d5e8a705623e71",
  measurementId: "G-KGW184SK2M"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  //console.log(firestore.doc(snapshot));

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
