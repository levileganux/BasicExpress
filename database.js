const mongoose = require('mongoose')

const URI = 'mongodb://localhost/prueba'

mongoose.connect(URI)
.then(db=>console.log('DB connected'))
.catch(err=>console.log(err))