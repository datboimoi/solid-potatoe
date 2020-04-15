// Imports
const express = require('express');
const path = require('path');
const app = express();
// Set static folder
//app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server started on port 3000'));