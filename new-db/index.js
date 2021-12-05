const { Client } = require('pg')
// ^ same thing:    const Client = require('pg').Client  

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'social_media_app_template_dev',
    password: '',
    port: 5432,
});

client.connect()
.then(() => console.log("connected successfully"))
.catch(e => console.error(e))
.finally(() => client.end())