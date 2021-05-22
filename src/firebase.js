import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD-DdGJshCwb0x9IREbRKDa_Zw5Wwt_8LI",
  authDomain: "discord-e9ad8.firebaseapp.com",
  projectId: "discord-e9ad8",
  storageBucket: "discord-e9ad8.appspot.com",
  messagingSenderId: "172480248447",
  appId: "1:172480248447:web:32d8fe50404807d448dd4a",
  measurementId: "G-H7WM4KSL9C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
//google login functionality
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
