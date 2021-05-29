import Rebase from "re-base";
import Firebase from "firebase";

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyCh-t3_dSsPqyRhmJJv8T8qaOlguZwd47Y",
  authDomain: "cath-of-the-day-5acf5.firebaseapp.com",
  storageBucket: "cath-of-the-day-5acf5.appspot.com",
  projectId: "cath-of-the-day-5acf5",
  databaseURL:
    "https://cath-of-the-day-5acf5-default-rtdb.asia-southeast1.firebasedatabase.app/",
  //
});
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
