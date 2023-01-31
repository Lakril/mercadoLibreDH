const express = require('express');
const path = require('path');

const app = express();

// const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static('public'));

app.listen(3010, () =>{
    console.log('Server running on port 3010');
});

app.get('/home', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});
app.get('/register', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});
app.get('/login', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});
