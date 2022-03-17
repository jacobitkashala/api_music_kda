'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // models.Users.belongsTo(models.Album);

      // models.Users.belongsTo(models.Podcasts);
    }
  }
  Users.init(
    {
      id_user: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name_user: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password_user: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telephone_user: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role_user: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email_user: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      sex_user: {
        allowNull: false,
        type: DataTypes.STRING(1)
      }
    },
    {
      sequelize,
      modelName: 'Users'
    }
  );
  return Users;
};
