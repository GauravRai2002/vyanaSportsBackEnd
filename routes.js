const express = require('express')
const router = express.Router()
const io = require('./index')

const EventModel  = require('./Models/eventModel')
const { Socket } = require('socket.io')

//Add the events

router.post('/add/events',async (req,res)=>{
    // console.log(req.body)

    const event = new EventModel(req.body)
    event.save()
    res.send(req.body)
})
router.get('/events',async (req,res)=>{
    const events = await EventModel.find()
    res.send(events)
})

router.get('/events/:id',async (req,res)=>{
    // console.log(req)
    const id = req.params.id
    const events = await EventModel.findOne({'e_id':`${id}`})
    res.send(events)
})

router.put('/edit/event/:id',async(req,res)=>{
    const id = req.params.id
    const updateEvents = await EventModel.updateOne({'e_id':`${id}`},req.body)
    res.send(updateEvents)
})


module.exports = router