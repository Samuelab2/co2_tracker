const travels = require('../components/travel/network')
const conveyance = require('../components/conveyance/network')

const routes = server => {
  server.use('/travels', travels)
  server.use('/conveyance', conveyance)
}

module.exports = routes