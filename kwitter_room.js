// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBP8wsAX4gWuTjE6OjYEfFBnseMbPrpjGg",
      authDomain: "kwitter-457de.firebaseapp.com",
      databaseURL: "https://kwitter-457de-default-rtdb.firebaseio.com",
      projectId: "kwitter-457de",
      storageBucket: "kwitter-457de.appspot.com",
      messagingSenderId: "375628832944",
      appId: "1:375628832944:web:77174f5529efb2ea3c9b75"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+user_name+"!";

function addRoom() {
      room_names = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_names).update({
            purpose:"adding room name"
      });
localStorage.setItem("room_names",room_names);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
            console.log("room name - "+Room_names);
            row = "<div class = 'room_name' id="+Room_names+"onclick = 'redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
            document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_names",name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}