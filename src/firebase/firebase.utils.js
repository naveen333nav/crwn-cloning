import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyB3NcaA90ralztPHM6JjOBYAb0ymMO_2Gk',
  authDomain: 'crown-db-3ec1a.firebaseapp.com',
  projectId: 'crown-db-3ec1a',
  storageBucket: 'crown-db-3ec1a.appspot.com',
  messagingSenderId: '655598580573',
  appId: '1:655598580573:web:27413e9818db0b26452eb4',
  measurementId: 'G-97EJ0VMFZ3',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
