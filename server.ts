import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import express from 'express';

const app = express();

const dev = process.env.NODE_ENV !== 'production';

const hostname = process.env.APP_HOSTNAME || 'localhost';
const port = 3000;

const nextApp = next({
  dev: !!process.env.DEV,
  hostname,
  port,
});
const nextHandler = nextApp.getRequestHandler();

const routes = (app, nextHandler) => {
  // Catch All
  app.get('*', nextHandler);

  return app;
};

nextApp.prepare().then(() => {
  routes(app, nextHandler);

  // Start the server on the given port
  const server = app.listen(port, hostname);
  server.on('listening', () =>
    console.log(`Experimentation Hub started at http:/${hostname}:${port}`)
  );
});
