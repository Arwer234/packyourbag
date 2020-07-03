var express = require("express")
var app = express();
var cors = require('cors')
var http = require('http').createServer(app);
var itemData = require("./static/js/data")
app.use(express.static(__dirname + '/static'));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/static/index.html")
})
app.post('/getItemData',cors(), (req,res)=>{
    console.log(JSON.parse(JSON.stringify(itemData['Data'])))
    res.send(JSON.stringify(itemData['Data']))
})

app.listen(3000, () => console.log(`Example app listening at: ` + 3000))