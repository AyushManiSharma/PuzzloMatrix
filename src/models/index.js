const User = require('./users');
const Score = require('./scores');

User.hasMany(Score, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

  module.exports = { User, Score };