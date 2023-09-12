import crypto from 'crypto';

const nonceMiddleware = (req, res, next) => {
  const nonce = crypto.randomBytes(16).toString('hex');
  res.locals.nonce = nonce;

  next();
};

const routes = (app, nextHandler) => {
  // Catch All
  app.get("*", nonceMiddleware, (req, res) => {
    nextHandler(req, res);
  });

  return app;
};

export default routes;