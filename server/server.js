const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// which folder to use
app.use(express.static(publicPath));

// if user requested is not in folder, always send back index html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// use port from setting above
app.listen(port, () => {
  console.log('Server is up!');
});