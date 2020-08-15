require('dotenv').config();
const { Sequelize } = require('sequelize');
const UserModel = require('./models/User');
const ParkModel = require('./models/Park');
const UserParkHistoryModel = require('./models/UserParkHistory');
const UserParkWishListModel = require('./models/UserParkWishList');

const { DB_HOST } = process.env || 'localhost';
const { DB_NAME, DB_USER, DB_PASS } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'mysql',
  host: DB_HOST,
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
