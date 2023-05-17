// Built-in module: os
const os = require('os');

const userInfo = os.userInfo();

console.log(userInfo);

console.log(`The system uptime is ${os.uptime()}`);

const currentOS = {
    type: os.type(),
    releases: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);