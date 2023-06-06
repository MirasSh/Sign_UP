import firebase from  'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAUK1D6wBDTTgGMbeyimaKi37UCPMag6HY",
    authDomain: "auth-developement-4ae2b.firebaseapp.com",
    projectId: "auth-developement-4ae2b",
    storageBucket: "auth-developement-4ae2b.appspot.com",
    messagingSenderId: "408879259774",
    appId: "1:408879259774:web:1dd770f361caa054a5b82f"
})

export const auth = app.auth()
export default app
