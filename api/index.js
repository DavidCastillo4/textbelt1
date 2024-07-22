let port = 3000;
let express = require('express');
let cors = require('cors');
let app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
 // const { fromNumber, text } = req.body;
 // let data = req.body
 // console.log(data)
 //console.log(`Received SMS reply from ${fromNumber}: ${text}`);
 res.status(200).send('24422');
});


app.listen(port, () => { console.log(`port:${port}`); });
