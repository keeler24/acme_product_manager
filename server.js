const express = require('express');
const app = express();
const {syncSeed} = require('./db');
const router = require('./routes');

PORT = process.env.PORT || 1337

app.use(express.json())
app.use(express.static('dist'))
app.use(express.static('public'))
app.use('/api', router)



app.get('/', (req, res, next)=>{
    res.sendFile('index.html')
})

syncSeed()
    .then(()=>{
        console.log(`App listening on port ${PORT}`)
        app.listen(PORT)
    })
    .catch(error => console.log(error))
