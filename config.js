import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyCrgdHFzPqmgEbq0a6NklUshHAP-Bol5S0",
    authDomain: "aula-71-c9cf6.firebaseapp.com",
    projectId: "aula-71-c9cf6",
    storageBucket: "aula-71-c9cf6.appspot.com",
    messagingSenderId: "586464558818",
    appId: "1:586464558818:web:fe35f52252b9a47571a8bb"
  };
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
