import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({prompt: 'select_account'});

export const handleUserProfile = async ({userAuth, additionalData}) => {
    if (!userAuth) return;
    const { uid } = userAuth;

    const userDocRef = db.doc(`users/${uid}`);
    const docSnapshot = await userDocRef.get();
    //this code runs only when first time logging with google,
    //that user's doc doesn't exsit in firestore db
    // and in this situation add user doc also
    if(!docSnapshot.exists){
        const { displayName, email } = userAuth;
        const timeStamp = new Date();
        const userRoles = ['user'];
        try {
            await userDocRef.set({
                displayName,
                email,
                createdTime: timeStamp,
                userRoles,
                ...additionalData
            });
        } catch(err) {
            console.error(err);
        }
    }

    return userDocRef;
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unSubscribe = auth.onAuthStateChanged( userAuth => {
            resolve(userAuth);
            unSubscribe();
        }, reject);
    });
}