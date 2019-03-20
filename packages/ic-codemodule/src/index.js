export default async function delayPromise(str, ms = 0) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(str), ms);
  });
  console.log('sss');
  console.log('sss');
  console.log('sss');
  console.log('sss');
  return await promise;
}
