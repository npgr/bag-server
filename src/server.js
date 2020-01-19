require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()

// Application-Level Middleware

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes

app.get('/', (req, res) => res.send('Hello World'))

// Start

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App listening on port ${port}!`))
