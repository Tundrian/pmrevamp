const express = require('express')
const router = express.Router()
const {
    getProject,
    getProjects,
    setProject,
    updateProject,
    deleteProject,
    setNewProject,
} = require('../controllers/projectController')

router.get('/', getProject)
router.get('/:id', getProject)
router.post('/', setProject)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)
router.get('/new', setNewProject)

module.exports = router