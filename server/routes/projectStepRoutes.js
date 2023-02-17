const express = require('express')
const router = express.Router()
const {
    getProjectStep,
    getProjectSteps,
    setProjectStep,
    updateProjectStep,
    deleteProjectStep,
} = require('../controllers/projectStepController')

router.get('/all/:projectId', getProjectSteps)
router.get('/', getProjectStep)
router.get('/:id', getProjectStep)
router.post('/', setProjectStep)
router.delete('/:id', deleteProjectStep)
router.put('/:id', updateProjectStep)

module.exports = router