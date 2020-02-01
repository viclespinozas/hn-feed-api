const mongoose = require('mongoose')

const News = new mongoose.Schema({
    createdAt: {type: Date, default:''},
    title: {type: String, default:''},
    storyTitle: {type: String, default:''},
    url: {type: String, default:''},
    storyUrl: {type: String, default:''},
    author: {type: String, default:''},
    newsId: {type: String, default:''},
    active: {type: Boolean, default: true}
})

module.exports = mongoose.model('News', News)