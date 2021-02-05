const express = require('express')
const app = express()
const port = 3000
const router = require('../routes')
const fs = require('fs')const path = require('path')

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')


// create array of filenames in /routes/ 
const routeFolder = 'src/routes/'
let fileNames = fs.readdirSync(routeFolder, { withFileTypes: false })
for (var i = 0; i < fileNames.length; i++) {
    fileNames[i] = fileNames[i].slice(0, -3)
}
console.log(fileNames)
// iterively require files in fileNames array
for (i = 0; i < fileNames.length; i++) {
    let jsexport = require('./routes/' + fileNames[i])
    app.use("/test" + jsexport.getUrl, jsexport.router)
}


app.get('/', (req, res) => {
    res.send('Home Page!')
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:3000')
})



