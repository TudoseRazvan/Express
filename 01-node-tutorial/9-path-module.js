const path = require('path');

console.log(path.sep); // Outputs the platform-specific path segment separator

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath); // \content\subfolder\test.txt 

const base = path.basename(filePath);
console.log(base); // Outputs the last portion of the path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute); // C:\Razvan\CV\Companii\BearingPoint\PregatireInterviu\content\subfolder\test.txt
