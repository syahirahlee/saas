const path = require('path');
const express = require('express');
const app = express();
//Following is backed up just in case it doesnt work.
//const publicPath = path.join(__dirname, '..', 'public');
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
app.get('/aa', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log('Server is up!');
    console.log('call localhost:3000 to run');
});