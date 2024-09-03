const express = require('express');
const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'http://09306cd2fdfa2f1f3cc349cea3b4817c@127.0.0.1:9000/2' });

const app = express();

app.use(Sentry.Handlers.requestHandler());

app.get('/', function mainHandler(req, res) {
  throw new Error('Broke!');
});

app.use(Sentry.Handlers.errorHandler());

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
