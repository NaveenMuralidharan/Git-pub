const express = require("express");

const app = express();

const PORT = 3000;

const drinks = require('./models/drinks.js')

// ROUTES

// Home
app.get('/', (req, res)=>{
    res.redirect('/drinks')
})

// Index
app.get('/drinks', (req, res)=>{
    res.render('drinks_index.ejs', {drinks})
})



app.listen(PORT, ()=> {
    console.log('app is running on port '+PORT)
})