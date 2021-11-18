const mysql = require('mysql');

const config={
    host: 'localhost',
   // port: '3306',
    user: 'root',
    password: '',
    database: 'api',
};

const pool = mysql.createPool(config);

module.exports = pool;