const express = require('express');
const path = require('path');

const app = express();

// const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static('public'));

app.listen(3010, () =>{
    console.log('Server running on port 3010');
});

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});
