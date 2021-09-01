const router = require('express').Router()
const bookController = require('../controllers/bookController')


router.get('/', (req, res) => {
   res.send("Welcome to Book API, please read our API Documentation on how to use our API~")
})
router.get('/api/getAll', bookController.getAll)
router.post('/api/addBook', bookController.addBook)
router.put('/api/updateBook/:id', bookController.updateBook)
router.delete('/api/deleteBook/:id', bookController.deleteBook)


module.exports = router