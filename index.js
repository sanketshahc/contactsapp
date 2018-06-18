const express = require('express');
const app = express();
const contacts = require('./contacts');
const expressHbs = require('express-handlebars');

// what does this do??
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');


app.get('/', (req,res)=>{
    // res.send('Hay');
    res.render('home', {
        layout: "homepage",
        message: "hellow handlebars"
    })
})

// Contacts List page: show the user all contacts
app.get('/contacts', (req,res)=>{
    res.render('contact-list', {
        contactsArray: contacts.users
    });
})

// contacts deatils 
app.get('/contacts/:id',(req,res)=>{
    let id = req.params.id;
    let contact = contacts.users.find((user) => {
        return user.id === id;
    })
    res.render('contact-details', {
        contact: contact
    })
    // change to res.render
})


app.listen(8888,()=> {
    console.log('your express app is running at localhost');
})

