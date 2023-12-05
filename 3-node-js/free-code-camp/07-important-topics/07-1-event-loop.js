// offloading
console.log('first task');
for (let i = 0; i < 10000000; i++) {
    const h3 = document.querySelector('h3');
    h3.textContent = `Hey, everyone is waiting on me`;
}
console.timeEnd();

console.log('next task');

// ------------- 2 -------------
console.log('first task');
setTimeout(() => {
    console.log('second task');
}, 0);

console.log('next task');

/*      
                                            Register CB     
                                        ------------------->
     _______                                                   _______
    |       |                 _______________                 |       |
    |       |                ^               |                |       |
    |       |   Requests     |               |     Complete   |       |
    |       |  --------->    |   EVENT LOOP  |    <---------  |       |
    |       |                |               |                |       |
    |       |                |_______________|                |       | 
    |_______|                                                 |_______|
     Clients                                             Database File System
                      <-------------                       Networks Others
                        Execute CB
*/

// --------- example 1 ----------
const { readFile } = require('fs');

console.log('started a first task');
// CHECK FILE PATH!!
console.log('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
});
console.log('starting next task');
// --------- example 2 ----------

// starting operating system process
console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');
// completed and exited operating system process

// --------- example 3 ----------
setInterval(() => {
    console.log('hello world');
}, 2000);
console.log(`I will run first`);
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error

// --------- example 4 ----------
const http = require('http');

const sever = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World');
});

server.listen(5000, () => {
    console.log('Server listening on port : 5000....');
});

// --------- example 5 ----------
const { readFile, writeFile } = require('fs');

console.log('start');
console.log('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        );
    })
});
console.log('starting next task');