import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const database = process.env.DB_MYSQL_DB_NAME || '';
const user = process.env.DB_MYSQL_USER || '';
const pass = process.env.DB_MYSQL_PASSWORD || '';
const host = 'localhost';
const dialect = 'mysql';

const db = new Sequelize(database, user, pass, {
    host,
    dialect,
    // logging: false,
})

export default db;