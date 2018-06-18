const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hay');
})

// Contacts List page: show the user all contacts
app.get('/contacts', (req,res)=>{
    res.send('you are on the listing page');
})

// contacts deatils 
app.get('/contacts/:id',(req,res)=>{
    res.send(`you are viewing deets for ${req.params.id}`);

})



app.listen(8888,()=> {
    console.log('your express app is running at localhost');
})

