export default async function delayPromise(str, ms = 0) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(str), ms);
  });
  console.log('feature/bugfix');
  console.log('feature/bugfix');
  console.log('feature/bugfix');

  return await promise;
}
