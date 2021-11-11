var Rx = require("rxjs");

const interval = Rx.Observable.create(observer => {
  let count = 0;
  const interval = setInterval(() => {
    observer.next(count++);
  }, 1000);

  // once we stop listening to values clear the interval
  return () => {
    clearInterval(interval);
  }
});

interval.subscribe(value => console.log(value));
// ----1----2----3----> will run  forever

// short while waiting for responses
const subscription = interval.subscribe(
        value => console.log("short while: " + value));
setTimeout(() => subscription.unsubscribe(), 3000);
// 0----1----2>