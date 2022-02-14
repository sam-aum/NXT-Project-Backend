const mongoose = require('mongoose')

const MONGO_URI = 'mongodb://127.0.0.1:27017/NXTDB'

mongoose.connect(MONGO_URI, ()=>{
    console.log('connected to MongoDB - NXTDB')
})

mongoose.connection.on('error', err=>{
    console.log(err.message, 'is MongoDB running?')
})

// we don't need to directly interface with the db connection 

// we won't need an export 