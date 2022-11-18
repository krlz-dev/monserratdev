const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const {executeQuery, createArticlesTableQuery, databaseConfig} = require("./database");
const app = express()
const port = 3001

//Database setup
const connection = mysql.createConnection(databaseConfig)
connection.connect((err) => {
  if (err){
    console.log("Oh no! DATABASE ERROR")
    throw err
  }
  console.log("Mysql connected")
});

executeQuery(connection, createArticlesTableQuery)

//Routing
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.get('/articles', cors(corsOptions), (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})