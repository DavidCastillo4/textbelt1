let express = require('express');
let cors = require('cors');
let app = express();
app.use(cors());
app.use(express.json());
let port = 3001;

app.post('/', (req, res) => {
 //const { fromNumber, text } = req.body;
 let data = req.body
 console.log(data)
 //console.log(`Received SMS reply from ${fromNumber}: ${text}`);
 res.status(200).send('Reply received');
});


app.listen(port, () => { console.log(`port:${port}`); });
module.exports = app;

/*
require('dotenv').config();
let express = require('express');
let app = express();
let port = 3001;
app.get('/', (req, res) => {
 res.status(200).send('777777');
});
app.listen(port, () => { console.log(`port:${port}`); });
module.exports = app;


*/