import * as dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.REACT_APP_API_KEY;
const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
const databaseURL = process.env.REACT_APP_DATABASE_URL;
const projectId = process.env.REACT_APP_PROJECT_ID;

import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId
});

const base = Rebase.createClass(firebaseApp.database());

export { base };
export default firebaseApp;
