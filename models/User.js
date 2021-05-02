const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            max: 1024
        },
        description:{
            type: String,
            max: 1024
        },
        price : {
            type: String,
            max: 1024
        }
    }
)

module.exports = mongoose.model('Post', postSchema)