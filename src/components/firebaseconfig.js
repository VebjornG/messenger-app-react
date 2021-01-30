import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCt_UdaMedSrCs6vKExF33Pi3uHBeziVww",
  authDomain: "messenger-app-react-f066e.firebaseapp.com",
  projectId: "messenger-app-react-f066e",
  storageBucket: "messenger-app-react-f066e.appspot.com",
  messagingSenderId: "529600427196",
  appId: "1:529600427196:web:2179c33cd3f1ce1f868cb9",
  measurementId: "G-4CLSJ47JSY",
});

export const db = firebase.firestore();


export default firebaseConfig;

/*export const createUserDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`)
}*/