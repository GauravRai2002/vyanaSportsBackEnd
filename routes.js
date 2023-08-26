const express = require('express')
const router = express.Router()

const EventModel  = require('./eventModel')

router.post('/add/events',(req,res)=>{
    console.log('req.body')
    const event = new EventModel(req.body)
    event.save()
    res.send(req.body)
})

module.exports = router