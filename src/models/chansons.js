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
      id_chanson: DataTypes.UUID,
      son_chanson: DataTypes.TEXT,
      name_autor: DataTypes.STRING,
      genre_chanson: DataTypes.STRING,
      munite_chanson: DataTypes.STRING,
      image_chanson: DataTypes.STRING,
      name_chanson: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Chansons'
    }
  );
  return Chansons;
};
