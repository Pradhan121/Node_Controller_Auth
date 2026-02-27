let USER = require('../model/user')
let dashboardUser = require('../model/userDashboard')

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
    await USER.create(data)
    res.redirect('/')
}
exports.loginUser = async(req,res)=>{
    const data = req.query
    const user = await USER.findOne(data)
     const studentData = await dashboardUser.find()
    if(user){
        res.render('Dashboard.ejs',{studentData,result:null})
    }
    else{
        res.send('Invalid email or password')
    }
}
exports.dashboardData =async (req, res) => {
  const data = req.query

  if (data.id !== "") {
      await dashboardUser.findByIdAndUpdate(data.id, {
        userName: data.userName,
        age: data.age,
        studentClass:data.studentClass,
        address:data.address
      })
  } 
  else {
    await dashboardUser.create(data)
  }   
  res.redirect('/dashboard')
};
exports.dashboard = async (req, res) => {
    const studentData = await dashboardUser.find()
    res.render("Dashboard.ejs", { studentData, result: null })
}
exports.deleteData = async(req,res)=>{
   const deleteId = req.params.id
   await dashboardUser.findByIdAndDelete(deleteId)
   res.redirect('/dashboard')
}
exports.editData = async (req, res) => {
  const editId = req.params.id

  const result = await dashboardUser.findById(editId)
  const studentData = await dashboardUser.find()

  res.render("Dashboard.ejs", { studentData, result })
}