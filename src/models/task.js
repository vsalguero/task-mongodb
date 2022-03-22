const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default : false
    }
})
//se crea una base de datos llamada task
module.exports = mongoose.model('task', TaskSchema);
