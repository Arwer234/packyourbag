var express = require("express")
var app = express();
var http = require('http').createServer(app);
var itemData = require("./static/js/data")
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/static/index.html")
})
app.post('/getItemData', (req,res)=>{
    console.log(JSON.parse(JSON.stringify(itemData['Data'])))
    res.send(JSON.stringify(itemData['Data']))
})

app.listen(3000, () => console.log(`Example app listening at: ` + 3000))