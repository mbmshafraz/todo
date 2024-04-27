import pg from "pg";

const DB_USER = process.env.USER || "avnadmin";
const DB_PASSWORD = process.env.DB_PASSWORD || "DB_PASSWORD@";
const DB_HOST = process.env.HOST || "pg-9c05a600-56b1-431a-aa81-c6d4c7e75cd8-tododb710260947-choreo.h.aivencloud.com";
const DB_PORT = parseInt(process.env.DB_PORT) || 23412;
const DB_NAME = process.env.DB_NAME || "defaultdb";


const Pool = pg.Pool;

const pool = new Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
});

// module.exports = pool;
export default pool;