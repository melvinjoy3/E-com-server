const dbName = "ecom";
const { connect } = require("../config/connection"); // Import the connect function
const collection = require("../config/collections");
const bcrypt = require("bcrypt");

module.exports = {
/**
 * 
 * ! Call back function
 */    
//   doSignUp: async (usersData,callback) => {
//     console.log("usersData", usersData.password);
//     const client = await connect();
//     usersData.password = await bcrypt.hash(usersData.password, 10);
//     await client
//       .db(dbName)
//       .collection(collection.USER_COLLECTION)
//       .insertOne(usersData);

//       callback(usersData);
//   },

/**
 * !PROMISE FUNCTION
 */
doSignUp: (usersData) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("usersData", usersData.password);
        const client = await connect();
        usersData.password = await bcrypt.hash(usersData.password, 10);
        await client
          .db(dbName)
          .collection(collection.USER_COLLECTION)
          .insertOne(usersData);
        client.close();
        resolve(usersData);
      } catch (error) {
        reject(error);
      }
    });
  },

};
