let USER = require('../model/user')

exports.homePage = async(req,res)=>{
    const data = await USER.find()
    res.render('Login.ejs',{data})
}
exports.loginToRegisterPage = (req,res)=>{
    res.render('Register.ejs')
}
exports.registerToLoginPage = (req,res)=>{
    res.render('Login.ejs')
}
exports.createAccount = async(req,res)=>{
    const data = req.query
    await USER.insertOne(data)
    res.redirect('/')
}
exports.loginUser = async(req,res)=>{
    const data = req.query
    const user = await USER.findOne(data)

    if(user){
        res.render('Dashboard.ejs')
    }
    else{
        res.send('Invalid email or password')
    }
}
exports.dashboard = async(req,res)=>{

}