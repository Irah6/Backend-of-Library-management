const mongoose = require('mongoose')
const bookschema = new mongoose.Schema({
     Sno:{
        type: Number
    },
    BookName:{
        type: String
    },
    Authorname :{
        type: String
    },
    Dateofpublication :{
        type: Date
    },
    No_of_times_borrowed:{
        type: Number
    },
    No_of_books_in_stock:{
        type: Number
    }
})
module.exports = mongoose.model('Book',bookschema)
