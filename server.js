const express = require('express')
require("dotenv").config()
const { appendFile } = require('fs')
const exp = express()
const PORT = process.env.PORT || 3001
const budget = require('./models/budget.js')

//middleware
exp.use(express.urlencoded({extended:false}))

exp.listen(PORT, () => {
    console.log(`We on ${PORT}`)
})

//index
exp.get("/budgets/", (req,res) => {
    res.render("index.ejs", {budget:budget})
})

//show
exp.get("/budgets/:index", (req,res) => {
    res.render()
})

//new
exp.get("/budgets/new", (req,res) => {
    res.render('new.ejs')
})

//post
exp.post("/budgets", (req,res) => {
budgets.push(req.body)
res.redirect("/budgets")
})