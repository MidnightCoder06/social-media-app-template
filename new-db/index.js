const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'social_media_app_template_dev',
    password: '',
    port: 5432,
});

client.connect()
.then(() => console.log("connected successfully"))
.catch(e => console.error('something went wrong'))
.finally(() => client.end())