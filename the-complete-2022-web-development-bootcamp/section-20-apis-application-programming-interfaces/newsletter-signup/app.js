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

  console.log(data.members[0]);

  const jsonData = JSON.stringify(data);

  const url = `https://us14.api.mailchimp.com/3.0/lists/c439257566./members`;
  // const url = `https://us14.api.mailchimp.com/schema/3.0/lists/c439257566./members`;

  const options = {
    method: 'POST',
    auth: 'liegele: b8ec24a3e4040e3feb38c51695494f28-us14',
  };

  const request = https.request(url, options, (response) => {
    response.on('data', (data) => {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

  // mailchimp.setConfig({
  //   apiKey: 'b8ec24a3e4040e3feb38c51695494f28',
  //   server: 'us14',
  // });

  // const listId = 'c439257566.';
  // async function run() {
  //   // const response = await mailchimp.lists.batchListMembers(listId, {
  //   const response = await mailchimp.lists.addListMember(listId, {
  //     email_address: data.members[0].email_address,
  //     status: 'subscribed',
  //     merge_fields: {
  //       FNAME: data.members[0].FNAME,
  //       LNAME: data.members[0].LNAME,
  //     },
  //   });
  //   console.log(
  //     `Successfully added contact as an audience member. The contact\'s id is ${response.id}`
  //   );
  // }

  // console.log(`${firstName} :: ${lastName} :: ${email}`);

  // run();

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
