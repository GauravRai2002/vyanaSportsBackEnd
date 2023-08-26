const mongoose = require('mongoose')

const matchSchema = new mongoose.Schema({
    e_id:{
        type:String,
        required:true,
    },
    m_id:{
        type:String,
        required:true,
        unique:true
    },
    team_one:{
        type:String,
        required:true
    },
    team_two:{
        type:String,
        required:true
    },
    score_one:{
        type:String,
        required:true
    },
    score_two:{
        type:String,
        required:true
    },
    prev_set:{
        type:[],
    },
    winner:{
        type:String
    },
    date:{
        type:String,
        required:true
    },
    video_id:{
        type:String
    },
    timing:{
        type:String,
        required:true
    }
})


const matchModels = mongoose.model('matches',matchSchema)

module.exports = matchModels