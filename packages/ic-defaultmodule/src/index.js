import ExampleComponent from 'ic-reactmodule';
export default async function delayPromise(str, ms = 0) {
	const promise = new Promise(resolve => {
		setTimeout(() => resolve(str), ms);
	});
	console.log('default');
	console.log('default');
	console.log('default');
	console.log('default');
	console.log('default');

	return await promise;
}