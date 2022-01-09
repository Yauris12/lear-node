const os = require('os')

//ifor about cuurent user

const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds

console.log(`they system uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMen: os.totalmem(),
  freeMen: os.freemem(),
}

console.log(currentOS)
