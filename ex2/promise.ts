const createPromise = (task: () => number) => {
  return new Promise<number>((resolve) => {
    resolve(task());
  });
};

export default createPromise;