const { parentPort } = require("worker_threads");
const { fetch } = require("./fetch");

/**
 * Runs the service in a worker thread
 */
async function run() {
  await fetch();
  parentPort.postMessage("done");
}

run();
