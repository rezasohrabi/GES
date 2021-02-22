import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config'

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({prompt: 'select_account'});

export const handleUserProfile = async (userAuth, aditionalData) => {
    if (!userAuth) return;
    const { uid } = userAuth;

    const userRef = db.doc(`users/${uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const { displayName, email } = userAuth;
        const timeStamp = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdTime: timeStamp,
                ...aditionalData
            });
        } catch(err) {
            console.error(err);
        }
    }

    return userRef;
}