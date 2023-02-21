const mongoose = require('mongoose')
const { Schema } = mongoose

const project = new Schema({
    name: String,
    customer: String,
    csmName: String,
    csmEmail: String,
    clientId: String,
    sowAttachment: String,
    goLiveDate: Date,
    status: String,
    startDate: Date,
})

module.exports = mongoose.model('Project', project)