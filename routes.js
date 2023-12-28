const express = require('express')
const router = express.Router()
const io = require('./index')

const { Cloudinary } = require('./cloudinary')

const EventModel  = require('./Models/eventModel')

//Add the events

router.post('/add/events',async (req,res)=>{
    const event = new EventModel(req.body)
    event.save()
    res.send(req.body)
})
router.get('/events',async (req,res)=>{
    var events = await EventModel.find()
    events.reverse()
    console.log(events)
    res.send(events)
})

router.get('/events/:id',async (req,res)=>{
    const id = req.params.id
    
        const events = await EventModel.findOne({'e_id':`${id}`})
        console.log(events)
        if(events==null){
            res.send({
                'result':[],
                'schedule':[],
                'rules':[],
                'videos':[]
            })
        }else  res.send(events)
    
})

router.put('/edit/event/:id',async(req,res)=>{
    const id = req.params.id
    const updateEvents = await EventModel.updateOne({'e_id':`${id}`},req.body)
    res.send(updateEvents)
})

router.put('/add/videos/:id',async(req,res)=>{
    const id = req.params.id
    console.log(req.body)
    const updateEvents = await EventModel.updateOne({'e_id':`${id}`},{
        $set: req.body
    })
    res.send(updateEvents)
})


router.put('/add/link/:id',async(req,res)=>{
    const id = req.params.id
    console.log(req.body)
    const updateEvents = await EventModel.updateOne({'e_id':`${id}`},{
        $set: req.body
    })
    res.send(updateEvents)
})

router.put('/add/teams/:id',async(req,res)=>{
    const id = req.params.id
    const events = await EventModel.findOne({'e_id':`${id}`})
    const data = [...events.teams,req.body.teams]
    console.log(req.body)
    const updateEvents = await EventModel.updateOne({'e_id':`${id}`},{
        $set: {
            'teams': data
        }
    })
    res.send(updateEvents)
})


router.post('/upload',async (req,res)=>{
    try {
        const fileStr = req.body.data;
        const uploadedResponce = await Cloudinary.uploader.upload(fileStr, {
            upload_preset: 'ml_default'
        })
        res.json({'res':uploadedResponce.url})
    } catch (error) {
        console.log(error)
    }
})


module.exports = router