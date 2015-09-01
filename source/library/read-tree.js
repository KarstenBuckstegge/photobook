import fs from 'fs';

function readTree(root) {

  fs.readdir(root, function(err, fileNames) {
    let dir = [];
    for(let fileName of fileNames) {
      let filePath = `${root}/${fileName}`;
      fs.stat(filePath, function(err, fileStats) {
        console.log(`Is ${fileName} a directory? ${fileStats.isDirectory()}`);
        // console.log(arguments);
      });
    }

  })

}


export default readTree;
