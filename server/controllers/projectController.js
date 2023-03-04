const asyncHandler = require('express-async-handler')

const Project = require('../models/Project')
const Step = require('../models/Step')
const ProjectStep = require('../models/ProjectStep')

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

    res.status(200).json(project)
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
        customer: req.body.customer,
        csmName: req.body.csmName,
        csmEmail: req.body.csmEmail,
        clientId: req.body.clientId,
        sowAttachment: req.body.sowAttachment,
        goLiveDate: req.body.goLivedate,
        status: req.body.status,
        startDate: req.body.startDate,
        authExpiry: req.body.authExpiry
    })

    console.log('Project: ', project)
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
// @route POST /api/project/new
// @access Private
const setNewProject = asyncHandler(async(req,res) => {
        if(!req.body.name){
            res.status(400)
            throw new Error('Please add a name')
        }
    
        const project = await Project.create({
            name: req.body.name,
            customer: req.body.customer,
            csmName: req.body.csmName,
            csmEmail: req.body.csmEmail,
            clientId: req.body.clientId,
            sowAttachment: req.body.sowAttachment,
            goLiveDate: req.body.goLivedate,
            status: req.body.status,
            startDate: req.body.startDate,
            authExpiry: req.body.authExpiry,
        })
        
    let steps = await Step.find({module: {$in: req.body.modules}}) 
    let projectSteps = await steps.map(step => {
        return {...step._doc, projectId: project.id}
    })
    
    projectSteps = projectSteps.map(projectStep => {
        return {
            projectId: projectStep.projectId,
            stepOrder: projectStep.stepOrder,
            module: projectStep.module,
            type: projectStep.type,
            category: projectStep.category,
            task: projectStep.task,
            description: projectStep.description,
            linkToDocs: projectStep.linkToDocs,
            answer: projectStep.answer,
            notes: projectStep.notes,
            status: 'Active',
            originId: projectStep._id,
        }
    })

    const data = await ProjectStep.insertMany(projectSteps)

    res.status(200).json(data)
})

module.exports = {
    getProject,
    getProjects,
    setProject,
    updateProject,
    deleteProject,
    setNewProject
}