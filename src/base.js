import Rebase from "re-base";
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB4QLkvbyJin3UqkvAhNor1VpVAOVF32H8',
  authDomain: 'catch-of-the-day-ea.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-ea-default-rtdb.firebaseio.com',
  projectId: 'catch-of-the-day-ea'
});

const base = Rebase.createClass(firebaseApp.database());

export { base };
export default firebaseApp;
