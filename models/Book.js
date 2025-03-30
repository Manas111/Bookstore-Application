const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    title: {
        type: String,
    },
    author: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Schema.Types.Double
    },
    rating: {
        type: Schema.Types.Double
    },
    publishedDate: {
        type: Date
    }
})

const Book = model('Book', BookSchema);
module.exports = Book;
