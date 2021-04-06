const express = require("express");
const mysql = require("mysql");
const cors = require("cors"); 

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    insecureAuth : process.env.INSECUREAUTH,
});

app.post('/register',(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
   
  db.query( 
    "INSERT INTO user (username,password,email) VALUES (?,?,?)",
    [username,password,email],
    (err,result) => {
    console.log(err);
    });
});

app.post('/login', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
   
  db.query( 
     "SELECT * FROM user WHERE username =? and password =?",
    [username,password],
    (err,result) => {
        if(err) {
           res.send({err: err})
        } 
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({message: "Wrong username/password combination"})
        }
    });
})

app.get('/users', (req, res) => {
  db.query("SELECT * FROM user", (err, results) => {
    if(err) throw err;
    res.json(results);
  });
});

app.listen(3000, () => {
    console.log("running server");
});
