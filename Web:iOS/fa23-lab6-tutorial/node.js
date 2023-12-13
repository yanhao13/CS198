const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello Node.js!");
})
/*
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
})
*/
app.get('/users/:userId/books/:bookName', function(req, res){
    res.send("The userId you specified is "+ req.params.userId+", the bookName you specified is "+req.params.bookName);
})
app.listen(3000, () => {
    console.log("Listening on port 3000");
})