const express = require('express')
const app = express()
const pug = require('pug')
const bodyParser = require('body-parser')
require('./database')
const mongoose = require('mongoose')

let users = require('./models/user.model')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine','pug')

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/a',(req,res)=>{
    res.render('inicio')
})

app.get('/api/user',async (req,res)=>{
    try{
       console.log('Funciona')
        let user = await users.find()
        console.log(user)
       res.status(200).json({
           message: 'Funciona.',
           data: user
       })

    }catch{
        console.log('Error')
        res.status(500).json({
            message: 'Error.'
        })
    }

})
//nueva GET
app.get('/api/user/:id',async (req,res)=>{
    try{
       console.log('Si funcionó')
       
       let id = req.params
       console.log(id.id)

       let usuarioE = await users.findById(id.id)
       console.log(usuarioE)

       res.status(200).json({
           message: 'Si funcionó',
           data: usuarioE           
       })

    }catch{
        console.log('Error')
        res.status(500).json({
            message: 'Error.'
        })
    }

})

app.post('/api/user',async (req,res)=>{
    try{
        let us = req.body
        console.log(us)
        let newUser = new users()
        newUser.name = us.name
        newUser.age = us.age
        console.log(newUser)

        newUser = await newUser.save()

        console.log('funciona POST')
        res.status(200).json({
            message: 'Funciona POST',
            data: newUser
        })

    }catch(e){
        console.log('Error',e)
        res.status(500).json({
            message: 'Error POST'
        })

    }

})
app.put('/api/user',(req,res)=>{

    
})
app.delete('/api/user',(req,res)=>{
    
})


app.use(express.static('views'))

app.listen(3100,()=>{
    console.log('Server on port 3100')
})
