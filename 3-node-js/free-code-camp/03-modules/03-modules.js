/*     MODULES - Encapsulated Code (only share minimum)
    - split one file into multiple files
    - CommonJS, every file is module (by default)
*/
const {john, peter} = require('./03-1-names');
// 1: {john,peter} = 
const sayHi = require('./03-2-utils');
const data = require('./03-3-alternative-flavor');
//console.log(names); // { first: 'John', last: 'Doe' }
console.log(data);
sayHi('susan');
// 2: sayHi(names.peter / .john)
sayHi(john);
sayHi(peter);