const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Express');
});
const server = app.listen(8081, () => {
    console.log('App listening on port 8081');
});