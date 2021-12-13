const express = require('express')
const app = express()
const pug = require('pug')
require('./database')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine','pug')

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/api/user',(req,res)=>{

})

app.post('/api/user',(req,res)=>{

})
app.put('/api/user',(req,res)=>{
    
})
app.delete('/api/user',(req,res)=>{
    
})


app.use(express.static('views'))

app.listen(3100,()=>{
    console.log('Server on port 3100')
})
