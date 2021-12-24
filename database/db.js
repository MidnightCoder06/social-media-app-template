// this file configures how we connect to our database

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'social_media_app_template_dev',
    password: '',
    port: 5432,
});

async function checkUserExistence(email, password) {
    try {
      const { rows: [ user ] } = await pool.query(`
        SELECT email, password
        FROM users
        WHERE email=${ email } AND password=${ password }
      `);
  
      if (!user) {
        return null
      }
  
      return user;

    } catch (error) {
      throw error;
    }
  }

module.exports = { 
    pool,
    checkUserExistence
}