const express = require('express')
const router = express.Router()


router.route("/").get((req,res) => { 
    res.send('settings page')

 }).post((req,res) => { 
     next(new Error('not implemented'))
  })



module.exports = { router:router, getUrl: "/routes/settings" }