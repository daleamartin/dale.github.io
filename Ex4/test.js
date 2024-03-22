// import index.js
// import const;id index.js
//access the index.js 

const { generateUniqueID, addAccount } = require('./index');

//Test
const uniqueID = generateUniqueID('Alan', 'Turing');
console.log(uniqueID);

// Initialize the required data
const user = ['Dale', 'Asiddao', 'dbasiddao@up.edu.ph', 19];
const saved = addAccount(user);
if (saved) {
  console.log(' User Saved successfully.');
} else {
  console.log('Error saving not completed.');
}
