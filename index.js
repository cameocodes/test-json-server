const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const eventsRouter = require('./events/eventsRouter')

const PORT = 3000;

app.use(bodyParser.json())
app.use(cors())

app.use('/events', eventsRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})