const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://mahmoud:socerfotb@nodejs-express-ex0ar.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then(client => {
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
    });
} 

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    console.log("error: no database found");
  }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;