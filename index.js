
//Dale Martin Asiddao
//CMSc  100 
const { v4: uuidv4 } = require('uuid');
const validator = require('validator');
const fs = require('fs');

function generateUniqueID(firstName, lastName) {

  const uniqueID = uuidv4().replace(/-/g, '').substring(0, 8);

//const user = ['Dale', 'Asiddao', 'dbasiddao@up.edu.ph', 19];
//const saved = addAccount(user);
  const lowerFirstName = firstName.toLowerCase();

  const lowerLastName = lastName.toLowerCase();
 
  return lowerFirstName.charAt(0) + lowerLastName + uniqueID;
}

function addAccount(user) {
  const [firstName, lastName, email, age] = user;

  //this checks if all fields are present
  if (!firstName || !lastName || !email || !age) {
    return false;
  }

  // if the list satisfies a string
  if (
    typeof firstName !== 'string' || //first name
    typeof lastName !== 'string' || //last name
    typeof email !== 'string' //email 
  ) {
    return false;
  }

  //validator for email
  if (!validator.isEmail(email)) {
    return false;
  }

  //validates the age minimum 
  if (!validator.isInt(age.toString(), { min: 18 })) {
    return false;
  }

  //Saving convention
  const uniqueID = generateUniqueID(firstName, lastName);
  const userData = `${firstName},${lastName},${email},${age},${uniqueID}\n`;

  fs.appendFileSync('users.txt', userData);

  return true;
}

module.exports = {
  generateUniqueID,
  addAccount,
};
