import mysql from 'mysql';
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
})

connection.connect((err)=>{
    console.error(err);
})

export default connection;