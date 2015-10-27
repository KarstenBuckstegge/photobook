import readTree from '../../library/read-tree';

const promiseReadTree = (root) => {
	return new Promise(function(resolve, reject) {
		readTree(root, (err, res) => {
			if(err) {
				return reject(err);
			}
			resolve(res);
		});
	});
};

export default function bookRouteFactory (application) {

	return async function bookRoute () {
		try {
			const results = await promiseReadTree('./static/images/');
			this.body = results;
		} catch (err) {
			console.log('woot');
			this.body = 'woot';
		}
		/*try {
			let result;
			readTree('./static/images/', (err, res) => {
				result = 'Nothing here!';
				if (res) {
					this.result = JSON.stringify(res[0]);
				}
				console.log('result: ' + this.result);
			});

		}
		catch(err) {
			console.log(err);
		} */
	}

}
