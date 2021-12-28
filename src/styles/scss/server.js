const express = require('express');
const PORT = 8080 || process.env.port;
const app = express(); 

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
})