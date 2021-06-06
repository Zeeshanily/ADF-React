import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD-oRc0nZOQRGCFt4cV1upOyPKBCcqI7hQ",
    authDomain: "reactadf1.firebaseapp.com",
    projectId: "reactadf1",
    storageBucket: "reactadf1.appspot.com",
    messagingSenderId: "754735419057",
    appId: "1:754735419057:web:558982cb49c6b6e0b7dc90",
    measurementId: "G-667B5S9D50"
  };
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
 //firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true })
//export default firebase;
export default fireDb.database().ref();
