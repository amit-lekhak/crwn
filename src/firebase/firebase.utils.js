import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD-vEewLflETqTSJTNYB7Dhf_A-I-u1rfE',
  authDomain: 'crwn-db-8b0be.firebaseapp.com',
  projectId: 'crwn-db-8b0be',
  storageBucket: 'crwn-db-8b0be.appspot.com',
  messagingSenderId: '947474748923',
  appId: '1:947474748923:web:50ced1c6dea5eb129e275e',
  measurementId: 'G-0KRYJ1465T',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
