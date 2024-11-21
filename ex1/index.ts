import createPromise from "./promise";

let start = performance.now();

const main = async () => {
  const taskA = createPromise("A", 1000);
  const taskB = createPromise("B", 1000);
  const taskC = createPromise("C", 1000);
  const taskD = createPromise("D", 1000);

  await taskA();
  await Promise.all([taskB(), taskC()]);
  await taskD();
};

await main();

console.log(`Exercise 1 - Execution Time: ${performance.now() - start}ms\n\n`);
