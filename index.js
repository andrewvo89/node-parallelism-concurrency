const { Worker } = require("worker_threads");
const { fetch } = require("./fetch");

const ASYNC_ITERATIONS = 5;

/**
 * Spawns a worker thread to run the service
 * @return {*}
 */
async function runWebWorker() {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./service.js");
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

/**
 * Runs the benchmarks
 */
async function run() {
  // Sequential on single thread
  console.log("Running sequentially on single thread");
  console.time("Sequential");
  for (let i = 0; i < ASYNC_ITERATIONS; i++) {
    await fetch();
  }
  console.timeEnd("Sequential");

  // Concurrent on single thread
  console.log("Running concurrently on single thread");
  console.time("Concurrent");
  await Promise.all(new Array(ASYNC_ITERATIONS).fill(0).map(fetch));
  console.timeEnd("Concurrent");

  // Parallel (using nodejs web workers)
  console.log("Running in parallel (using nodejs web workers)");
  console.time("Parallel");
  await Promise.all(new Array(ASYNC_ITERATIONS).fill(0).map(runWebWorker));
  console.timeEnd("Parallel");
}

run();
