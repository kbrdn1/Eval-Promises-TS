import createPromise from "./promise";

let start = performance.now();

const main = async () => {
  // Cette ligne là, j'ai eu du mal à la trouver car je savais pas qu'en ts il allait m'embêter avec les types
  // Sinon il nous laisse pas faire le await taskF() à la fin pour être sûr que ça termine bien avant la fin de l'exécution
  let taskFPromise: Promise<void> = Promise.resolve();
  const taskA = createPromise("A", 2000);
  await taskA();

  const taskB = createPromise("B", 3000);
  const taskC = createPromise("C", 1000);

  // J'ai rajouté un then directement ici, afin que F démarre directement après C
  await Promise.all([
    taskB(),
    taskC().then(() => {
      const taskF = createPromise("F", 8000);
      taskFPromise = taskF()
    }),
  ]);

  const taskD = createPromise("D", 4000, true);

  // J'ai corrigé un truc ici, je crois que tu appelais E dans le finally donc il se lançait quoi qu'il arrive
  // Alors qu'on voulait plutôt qu'il ne se lance pas si D ne fonctionne pas mais qu'il se lance si D fonctionne
  try {
    await taskD();
    const taskE = createPromise("E", 3000);
    await taskE();
  } catch (error) {
    console.error(`E ne peut pas démarrer en raison de l'échec de D.`);
  }

  // Ce await permet de s'assurer que F se termine bien avant la fin de l'exécution (j'ai mis 8 sec pour F afin de tester)
  await taskFPromise;

  console.log("Exécution du workflow terminée avec des erreurs.");
};

await main();

console.log(`Exercise 4 - Execution Time: ${performance.now() - start}ms\n\n`);
