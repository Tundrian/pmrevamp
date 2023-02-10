const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const cors = require('cors')
const StepRouter = require('./routes/stepRoutes')
const ProjectRouter = require('./routes/projectRoutes')
const ProjectStepRouter = require('./routes/projectStepRoutes')

connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/step', StepRouter)
app.use('/api/project', ProjectRouter)
app.use('/api/projectStep', ProjectStepRouter)

app.get('/', (req, res) => {
    res.send('Application works!')
})

app.listen(process.env.PORT, () => {
    console.log(`Application started on http://localhost:${process.env.PORT}`)
})