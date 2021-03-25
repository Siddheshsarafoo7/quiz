const http = require("http");
const url = require("url");
const mysql = require("mysql");
http.createServer(function(reg, res){
let q = url.parse(reg.url,true);
console.log(q.query);
questionRecieved = q.query["question"];
idRecieved = q.query["id"];
quizIdRecieved = q.query["quizId"];
questionIdRecieved = q.query["questionId"];
correctRecieved = q.query["correct"];
quizIdRecieved = q.query["quizId"];
activeRecieved = q.query["active"];
levelReceievd = q.query["level"];
choiceRecieved =q.query["choice"];
console.log("Request recieved");
res.writeHead(200, {"Content-Type": "text/html",
"Access-Control-Allow-Origin": "*"});
if (isNaN(scoreRecieved) ){
res.end("type a question and select a choice");
}
else{
const con = mysql.createConnection({
host: "localhost",
username: "siddhesh",
database: "siddhesh_quiz questions and choices",
con.connect(function(err){
if(err) throw err;
console. log("Connected!");
let sql = "INSERT INTO quiz_question(id, QuizId, active, level, score,question,choice,) values ('"+questionRecieved +"',"+choiceRecieved+")";
console.log(sql);
+ con.query(sql,function(err, result){
if(err) throw err;
console.log("1 record inserted");
res.end(questionRecieved+" : "+idReceived+":"+activeRecieved+":"+levelReceievd+""+correctReceived+""+questionIdReceived+""stored in the database");
}).listen(8888);
