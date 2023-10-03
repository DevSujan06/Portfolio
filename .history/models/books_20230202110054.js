let mongoose = require('mongoose');
let booksModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    Price: Number
},
    
})