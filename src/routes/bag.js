var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.send('Get Bags')
})

router.get('/:id', (req, res) => {
  res.send(`Get Bag ${req.params.id}`)
})

router.post('/', (req, res) => {
  res.send('Create Bag')
})

router.put('/', (req, res) => {
  res.send('update bag')
})

router.delete('/', (req, res) => {
  res.send('update bag')
})

module.exports = router
