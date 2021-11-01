const express = require('express');
const path = require('path');
const app = express();
const PORT = 3010; // process.env.PORT || 80;

// static files from build folder
app.use(express.static(path.join(__dirname, '..', 'build')));

// root goes to index.html
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// all other routes to index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));