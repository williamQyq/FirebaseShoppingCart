// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

function MyFireBase() {

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCK6mkhPREOTt2mVtOsTDZ97PSegfKZO30",
        authDomain: "myfirebase-352d3.firebaseapp.com",
        projectId: "myfirebase-352d3",
        storageBucket: "myfirebase-352d3.appspot.com",
        messagingSenderId: "2371914049",
        appId: "1:2371914049:web:8381c8227eac73b2b739c0",
        measurementId: "G-8Y7856DZ2X"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);

    return app;
}

const myFirebase = MyFireBase();

export default myFirebase;