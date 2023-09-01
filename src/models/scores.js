const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connections.js');

class Score {}

new Score (
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
          name: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'name',
              }
          },
          category:
          {
            type: DataTypes.STRING,
            allowNull: false,
          },
          score: {
            type: DataTypes.INTEGER,
            allowNull: true,
          }
          //update Date & Time
    }
);

module.exports = Score;