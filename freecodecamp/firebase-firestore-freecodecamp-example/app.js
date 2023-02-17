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
let username = document.getElementById('username');
let about = document.getElementById('about');
const btn = document.getElementById('btn');
const btnCancel = document.getElementById('btnCancel');
const lists = document.getElementById('lists');

//Adding data to Firestore database
btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(db.collection('userInfo'));
  db.collection('userInfo').add({ username: username.value, bio: about.value });
  username.value = about.value = '';
  // alert('Cadastro realizado.');
  getUsers();
});

//Cleaning inputs and update button.
btnCancel.addEventListener('click', (e) => {
  e.preventDefault();
  username.value = about.value = '';
  btn.innerText = 'ADD';
});

//Reading users from userInfo collection
const getUsers = function () {
  lists.textContent = '';
  db.collection('userInfo')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let li = document.createElement('li');
        let userId = document.createElement('h6');
        let usernameH4 = document.createElement('h4');
        let bio = document.createElement('p');
        let selectUserButton = document.createElement('button');
        let deleteUserButton = document.createElement('button');

        userId.textContent = doc.id;
        usernameH4.textContent = doc.data().username;
        bio.textContent = doc.data().bio;
        //Creating Select button
        selectUserButton.setAttribute('type', 'button');
        selectUserButton.innerText = 'Select';
        selectUserButton.addEventListener('click', () => {
          console.log(doc.data().username, doc.data().bio);
          username.value = doc.data().username;
          about.value = doc.data().bio;
          btn.innerText = 'UPDATE';
        });
        //Creating Delete button
        deleteUserButton.setAttribute('type', 'button');
        deleteUserButton.innerText = 'Delete';
        deleteUserButton.addEventListener('click', () => {
          deleteUsers(doc.id);
        });

        li.appendChild(userId);
        li.appendChild(usernameH4);
        li.appendChild(bio);
        li.appendChild(selectUserButton);
        li.appendChild(deleteUserButton);

        lists.appendChild(li);
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
};

getUsers();

//Update user data from userInfo collection
const updateUsers = function (docId) {
  //Add code here...
  db.collection('userInfo')
    .doc(docId)
    .update({ username: username.value, bio: about.value });
  getUsers();
};

//Delete user data from userInfo collection
const deleteUsers = function (docId) {
  //Add code here...
  db.collection('userInfo').doc(docId).delete();
  getUsers();
};
