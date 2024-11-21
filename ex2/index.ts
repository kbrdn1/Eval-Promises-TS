import createPromise from "./promise";

let start = performance.now();

const calculateRangeSum = (start: number, end: number): number => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

const main = async () => {
  const task1 = createPromise(() => calculateRangeSum(1, 100));
  const task2 = createPromise(() => calculateRangeSum(101, 200));
  const task3 = createPromise(() => calculateRangeSum(201, 300));

  const [sum1, sum2, sum3] = await Promise.all([task1, task2, task3]);

  console.log("Sum of range 1-100:", sum1);
  console.log("Sum of range 101-200:", sum2);
  console.log("Sum of range 201-300:", sum3);

  const totalSum = sum1 + sum2 + sum3;
  console.log("Total sum of all ranges:", totalSum);
};

await main();

console.log(`Exercise 2 - Execution Time: ${performance.now() - start}ms\n\n`);
