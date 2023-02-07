const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const StepRouter = require('./routes/stepRoutes')


connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.use('/api/step', StepRouter)

app.get('/', (req, res) => {
    res.send('Application works!')
})

app.listen(process.env.PORT, () => {
    console.log(`Application started on http://localhost:${process.env.PORT}`)
})