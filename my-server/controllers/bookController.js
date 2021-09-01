const {Book} = require('../models/index')

class BookController {

   static getAll (req, res) {
      Book.findAll()
      .then((data) => {
         res.status(200).json({
            message: "get success",
            data
         })
      })
      .catch((err) => {
         res.status(500).json({
            message: "Internal Server Error",
            log: err
         })
      })
   }

   static addBook (req, res) {

      const {title, author, stock, thumbnail} = req.body

      if (!title || !author || !stock) {
         res.status(422).json({
            message: "Data could not be processed",
         })
      } else {
         Book.create(req.body)
         .then((data) => {
            res.status(201).json({
               message: "add success",
               data
            })
         })
         .catch((err) => {
            res.status(500).json({
               message: "Internal Server Error",
               log: err
            })
         })
      }
   }

   static updateBook (req, res) {

      const {title, author, stock, thumbnail} = req.body
      console.log(req.body)
      const id = req.params.id

      if (!title || !author || !stock || !id) {
         res.status(422).json({
            message: "Data could not be processed",
         })
      } else {
         Book.update(req.body, {where: {id: id}})
         .then((data) => {
            res.status(200).json({
               message: "update success",
               data
            })
         })
         .catch((err) => {
            res.status(500).json({
               message: "Internal Server Error",
               log: err
            })
         })
      }
   }

   static deleteBook (req, res) {

      const id = req.params.id

      if (!id) {
         res.status(422).json({
            message: "Data could not be processed",
         })
      } else {
         Book.destroy({where: {id: id}})
         .then((data) => {
            res.status(200).json({
               message: "delete success",
               data
            })
         })
         .catch((err) => {
            res.status(500).json({
               message: "Internal Server Error",
               log: err
            })
         })
      }
   }
}

module.exports = BookController