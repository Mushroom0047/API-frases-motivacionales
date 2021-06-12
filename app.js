const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

//mysql
var connection = mysql.createConnection({
    host: "localhost",
    database:"hectorva_db",
    user: "hectorva_user01",
    password: "codname47",
    charset : "utf8mb4"
  });

  //chceck conn
  connection.connect(error =>{
      if(error) throw error;
      console.log('Database is runing');
  });
