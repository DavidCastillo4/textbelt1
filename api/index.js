require('dotenv').config();
let express = require('express');
let app = express();
let port = 3000;
app.get('/', (req, res) => {
 res.status(200).send('1111');
});
app.listen(port, () => { console.log(`port:${port}`); });
module.exports = app;