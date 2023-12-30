const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a text field'],
    },
    listItem: {
        type: String,
    }
})

module.exports = mongoose.model('List', ListSchema);