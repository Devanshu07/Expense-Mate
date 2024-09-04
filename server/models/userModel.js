const db = require('../config/db');

const getUserById = async (id) => {
  const res = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  return res.rows[0];
};

const getUserByEmail = async (email) => {
  const res = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  return res.rows[0];
};

const createUser = async (username, email, hashedPassword) => {
  const res = await db.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    [username, email, hashedPassword]
  );
  return res.rows[0];
};

module.exports = { getUserById, getUserByEmail, createUser };
