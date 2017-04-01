const { Pool } = require('pg');
const url = require('url');
require('env2')('./config.env');

if (!process.env.DB_URL) throw new Error('Environment variable DB_URL must be set');

const params = url.parse(process.env.DB_URL);
const [username, password] = params.auth.split(':');

const options = {
  user: username,
  password,
  host: params.hostname,
  ssl: params.hostname !== 'localhost',
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTION || 2,
};

module.exports = new Pool(options);
