// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

function MyFireBase() {

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDFFf0DruZHoaeBw1ol1gaDYRVWZEZSlkE",
        authDomain: "shoppingcart-8f8dc.firebaseapp.com",
        projectId: "shoppingcart-8f8dc",
        storageBucket: "shoppingcart-8f8dc.appspot.com",
        messagingSenderId: "187419939200",
        appId: "1:187419939200:web:09492eefb14d407e797165"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    const firestore = getFirestore(app);

    return firestore;
}

const myFirestore = MyFireBase();

export default myFirestore;