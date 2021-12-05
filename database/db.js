// this file configures how we connect to our database

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'social_media_app_template_dev',
    password: '',
    port: 5432,
});

module.exports = pool;