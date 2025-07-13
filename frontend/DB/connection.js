const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

connection.connect(err => {
    if(err){
        console.log("Conexão com o banco de dados foi falha! ", err);
        return;
    }
    console.log("Conexão estabelecida com o banco de dados Mysql");
});