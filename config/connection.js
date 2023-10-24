const MongoClient = require("mongodb").MongoClient;
const dontenv = require("dotenv");
dontenv.config();

const mongoURI = "mongodb://localhost:27017/";
// mongodb+srv://melvinjoy3:${process.env.CLUSTER_PASSWORD}@ecom-cluster.yxzcttr.mongodb.net/
module.exports.connect = async function () {
  const client = await MongoClient.connect(mongoURI, {
    useNewUrlParser: true,
  });
  return client;
};

module.exports.get = function () {
  return state.db;
};
