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

//Shoplist's JSON model
let list = {
  created: firebase.firestore.FieldValue.serverTimestamp(),
  modified: '163585389123',
  accessPermission: [
    {
      email: 'aniziacaoliveira@gmail.com',
      mode: 'write',
    },
  ],
  listItems: [
    {
      category: 'Hortifruti',
      name: 'Banana',
      amount: '10',
      price: '8.10',
      'price-timestamp': '',
      'last-price': '7.50',
      'last-price-timestamp': '',
      selected: 'true',
      search: 'banana',
    },
  ],
};

console.log('----> ', list.listItems[0].category);

//Adding OR Updating data to Firestore database
btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (btn.innerText === 'ADD') {
    addUsers();
    username.value = about.value = '';
  } else if (btn.innerText === 'UPDATE') {
    updateUsers(btn.dataset.id);
  }
});

/* //Adding data to Firestore database
btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(db.collection('userInfo'));
  db.collection('userInfo').add({ username: username.value, bio: about.value });
  username.value = about.value = '';
  // alert('Cadastro realizado.');
  getUsers();
}); */

//Cleaning inputs and update button.
btnCancel.addEventListener('click', (e) => {
  e.preventDefault();
  username.value = about.value = '';
  btn.innerText = 'ADD';
});

//Getting users from userInfo collection

const getUsers = function () {
  db.collection('userInfo').onSnapshot((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      // bio: doc.bio,
      ...doc.data(),
    }));
    console.log(data);
    lists.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].username, '||', data[i].bio);
      let li = document.createElement('li');
      let userId = document.createElement('h6');
      let usernameH4 = document.createElement('h4');
      let bio = document.createElement('p');
      let selectUserButton = document.createElement('button');
      let deleteUserButton = document.createElement('button');

      // userId.textContent = doc.id;
      usernameH4.textContent = data[i].username;
      bio.textContent = data[i].bio;

      //Creating Select button
      selectUserButton.setAttribute('type', 'button');

      selectUserButton.innerText = 'Select';
      selectUserButton.addEventListener('click', () => {
        console.log(data[i].username, data[i].bio);
        username.value = data[i].username;
        about.value = data[i].bio;
        btn.innerText = 'UPDATE';
        btn.dataset.id = userId.textContent;
      });

      //Creating Delete button
      deleteUserButton.setAttribute('type', 'button');
      deleteUserButton.innerText = 'Delete';
      deleteUserButton.addEventListener('click', () => {
        deleteUsers(data[i].bio);
      });

      li.appendChild(userId);
      li.appendChild(usernameH4);
      li.appendChild(bio);
      li.appendChild(selectUserButton);
      li.appendChild(deleteUserButton);

      lists.appendChild(li);
    }
  });
};

// https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots
/* db.collection('userInfo').onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      console.log(`added: ${change.doc.data()}`);
    }
    if (change.type === 'modified') {
      console.log(`modified: ${change.doc.data()}`);
    }
    if (change.type === 'removed') {
      console.log(`removed: ${change.doc.data()}`);
    }
  });
}); */

/* const getUsers = function () {
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
          btn.dataset.id = userId.textContent;
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
}; */

getUsers();

//Add user data to userInfo collection using SET()
const addUsers = function () {
  console.log(db.collection('userInfo'));
  db.collection('userInfo').doc('liegele@gmail.com').set(list);
  getUsers();
};
/*
  //Add user data to userInfo collection using GET()
  const addUsers = function () {
  console.log(db.collection('userInfo'));
  db.collection('userInfo').add({
    username: username.value,
    bio: about.value,
  });
  getUsers();
};
 */
//Update user data from userInfo collection
const updateUsers = function (docId) {
  db.collection('userInfo')
    .doc(docId)
    .update({ username: username.value, bio: about.value });
  getUsers();
};

//Delete user data from userInfo collection
const deleteUsers = function (docId) {
  db.collection('userInfo').doc(docId).delete();
  getUsers();
};
