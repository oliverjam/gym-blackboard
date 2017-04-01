const connect = require('../database/connect.js');

const postData = (dataObj, cb) => {
  const keys = Object.keys(dataObj).slice(0, -1);
  const values = keys.map((key) => {
    if (typeof dataObj[key] === 'string') {
      return `'${dataObj[key]}'`;
    }
    return dataObj[key];
  }).join(', ');
  const query = `INSERT INTO lifters (${keys}) VALUES (${values})`;
  connect.query(query, (err, res) => {
    if (err) cb(err);
    console.log(`${dataObj.name} added to the database!`);
    cb(null, res);
  });
};

module.exports = postData;
