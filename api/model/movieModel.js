const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required:true
    },
    director: {
        type: String,
        required: true
    },
    cetagory: String,
    duration: String
})
const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie