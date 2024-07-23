require('dotenv').config();

let express = require('express');
//let cors = require('cors');
let app = express();
// app.use(cors());
// app.use(express.json());
let port = 3000;

app.get('/', (req, res) => {
 // const { fromNumber, text } = req.body;
 // let data = req.body
 // console.log(data)
 //console.log(`Received SMS reply from ${fromNumber}: ${text}`);
 res.status(200).send('1111');
});


app.listen(port, () => { console.log(`port:${port}`); });

module.exports = app;