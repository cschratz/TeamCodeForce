module.exports = (sequelize, DataTypes) => {
  return sequelize.define('UserParkHistory', {
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    id_park: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Park',
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
};
