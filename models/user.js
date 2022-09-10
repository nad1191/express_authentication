'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args:[1,99],
          msg:'Name must be between 1 and 99 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args:[1,99],
          msg:'Email must be between 1 and 99 characters'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args:[1,99],
          msg:'Name must be between 1 and 99 characters'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};