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
        type: DataTypes.UUID
      },
      name_user: {
        type: DataTypes.STRING,
        allowNull: false
      },
      etat_user:{
        type: DataTypes.STRING,
        allowNull: false
      },
      password_user: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telephone_user: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role_user: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email_user: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      sex_user: {
        allowNull: false,
        type: DataTypes.STRING(1)
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
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Users');
  }
};
