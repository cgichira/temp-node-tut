const os = require("os");

//Info about current user
const user = os.userInfo();

//System uptime in sec
console.log("system has be up for " + os.uptime() + " seconds");

//current OS
const currentOS = {
  name: os.version(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
