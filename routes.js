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
router.get('/events',async (req,res)=>{
    const events = await EventModel.find()
    res.send(events)
})



//Get all the Matches based on PREV, CURR or NEXT
router.get('/matches/:id',async (req,res)=>{
    const time = req.params.id
    const matches = await matchModels.find({"timing":`${time}`})
    res.send(matches)
})




module.exports = router