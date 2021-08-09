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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    //for google sign in: userAuth.displayName value is not null
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user ', error.message)
    }
  }
  return userRef
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
