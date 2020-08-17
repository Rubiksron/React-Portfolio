const express = require('express');
const PORT = process.env.PORT || 3000;

express()
  .use(express.static(`${__dirname}/docs`))
  .get('*', (req, res) => res.sendFile(`${__dirname}/docs/index.html`))
  .listen(PORT, () =>
    console.log('__SERVER_RUNNING__', PORT));
