var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    database:"hectorva_db",
    user: "root",
    password: ""
});

connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA');
    }
});

connection.query('SELECT * FROM usuarios', function(error, results, fields){
    if(error)
        throw error
    
    results.forEach(result => {
        console.log(result);
    });
});

connection.end();
