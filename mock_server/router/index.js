const questionRoute = require('./routes/question')
const usersRoute = require('./routes/users')

const routerOption = [
    ...questionRoute,
    ...usersRoute
] 

module.exports = routerOption