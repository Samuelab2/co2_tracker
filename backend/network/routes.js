const travels = require('../components/travel/network')

const routes = function (server) {
  server.use('/travels', travels)
}

module.exports = routes