const User = require('./users');
const Score = require('./scores');

User.hasMany(Score, {
    foreignKey: 'user_id',
  });

  module.exports = { User, Score };