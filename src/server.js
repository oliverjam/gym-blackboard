const server = require('express')();
// const server = express();

const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send('Yo');
});

server.listen(port, (err) => {
  if (err) console.error(err);
  console.log(`Server listening on http://localhost:${port}`);
});
