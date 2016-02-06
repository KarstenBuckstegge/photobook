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
  fs.stat(filePath, (err, fileStat) => {
    if (err) {
      return console.error(
        `Could not determin file type.
        Error: ${err}`);
    }

    const fileNode = {
      name: fileName,
      path: filePath
    };

    if (fileStat && !fileStat.isDirectory()) {
      fileNode.type = 'file';
      callback(null, fileNode);
    } else {
      fileNode.type = 'directory';
      getDirectoryContent(filePath, true, (err, res) => {
        if (err) {
          return console.error(
            `Could not get directory content.
            Error: ${err}`);
        }

        fileNode.children = res;
        callback(null, fileNode);
      });
    }
  });
};

/**
*
* Loop over directory content and structure it
*
*/
const getFileData = (root, fileNames, callback) => {
  const fileNodes = [];
  let ignoredFiles = 0;

  fileNames.forEach(fileName => {
    // ignore hidden files
    if (fileName.startsWith('.')) {
      ignoredFiles++;
      return;
    }

    const filePath = `${root}/${fileName}`;

    getFileType(filePath, fileName, (err, res) => {
      if (err) {
        return console.error(
          `An error occured:
          ${err}`);
      }

      fileNodes.push(res);

      if ((fileNodes.length + ignoredFiles) === fileNames.length) {
        callback(null, fileNodes);
      }
    });
  });
};

/**
*
* Get the content from a directory
*
*/
const getDirectoryContent = (path, isChild, callback) => {
  fs.readdir(path, (err, fileNames) => {
    if (err) {
      console.error(
        `could not read directory: ${path}
        Error: ${err}`);
    }

    getFileData(path, fileNames, (err, res) => {
      if (err) {
        console.error(`An error occured in getFileData: ${err}`);
      }
      callback(null, res);
    });
  });
};

/**
*
* EXPORTS
*
*/
const readTree = (root, callback) => {
  getDirectoryContent(root, false, (err, res) => {
    if (err) {
      console.error(`An error occured in readTree: ${err}`);
    }
    callback(null, res);
  });
};

export default readTree;
