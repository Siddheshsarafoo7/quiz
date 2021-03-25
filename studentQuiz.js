const http = require("http");
const mysql = require("mysql");
idRecieved = q.query["id"];
takeIdRecieved = q.query["takeId"];
answerIdRecieved = q.query["answerId"];
activeReceived = q.query["active"];
let answer1=[];
let receivedAnswer=[];
const con = mysql.createConnection({
host: "localhost",
username: "Siddhesh",
database: "Siddhesh_quiz questions and choices"
});
const connection = con.connect(function(err){if(err) throw err;
console.log("Connected!");
let sql = "SELECT * FROM takeAnswer";
console.log(sql);
con.query(sql, function(err, result){
if(err) throw err;
console.log(result);
answer=correct;
});
});
const server = http.creatServer(function(req, res)
{
console.log("Request received");
res.writeHead(200, {"Content-Type": "text/html", "Access-Control-Allow-Origin": "*"});
console.log(ans.length);
for(let i=0; i<answer.length; i++)
{
receivedAnswer[i]=answer[i].correct +":"+answer[i].answerId;
}
let totalIs = "";
for(let i=0; i<answer.length; i++){
total += receivedAns[i]+"<br>";
}
con.end();
res.end(total);
}).listen(8080);