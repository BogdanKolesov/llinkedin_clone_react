import firebase from 'firebase'
//  "firebase" v"^8.10.0"

const firebaseConfig = {
  apiKey: "AIzaSyDZCcASrIP5uBMS_cptgfQqb3WXzT3M42U",
  authDomain: "linkedinclonereact.firebaseapp.com",
  projectId: "linkedinclonereact",
  storageBucket: "linkedinclonereact.appspot.com",
  messagingSenderId: "440084646236",
  appId: "1:440084646236:web:a26371db91a63ca7759999"

};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db