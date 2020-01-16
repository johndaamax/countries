const express = require('express')

const app = express();

app.get('/', (req, res) => res.send('Root route.'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Starting server at port ${PORT}....`));