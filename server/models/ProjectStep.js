const mongoose = require('mongoose')
const { Schema } = mongoose

const projectStep = new Schema({
    projectId: String,
    stepOrder: Number,
    module: String,
    type: String,
    category: String,
    task: String,
    description: String,
    linkToDocs: String,
    answer: String,
    notes: String,
    status: String,
    originId: String,
})

module.exports = mongoose.model('ProjectStep', projectStep)

/* order by step order */
// task
// description
//link to docs
// notes
// status (as a checkbox or button of some kind