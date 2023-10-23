const dbName = "ecom";
const { connect } = require('../config/connection'); // Import the connect function
const collection = require('../config/collections');

module.exports = {
  signUp: async (auth, callback) => {
    try{
        const client = await connect(); // Connect to the MongoDB and get the client
        await client.db(dbName).collection(collection.AUTHENTICATION).insertOne(auth);
        client.close(); // Close the client when done
        callback(auth);
    }catch(error){
        console.log('DB-connection issue(signUp)',error);
    }
    
  },

  addProduct:async(product, callback)=>{

    try{
        const client = await connect();
        await client.db(dbName).collection(collection.ADD_PRODUCTS).insertOne(product);
        client.close();
        callback(product);

    }catch(error){
        console.log('Error : add product',error);
    }
  }
};
