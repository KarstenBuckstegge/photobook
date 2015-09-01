'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function readTree(root) {

  _fs2['default'].readdir(root, function (err, fileNames) {
    var dir = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function () {
        var fileName = _step.value;

        var filePath = root + '/' + fileName;
        _fs2['default'].stat(filePath, function (err, fileStats) {
          console.log('Is ' + fileName + ' a directory? ' + fileStats.isDirectory());
          // console.log(arguments);
        });
      };

      for (var _iterator = fileNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
}

exports['default'] = readTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9saWJyYXJ5L3JlYWQtdHJlZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFBZSxJQUFJOzs7O0FBRW5CLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRTs7QUFFdEIsa0JBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFTLEdBQUcsRUFBRSxTQUFTLEVBQUU7QUFDeEMsUUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDOzs7Ozs7O1lBQ0wsUUFBUTs7QUFDZCxZQUFJLFFBQVEsR0FBTSxJQUFJLFNBQUksUUFBUSxBQUFFLENBQUM7QUFDckMsd0JBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFTLEdBQUcsRUFBRSxTQUFTLEVBQUU7QUFDekMsaUJBQU8sQ0FBQyxHQUFHLFNBQU8sUUFBUSxzQkFBaUIsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFHLENBQUM7O1NBRXZFLENBQUMsQ0FBQzs7O0FBTEwsMkJBQW9CLFNBQVMsOEhBQUU7O09BTTlCOzs7Ozs7Ozs7Ozs7Ozs7R0FFRixDQUFDLENBQUE7Q0FFSDs7cUJBR2MsUUFBUSIsImZpbGUiOiJyZWFkLXRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5mdW5jdGlvbiByZWFkVHJlZShyb290KSB7XG5cbiAgZnMucmVhZGRpcihyb290LCBmdW5jdGlvbihlcnIsIGZpbGVOYW1lcykge1xuICAgIGxldCBkaXIgPSBbXTtcbiAgICBmb3IobGV0IGZpbGVOYW1lIG9mIGZpbGVOYW1lcykge1xuICAgICAgbGV0IGZpbGVQYXRoID0gYCR7cm9vdH0vJHtmaWxlTmFtZX1gO1xuICAgICAgZnMuc3RhdChmaWxlUGF0aCwgZnVuY3Rpb24oZXJyLCBmaWxlU3RhdHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYElzICR7ZmlsZU5hbWV9IGEgZGlyZWN0b3J5PyAke2ZpbGVTdGF0cy5pc0RpcmVjdG9yeSgpfWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCByZWFkVHJlZTtcbiJdfQ==