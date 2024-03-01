// One second
const RESOLVE_TIME = 1000;

// 500 million
const ITERATIONS = 500000000;

/**
 * Fetch data for x amount of time
 * @export
 * @param {*} resolveTime
 */
async function fetch() {
  // Async operation
  await new Promise((resolve) => {
    setTimeout(resolve, RESOLVE_TIME);
  });

  // Synchronous blocking operation
  let x = 0;
  for (let i = 0; i < ITERATIONS; i++) {
    x = i;
  }
}

exports.fetch = fetch;
