/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDaIEVOrmvCqp8GKRLjYeto5i90dz74gWI",
  authDomain: "friendlychat-b6a05.firebaseapp.com",
  projectId: "friendlychat-b6a05",
  storageBucket: "friendlychat-b6a05.appspot.com",
  messagingSenderId: "197513320044",
  appId: "1:197513320044:web:812a5a40197af4adc82a49",
  measurementId: "G-RM1Z1WEBY4"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
