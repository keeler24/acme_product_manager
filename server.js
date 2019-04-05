const express = require('express');
const app = express()
const {db, User, Product, syncSeed} = require('./db')

PORT = process.env.PORT || 1337


syncSeed()
    .then(()=>{
        console.log(`App listening on port ${PORT}`)
        app.listen(PORT)
    })
