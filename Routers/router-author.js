const express = require('express')
const router = express.Router()

const {getAuthors, authorID, addAuthor, updatebyID, deleteauthor} = require('../controllers/authors')

router.get('/', getAuthors)
router.get('/:id', authorID)
router.post('/', addAuthor)
router.put('/:id', updatebyID)
router.delete('/:id', deleteauthor)

module.exports = router