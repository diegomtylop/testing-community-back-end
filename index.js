const { read } = require('fs');
const Parse = require('parse/node');
require('dotenv').config()

const APP_ID = process.env.BACK4APP_APP_ID;
const JAVASCRIPT_KEY = process.env.BACK4APP_JAVASCRIPT_KEY;
Parse.initialize(APP_ID, JAVASCRIPT_KEY);

Parse.serverURL = process.env.BACK4APP_JAVASCRIPT_URL;

const user =
Parse.User.logIn(process.env.BACK4APP_CURRENT_USER_USERNAME, process.env.BACK4APP_CURRENT_USER_PASS)
.then( user => {
  console.log("USer authenticated", user);

  const sessionToken = user.getSessionToken();
  genericQueryById('e8yKJw3C19', {sessionToken: sessionToken});
}).catch( console.error )
// Do stuff after successful login.

function genericQueryById( id, sessionToken ){
  console.info("Retriving object with id",id);

  const query = new Parse.Query("Students");
  query.get( id , sessionToken)
  .then( obj => obj.toJSON() )
  .then( retrievedObject => {
    console.info("Retrieved object",retrievedObject);
  }).catch( console.error )

}

