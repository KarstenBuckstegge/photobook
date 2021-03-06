import readTree from '../../library/read-tree';

const promiseReadTree = root => {
  return new Promise((resolve, reject) => {
    readTree(root, (err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });
};

export default function bookRouteFactory() {
  return async function bookRoute() {
    try {
      const results = await promiseReadTree('./static/images');
      this.body = results;
      return results;
    } catch (err) {
      console.log(`Something failed miserably in bookRoute: ${err}`);
      this.body = 'We\'ll something didn\'t work I guess...';
    }
  };
}
