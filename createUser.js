const Parse = require('parse/node');
require('dotenv').config()

const APP_ID = process.env.BACK4APP_APP_ID;
const JAVASCRIPT_KEY = process.env.BACK4APP_JAVASCRIPT_KEY;
Parse.initialize(APP_ID, JAVASCRIPT_KEY);

Parse.serverURL = process.env.BACK4APP_JAVASCRIPT_URL;

function createUser(){
  let user = new Parse.User();
  // Set the input values to the new "User" object
  user.set("username", "nodejs2env");
  user.set("email", "nodejs2@mailinator");
  user.set("password", "node");
  // Call the save method, which returns the saved object if successful
  user = user.save().then(
    obj => obj.toJSON()
  ).then( user => {
    console.log('Object saved:\n', user);
  }).catch( console.error);
}

function readUser( id ){
  console.info("Retriving object with id",id);

  const userQuery = new Parse.Query(Parse.User);
  userQuery.get( id )
  .then( obj => obj.toJSON() )
  .then( user => {
    console.info("Retrieved user",user);
  }).catch( console.error )

}

