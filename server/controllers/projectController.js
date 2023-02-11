const asyncHandler = require('express-async-handler')

const Project = require('../models/Step')

const {
    setProjectSteps,
} = require('./projectStepController')

// @desc Get step
// @route GET /api/project/:id
// @access Private
const getProject = asyncHandler(async(req, res) => {
    const project = await Project.findById(req.params.id)

    //handle missing project
    if(!project){
        res.status(400)
        throw new Error('Project not found')
    }

    res.status(200).json(step)
})

// @desc Get projects
// @route GET api/project
// @access Private
const getProjects = asyncHandler(async(req, res) => {
    const projects = await Project.find()
    
    res.status(200).json(projects)
})

// @desc Create a project
// @route POST /api/project
// @access Private
const setProject = asyncHandler(async(req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('Please add a name')
    }

    const project = await Project.create({
        name: req.body.name,
        customer: req.body.customer
    })

    res.status(200).json(project)
})

// @desc Update project
// @router PUT api/project/:id
// @access Private
const updateProject = asyncHandler(async(req,res) =>{
    const project = await Project.findById(req.params.id)
    if(!project){
        res.status(400)
        throw new Error('No project found')
    }

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedProject)
})

// @desc Delete project
// @route DELETE /api/project/:id
// @access Private
const deleteProject = asyncHandler(async(req,res)=>{
    const project = await Project.findById(req.params.id)

    if(!project){
        res.status(400)
        throw new Error('No project found')
    }

    await project.remove()
    res.status(200).json({id: req.params.id})
})

// @desc Create new project with module template
// @route SET /api/project/new
// @access Private
const setNewProject = asyncHandler(async(req,res) => {
    /*
        - create new project
            - header data
            - project name
            - modules
        - get project id from creating new project
        - get modules from request 
            - get list for each module in request
        - push list of projectSteps for each step
    */
    const id = await setProject(req)
   //Add a function to stepController to get modules with a filter (by modules as a parameter)
    //then call the controller to get a list of steps from each moduel
    //then create projectSteps for each step returned and assign the project.id = id

})

module.exports = {
    getProject,
    getProjects,
    setProject,
    updateProject,
    deleteProject,
    setNewProject
}