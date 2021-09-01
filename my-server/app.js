const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
const router = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', router)

app.listen(port, () => {
   console.log('App running on port ', port)
})


