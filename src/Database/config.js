import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAgKX-VKmAxSsRn2EK7Rl70ofSv1JzSwPY",
    authDomain: "photowall-d3ef4.firebaseapp.com",
    databaseURL: "https://photowall-d3ef4-default-rtdb.firebaseio.com",
    projectId: "photowall-d3ef4",
    storageBucket: "photowall-d3ef4.appspot.com",
    messagingSenderId: "891162647409",
    appId: "1:891162647409:web:0a935f25e45b34481734d0",
    measurementId: "G-S2Q7E5GQ9N"
  };

  firebase.initializeApp(config)
  const database=firebase.database()

  export {database}