const data = require ('../models/books')

exports.Getbooks = (req, res)=> {
  res.send(data)
}

exports.bookID = (req, res) => {
  let book = data.find(elm => elm.id == req.params['id'])
  res.send(book)
}

exports.Addbook = (req, res)=> {
  data.push(req.body)
  res.end()
  console.log(data[data.length - 1])
}

exports.updateBook = (req, res)=> {
  let copydata = [...data]
  let indexOfBook = copydata.findIndex(elm => elm.id == req.params['id'])
  copydata.splice(indexOfBook, 1, req.body)
  res.send(copydata[indexOfBook])
}

exports.deleteBook = (req, res) => {
  let copydata = [...data]
  let indexOfBook1 = copydata.findIndex(elm => elm.id == req.params['id'])
  console.log(copydata[indexOfBook1])
  copydata.splice(indexOfBook1,1)
  console.log(copydata[indexOfBook1])
  res.end()
}
