
var firebaseConfig = {
      apiKey: "AIzaSyBU109NWNX-LIcIyDWDYfLVMB0-yOOUEwY",
      authDomain: "kwitter-hxls-group.firebaseapp.com",
      databaseURL: "https://kwitter-hxls-group-default-rtdb.firebaseio.com",
      projectId: "kwitter-hxls-group",
      storageBucket: "kwitter-hxls-group.appspot.com",
      messagingSenderId: "877076864809",
      appId: "1:877076864809:web:6b333da3e1c6437888a138",
      measurementId: "G-XCERH2N4YH"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
Username=localStorage.getItem("UN")
document.getElementById("WelcomeMessage").innerHTML="Welcome "+Username +"!"


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
