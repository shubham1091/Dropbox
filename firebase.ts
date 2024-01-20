import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAIPszGtR71YGQ0j5mTY0LrHx2os2OCxcA",
    authDomain: "dropbox-clone-a9d2a.firebaseapp.com",
    projectId: "dropbox-clone-a9d2a",
    storageBucket: "dropbox-clone-a9d2a.appspot.com",
    messagingSenderId: "458757305594",
    appId: "1:458757305594:web:bb7ecb870b4a9511144543"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage};