'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Songs.hasOne(models.Album, {
        foreignKey: {
          name: 'id_album',
          type: DataTypes.UUID,
          allowNull: false
        },
        references: {
          model: models.Album,
          key: 'id_album'
        },
        onUpdate: 'CASCADE'
      });
    }
  }
  Songs.init(
    {
      id_song: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      url_song: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title_song: {
        type: DataTypes.STRING,
        allowNull: false
      },
      genre_song: {
        type: DataTypes.STRING,
        allowNull: false
      },
      munite_song: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Songs'
    }
  );
  return Songs;
};
