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
          name: 'id_user',
          allowNull: false,
          references: {
            model: models.Users,
            key: 'id'
          },
          onUpdate: 'CASCADE'
        }
      });
     // models.Album.belongsTo(models.Songs);
    }
  }
  Songs.init(
    {
      id_songs: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      url_song: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title_songs: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_user: {
        type: DataTypes.INTEGER,
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
