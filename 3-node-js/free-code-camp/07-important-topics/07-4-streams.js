// 1:
// ------------- Creating a big file to make operations easier: -------------
const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}

// 2:
//---------------------------------------------------------------------------

const { createReadStream } = require('fs');

// default 64kb
// reading in chunks
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }) ==> chunk = 9000 kb
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
  console.log(result);
});
stream.on('error', (err) => console.log(err));

// 3:
//---------------------------- http example ---------------------------------
var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
      fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);