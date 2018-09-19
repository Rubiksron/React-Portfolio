const express = require('express');
const PORT = 3000;
//change back to process.env.PORT before pushing to github
express()
  .use(express.static(`${__dirname}/docs`))
  .get('*', (req, res) => res.sendFile(`${__dirname}/docs/index.html`))
  .listen(PORT, () =>
    console.log('__SERVER_RUNNING__', PORT));
