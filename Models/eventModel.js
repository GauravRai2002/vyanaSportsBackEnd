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
    },
    timing:{
        type:String,
        required:true
    },
    rules:{
        type:[],
        required:false
    },
    schedule:{
        type:[],
        required:false
    },
    result:{
        type:[]
    },
    videos:{
        type:[],
        required:false
    },
    teams:{
        type:[],
        required:false
    },
    cricheroes:{
        type:String,
        required:false
    }
})

const EventModel = mongoose.model('Event',EventSchema)

module.exports = EventModel