const User = require('./users');
const Score = require('./scores');

new User(Score, {
    foreignKey: 'user_id',
  });

  module.exports = { User, Score };