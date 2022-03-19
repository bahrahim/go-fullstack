const http = require('http')

const server = http.createServer((req, res) => {
    res.end(" voici la rep du server et l'ecoute marche toujours!")
})

server.listen(process.env.PORT || 3000)