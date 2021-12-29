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
      id_user: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      name_user: {
        type: DataTypes.STRING
      },
      password_user: {
        type: DataTypes.STRING
      },
      telephone_user: {
        type: DataTypes.STRING
      },
      role_user: {
        type: DataTypes.STRING
      },
      email_user: {
         allowNull: false,
        type: DataTypes.STRING
      },
      // id_contenue: {
      //    allowNull: false,
      //   type: DataTypes.UUID
      // },
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