const express = require('express')
const router = express.Router()
const {
    getProject,
    getProjects,
    setProject,
    updateProject,
    deleteProject,
} = require('../controllers/projectController')

router.get('/', getProject)
router.get('/:id', getProject)
router.post('/', setProject)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)

module.exports = router