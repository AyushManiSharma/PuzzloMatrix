const sequelize = require('../config/connection');
const { users, scores } = require('../models');

const studentSeedData = require('./studentSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const student = await users.bulkCreate(studentSeedData, {
    individualHooks: true,
    returning: true,
  });
};

seedDatabase();
