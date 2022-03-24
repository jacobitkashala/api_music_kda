'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Podcasts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Podcasts.hasOne(models.Users, {
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
    }
  }
  Podcasts.init(
    {
      id_podcast: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      url_image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url_song: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title_podcast: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name_media: {
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
      modelName: 'Podcasts'
    }
  );
  return Podcasts;
};
