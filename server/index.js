const express =require("express")
const app=express()
const mysql = require("mysql");
const cors = require("cors");
const { response } = require("express");

 app.use(cors());
 app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "project",
});

app.post("/create", (req, res) => {
    console.log(req.body.name);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const position = req.body.position;
  const address = req.body.address;

  db.query(
    "INSERT INTO employee_details (emp_id,emp_name,email,password, position,address) VALUES (null,?,?,?,?,?)",
    [name, email, password, position, address],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.get("/employees", (req, res) => {
    db.query("SELECT * FROM employee_details", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
   //response.data("Hello World")
  });

app.listen(3001,()=>
{
    console.log("server iss runninggg on 3001 ")
});