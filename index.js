const express = require('express')
const app = express()
const port = 5000

const categories = require('./data/categories.json');
const cors = require('cors');


app.use(cors());

app.get('/', (req, res)=>{
    res.send('Hello world!! this is my first express server!! now is node mon added. code is updated!!!')
})

app.get('/categories', (req, res)=>{
    res.send(categories);
})


app.listen(port, ()=>{
    console.log('Server is running on port', port); 
})