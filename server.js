const express = require('express')
const app = express()
const booksRouter = require('./Routers/router-Books')
const authorRouter = require('./Routers/router-author')


app.use(express.json())

app.use('/api/books', booksRouter)
app.use('/api/authors', authorRouter)


app.listen(5000, ()=> {
  console.log('listening on port 5000')
})