const dbName = "ecom";
const { connect } = require('../config/connection'); // Import the connect function

module.exports = {
  signUp: async (auth, callback) => {
    console.log("auth", auth);
    try{
        const client = await connect(); // Connect to the MongoDB and get the client
        await client.db(dbName).collection("signUp").insertOne(auth);
        client.close(); // Close the client when done
        callback(auth);
    }catch(error){
        console.log('DB-connection issue(signUp)',error);
    }
    
  },
};
