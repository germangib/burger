var mysql = require("mysql"); 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "passw0rd",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("Connected to DB as id " + connection.threadId);
});

module.exports = connection;
