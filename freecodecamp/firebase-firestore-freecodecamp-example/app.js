//Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyCpohuFlm_3A0TXWjthJiqmsuJ2oNIpL98',
  authDomain: 'freecodecamp-firestore.firebaseapp.com',
  projectId: 'freecodecamp-firestore',
  storageBucket: 'freecodecamp-firestore.appspot.com',
  messagingSenderId: '389558323102',
  appId: '1:389558323102:web:53033b78ec2aa86d3ef88f',
  measurementId: 'G-BWT22ETR25',
});

const db = firebase.firestore();

//Getting HTML elements
const username = document.getElementById('username');
const about = document.getElementById('about');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(db.collection('userInfo'));
  db.collection('userInfo').add({ username: username.value, bio: about.value });
  username.value = about.value = '';
  alert('Cadastro realizado.');
});
