'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_users: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      name_users: {
        type: DataTypes.STRING
      },
      password_user: {
        type: DataTypes.STRING
      },
      telephone_users: {
        type: DataTypes.STRING
      },
      role_users: {
        type: DataTypes.STRING
      },
      id_album: {
         allowNull: false,
        type: DataTypes.UUID
      },
      id_contenue: {
         allowNull: false,
        type: DataTypes.UUID
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
    await queryInterface.dropTable('Users');
  }
};