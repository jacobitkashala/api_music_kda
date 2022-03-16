'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Songs', 

    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_song: {
        allowNull: false,
        type: DataTypes.UUID
      },
      url_song: {
        type: DataTypes.STRING,
        allowNull: false
      } , title_song: {
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
      },
      id_album: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Album',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      }
    }
    );
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Songs');
  }
};