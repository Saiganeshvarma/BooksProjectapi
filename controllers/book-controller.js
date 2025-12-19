var book = require("../model/books")

var getAllBooks = async(req,res)=>{
    var allBooks = await book.find()
    res.status(200).json({allBooks})
}

var createNewBook = async(req,res)=>{
    var newBook = await book.create({
    title : req.body.title,
    name : req.body.name,
    author : req.body.author,
    price : req.body.price
    })
    console.log(newBook);
    res.status(201).json({message : "created a new book"})
}

var getSingleBook = async(req,res)=>{
    var Bookid = req.params.id 
    var singleBook = await book.findById(Bookid)
    res.status(200).json({singleBook})
}

var updateNewBook = async(req,res)=>{
    try{
        var bookId = req.params.id 
        var updatedBook = await book.findByIdAndUpdate(bookId,{
            title : req.body.title,
            name : req.body.name,
            author : req.body.author,
            price : req.body.price


        })
        res.status(201).json({message : "book updated",a :updatedBook})


    }catch(error){
        console.log("error",error);
    }
}

var deleteBook = async(req,res)=>{
    try{
        var bookId = req.params.id 
        var deletedBook = await book.findByIdAndDelete(bookId)
        res.status(200).json({message : "Book deleted"})

    }catch(error){
        console.log("error",error);
    }
}





module.exports = {
    getAllBooks,createNewBook,getSingleBook,updateNewBook,deleteBook
}