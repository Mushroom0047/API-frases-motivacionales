const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
//const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json())

//mysql
var connection = mysql.createConnection({
    host: "localhost",
    database:"hectorva_db",
    user: "hectorva_user01",
    password: "codname47",
    //user: "root",
    //password: "",
    charset : "utf8mb4"
  });

 //rutas
 app.get('/frases-motiv/:id', (req, res)=>{
     const {id }= req.params;
     const sql = `SELECT * FROM FrasesMotiv WHERE id = ${id}`;
     connection.query(sql, (error, result)=>{
        if(error) throw error;
        if(result.length > 0){
            res.json(result);
        }else{
            res.send('NOt results');
        }
    });
 });

  //chceck conn
  connection.connect(error =>{
      if(error) throw error;
      console.log('Database is runing');
  });

  //app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
