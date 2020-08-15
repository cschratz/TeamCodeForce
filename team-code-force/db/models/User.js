module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
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
    image: {
      type: DataTypes.STRING,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
};
