const express = require('express');
const path = require('path');
const app = express();
const PORT = 3010; // process.env.PORT || 80;

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
<<<<<<< HEAD
=======

// some comment during file execution on production server
>>>>>>> 2578c88773d7dc5e54cfca2babe7410bbadfdaa5
