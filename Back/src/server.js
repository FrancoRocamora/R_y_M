const express = require('express')
const PORT = 3001
const server = express();
const router = require('./routes')
const cors = require('cors')


server.use(cors())
server.use(express.json())

server.use('/rickandmorty', router)

/*server.listen(PORT, () => {
    console.log(`Listening in ${PORT}`)
})*/

module.exports = server;