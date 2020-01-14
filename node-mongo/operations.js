const assert = require('assert');

exports.insertDocument = (db,document,collection,callback) => {
  const coll = db.collection(collection);
  return coll.insert(document); // Promise
};

exports.findDocument = (db,collection,callback) => {
     const coll = db.collection(collection);
    return coll.find({}).toArray(); // Promise
};

exports.updateDocument = (db,document, update,collection,callback) => {
     const coll = db.collection(collection);
    return coll.updateOne(document,{ $set: update },null) // Promise
};

exports.removeDocument = (db,document,collection,callback) => {
    const coll = db.collection(collection);
   return  coll.deleteOne(document); // Promise
};