// // product-helpder
// const MongoClient = require("mongodb").MongoClient;
// const mongoURI = "mongodb://localhost:27017/";
// const dbName = "ecom";

// module.exports = {
//   addProducts: async (products, callback) => {
//     console.log("products", products);
//     const client = await MongoClient.connect(mongoURI, {
//       useNewUrlParser: true,
//     });
//     await client.db(dbName).collection("Test2").insertOne(products);
//     callback(true);
//   },
// };





//products new
const dbName = "ecom";
const { connect } = require('../config/connection'); // Import the connect function

module.exports = {
  addProducts: async (products, callback) => {
    const client = await connect(); // Connect to the MongoDB and get the client
    await client.db(dbName).collection("Test2").insertOne(products);
    client.close(); // Close the client when done
    callback(products);
  },
};


//connection
const MongoClient = require("mongodb").MongoClient;

const mongoURI = "mongodb://localhost:27017/";

module.exports.connect = async function () {
  const client = await MongoClient.connect(mongoURI, {
    useNewUrlParser: true,
  });
  return client;
};


module.exports.get = function () {
  return state.db;
};
