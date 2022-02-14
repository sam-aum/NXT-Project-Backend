const express = require('express')

const router = express.Router()

// import books model

const Book = require('../models/Book')



// books index route
router.get('/', async (req,res) =>{
    // res.json({
    //     message: "index route - books"
    // })

    try{
        //request all Books
        const allBooks = await Book.find()
        console.log(allBooks)

        res.json(allBooks)
    }catch (err){
        res.send('error occured')
    }
})

// book create
router.post('/', async (req,res)=>{
    //added async keyword to the anonymous function callback
    try {
        console.log("making a new book with", req.body)
        //try to run the code in this block
        const newBook = await Book.create(req.body)
            //await - pauses the execution of the code until the promise (Book.create) resolves -then stores that returned value in newBook
        res.json(newBook)
    } catch(err){
        // if there is error in the above code (a new error created by expres or by mongoose)
        // access the error through the er param
        console.log(err)
        res.send('error occured')
    }
})

// // Delete Route
// router.delete('/:id', async (req,res) =>{

//     try{
//         const deleteBook = await Book.findByIdAndDelete(req.params.id)
//         // console.log(allHolidays)

//         res.json(deleteBook)
//     }catch (err){
//         res.send('error occured')   
//     }
// })

// // Update Route
// router.put('/:id', async (req,res)=>{
//     //added async keyword to the anonymous function callback
//     try {
//         console.log("making a new book with", req.body)
//         const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true})
       
//         res.json(updateBook)
//     } catch(err){  
//         console.log(err)
//         res.send('error occured')
//     }
// })

module.exports = router