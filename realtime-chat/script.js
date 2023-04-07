// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCgK0ZvTw0u5vrM0yd4ePRxTg0Mi2MZMM4',
  authDomain: 'realtime-chat-afbd0.firebaseapp.com',
  projectId: 'realtime-chat-afbd0',
  storageBucket: 'realtime-chat-afbd0.appspot.com',
  messagingSenderId: '743755537616',
  appId: '1:743755537616:web:c6e2cf2e05c84d0d1e52d5',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

//Asking for username using a prompt for simplicity
const username = prompt("What's your name?");

//Submit data to firebase realtime database
document.getElementById('send-message').addEventListener('submit', (e) => {
  e.preventDefault();
  const timestamp = Date.now();
  const chatTxt = document.getElementById('chat-txt');
  const message = chatTxt.value;
  chatTxt.value = '';
  db.ref('messages/' + timestamp).set({
    usr: username,
    msg: message,
  });
});

const fetchChat = db.ref('messages/');
fetchChat.on('child_added', (snapshot) => {
  const messages = snapshot.val();
  const msg = `<li> ${messages.usr}: ${messages.msg}</li>`;
  document.getElementById('messages').innerHTML += msg;
});
