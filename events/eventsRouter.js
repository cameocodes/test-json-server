const express = require('express')
const router = express.Router()
const mockEvents = require('./mockEvents.json')
const mockEvent = require('./mockEvent.json')

router.get('/', (req, res) => {
        res.status(200).json(mockEvents)
    })

router.get('/1',(req, res) => {
    res.status(200).json(mockEvent)
})

module.exports = router