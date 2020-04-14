var express = require('express')

const router = express.Router()

router.get('/hello', function getVersion (req, res) {
  return res.json({message: "Test"})
})

module.exports = router
