const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/user')
.then(()=>{console.log('Connect Successfully')})
.catch((err)=>{console.log(err)})

let User = require('./controller/user')

app.get('/', User.homePage)
app.get('/signUp', User.loginToRegisterPage)
app.get('/signIn', User.registerToLoginPage)
app.get('/createAccount', User.createAccount)
app.get('/loginUser',User.loginUser)
app.get("/dashboardData", User.dashboardData)
app.get("/dashboard", User.dashboard)
app.listen(3001)