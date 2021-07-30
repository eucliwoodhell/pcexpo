import firebase from 'firebase/app';
import "@firebase/firestore";
import "@firebase/auth"
import "@firebase/storage"


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDXWecTanppWr1SVEiX1wxDlNPtRNoBN4s",
    authDomain: "apps-dev-7e4bf.firebaseapp.com",
    projectId: "apps-dev-7e4bf",
    storageBucket: "apps-dev-7e4bf.appspot.com",
    messagingSenderId: "246289006794",
    appId: "1:246289006794:web:39a29f39f8f53102673433",
    measurementId: "G-146WLGW1PT"
})

export const getFirebaseApp = () => {
    return firebaseConfig
}

// Funcion que devuelve la informacion de la BD
export const getFirebaseAppStore = () => {
    return firebase.firestore(firebaseConfig);
}
//Funcion de Firebase de Autenticacion
export const getFirebaseAppAuth = () => {
    return firebase.auth(firebaseConfig)
}

//Funcion de Firebase de Storage
export const getFirebaseAppstorage = () => {
    return firebase.storage(firebaseConfig)
}