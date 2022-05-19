const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
const port = 8080;

const ejs = require("ejs");
app.engine("ejs", ejs.renderFile);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.set("src", "path/to/views");

app.get("/", (req, res, err) => {
res.render(__dirname + "/src/pages/index.ejs");
console.log("Sayfaya giriş yapıldı");
});
app.get("*", (req,res)=>{
res.render(__dirname + "/src/pages/error.ejs");  
});
server.listen(port, () => {
console.log(port, " Portu dinleniyor");
});
