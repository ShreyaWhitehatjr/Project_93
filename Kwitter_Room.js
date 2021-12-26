var firebaseConfig = {
  apiKey: "AIzaSyCe9MxJx32M7jdxoAHwEPhPV3sDbfRJSPE",
  authDomain: "class-93-ce50e.firebaseapp.com",
  databaseURL: "https://class-93-ce50e-default-rtdb.firebaseio.com",
  projectId: "class-93-ce50e",
  storageBucket: "class-93-ce50e.appspot.com",
  messagingSenderId: "195562705145",
  appId: "1:195562705145:web:276ef4c66ada7289399228"
};

firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  });});}
getData();

