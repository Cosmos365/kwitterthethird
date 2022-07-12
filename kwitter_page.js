//Firebase links 
var firebaseConfig = {
      apiKey: "AIzaSyBP8wsAX4gWuTjE6OjYEfFBnseMbPrpjGg",
      authDomain: "kwitter-457de.firebaseapp.com",
      databaseURL: "https://kwitter-457de-default-rtdb.firebaseio.com",
      projectId: "kwitter-457de",
      storageBucket: "kwitter-457de.appspot.com",
      messagingSenderId: "375628832944",
      appId: "1:375628832944:web:77174f5529efb2ea3c9b75"    
    };
    
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      
      document.getElementById("msg").value = "";
      console.log(msg);
}x