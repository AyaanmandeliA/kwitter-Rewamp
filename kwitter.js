
var firebaseConfig = {
    apiKey: "AIzaSyBM-2zlhI-NvP-XexEQCzFxkz-z9z92qh4",
    authDomain: "kwitterbeast.firebaseapp.com",
    databaseURL: "https://kwitterbeast-default-rtdb.firebaseio.com",
    projectId: "kwitterbeast",
    storageBucket: "kwitterbeast.appspot.com",
    messagingSenderId: "763978186859",
    appId: "1:763978186859:web:1ce411c7fe0328405f312e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function adduser()  {

    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";
}
