'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    id_users: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
    name_users: {
        type: DataTypes.STRING,
        allowNull: false
      },
    password_user: {
        type: DataTypes.STRING,
        allowNull: false
      },
    telephone_users: {
        type: DataTypes.STRING,
        allowNull: false
      },
    role_users: {
        type: DataTypes.STRING,
        allowNull: false
      },
    id_album: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
    id_contenue: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
      }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};