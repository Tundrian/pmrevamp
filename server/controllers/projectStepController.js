const asyncHandler = require('express-async-handler')

const ProjectStep = require('../models/ProjectStep')

// @desc Get step
// @route GET /api/projectStep/:id
// @access Private
const getProjectStep = asyncHandler(async(req, res) => {
    const projectStep = await ProjectStep.findById(req.params.id)

    //handle missing projectStep
    if(!projectStep){
        res.status(400)
        throw new Error('ProjectStep not found')
    }

    res.status(200).json(step)
})

// @desc Get projectSteps
// @route GET api/projectStep/all/:projectId
// @access Private
const getProjectSteps = asyncHandler(async(req, res) => {
    const projectSteps = await ProjectStep.find({projectId: req.params.projectId.toString()}).exec()
    console.log(projectSteps)
    res.status(200).json(projectSteps)
})

// @desc Create a projectStep
// @route POST /api/projectStep
// @access Private
const setProjectStep = asyncHandler(async(req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('Please add a name')
    }

    const projectStep = await ProjectStep.create({
        name: req.body.name,
        customer: req.body.customer
    })

    res.status(200).json(projectStep)
})

// @desc Update projectStep
// @router PUT api/projectStep/:id
// @access Private
const updateProjectStep = asyncHandler(async(req,res) =>{
    const projectStep = await ProjectStep.findById(req.params.id)
    if(!projectStep){
        res.status(400)
        throw new Error('No projectStep found')
    }

    const updatedProjectStep = await ProjectStep.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedProjectStep)
})

// @desc Delete projectStep
// @route DELETE /api/projectStep/:id
// @access Private
const deleteProjectStep = asyncHandler(async(req,res)=>{
    const projectStep = await ProjectStep.findById(req.params.id)

    if(!projectStep){
        res.status(400)
        throw new Error('No projectStep found')
    }

    await projectStep.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getProjectStep,
    getProjectSteps,
    setProjectStep,
    updateProjectStep,
    deleteProjectStep,
}