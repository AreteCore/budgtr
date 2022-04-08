const express = require('express')
require("dotenv").config()
const { appendFile } = require('fs')
const exp = express()
const PORT = process.env.PORT || 3001
const budget = require('./models/budget.js')
let bankAccountTotal = 0

//middleware
exp.use(express.urlencoded({extended:false}))

exp.listen(PORT, () => {
    console.log(`We on ${PORT}`)
})

//index
exp.get("/budget/", (req,res) => {
    bankAccountTotal = 0
    for (let entry of budget) {
        if (parseInt(entry.amount) != "NaN")
        bankAccountTotal = bankAccountTotal + parseInt(entry.amount)
    }
    res.render("index.ejs", {
        budget:budget,
        total : bankAccountTotal,
    })
})

//new
exp.get("/budget/new", (req,res) => {
    res.render('new.ejs')
})

//show
exp.get("/budget/:index", (req,res) => {
    res.render('show.ejs', {
        entry : budget[req.params.index]
    })
})


//post
exp.post("/budget", (req,res) => {
budget.push(req.body)
res.redirect("/budget")
})