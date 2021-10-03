const firebaseConfig = {
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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
console.log("room name" + room_name);
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log("firebasemseeageId=" + firebase_message_id);
                        console.log("message" + message_data)
                        name = message_data['name'];
                        message = message_data['message'];

                        like = message_data['like'];
                        namewithpoop = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";
                        messagewithsuso = "<h4 class='message_h4'> " + message + "</h4>";
                        likebuttor = "<button class='btn btn-warning' id=" + firebase_message_id +" value=" + like + " onclick='updateLike(this.id)'>";
                        spanwithtag = "<span class='glyphicon glyphicon-thumbs-up '> Like:" + like + "</span></button><hr>";
                        row = namewithpoop + messagewithsuso + likebuttor + spanwithtag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function lockdown() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() {
      var msg = document.getElementById("Message").value;
      console.log("Message=" + msg);
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("Message").value;
}

function updateLike(message_id) {
      buttonid = message_id;
      like = document.getElementById(buttonid).value;
      updateLikes = Number(like) + 1;
      console.log("updatedlikes = " + updateLikes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updateLikes
      });

}
function lockdown() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}