var express = require('express');
var app = express();

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var detailsRecords = [{
        id:"1",
        firstName: "John",
        lastName: "Doe",
        about:"Nice guy",
        hobby:"Likes drinking wine",
        skills:["html", "javascript", "redux"],
        active: false
    },{
        id:"2",
        firstName: "Mary",
        lastName: "Moe",
        about:"Cute girl",
        hobby:"Likes playing xbox whole days long",
        skills:["Fortran", "Lua", "R#"],
        active: false
    },{
        id:"3",
        firstName: "Peter",
        lastName: "Noname",
        about:"Awesome Developer",
        hobby:"He is the author of React.js",
        skills:["Lisp", "Om", "JS"],
        active: false
    }];

var id = 3;

function generateData(){
    id+=1;
    detailsRecords.push({
        id:id.toString(),
        firstName:`Generated#${id}`,
        lastName:"Randomly",
        about:"Generated About",
        hobby:"Generated Hobby",
        skills:["G", "E", "N", "E", "R", "A", "T", "E", "D", id],
        active: false
    });
}

app.get('/', function(req, res) {
    generateData();
    res.json({
        detailsRecords:detailsRecords
    });
});

app.listen(process.env.PORT || 4730);