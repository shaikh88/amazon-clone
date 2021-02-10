import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB9jEw13BSzpzGdy4y1YWolI7D0iuEQNgg",
    authDomain: "clone-6fb72.firebaseapp.com",
    databaseURL: "https://clone-6fb72-default-rtdb.firebaseio.com",
    projectId: "clone-6fb72",
    storageBucket: "clone-6fb72.appspot.com",
    messagingSenderId: "754334892702",
    appId: "1:754334892702:web:8a0dcc3a3dffe03eefb18f"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();
  export const db = firebase.firestore();

  export default firebase;