require('dotenv').config()
const { Sequelize, DataTypes, QueryTypes, Op } = require('sequelize');

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PW, {
    dialect: 'mssql',
    host: '127.0.0.1',
    port: '50739'
})

exports.DataTypes = DataTypes;
exports.sequelize = sequelize;
exports.Op = Op