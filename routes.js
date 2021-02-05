const express = require('express')
const router = express.Router()


router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// home page
router.get('/', (req, res) => {
    res.send('Home page')
})

// about page
router.get('/about', (req, res) => {
    res.send('About page')
})

module.exports = router