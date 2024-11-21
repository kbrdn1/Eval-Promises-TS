import createPromise from "./promise";

let start = performance.now();

const main = async () => {
  const taskA = createPromise("A", 2000);
  await taskA();

  const taskB = createPromise("B", 3000);
  const taskC = createPromise("C", 1000);

  await Promise.all([taskB(), taskC()]);

  const taskD = createPromise("D", 4000, true);

  try {
    await taskD();
  } catch (error) {
    console.error(`E ne peut pas démarrer en raison de l'échec de D.`);
  } finally {
    const taskE = createPromise("E", 3000);
    await taskE();
  }

  try {
    const taskF = createPromise("F", 2000);
    await taskF();
  } catch (error) {
    console.error(`Erreur inattendue lors de l'exécution de F : ${error}`);
  }

  console.log("Exécution du workflow terminée avec des erreurs.");
};

await main();

console.log(`Exercise 4 - Execution Time: ${performance.now() - start}ms\n\n`);
