const mongose = require('mongoose')
const userSchemaDashboard = new mongose.Schema({
    userName: String,
    age: Number,
    studentClass: String,
    address: String
})
module.exports = mongose.model('authDash',userSchemaDashboard)
