const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hay');
})

app.listen(8888,()=> {
    console.log('your express app is running at localhost');
})