const createPromise = (taskName: string, duration: number = 500) => {
  return async () => {
    console.log(`${taskName} démarre`);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(`${taskName} termine`);
        resolve();
      }, duration);
    });
  };
};

export default createPromise;
