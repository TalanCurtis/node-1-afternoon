const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controller/messages_controller')

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname+'/../public/build'))

let baseUrl = '/api/messages'
app.post(baseUrl, mc.create);
app.get(baseUrl, mc.read);
app.put(`${baseUrl}/:id`, mc.update);
app.delete(`${baseUrl}/:id`, mc.delete);

var port = 3020;
app.listen(port, ()=>{
    console.log('Listening to port: ', port)   
})