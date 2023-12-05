// setup ==> creating your own server

const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req); // prints huge "req" object
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('Here is our short history');
    }
    res.end(`
    <h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/">back home</a>
    `);
});

server.listen(5000);

// complete: false,
// rawHeaders: [
//   'Host',
//   'localhost:5000',
//   'Connection',
//   'keep-alive',
//   'Cache-Control',
//   'max-age=0',
//   'sec-ch-ua',
//   '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
//   'sec-ch-ua-mobile',
//   '?0',
//   'sec-ch-ua-platform',
//   '"Windows"',
//   'Upgrade-Insecure-Requests',
//   '1',
//   'User-Agent',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
//   'Accept',
//   'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//   'Sec-Fetch-Site',
//   'none',
//   'Sec-Fetch-Mode',
//   'navigate',
//   'Sec-Fetch-User',
//   '?1',
//   'Sec-Fetch-Dest',
//   'document',
//   'Accept-Encoding',
//   'gzip, deflate, br',
//   'Accept-Language',
//   'en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7'
// ],
// rawTrailers: [],
// joinDuplicateHeaders: null,
// aborted: false,
// upgrade: false,
// url: '/',
// method: 'GET',
// statusCode: null,
// statusMessage: null,
// client: <ref *1> Socket {
//   connecting: false,
//   _hadError: false,
//   _parent: null,
//   _host: null,
//   _closeAfterHandlingError: false,
//   _readableState: ReadableState {
//     objectMode: false,
//     highWaterMark: 16384,
//     buffer: BufferList { head: null, tail: null, length: 0 },
//     length: 0,
//     pipes: [],
//     flowing: true,
//     ended: false,
//     endEmitted: false,
//     reading: true,
//     constructed: true,
//     sync: false,
//     needReadable: true,
//     emittedReadable: false,
//     readableListening: false,
//     resumeScheduled: false,
//     errorEmitted: false,
//     emitClose: false,
//     autoDestroy: true,
//     destroyed: false,
//     errored: null,
//     closed: false,
//     closeEmitted: false,
//     defaultEncoding: 'utf8',
//     awaitDrainWriters: null,
//     multiAwaitDrain: false,
//     readingMore: false,
//     dataEmitted: false,
//     decoder: null,
//     encoding: null,
//     [Symbol(kPaused)]: false
//   },
//   _events: [Object: null prototype] {
//     end: [Array],
//     timeout: [Function: socketOnTimeout],
//     data: [Function: bound socketOnData],
//     error: [Function: socketOnError],
//     close: [Array],
//     drain: [Function: bound socketOnDrain],
//     resume: [Function: onSocketResume],
//     pause: [Function: onSocketPause]
//   },
//   _eventsCount: 8,
//   _maxListeners: undefined,
//   _writableState: WritableState {
//     objectMode: false,
//     highWaterMark: 16384,
//     finalCalled: false,
//     needDrain: false,
//     ending: false,
//     ended: false,
//     finished: false,
//     destroyed: false,
//     decodeStrings: false,
//     defaultEncoding: 'utf8',
//     length: 0,
//     writing: false,
//     corked: 0,
//     sync: true,
//     bufferProcessing: false,
//     onwrite: [Function: bound onwrite],
//     writecb: null,
//     writelen: 0,
//     afterWriteTickInfo: null,
//     buffered: [],
//     bufferedIndex: 0,
//     allBuffers: true,
//     allNoop: true,
//     pendingcb: 0,
//     constructed: true,
//     prefinished: false,
//     errorEmitted: false,
//     emitClose: false,
//     autoDestroy: true,
//     errored: null,
//     closed: false,
//     closeEmitted: false,
//     [Symbol(kOnFinished)]: []
//   },
//   allowHalfOpen: true,
//   _sockname: null,
//   _pendingData: null,
//   _pendingEncoding: '',
//   server: Server {
//     maxHeaderSize: undefined,
//     insecureHTTPParser: undefined,
//     requestTimeout: 300000,
//     headersTimeout: 60000,
//     keepAliveTimeout: 5000,
//     connectionsCheckingInterval: 30000,
//     joinDuplicateHeaders: undefined,
//     rejectNonStandardBodyWrites: false,
//     _events: [Object: null prototype],
//     _eventsCount: 2,
//     _maxListeners: undefined,
//     _connections: 1,
//     _handle: [TCP],
//     _usingWorkers: false,
//     _workers: [],
//     _unref: false,
//     allowHalfOpen: true,
//     pauseOnConnect: false,
//     noDelay: true,
//     keepAlive: false,
//     keepAliveInitialDelay: 0,
//     highWaterMark: 16384,
//     httpAllowHalfOpen: false,
//     timeout: 0,
//     maxHeadersCount: null,
//     maxRequestsPerSocket: 0,
//     _connectionKey: '6::::5000',
//     [Symbol(IncomingMessage)]: [Function: IncomingMessage],
//     [Symbol(ServerResponse)]: [Function: ServerResponse],
//     [Symbol(kCapture)]: false,
//     [Symbol(async_id_symbol)]: 3,
//     [Symbol(http.server.connections)]: ConnectionsList {},
//     [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
//       _idleTimeout: 30000,
//       _idlePrev: [TimersList],
//       _idleNext: [TimersList],
//       _idleStart: 62,
//       _onTimeout: [Function: bound checkConnections],
//       _timerArgs: undefined,
//       _repeat: 30000,
//       _destroyed: false,
//       [Symbol(refed)]: false,
//       [Symbol(kHasPrimitive)]: false,
//       [Symbol(asyncId)]: 2,
//       [Symbol(triggerId)]: 1
//     },
//     [Symbol(kUniqueHeaders)]: null
//   },
//   _server: Server {
//     maxHeaderSize: undefined,
//     insecureHTTPParser: undefined,
//     requestTimeout: 300000,
//     headersTimeout: 60000,
//     keepAliveTimeout: 5000,
//     connectionsCheckingInterval: 30000,
//     joinDuplicateHeaders: undefined,
//     rejectNonStandardBodyWrites: false,
//     _events: [Object: null prototype],
//     _eventsCount: 2,
//     _maxListeners: undefined,
//     _connections: 1,
//     _handle: [TCP],
//     _usingWorkers: false,
//     _workers: [],
//     _unref: false,
//     allowHalfOpen: true,
//     pauseOnConnect: false,
//     noDelay: true,
//     keepAlive: false,
//     keepAliveInitialDelay: 0,
//     highWaterMark: 16384,
//     httpAllowHalfOpen: false,
//     timeout: 0,
//     maxHeadersCount: null,
//     maxRequestsPerSocket: 0,
//     _connectionKey: '6::::5000',
//     [Symbol(IncomingMessage)]: [Function: IncomingMessage],
//     [Symbol(ServerResponse)]: [Function: ServerResponse],
//     [Symbol(kCapture)]: false,
//     [Symbol(async_id_symbol)]: 3,
//     [Symbol(http.server.connections)]: ConnectionsList {},
//     [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
//       _idleTimeout: 30000,
//       _idlePrev: [TimersList],
//       _idleNext: [TimersList],
//       _idleStart: 62,
//       _onTimeout: [Function: bound checkConnections],
//       _timerArgs: undefined,
//       _repeat: 30000,
//       _destroyed: false,
//       [Symbol(refed)]: false,
//       [Symbol(kHasPrimitive)]: false,
//       [Symbol(asyncId)]: 2,
//       [Symbol(triggerId)]: 1
//     },
//     [Symbol(kUniqueHeaders)]: null
//   },
//   parser: HTTPParser {
//     '0': null,
//     '1': [Function: parserOnHeaders],
//     '2': [Function: parserOnHeadersComplete],
//     '3': [Function: parserOnBody],
//     '4': [Function: parserOnMessageComplete],
//     '5': [Function: bound onParserExecute],
//     '6': [Function: bound onParserTimeout],
//     _headers: [],
//     _url: '',
//     socket: [Circular *1],
//     incoming: [Circular *2],
//     outgoing: null,
//     maxHeaderPairs: 2000,
//     _consumed: true,
//     onIncoming: [Function: bound parserOnIncoming],
//     joinDuplicateHeaders: null,
//     [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
//   },
//   on: [Function: socketListenerWrap],
//   addListener: [Function: socketListenerWrap],
//   prependListener: [Function: socketListenerWrap],
//   setEncoding: [Function: socketSetEncoding],
//   _paused: false,
//   _httpMessage: ServerResponse {
//     _events: [Object: null prototype],
//     _eventsCount: 1,
//     _maxListeners: undefined,
//     outputData: [],
//     outputSize: 0,
//     writable: true,
//     destroyed: false,
//     _last: false,
//     chunkedEncoding: false,
//     shouldKeepAlive: true,
//     maxRequestsOnConnectionReached: false,
//     _defaultKeepAlive: true,
//     useChunkedEncodingByDefault: true,
//     sendDate: true,
//     _removedConnection: false,
//     _removedContLen: false,
//     _removedTE: false,
//     strictContentLength: false,
//     _contentLength: null,
//     _hasBody: true,
//     _trailer: '',
//     finished: false,
//     _headerSent: false,
//     _closed: false,
//     socket: [Circular *1],
//     _header: null,
//     _keepAliveTimeout: 5000,
//     _onPendingData: [Function: bound updateOutgoingData],
//     req: [Circular *2],
//     _sent100: false,
//     _expect_continue: false,
//     _maxRequestsPerSocket: 0,
//     [Symbol(kCapture)]: false,
//     [Symbol(kBytesWritten)]: 0,
//     [Symbol(kNeedDrain)]: false,
//     [Symbol(corked)]: 0,
//     [Symbol(kOutHeaders)]: null,
//     [Symbol(errored)]: null,
//     [Symbol(kHighWaterMark)]: 16384,
//     [Symbol(kRejectNonStandardBodyWrites)]: false,
//     [Symbol(kUniqueHeaders)]: null
//   },
//   [Symbol(async_id_symbol)]: 5,
//   [Symbol(kHandle)]: TCP {
//     reading: true,
//     onconnection: null,
//     _consumed: true,
//     [Symbol(owner_symbol)]: [Circular *1]
//   },
//   [Symbol(lastWriteQueueSize)]: 0,
//   [Symbol(timeout)]: null,
//   [Symbol(kBuffer)]: null,
//   [Symbol(kBufferCb)]: null,
//   [Symbol(kBufferGen)]: null,
//   [Symbol(kCapture)]: false,
//   [Symbol(kSetNoDelay)]: true,
//   [Symbol(kSetKeepAlive)]: false,
//   [Symbol(kSetKeepAliveInitialDelay)]: 0,
//   [Symbol(kBytesRead)]: 0,
//   [Symbol(kBytesWritten)]: 0
// },
// _consuming: false,
// _dumped: false,
// [Symbol(kCapture)]: false,
// [Symbol(kHeaders)]: {
//   host: 'localhost:5000',
//   connection: 'keep-alive',
//   'cache-control': 'max-age=0',
//   'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
//   'sec-ch-ua-mobile': '?0',
//   'sec-ch-ua-platform': '"Windows"',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',  
//   'sec-fetch-site': 'none',
//   'sec-fetch-mode': 'navigate',
//   'sec-fetch-user': '?1',
//   'sec-fetch-dest': 'document',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7'
// },
// [Symbol(kHeadersCount)]: 30,
// [Symbol(kTrailers)]: null,
// [Symbol(kTrailersCount)]: 0
// }
// <ref *2> IncomingMessage {
// _readableState: ReadableState {
//   objectMode: false,
//   highWaterMark: 16384,
//   buffer: BufferList { head: null, tail: null, length: 0 },
//   length: 0,
//   pipes: [],
//   flowing: null,
//   ended: false,
//   endEmitted: false,
//   reading: false,
//   constructed: true,
//   sync: true,
//   needReadable: false,
//   emittedReadable: false,
//   readableListening: false,
//   resumeScheduled: false,
//   errorEmitted: false,
//   emitClose: true,
//   autoDestroy: true,
//   destroyed: false,
//   errored: null,
//   closed: false,
//   closeEmitted: false,
//   defaultEncoding: 'utf8',
//   awaitDrainWriters: null,
//   multiAwaitDrain: false,
//   readingMore: true,
//   dataEmitted: false,
//   decoder: null,
//   encoding: null,
//   [Symbol(kPaused)]: null
// },
// _events: [Object: null prototype] {},
// _eventsCount: 0,
// _maxListeners: undefined,
// socket: <ref *1> Socket {
//   connecting: false,
//   _hadError: false,
//   _parent: null,
//   _host: null,
//   _closeAfterHandlingError: false,
//   _readableState: ReadableState {
//     objectMode: false,
//     highWaterMark: 16384,
//     buffer: BufferList { head: null, tail: null, length: 0 },
//     length: 0,
//     pipes: [],
//     flowing: true,
//     ended: false,
//     endEmitted: false,
//     reading: true,
//     constructed: true,
//     sync: false,
//     needReadable: true,
//     emittedReadable: false,
//     readableListening: false,
//     resumeScheduled: false,
//     errorEmitted: false,
//     emitClose: false,
//     autoDestroy: true,
//     destroyed: false,
//     errored: null,
//     closed: false,
//     closeEmitted: false,
//     defaultEncoding: 'utf8',
//     awaitDrainWriters: null,
//     multiAwaitDrain: false,
//     readingMore: false,
//     dataEmitted: false,
//     decoder: null,
//     encoding: null,
//     [Symbol(kPaused)]: false
//   },
//   _events: [Object: null prototype] {
//     end: [Array],
//     timeout: [Function: socketOnTimeout],
//     data: [Function: bound socketOnData],
//     error: [Function: socketOnError],
//     close: [Array],
//     drain: [Function: bound socketOnDrain],
//     resume: [Function: onSocketResume],
//     pause: [Function: onSocketPause]
//   },
//   _eventsCount: 8,
//   _maxListeners: undefined,
//   _writableState: WritableState {
//     objectMode: false,
//     highWaterMark: 16384,
//     finalCalled: false,
//     needDrain: false,
//     ending: false,
//     ended: false,
//     finished: false,
//     destroyed: false,
//     decodeStrings: false,
//     defaultEncoding: 'utf8',
//     length: 0,
//     writing: false,
//     corked: 0,
//     sync: false,
//     bufferProcessing: false,
//     onwrite: [Function: bound onwrite],
//     writecb: null,
//     writelen: 0,
//     afterWriteTickInfo: null,
//     buffered: [],
//     bufferedIndex: 0,
//     allBuffers: true,
//     allNoop: true,
//     pendingcb: 0,
//     constructed: true,
//     prefinished: false,
//     errorEmitted: false,
//     emitClose: false,
//     autoDestroy: true,
//     errored: null,
//     closed: false,
//     closeEmitted: false,
//     [Symbol(kOnFinished)]: []
//   },
//   allowHalfOpen: true,
//   _sockname: null,
//   _pendingData: null,
//   _pendingEncoding: '',
//   server: Server {
//     maxHeaderSize: undefined,
//     insecureHTTPParser: undefined,
//     requestTimeout: 300000,
//     headersTimeout: 60000,
//     keepAliveTimeout: 5000,
//     connectionsCheckingInterval: 30000,
//     joinDuplicateHeaders: undefined,
//     rejectNonStandardBodyWrites: false,
//     _events: [Object: null prototype],
//     _eventsCount: 2,
//     _maxListeners: undefined,
//     _connections: 2,
//     _handle: [TCP],
//     _usingWorkers: false,
//     _workers: [],
//     _unref: false,
//     allowHalfOpen: true,
//     pauseOnConnect: false,
//     noDelay: true,
//     keepAlive: false,
//     keepAliveInitialDelay: 0,
//     highWaterMark: 16384,
//     httpAllowHalfOpen: false,
//     timeout: 0,
//     maxHeadersCount: null,
//     maxRequestsPerSocket: 0,
//     _connectionKey: '6::::5000',
//     [Symbol(IncomingMessage)]: [Function: IncomingMessage],
//     [Symbol(ServerResponse)]: [Function: ServerResponse],
//     [Symbol(kCapture)]: false,
//     [Symbol(async_id_symbol)]: 3,
//     [Symbol(http.server.connections)]: ConnectionsList {},
//     [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
//       _idleTimeout: 30000,
//       _idlePrev: [TimersList],
//       _idleNext: [TimersList],
//       _idleStart: 62,
//       _onTimeout: [Function: bound checkConnections],
//       _timerArgs: undefined,
//       _repeat: 30000,
//       _destroyed: false,
//       [Symbol(refed)]: false,
//       [Symbol(kHasPrimitive)]: false,
//       [Symbol(asyncId)]: 2,
//       [Symbol(triggerId)]: 1
//     },
//     [Symbol(kUniqueHeaders)]: null
//   },
//   _server: Server {
//     maxHeaderSize: undefined,
//     insecureHTTPParser: undefined,
//     requestTimeout: 300000,
//     headersTimeout: 60000,
//     keepAliveTimeout: 5000,
//     connectionsCheckingInterval: 30000,
//     joinDuplicateHeaders: undefined,
//     rejectNonStandardBodyWrites: false,
//     _events: [Object: null prototype],
//     _eventsCount: 2,
//     _maxListeners: undefined,
//     _connections: 2,
//     _handle: [TCP],
//     _usingWorkers: false,
//     _workers: [],
//     _unref: false,
//     allowHalfOpen: true,
//     pauseOnConnect: false,
//     noDelay: true,
//     keepAlive: false,
//     keepAliveInitialDelay: 0,
//     highWaterMark: 16384,
//     httpAllowHalfOpen: false,
//     timeout: 0,
//     maxHeadersCount: null,
//     maxRequestsPerSocket: 0,
//     _connectionKey: '6::::5000',
//     [Symbol(IncomingMessage)]: [Function: IncomingMessage],
//     [Symbol(ServerResponse)]: [Function: ServerResponse],
//     [Symbol(kCapture)]: false,
//     [Symbol(async_id_symbol)]: 3,
//     [Symbol(http.server.connections)]: ConnectionsList {},
//     [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
//       _idleTimeout: 30000,
//       _idlePrev: [TimersList],
//       _idleNext: [TimersList],
//       _idleStart: 62,
//       _onTimeout: [Function: bound checkConnections],
//       _timerArgs: undefined,
//       _repeat: 30000,
//       _destroyed: false,
//       [Symbol(refed)]: false,
//       [Symbol(kHasPrimitive)]: false,
//       [Symbol(asyncId)]: 2,
//       [Symbol(triggerId)]: 1
//     },
//     [Symbol(kUniqueHeaders)]: null
//   },
//   parser: HTTPParser {
//     '0': null,
//     '1': [Function: parserOnHeaders],
//     '2': [Function: parserOnHeadersComplete],
//     '3': [Function: parserOnBody],
//     '4': [Function: parserOnMessageComplete],
//     '5': [Function: bound onParserExecute],
//     '6': [Function: bound onParserTimeout],
//     _headers: [],
//     _url: '',
//     socket: [Circular *1],
//     incoming: [Circular *2],
//     outgoing: null,
//     maxHeaderPairs: 2000,
//     _consumed: true,
//     onIncoming: [Function: bound parserOnIncoming],
//     joinDuplicateHeaders: null,
//     [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
//   },
//   on: [Function: socketListenerWrap],
//   addListener: [Function: socketListenerWrap],
//   prependListener: [Function: socketListenerWrap],
//   setEncoding: [Function: socketSetEncoding],
//   _paused: false,
//   _httpMessage: ServerResponse {
//     _events: [Object: null prototype],
//     _eventsCount: 1,
//     _maxListeners: undefined,
//     outputData: [],
//     outputSize: 0,
//     writable: true,
//     destroyed: false,
//     _last: false,
//     chunkedEncoding: false,
//     shouldKeepAlive: true,
//     maxRequestsOnConnectionReached: false,
//     _defaultKeepAlive: true,
//     useChunkedEncodingByDefault: true,
//     sendDate: true,
//     _removedConnection: false,
//     _removedContLen: false,
//     _removedTE: false,
//     strictContentLength: false,
//     _contentLength: null,
//     _hasBody: true,
//     _trailer: '',
//     finished: false,
//     _headerSent: false,
//     _closed: false,
//     socket: [Circular *1],
//     _header: null,
//     _keepAliveTimeout: 5000,
//     _onPendingData: [Function: bound updateOutgoingData],
//     req: [Circular *2],
//     _sent100: false,
//     _expect_continue: false,
//     _maxRequestsPerSocket: 0,
//     [Symbol(kCapture)]: false,
//     [Symbol(kBytesWritten)]: 0,
//     [Symbol(kNeedDrain)]: false,
//     [Symbol(corked)]: 0,
//     [Symbol(kOutHeaders)]: null,
//     [Symbol(errored)]: null,
//     [Symbol(kHighWaterMark)]: 16384,
//     [Symbol(kRejectNonStandardBodyWrites)]: false,
//     [Symbol(kUniqueHeaders)]: null
//   },
//   timeout: 0,
//   [Symbol(async_id_symbol)]: 5,
//   [Symbol(kHandle)]: TCP {
//     reading: true,
//     onconnection: null,
//     _consumed: true,
//     [Symbol(owner_symbol)]: [Circular *1]
//   },
//   [Symbol(lastWriteQueueSize)]: 0,
//   [Symbol(timeout)]: Timeout {
//     _idleTimeout: -1,
//     _idlePrev: null,
//     _idleNext: null,
//     _idleStart: 5022,
//     _onTimeout: null,
//     _timerArgs: undefined,
//     _repeat: null,
//     _destroyed: true,
//     [Symbol(refed)]: false,
//     [Symbol(kHasPrimitive)]: false,
//     [Symbol(asyncId)]: 18,
//     [Symbol(triggerId)]: 14
//   },
//   [Symbol(kBuffer)]: null,
//   [Symbol(kBufferCb)]: null,
//   [Symbol(kBufferGen)]: null,
//   [Symbol(kCapture)]: false,
//   [Symbol(kSetNoDelay)]: true,
//   [Symbol(kSetKeepAlive)]: false,
//   [Symbol(kSetKeepAliveInitialDelay)]: 0,
//   [Symbol(kBytesRead)]: 0,
//   [Symbol(kBytesWritten)]: 0
// },
// httpVersionMajor: 1,
// httpVersionMinor: 1,
// httpVersion: '1.1',
// complete: false,
// rawHeaders: [
//   'Host',
//   'localhost:5000',
//   'Connection',
//   'keep-alive',
//   'sec-ch-ua',
//   '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
//   'sec-ch-ua-mobile',
//   '?0',
//   'User-Agent',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
//   'sec-ch-ua-platform',
//   '"Windows"',
//   'Accept',
//   'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
//   'Sec-Fetch-Site',
//   'same-origin',
//   'Sec-Fetch-Mode',
//   'no-cors',
//   'Sec-Fetch-Dest',
//   'image',
//   'Referer',
//   'http://localhost:5000/',
//   'Accept-Encoding',
//   'gzip, deflate, br',
//   'Accept-Language',
//   'en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7'
// ],
// rawTrailers: [],
// joinDuplicateHeaders: null,
// aborted: false,
// upgrade: false,
// url: '/favicon.ico',
// method: 'GET',
// statusCode: null,
// statusMessage: null,
// client: <ref *1> Socket {
//   connecting: false,
//   _hadError: false,
//   _parent: null,
//   _host: null,
//   _closeAfterHandlingError: false,
//   _readableState: ReadableState {
//     objectMode: false,
//     highWaterMark: 16384,
//     buffer: BufferList { head: null, tail: null, length: 0 },
//     length: 0,
//     pipes: [],
//     flowing: true,
//     ended: false,
//     endEmitted: false,
//     reading: true,
//     constructed: true,
//     sync: false,
//     needReadable: true,
//     emittedReadable: false,
//     readableListening: false,
//     resumeScheduled: false,
//     errorEmitted: false,
//     emitClose: false,
//     autoDestroy: true,
//     destroyed: false,
//     errored: null,
//     closed: false,
//     closeEmitted: false,
//     defaultEncoding: 'utf8',
//     awaitDrainWriters: null,
//     multiAwaitDrain: false,
//     readingMore: false,
//     dataEmitted: false,
//     decoder: null,
//     encoding: null,
//     [Symbol(kPaused)]: false
//   },
//   _events: [Object: null prototype] {
//     end: [Array],
//     timeout: [Function: socketOnTimeout],
//     data: [Function: bound socketOnData],
//     error: [Function: socketOnError],
//     close: [Array],
//     drain: [Function: bound socketOnDrain],
//     resume: [Function: onSocketResume],
//     pause: [Function: onSocketPause]
//   },
//   _eventsCount: 8,
//   _maxListeners: undefined,
//   _writableState: WritableState {
//     objectMode: false,
//     highWaterMark: 16384,
//     finalCalled: false,
//     needDrain: false,
//     ending: false,
//     ended: false,
//     finished: false,
//     destroyed: false,
//     decodeStrings: false,
//     defaultEncoding: 'utf8',
//     length: 0,
//     writing: false,
//     corked: 0,
//     sync: false,
//     bufferProcessing: false,
//     onwrite: [Function: bound onwrite],
//     writecb: null,
//     writelen: 0,
//     afterWriteTickInfo: null,
//     buffered: [],
//     bufferedIndex: 0,
//     allBuffers: true,
//     allNoop: true,
//     pendingcb: 0,
//     constructed: true,
//     prefinished: false,
//     errorEmitted: false,
//     emitClose: false,
//     autoDestroy: true,
//     errored: null,
//     closed: false,
//     closeEmitted: false,
//     [Symbol(kOnFinished)]: []
//   },
//   allowHalfOpen: true,
//   _sockname: null,
//   _pendingData: null,
//   _pendingEncoding: '',
//   server: Server {
//     maxHeaderSize: undefined,
//     insecureHTTPParser: undefined,
//     requestTimeout: 300000,
//     headersTimeout: 60000,
//     keepAliveTimeout: 5000,
//     connectionsCheckingInterval: 30000,
//     joinDuplicateHeaders: undefined,
//     rejectNonStandardBodyWrites: false,
//     _events: [Object: null prototype],
//     _eventsCount: 2,
//     _maxListeners: undefined,
//     _connections: 2,
//     _handle: [TCP],
//     _usingWorkers: false,
//     _workers: [],
//     _unref: false,
//     allowHalfOpen: true,
//     pauseOnConnect: false,
//     noDelay: true,
//     keepAlive: false,
//     keepAliveInitialDelay: 0,
//     highWaterMark: 16384,
//     httpAllowHalfOpen: false,
//     timeout: 0,
//     maxHeadersCount: null,
//     maxRequestsPerSocket: 0,
//     _connectionKey: '6::::5000',
//     [Symbol(IncomingMessage)]: [Function: IncomingMessage],
//     [Symbol(ServerResponse)]: [Function: ServerResponse],
//     [Symbol(kCapture)]: false,
//     [Symbol(async_id_symbol)]: 3,
//     [Symbol(http.server.connections)]: ConnectionsList {},
//     [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
//       _idleTimeout: 30000,
//       _idlePrev: [TimersList],
//       _idleNext: [TimersList],
//       _idleStart: 62,
//       _onTimeout: [Function: bound checkConnections],
//       _timerArgs: undefined,
//       _repeat: 30000,
//       _destroyed: false,
//       [Symbol(refed)]: false,
//       [Symbol(kHasPrimitive)]: false,
//       [Symbol(asyncId)]: 2,
//       [Symbol(triggerId)]: 1
//     },
//     [Symbol(kUniqueHeaders)]: null
//   },
//   _server: Server {
//     maxHeaderSize: undefined,
//     insecureHTTPParser: undefined,
//     requestTimeout: 300000,
//     headersTimeout: 60000,
//     keepAliveTimeout: 5000,
//     connectionsCheckingInterval: 30000,
//     joinDuplicateHeaders: undefined,
//     rejectNonStandardBodyWrites: false,
//     _events: [Object: null prototype],
//     _eventsCount: 2,
//     _maxListeners: undefined,
//     _connections: 2,
//     _handle: [TCP],
//     _usingWorkers: false,
//     _workers: [],
//     _unref: false,
//     allowHalfOpen: true,
//     pauseOnConnect: false,
//     noDelay: true,
//     keepAlive: false,
//     keepAliveInitialDelay: 0,
//     highWaterMark: 16384,
//     httpAllowHalfOpen: false,
//     timeout: 0,
//     maxHeadersCount: null,
//     maxRequestsPerSocket: 0,
//     _connectionKey: '6::::5000',
//     [Symbol(IncomingMessage)]: [Function: IncomingMessage],
//     [Symbol(ServerResponse)]: [Function: ServerResponse],
//     [Symbol(kCapture)]: false,
//     [Symbol(async_id_symbol)]: 3,
//     [Symbol(http.server.connections)]: ConnectionsList {},
//     [Symbol(http.server.connectionsCheckingInterval)]: Timeout {
//       _idleTimeout: 30000,
//       _idlePrev: [TimersList],
//       _idleNext: [TimersList],
//       _idleStart: 62,
//       _onTimeout: [Function: bound checkConnections],
//       _timerArgs: undefined,
//       _repeat: 30000,
//       _destroyed: false,
//       [Symbol(refed)]: false,
//       [Symbol(kHasPrimitive)]: false,
//       [Symbol(asyncId)]: 2,
//       [Symbol(triggerId)]: 1
//     },
//     [Symbol(kUniqueHeaders)]: null
//   },
//   parser: HTTPParser {
//     '0': null,
//     '1': [Function: parserOnHeaders],
//     '2': [Function: parserOnHeadersComplete],
//     '3': [Function: parserOnBody],
//     '4': [Function: parserOnMessageComplete],
//     '5': [Function: bound onParserExecute],
//     '6': [Function: bound onParserTimeout],
//     _headers: [],
//     _url: '',
//     socket: [Circular *1],
//     incoming: [Circular *2],
//     outgoing: null,
//     maxHeaderPairs: 2000,
//     _consumed: true,
//     onIncoming: [Function: bound parserOnIncoming],
//     joinDuplicateHeaders: null,
//     [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
//   },
//   on: [Function: socketListenerWrap],
//   addListener: [Function: socketListenerWrap],
//   prependListener: [Function: socketListenerWrap],
//   setEncoding: [Function: socketSetEncoding],
//   _paused: false,
//   _httpMessage: ServerResponse {
//     _events: [Object: null prototype],
//     _eventsCount: 1,
//     _maxListeners: undefined,
//     outputData: [],
//     outputSize: 0,
//     writable: true,
//     destroyed: false,
//     _last: false,
//     chunkedEncoding: false,
//     shouldKeepAlive: true,
//     maxRequestsOnConnectionReached: false,
//     _defaultKeepAlive: true,
//     useChunkedEncodingByDefault: true,
//     sendDate: true,
//     _removedConnection: false,
//     _removedContLen: false,
//     _removedTE: false,
//     strictContentLength: false,
//     _contentLength: null,
//     _hasBody: true,
//     _trailer: '',
//     finished: false,
//     _headerSent: false,
//     _closed: false,
//     socket: [Circular *1],
//     _header: null,
//     _keepAliveTimeout: 5000,
//     _onPendingData: [Function: bound updateOutgoingData],
//     req: [Circular *2],
//     _sent100: false,
//     _expect_continue: false,
//     _maxRequestsPerSocket: 0,
//     [Symbol(kCapture)]: false,
//     [Symbol(kBytesWritten)]: 0,
//     [Symbol(kNeedDrain)]: false,
//     [Symbol(corked)]: 0,
//     [Symbol(kOutHeaders)]: null,
//     [Symbol(errored)]: null,
//     [Symbol(kHighWaterMark)]: 16384,
//     [Symbol(kRejectNonStandardBodyWrites)]: false,
//     [Symbol(kUniqueHeaders)]: null
//   },
//   timeout: 0,
//   [Symbol(async_id_symbol)]: 5,
//   [Symbol(kHandle)]: TCP {
//     reading: true,
//     onconnection: null,
//     _consumed: true,
//     [Symbol(owner_symbol)]: [Circular *1]
//   },
//   [Symbol(lastWriteQueueSize)]: 0,
//   [Symbol(timeout)]: Timeout {
//     _idleTimeout: -1,
//     _idlePrev: null,
//     _idleNext: null,
//     _idleStart: 5022,
//     _onTimeout: null,
//     _timerArgs: undefined,
//     _repeat: null,
//     _destroyed: true,
//     [Symbol(refed)]: false,
//     [Symbol(kHasPrimitive)]: false,
//     [Symbol(asyncId)]: 18,
//     [Symbol(triggerId)]: 14
//   },
//   [Symbol(kBuffer)]: null,
//   [Symbol(kBufferCb)]: null,
//   [Symbol(kBufferGen)]: null,
//   [Symbol(kCapture)]: false,
//   [Symbol(kSetNoDelay)]: true,
//   [Symbol(kSetKeepAlive)]: false,
//   [Symbol(kSetKeepAliveInitialDelay)]: 0,
//   [Symbol(kBytesRead)]: 0,
//   [Symbol(kBytesWritten)]: 0
// },
// _consuming: false,
// _dumped: false,
// [Symbol(kCapture)]: false,
// [Symbol(kHeaders)]: {
//   host: 'localhost:5000',
//   connection: 'keep-alive',
//   'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
//   'sec-ch-ua-mobile': '?0',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
//   'sec-ch-ua-platform': '"Windows"',
//   accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
//   'sec-fetch-site': 'same-origin',
//   'sec-fetch-mode': 'no-cors',
//   'sec-fetch-dest': 'image',
//   referer: 'http://localhost:5000/',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7'
// },
// [Symbol(kHeadersCount)]: 26,
// [Symbol(kTrailers)]: null,
// [Symbol(kTrailersCount)]: 0
// }
