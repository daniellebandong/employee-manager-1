/* 
  Login Service Will Authenticate an email and password
  return a true or false response.
  false returns will keep users on the login page with errors
  true will redirect user to the dashboard.html
*/
const fileService = require('./fileService')

// login route
// pass the authenticate {email, password}
// read the user.json file get the data
// loop over the data check the emailfor a match
// if it matches then check password
const authenticate = (credential)=>{
   const {email, password} = {...credential}
   const users = fileService.getFileContents('../data/users.json');
   // making the test
   // array...... sort, filter map reduce find forEach
   // need know what the return is

}
 
authenticate({email:"user@gmail.com",password:"1234"})