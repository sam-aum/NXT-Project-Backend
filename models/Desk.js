const mongoose = require('mongoose')
const {Schema} = mongoose
const deskSchema = mongoose.Schema({
    
    books:[{ type: Schema.Types.ObjectId, ref: 'Book' }]
   
}, {timestamps: true})
  

const Desk= mongoose.model('Desk', deskSchema)
module.exports = Desk
