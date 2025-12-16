import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'zoya',
  database: 'panda_db'
});

export default db;
