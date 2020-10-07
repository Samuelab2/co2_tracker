const travels = require('../components/travel/network')

const routes = server => {
  server.use('/travels', travels)
}

module.exports = routes