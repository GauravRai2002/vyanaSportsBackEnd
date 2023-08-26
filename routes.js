const express = require('express')
const router = express.Router()

const EventModel  = require('./Models/eventModel')
const matchModels = require('./Models/matchesModel')

//Add the events

router.post('/add/events',(req,res)=>{
    console.log('req.body')
    const event = new EventModel(req.body)
    event.save()
    res.send(req.body)
})


//Add the matches
router.post('/add/matches',(req,res)=>{
    console.log('req.body')
    const match = new matchModels(req.body)
    match.save()
    res.send(req.body)
})


//Get all the current events



//Get all the current Matches



//Get all the past matches



//Get all the upcoming matches




module.exports = router