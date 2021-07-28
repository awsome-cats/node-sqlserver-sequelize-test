const { DataTypes, sequelize, Op } = require('../connect')


const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
})

module.exports = Users