const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const StepRouter = require('./routes/stepRoutes')
const cors = require('cors')

connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/step', StepRouter)

app.get('/', (req, res) => {
    res.send('Application works!')
})

app.listen(process.env.PORT, () => {
    console.log(`Application started on http://localhost:${process.env.PORT}`)
})