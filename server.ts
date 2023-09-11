import next from 'next';
import express from 'express';

import routes from './routes';

const app = express();

const dev = process.env.NODE_ENV !== 'production';

const hostname = process.env.APP_HOSTNAME || 'localhost';
const port = 3000;

const nextApp = next({
  dev,
  hostname,
  port,
});
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  routes(app, nextHandler);

  // Start the server on the given port
  const server = app.listen(port, hostname);
  server.on('listening', () =>
    console.log(`Started at http:/${hostname}:${port}`)
  );
});
