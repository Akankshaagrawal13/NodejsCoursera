const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const dboper = require('./operations');
const dbname = 'Test';
MongoClient.connect(url,(err,client)=>{
    assert.equal(err,null);
    console.log('Connected correctly to server');
    const db = client.db(dbname);
    // const collection = db.collection("dishes");
    // collection.insertOne({"name": "Uthapizza", "description": "test"}, (err,result)=>{
    //       assert.equal(err,null);
    //       console.log("After Insert: \n");
    //       console.log(result.ops);
    //       collection.find({}).toArray((err, docs) => {
    //         assert.equal(err,null);
    //         console.log("Found:\n");
    //         console.log(docs);
    //       });
    //       db.dropCollection("dishes", (err, result) => {
    //         assert.equal(err,null);

    //         client.close();
    //     });

    // });


  dboper.insertDocument(db,{"name": "Uttapizza","description": "test"},"dishes",(result)=>{
    console.log("Insert Document:\n", result.ops);
    dboper.findDocument(db,"dishes",(docs)=>{
        console.log("Found Documents:\n", docs);
    dboper.updateDocument(db,{ name: "Vadonut" } ,{ description: "Updated Test" },"dishes", (result) => {
        console.log("Updated Document:\n", result.result);
     dboper.findDocument(db,"dishes",(docs)=>{
         console.log("Found Document:\n",docs);
         db.dropCollection("dishes", (result) => {
            console.log("Dropped Collection: ", result);

            client.close();
        });
     });


    });
    });
  });



});