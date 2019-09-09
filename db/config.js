const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('ganesha', 'ganesha', 'ganesha', {
  host: 'localhost',
  dialect:  'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;

// Option 2: Passing a connection URI
