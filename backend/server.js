const express = require('express');
require('./db/db')
const cors = require('cors');
const router = require('./network/routes')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

router(app)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});