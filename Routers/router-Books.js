const express = require('express')
const router = express.Router()

const {Getbooks, bookID, Addbook, updateBook, deleteBook } = require ('../controllers/books')


router.get('/', Getbooks)
router.get('/:id', bookID)
router.post('/', Addbook)
router.put('/:id',updateBook)
router.delete('/:id', deleteBook)




module.exports = router