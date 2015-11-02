import fs from 'fs';

// function readTree(root, callback) {
//   let result;
//
//   fs.readdir(root, function(err, fileNames) {
//     if(err) {
//       console.error(`Something went wrong in parentDir: ${err}`);
//     }
//
//     let images = [];
//     let iterationCount = 0;
//
//     for(let fileName of fileNames) {
//       // ignore hidden files
//       if(fileName.startsWith('.')) {
//         continue;
//       }
//       let filePath = `${root}${fileName}`;
//
//       // create node for file or directory
//       let branch = {
//         name: fileName,
//         path: filePath
//       };
//
//       fs.stat(filePath, function(err, fileStat) {
//         if(err) {
//           console.error(`Something went wrong in parentStats: ${err}`);
//         }
//
//         // CHILD DIRECTORY
//         if(fileStat && !fileStat.isDirectory()){
//           branch.type = 'file';
//         }
//         if(fileStat && fileStat.isDirectory()) {
//           console.log(`${fileName} is a directory!
//           `);
//
//           branch.type = 'directory';
//           let childNode = [];
//
//           fs.readdir(filePath, function(err, childFileNames) {
//
//             if(err) {
//               console.error(`Something went wrong in childDir: ${err}`);
//             }
//
//             // loop over children
//             for(let childFileName of childFileNames) {
//
//               let childFilePath = `${filePath}/${childFileName}`;
//
//               fs.stat(childFilePath, function(err, childFileStat) {
//                 if(err) {
//                   console.error(`Something went wrong in childStats: ${err}`);
//                 }
//
//                 // only one level of child content is allowed
//                 if(childFileStat.isFile()) {
//                   console.log(`Writing file ${childFileName} to childNode
//                   `);
//                   let childContent = {
//                     name: childFileName,
//                     path: childFilePath,
//                     type: 'file'
//                   }
//                   childNode.push(childContent);
//                 }
//               });
//             }
//           });
//
//           branch.children = childNode;
//         }
//         else {
//           console.log(`${fileName} is a file
//           `);
//
//           branch.type = 'file';
//         }
//       });
//
//       images.push(branch);
//     }
//
//     var finisher = setInterval( function() {
//       if(++iterationCount == fileNames.length) {
//         clearInterval(finisher);
//         result = callback(null, images);
//       }
//     }, 200);
//   })
// }



/**
*
* Check weather the file is a file or a directory
*
*/
const getFileType = (filePath, fileName, callback) => {
  fs.stat(filePath, function(err, fileStat) {
    if(err) {
      console.error(
        `Could not determin file type
        Error: ${err}`);
    }

    if(fileStat && !fileStat.isDirectory()){
      callback(null, 'file');
    }
    else {
      callback(null, 'directory', filePath);
    }
  });
}

/**
*
* Loop over directory content and structure it
*
*/
const getFileData = (root, fileNames, callback) => {
  let res = [];

  for(let fileName of fileNames) {
    // ignore hidden files
    if(fileName.startsWith('.')) {
      continue;
    }

    let filePath = `${root}/${fileName}`;

    getFileType(filePath, fileName, function(err, res, filePath) {
      if(err) {
        return console.error(
          `An error occured:
          ${err}`);
      }
      if(res === 'directory') {
        getDirectoryContent(filePath, true, function(err, res) {
          callback(null, res);
        });
      }
      else {
        callback(null, res);
      }
    })

    // create node for file or directory
    res.push({
      name: fileName,
      path: filePath
    });
  }

  callback(null, res);
}

/**
*
* Get the content from a directory
*
*/
const getDirectoryContent = (path, isChild, callback) => {
  fs.readdir(path, (err, fileNames) => {
    if(err) {
      console.error(
        `could not read directory: ${path}
        Error: ${err}`);
    }

    getFileData(path, fileNames, function(err, res) {
      callback(null, res);
    })
  })
}


const readTree = (root, callback) => {
  getDirectoryContent(root, false, function(err, res) {
    callback(null, res);
  });
}


export default readTree;
