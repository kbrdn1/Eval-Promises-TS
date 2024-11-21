const simulateDownload = (taskName: string, duration: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${taskName} finished`);
      resolve(taskName);
    }, duration);
  });
};

export default simulateDownload;