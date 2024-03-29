const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const dboper = require('./operations');
const dbname = 'Test';
MongoClient.connect(url).then((client)=>{
    console.log('Connected correctly to server');
    const db = client.db(dbname);
    
    dboper.insertDocument(db,{"name": "Uttapizza","description": "test"},"dishes").then((result)=>{
    console.log("Insert Document:\n", result.ops);
    return  dboper.findDocument(db,"dishes")
    })
    .then((docs)=>{
      console.log("Found Documents:\n", docs);
     return dboper.updateDocument(db,{ name: "Vadonut" } ,{ description: "Updated Test" },"dishes")
    })
    .then((result) => {
        console.log("Updated Document:\n", result.result);
     return  dboper.findDocument(db,"dishes")
    })
   .then((docs)=>{
         console.log("Found Document:\n",docs);
        return db.dropCollection("dishes")
   })
    .then((result) => {
            console.log("Dropped Collection: ", result);

            return client.close();
        }).catch((err)=> console.log(err));
     }).catch((err)=> console.log(err));


   