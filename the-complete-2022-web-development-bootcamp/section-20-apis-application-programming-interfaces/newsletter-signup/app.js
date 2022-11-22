const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  // const jsonData = JSON.stringify(data);

  const listId = '';
  async function run() {
    const response = await mailchimp.lists.addListMember(
      listId,
      data.members[0]
    );
    console.log(
      `Successfully added contact as an audience member. The contact\'s id is ${response.id}`
    );
  }

  console.log(`${firstName} :: ${lastName} :: ${email}`);

  run();

  /* mailchimp.setConfig({
    apiKey: '',
    server: '',
  });

  async function run() {
    const response = await mailchimp.ping.get();
    console.log(response);
  }

  run();*/
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
