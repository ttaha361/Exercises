const fs = require('fs');

const content = 'content';

fs.writeFile('example.txt', content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully!');
  }
});
