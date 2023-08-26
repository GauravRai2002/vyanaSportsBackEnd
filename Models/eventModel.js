const { mongoose, mongo } = require('mongoose')

const EventSchema = new mongoose.Schema({
    e_name : {
        type: String,
        required: true
    },
    e_id:{
        type:String,
        required:true,
        unique:true
    },
    e_logo:{
        type:String,
    }
})

const EventModel = mongoose.model('Event',EventSchema)

module.exports = EventModel