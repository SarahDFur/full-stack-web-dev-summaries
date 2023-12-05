const path = require('path');

console.log(path.sep);

const filePath = path.join('\\content','subfolder','text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);

/*
\
\content\subfolder\text.txt
text.txt
C:\Users\User\Desktop\full-stack-dev\node-js\free-code-camp\05-built-in-modules\2-path\content\subfolder\text.txt
*/