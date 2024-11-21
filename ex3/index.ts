import simulateDownload from "./promiseDownload";

let start = performance.now();

const main = async () => {
  // Démarrer toutes les tâches
  const taskPromises = [
    simulateDownload("Download 1", 6000),
    simulateDownload("Download 2", 3000),
    simulateDownload("Download 3", 4000),
  ];

  // Attendre que la première tâche se termine et enregistrer son nom
  const firstCompletedTask = await Promise.race(taskPromises);
  console.log(`The task that finishes first is: ${firstCompletedTask}`);

  // Attendre que toutes les tâches soient terminées
  await Promise.all(taskPromises);

  // Message de log final
  console.log("All downloads are completed.");
};

await main();

console.log(`Exercise 3 - Execution Time: ${performance.now() - start}ms\n\n`);
