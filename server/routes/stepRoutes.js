const express = require('express')
const router = express.Router()
const {
    getStep,
    getSteps,
    setStep,
    updateStep,
    deleteStep,
} = require('../controllers/stepController')

router.get('/', getSteps)
router.get('/:id', getStep)
router.post('/', setStep)
router.delete('/:id', deleteStep)
router.put('/:id', updateStep)

module.exports = router
