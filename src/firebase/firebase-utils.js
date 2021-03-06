import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCYXF6Mvl9E_hrXif6kPSfmp_Wb7TuM0E0",
  authDomain: "signin-1f412.firebaseapp.com",
  databaseURL: "https://signin-1f412.firebaseio.com",
  projectId: "signin-1f412",
  storageBucket: "signin-1f412.appspot.com",
  messagingSenderId: "266037246297",
  appId: "1:266037246297:web:a515f714217a6389887448",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfile = async (userAuth, aditional) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const spanshot = await userRef.get();
  if (!spanshot.exists) {
    const { displayName, email } = userAuth;
    try {
      await userRef.set({
        displayName,
        email,
        ...aditional,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};
