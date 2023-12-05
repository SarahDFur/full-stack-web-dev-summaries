// ------------------- 1 --------------------------
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page');
    }
    if (req.url === '/about') {
        // BLOCKING CODE !!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('About Page');
    }
    res.end('Error Page');
});

// ------------------- 2 --------------------------
// const { readFile } = require('fs');
//
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile('./content/first.txt', 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));


// const start = async() => {
//     try {
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
//     }
// }

// start();
// ------------------- 3 --------------------------
const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise(
            './content/result-mind-grenafe.txt', 
            `THIS IS AWESOME : ${first}, ${second}`,
            { flag: 'a'}
        );
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile('./content/first.txt', 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));