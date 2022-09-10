'use strict';
const bcrypt = require('bcryptjs');


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

user.addHook('beforeCreate', (pendingUser) => {
  let hash = bcrypt.hashSync(pendingUser.password, 12);
  pendingUser.password = hash;
});

user.prototype.validatePassword = function(typedPassword){
  let isCorrectPassword = bcrypt.compareSync(typedPassword, this.password); //boolean

  return isCorrectPassword;
}

user.prototype.toJSON = function(){
  let userData = this.get();
  delete userData.password; //this does not mean it's deleted from the database, only to view user

  return userData;
}



  return user;
};