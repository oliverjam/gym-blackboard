const connect = require('../database/connect.js');

const getLifters = (cb) => {
  connect.query('SELECT * from lifters', (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};

module.exports = getLifters;
