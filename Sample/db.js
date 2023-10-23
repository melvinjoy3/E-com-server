//connection old
const MongoClient = require("mongodb").MongoClient;

const state = {
  db: null,
};
const mongoURI = "mongodb://localhost:27017/";
const dbName = "ecom";

module.exports.connect = function (done) {
  MongoClient.connect(mongoURI, { useNewUrlParser: true }, (err, data) => {
    if (err) return done(err);
    state.db = data.db(dbName);
    done();
  });
};

module.exports.get = function () {
  return state.db;
};
