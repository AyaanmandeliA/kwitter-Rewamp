
//ADD YOUR FIREBASE LINKS HERE

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

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function lockdown(){
      localStorage.removeItem("user_name");
      window.location="index.html";
}

function addroom() {
      room_name = document.getElementById("room").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_pager.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room_names="+Room_names);
                  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
                  document.getElementById("output").innerHTML +=row;
                  
                  //End code
            });
      });
}

function redirectToRoomName(poop){
      console.log(poop);
      localStorage.setItem("room_name",poop);
      window.location="kwitter_pager.html";
}