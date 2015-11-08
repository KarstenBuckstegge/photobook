/**
*
* IMPORTS
*
*/
import fs from 'fs';

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

    let fileNode = {
      name: fileName,
      path: filePath
    }

    if(fileStat && !fileStat.isDirectory()){
      fileNode.type = 'file';
      callback(null, fileNode);
    }
    else {
      fileNode.type = 'directory';
      getDirectoryContent(filePath, true, function(err, res) {
        fileNode.children = res;
        callback(null, fileNode);
      });
    }
  });
}

/**
*
* Loop over directory content and structure it
*
*/
const getFileData = (root, fileNames, callback) => {
  let fileNodes = [];
  let ignoredFiles = 0;

  fileNames.forEach( (fileName, index) => {
    // ignore hidden files
    if(fileName.startsWith('.')) {
      ignoredFiles++;
      return;
    }

    let filePath = `${root}/${fileName}`;

    getFileType(filePath, fileName, function(err, res) {
      if(err) {
        return console.error(
          `An error occured:
          ${err}`);
      }

      fileNodes.push(res);

      if((fileNodes.length + ignoredFiles) === fileNames.length) {
        callback(null, fileNodes);
      }
    })
  })
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

/**
*
* EXPORTS
*
*/
const readTree = (root, callback) => {
  getDirectoryContent(root, false, function(err, res) {
    callback(null, res);
  });
}

export default readTree;
