module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Park', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });
};
