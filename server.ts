import crypto from 'crypto';
import next from 'next';
import express from 'express';

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

const nonceMiddleware = (req, res, next) => {
  const nonce = crypto.randomBytes(16).toString('hex');
  res.locals.nonce = nonce;

  next();
};

const routes = (app, nextHandler) => {
  // Catch All
  app.get('*', nonceMiddleware, nextHandler);

  return app;
};

nextApp.prepare().then(() => {
  routes(app, nextHandler);

  // Start the server on the given port
  const server = app.listen(port, hostname);
  server.on('listening', () =>
    console.log(`Started at http:/${hostname}:${port}`)
  );
});
