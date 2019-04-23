import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDshjkVEYPtkKTU41HAHfHQm4FG3OIFR9c",
  authDomain: "m-city-ec27d.firebaseapp.com",
  databaseURL: "https://m-city-ec27d.firebaseio.com",
  projectId: "m-city-ec27d",
  storageBucket: "m-city-ec27d.appspot.com",
  messagingSenderId: "715124613255"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions =firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebaseDB,
  firebasePlayers
}

