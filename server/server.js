const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('testing');
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}...`);
});
