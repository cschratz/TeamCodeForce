const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('parksdb', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  googleId: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const Park = sequelize.define('Park', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const UserParkHistory = sequelize.define('UserParkHistory', {
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  id_park: {
    type: DataTypes.INTEGER,
    references: {
      model: Park,
      key: 'id',
    },
  },
  comment: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
  favorite: {
    type: DataTypes.BOOLEAN,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

const UserParkWishList = sequelize.define('UserParkWishList', {
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  id_park: {
    type: DataTypes.INTEGER,
    references: {
      model: Park,
      key: 'id',
    },
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

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
