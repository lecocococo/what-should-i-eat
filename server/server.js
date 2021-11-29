const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
// const db = require("./config/database");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root", //mysql의 id
  password: "a70903", //mysql의 password
  database: "opentutorials", //사용할 데이터베이스
});

// connection.connect();

connection.connect((err) => {
  if (err) {
    console.log("error connecting" + err.stack);
    return;
  }
  console.log("success");
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server response is successive");
});

app.get("/aa", (req, res) => {
  res.json({ username: "bryan" });
});

app.get("/m", (req, res) => {
  //DB에 접근할 수 있는 주소와
  connection.query("SELECT * from title", (error, rows) => {
    //쿼리문
    if (error) throw error;
    res.send(rows);
  });
});

app.post("/api", (req, res) => {
  // const test = req.body.test;
  // console.log(req.body);
  connection.query("SELECT title FROM topic", function (err, rows, fields) {
    if (err) {
      console.log("실패");
      // console.log(err);
    } else {
      console.log("성공");
      console.log(rows);
      console.log(rows[0]);
      res.send(rows);
      // console.log(rows);
    }
  });
});

app.post("/callbody", (req, res) => {
  console.log(req);
  console.log(res);
  connection.query(
    "SELECT * FROM topic where id=1",
    function (err, rows, fields) {
      if (err) {
        console.log("불러오기 실패");
      } else {
        console.log("불러오기 성공");
        res.send(rows[0]);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`server run : http://localhost:${PORT}`);
});
