const fs = require('fs');
const connect = require('./connect');

const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

connect.query(sql, (err, res) => {
  if (err) throw err;
  console.log('Table created with results:', res);
});
