const data = require ('../models/authors')

exports.getAuthors = (req, res) => {
  let copydata = [...data]
  res.json(copydata)
}

exports.authorID = (req, res) => {
  let copydata = [...data]
  let book = copydata.find(elm => elm.id == req.params['id'])
  res.send(book.name)
}

exports.addAuthor = (req, res) => {
  let copydata = [...data]
  copydata.push (req.body)
  console.log(copydata[copydata.length -1])
  res.json(copydata[copydata.length -1]).send(copydata[copydata.length -1])
}

exports.updatebyID = (req, res) => {
  let copydata = [...data]
  let indexOfauthor = copydata.findIndex(elm => elm.id == req.params['id'])
  copydata.splice(indexOfauthor, 1, req.body)
  res.send(copydata[indexOfauthor])
}

exports.deleteauthor = (req, res) => {
  let copydata = [...data]
  let indexOfauthor1 = copydata.findIndex(elm => elm.id == req.params['id'])
  console.log(copydata[indexOfauthor1])
  copydata.splice(indexOfauthor1,1)
  console.log(copydata[indexOfauthor1])
  res.end()
}

