const express = require("express");
const app = express();
const bodyParser = require("body-Parser");
const mysql = require("mysql");
const cors =require("cors");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"abhi"
});


app.use(cors());
app.use(bodyParser.urlencoded({extension:false}));
app.use(bodyParser.json());
app.use(express.json());

app.get("/",(req,resp)=>{
    const details="SELECT * FROM employee"
    db.query(details,(err,result)=>{
        if(err){
            resp.send(err)
            return;
        }
        resp.send(result);
    })
})

app.listen(4000);
console.log("server is ruuning on 4000");