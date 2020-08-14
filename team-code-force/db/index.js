const { Sequelize } = require('sequelize');
const UserModel = require('./models/User');
const ParkModel = require('./models/Park');
const UserParkHistoryModel = require('./models/UserParkHistory');
const UserParkWishListModel = require('./models/UserParkWishList');

const sequelize = new Sequelize('parksdb', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});

const User = UserModel(sequelize, Sequelize);
const Park = ParkModel(sequelize, Sequelize);
const UserParkHistory = UserParkHistoryModel(sequelize, Sequelize);
const UserParkWishList = UserParkWishListModel(sequelize, Sequelize);

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const syncModels = async () => {
  try {
    await sequelize.sync();
    console.log('Models have been synced successfully.');
  } catch (error) {
    console.error('Unable to sync models:', error);
  }
};

connection();
syncModels();

module.exports = {
  sequelize,
  User,
  Park,
  UserParkHistory,
  UserParkWishList,
};
