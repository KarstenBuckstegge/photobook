import readTree from '../../library/read-tree';

export default function bookRouteFactory () {
	return async function bookRoute () {
		readTree('./static/images');
  }
}
