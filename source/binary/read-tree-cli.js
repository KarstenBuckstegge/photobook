import readTree from '../library/read-tree';
readTree('./static/images/', function(res) {
  if(!res) {
    return 'Nothing here!';
  }
  else {
    return res;
  }
});
