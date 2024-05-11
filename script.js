// fetch API requires a discussion of callbacks, Thenables and Async/Await
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

// if we console log the promise, we gonna get the state of the promise and not the value

// A thenable is an object that has a special function called then().
// This function is like a notification - it tells your program what to do next

const prom = new Promise((resolve, reject) => {
  // stimulating async operation
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

prom.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.error(error);
  }
);
