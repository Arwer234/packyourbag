var express = require("express")
var app = express();
var cors = require('cors')
var http = require('http').createServer(app);
var itemData = require("./static/js/data")
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
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
app.post('/eng',cors(),(req,res)=>{
    //console.log(JSON.parse(JSON.stringify(itemData['Data'])))
    let data = JSON.parse(JSON.stringify(itemData['Data']))
    let keys = Object.keys(data)
    let enKeys = {}
    for(let i = 0;i<keys.length;i++){
        if(data[keys[i]].en!=undefined) {
            enKeys[data[keys[i]].en] = data[keys[i]]
            enKeys[data[keys[i]].en].pl = keys[i]
        }
    }
    res.send(JSON.stringify(enKeys))
})
app.post('/images',(req,res)=>{
    if(itemData['Data'][req.body.image]!=undefined) res.send(JSON.stringify({extension:itemData['Data'][req.body.image].image.replace("\"","").split(".")[1]}))
    else res.send(JSON.stringify({extension:"none"}))
})
app.listen(3000, () => console.log(`Example app listening at: ` + 3000))