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

