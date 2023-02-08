const asyncHandler = require('express-async-handler')

const Step = require('../models/Step')

// @desc Get step
// @route GET /api/step/:id
// @access Private
const getStep = asyncHandler(async (req, res) => {
    const step = await Step.findById(req.params.id)

    // handle missing step
    if(!step){
        res.status(400)
        throw new Error('Step not found')
    }

    res.status(200).json(step)
})

// @desc Get stepss
// @route GET /api/step/
// @access Private
const getSteps = asyncHandler(async (req, res) => {
    const steps = await Step.find()
    console.log('getSteps: ', steps)
    res.status(200).json(steps)
})

// @desc Set step
// @route POST /api/step
// @access Private
const setStep = asyncHandler(async (req, res) => {
    console.log(req.body)
    if(!req.body.task){
        res.status(400)
        throw new Error('Please add a task field')
    }

    const step = await Step.create({
        id: req.body.id,
        stepOrder: req.body.stepOrder,
        module: req.body.module,
        type: req.body.type,
        category: req.body.category,
        task: req.body.task,
        description: req.body.description,
        linkToDocs: req.body.linkToDocs,
        answer: req.body.answer,
        notes: req.body.notes,
        status: req.body.status,
    })

    res.status(200).json(step)
})

// @desc Update step
// @route PUT /api/step/:id
// @access Private
const updateStep = asyncHandler(async (req, res) => {
    const step = await Step.findById(req.params.id)

    if (!step) {
        res.status(400)
        throw new Error('Step not found')
    }

    const updatedStep = await Step.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
    
      res.status(200).json(updatedStep)
})

// @desc Delete step
// @route DELETE /api/step/:id
// @access Private
const deleteStep = asyncHandler(async (req,res) => {
    const step = await Step.findById(req.params.id)

    if(!step){
        res.status(400)
        throw new Error('Step not found')
    }

    await step.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getStep,
    getSteps,
    setStep,
    updateStep,
    deleteStep
}