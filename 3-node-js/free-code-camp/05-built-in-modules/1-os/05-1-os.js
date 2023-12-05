const os = require('os');
const { userInfo } = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);

/*
    {
    uid: -1,
    gid: -1,
    username: 'User',
    homedir: 'C:\\Users\\User',
    shell: null
    }
    The System Uptime is 281031.375 seconds
    {
    name: 'Windows_NT',
    release: '10.0.19045',
    totalMem: 17098358784,
    freeMem: 2430853120
    }
*/