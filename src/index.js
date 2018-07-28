import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCek5Tlr2B8pwYFFk08P0vY4yL6FQd-s1g",
  authDomain: "goodchoeun.firebaseapp.com",
  databaseURL: "https://goodchoeun.firebaseio.com",
  projectId: "goodchoeun",
  storageBucket: "goodchoeun.appspot.com",
  messagingSenderId: "1016783094902"
};

firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

ReactDOM.render(<App db={db} />, document.getElementById('root'));
registerServiceWorker();