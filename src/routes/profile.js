const express = require('express')
const router = express.Router()


// Expose XSS Vuln 
router.route("/").get((req,res) => { 
    if (!req.query.data){
      res.send('Please provide query data in the URL')
    } else {
      res.send(req.query.data)
    }
 }).post((req,res) => { 
     const maliciousData = req.body.maliciousData
  })


module.exports = { router:router, getUrl: "/routes/profile-test" }
