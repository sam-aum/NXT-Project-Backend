const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://admin:<password>@cluster0.yh3qq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, ()=>{
    console.log('connected to MongoDB - NXTDB')
})

mongoose.connection.on('error', err=>{
    console.log(err.message, 'is MongoDB running?')
})

// we don't need to directly interface with the db connection 

// we won't need an export 