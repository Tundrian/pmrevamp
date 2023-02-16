const mongoose = require('mongoose')
const { Schema } = mongoose

const project = new Schema({
    name: String,
    customer: String,
})

module.exports = mongoose.model('Project', project)