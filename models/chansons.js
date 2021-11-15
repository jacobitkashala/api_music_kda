'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chansons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chansons.init(
    {
      id_chanson: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      son_chanson: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name_autor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      genre_chanson: {
        type: DataTypes.STRING,
        allowNull: false
      },
      munite_chanson: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image_chanson: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name_chanson: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Chansons'
    }
  );
  return Chansons;
};
