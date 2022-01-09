const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return res.end('welcome homepa')
  }

  if (req.url === '/about') {
    return res.end('welcome about')
  }

  res.end(`<h1>Opps!</h1>
  <p>No page</p>
  <a href="/">back home </a> `)
})

server.listen(5000)
