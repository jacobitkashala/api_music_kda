'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_song: {
        // primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID
      },
      url_song: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name_autor: {
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
      image_song: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name_song: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Songs');
  }
};
