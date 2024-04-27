const USER = process.env.USER || "postgres";
const PASSWORD = process.env.PASSWORD || "LetMeIn2DB@";
const DB_HOST = process.env.HOST || "localhost";
const DB_PORT = parseInt(process.env.DB_PORT) || 5432;
const DB_NAME = process.env.DB_NAME || "todoapp";


const Pool = require("pg").Pool;

const pool = new Pool({
    user: USER,
    password: PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
});

module.exports = pool;