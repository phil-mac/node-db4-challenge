const express = require('express')

const Recipes = require('./recipe-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({its: "working ! ! ! ! !"})
})

module.exports = router;