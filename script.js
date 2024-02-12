<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyABxiNcLiOdHJ2eL5q_S3S6FMxs6vgf5YA",
    authDomain: "worksmart-5f694.firebaseapp.com",
    databaseURL: "https://worksmart-5f694-default-rtdb.firebaseio.com",
    projectId: "worksmart-5f694",
    storageBucket: "worksmart-5f694.appspot.com",
    messagingSenderId: "535728807064",
    appId: "1:535728807064:web:233a37450b4dee1da5c4ed",
    measurementId: "G-ZCJLW9S6QE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>