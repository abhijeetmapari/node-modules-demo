//The fs.rename() method renames the specified file:

var fsm = require('fs');

fsm.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});