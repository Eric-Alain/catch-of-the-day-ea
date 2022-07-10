//This file does nothing except demonstrate a set up for base without apiKeys
//Set up of this project doesn't allow the convenient use of .env variables
import Rebase from "re-base";
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'XXXXXX',
  authDomain: 'XXXXXX',
  databaseURL: 'XXXXXX',
  projectId: 'XXXXXX'
});

const base = Rebase.createClass(firebaseApp.database());

export { base };
export default firebaseApp;
