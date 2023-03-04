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

router.get('/all', getProjects)
router.get('/:id', getProject)

router.get('/', getProject)

router.post('/', setProject)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)
router.post('/new', setNewProject)


module.exports = router