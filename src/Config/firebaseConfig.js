// v9 compat packages
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDSr0277KQ8NA6H7VtsPs5sBj_MPzikxLU",
    authDomain: "react-crud-app-fd958.firebaseapp.com",
    projectId: "react-crud-app-fd958",
    storageBucket: "react-crud-app-fd958.appspot.com",
    messagingSenderId: "253187319116",
    appId: "1:253187319116:web:fa48cf7e697787d5511be9",
    measurementId: "G-12V0RK8G90"
  };

  const Fireapp = firebase.initializeApp(firebaseConfig);

  export default Fireapp