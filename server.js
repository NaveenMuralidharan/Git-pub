const express = require("express");

const app = express();

const PORT = 3000;

const drinks = require('./models/drinks.js')

// ROUTES

// Home
app.get('/', (req, res)=>{
    res.redirect('/drinks')
})

// Index route
app.get('/drinks', (req, res)=>{
    res.render('drinks_index.ejs', {drinks})
})

// Show route
app.get('/drinks/:indexOfDrink', (req, res)=>{

    res.render('drinks_show.ejs', {drink: drinks[req.params.indexOfDrink]})

})



app.listen(PORT, ()=> {
    console.log('app is running on port '+PORT)
})