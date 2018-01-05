const Client = require('node-rest-client').Client
var client = new Client()
const config_json = require('./config')

getPostRedditAndroid = (limit) => {
    return new Promise (function(resolve,reject){ 
        var url =  `${config_json.host}${config_json.android}/new/.json?limit=${limit}`
        client.get(url,function(data,response){
            if(data.error)
                return reject(data.error)
            return resolve(data)
        })
    })
}

getPostRedditKotlin = (r) => {
    return new Promise (function(resolve,reject){ 
        var url =  `${config_json.host}${config_json.kotlin}/new/.json?limit=${1}`
        client.get(url,function(data,response){
            if(data.error)
                return reject(data.error) 
                var a = []
                a.push(r)
                a.push(data)
                return resolve(a)
        })
    })
}

module.exports = {
    getPostRedditAndroid,
    getPostRedditKotlin
}