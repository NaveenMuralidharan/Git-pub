const express = require("express");

const app = express();

const PORT = 3000;

const drinks = require('./models/drinks.js')

const foods = require('./models/foods.js')

// ROUTES

// Drinks routes
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

// Foods routes
// index route
app.get('/foods', (req, res)=>{
    res.render('foods_index.ejs', {foods})
})

// show route
app.get('/foods/:indexOfFood', (req, res)=>{
    res.render('foods_show.ejs', { food:foods[req.params.indexOfFood] })
})

app.listen(PORT, ()=> {
    console.log('app is running on port '+PORT)
})