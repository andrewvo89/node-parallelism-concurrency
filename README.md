# Sequential vs Parallel vs Concurrent

Install dependencies:

```bash
  npm install
  # or
  yarn install
```

To benchmark the speed difference between the 3 methods of handling multiple tasks, run the following command:

```bash
  node index.js
```

Default parameters:

- Number of tasks: 5
- For each task, async resolve time: 1 second
- For each task synchronous iterations: 500 million
