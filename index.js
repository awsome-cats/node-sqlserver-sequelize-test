
const express    = require('express');
const { sequelize } = require('./connect')
const Users         = require('./models/User')
const port       = process.env.PORT || 5000

const app        = express();




//---- Connect DB ---- //
async function connectDb() {
    try {
        await sequelize.authenticate()
        console.log('Connected')
    }catch(e) {
        console.log(e.message)
    }
}

connectDb()
//----- Connect DB -----//

// create table
async function CreateTable() {
 await Users.sync()
}

CreateTable()
// Routing
app.get('/user/:id', async (req,res) => {
    const user = await Users.findOne()
    res.send({
        user:user,
        status: 1,
        success: true,
        message: 'データがみつかりました'
    })
})
// app.get('/', async (req,res) => {
//     const user = await Users.findAll()
//     res.send({
//         user:user,
//         status: 1,
//         success: true,
//         message: 'データが作成されました'
//     })
// })
app.get('/register', async (req,res) => {
    try {

        const user = await Users.create({
            name: 'kenn',
            email: 'kennyk@gmail.com'
        })
        if(user) {
            res.send(user)
        }else {
            console.log('sorry')
        }

    }catch(e) {
        console.log(e)
    }

})


// Server Connect
app.listen(port, (req, res) => {
    console.log('Server is running ' + port)
})