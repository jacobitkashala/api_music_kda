'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Album.hasOne(models.Users, 
        {
        foreignKey: {
          name: 'id_user',
          allowNull: false,
          references: {
            model: models.Users,
            key: 'id'
          },
          onUpdate: 'CASCADE'
        }
      }
      );
      // models.Album.belongsTo(models.Songs);
       models.Album.hasMany(models.Songs,{
        foreignKey: {
          name: 'id_album',
          onUpdate: 'CASCADE'
        }});
      
    }
  }
  Album.init(
    {
      id_album: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      title_album: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url_image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_top: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      contente_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_user:{
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Album'
    }
  );
  return Album;
};
