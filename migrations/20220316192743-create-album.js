'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
      etat_album:{
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
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
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
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Albums');
  }
};
