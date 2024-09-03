import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "http://09306cd2fdfa2f1f3cc349cea3b4817c@127.0.0.1:9000/2",
  tracesSampleRate: 1.0, // Capture 100% of the transactions
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

setTimeout(() => {
  try {
    foo(); // Ensure 'foo' is defined or this will throw an error
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);
