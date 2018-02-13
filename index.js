const express = require('express');

express()
  .use(express.static(`${__dirname}/docs`))
  .get('*', (req, res) => res.sendFile(`${__dirname}/docs/index.html`))
  .listen(process.env.PORT, () =>
    console.log('__SERVER_RUNNING__', process.env.PORT));
