// config/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Akshu@321#$',
    database: 'nimap'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
        return;
    }
    console.log('Connected to the database');
});

module.exports = db;
