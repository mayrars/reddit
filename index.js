const functions = require('./functionsRestbse')
var express = require('express')

var app = express()
var data = {};
app.get('/getPost',function(req, res){
    res.setHeader('Content-Type', 'text/json')
    functions.getPostRedditAndroid(req.query.num)
    .then(functions.getPostRedditKotlin)
    .then( response =>{
        res.status(200) 
        res.send(JSON.stringify(response))
    })
    .catch(error =>{
        res.status(500)
        res.send(JSON.stringify(error))
    })
})
    
app.listen(3000)