  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAiDvxWxNNkGS5Ac26oWHq65ZGB5EqXmgc",
    authDomain: "new-project-071.firebaseapp.com",
    projectId: "new-project-071",
    storageBucket: "new-project-071.appspot.com",
    messagingSenderId: "240080304620",
    appId: "1:240080304620:web:c928f497593845f491e8c9",
    measurementId: "G-7HZ5LW7L89"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);