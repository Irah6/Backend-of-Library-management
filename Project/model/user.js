const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    Name:{
        type: String
    },
    Reg_no:{
        type: Number
    },
    Year_of_study :{
        type: Number
    },
    Book_borrowed_date :{
        type: Date
    },
    D_day_to_return:{
        type:Date
    },
    BookName:{
        type: String
    }
})
module.exports = mongoose.model('user',userschema)
