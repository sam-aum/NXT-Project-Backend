const mongoose = require('mongoose')
const {Schema} = mongoose
const bookSchema = mongoose.Schema({
    title: {type: String, required: true},
    authors: {type: String},
    imageLinks: {type: String},
    description: {type: String, default: 'Book Description!'},
   
}, {timestamps: true})
  

const Book = mongoose.model('Book', bookSchema)
module.exports = Book
