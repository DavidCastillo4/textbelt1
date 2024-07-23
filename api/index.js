require('dotenv').config();
let express = require('express');
let app = express();
let port = 3001;
app.get('/', (req, res) => {
 res.status(200).send('777777');
});
app.listen(port, () => { console.log(`port:${port}`); });
module.exports = app;