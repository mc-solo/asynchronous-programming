// callbacks are outdated so we use promises
// callbacks can result in a callback hell

// Promises: 3 states: fulfilled, rejected or pending

const myPromise = new Promise((resolve, reject) => {
  const error = false;

  if (!error) {
    resolve("Yes! resolved.");
  } else {
    reject("No! rejected");
  }
});
