
const firebaseConfig = {
      apiKey: "AIzaSyBWniEAKsoTQQvfMuZ8s1cY-VdNifP1UcE",
      authDomain: "kwitter-9c6e1.firebaseapp.com",
      databaseURL: "https://kwitter-9c6e1-default-rtdb.firebaseio.com",
      projectId: "kwitter-9c6e1",
      storageBucket: "kwitter-9c6e1.appspot.com",
      messagingSenderId: "539027963805",
      appId: "1:539027963805:web:07d47227935d2137b4b974"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function add_Room(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name",room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name -" + Room_names);
       row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(This.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML = row;
      
      });});}
getData();
 
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}