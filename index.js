var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://Samha:b4kmllTVQPLfF4T5@cluster0.r1zv6em.mongodb.net/?retryWrites=true&w=majority";


MongoClient.connect(URL,function (error) {
     if (error)
     {
        console.log("Connection Fail");
     }
     else {
         console.log("Connection Success");
     }
});