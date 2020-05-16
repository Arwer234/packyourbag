var express = require("express")
var app = express();
var http = require('http').createServer(app);
app.use(express.static("static"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/static/index.html")
})


app.listen(3000, () => console.log(`Example app listening at: ` + 3000))