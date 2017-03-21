var express = require('express')
var router = express.Router()
var Meal = require('../schema.js')

router.get('/:day', function (req,res) {
  var id = req.param("id")
  Meal.findById(id, function (err, meals) {
    if (err) return handleError(err)
    res.send(meals)
  })
})

module.exports = router