const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}

  Users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      notNull: false,
    },
    username: {
      type: DataTypes.STRING,
      notNull: false,
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
