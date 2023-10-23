const dbName = "ecom";
const { connect } = require("../config/connection"); // Import the connect function
const collection = require("../config/collections");
const bcrypt = require("bcrypt");

module.exports = {
  /**
   * !PROMISE FUNCTION
   */
  doSignUp: (usersData) => {
    return new Promise(async (resolve, reject) => {
      try {
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

  doLogin: (loginDetails) => {
    let response = {};
    return new Promise(async (resolve, reject) => {
      const client = await connect();
      const user = await client
        .db(dbName)
        .collection(collection.USER_COLLECTION)
        .findOne({ email: loginDetails.email });
      if (user) {
        bcrypt.compare(loginDetails.password, user.password).then((status) => {
          if (status) {
            response.user = user;
            response.status = true;
            resolve(response)
          } else {
            console.log("login failed");
            resolve({status:false});
          }
        });
      } else {
        console.log("User has no account");
        resolve({status:false});
      }
    });
  },
};
