const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(52525, () => {  
    console.log('Server listening on port %d', server.address().port);
});

app.post('/',  (req, res) => {
    let text = req.body.message;

    console.log("message received %s", text);

    res.write(text);
    res.end();
});