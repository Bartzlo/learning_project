const http = require('http')
const nodeStatic = require('node-static')
const file = new nodeStatic.Server('./build', {cache: false})

function accept (req, res) {
  let {headers, method, url} = req
  let body = []

  req.on('error', err => {
    console.error('ERROR: ' + err.stack)
  }).on('data', chunk => {
    body.push(chunk)
  }).on('end', () => {
    file.serve(req, res)
    console.log(new Date().toLocaleString('ru') + ': ' + req.connection.remoteAddress)
  })
}

http.createServer(accept).listen(666)

console.log('Server is listen port 666')

// -----------------------------------------------------------------------

const Sequelize = require('sequelize')
const sequelize = new Sequelize('blog', 'bart', '123QWEasd', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  define: {
    timestamps: false
  }
})

const Player = sequelize.define('player', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
})

const Team = sequelize.define('team', {
  teamName: {
    type: Sequelize.STRING
  }
})

Player.belongsTo(Team)
Team.hasMany(Player)

let modelSync = [Player.sync({force: true}), Team.sync({force: true})]
let team

sequelize
  .authenticate()
  .then(() => {
    return Promise.all(modelSync)
  })
  .then(() => {
    return Team.create({
      teamName: 'Spartac'
    })
  })
  .then((t) => {
    team = t
    return Player.create({
      firstName: 'Vasya',
      lastName: 'Pupkin'
    })
  })
  .then((player) => {
    player.setTeam(team)
  })
// Team.create({
//   teamName: 'Spartac'
// })

// Player.create({
//   firstName: 'Vasya',
//   lastName: 'Pupkin'
// })

// Player.create({
//   firstName: 'Alyosha',
//   lastName: 'Oleg'
// })

// Team.setPlayers([])
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error(new Error(err.message))
  })

// --------------------------------------------------------------------
