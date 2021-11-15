'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Chansons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_chanson: {
        allowNull: false,
        type: DataTypes.UUID,
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
    await queryInterface.dropTable('Chansons');
  }
};
