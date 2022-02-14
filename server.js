const express = require('express')
const app = express()
const bookshelfController = require('./controllers/bookshelf')
const deskController = require('./controllers/desk')
const cors = require('cors')

require('./db')
    // the require is looking for an index.js - found it and executes the code there

// APP CONFIGS
const PORT = 8000
const acceptList = ["http://localhost:3000"]
    

const options ={
    origin: function(origin, callback){
        // if the origin argument is in the acceptlist -> continue
        // else - throw an err
        if( acceptList.indexOf(origin) !== -1 || !origin ){
            callback(null, true);
        } else {
            callback( new Error ("Not allowed by CORS"))
        }
        // else - throw an error 
    }
}

// MIDDLEWARE
app.use(express.json())
    //requests made application/json
app.use(cors(options));

// app.use(express.urlencoded({extended: false}))
app.use('/bookshelf', bookshelfController)
app.use('/desk', deskController)

// ROUTING
app.get('/', (req,res)=>{
    res.status(200).json({
        body: "You have found the books app"
    })
})


app.listen(PORT, () => {
    console.log(`celebrations happening on port ${PORT}!!!`)
})

