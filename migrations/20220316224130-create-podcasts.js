'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Podcasts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id_user'
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
    await queryInterface.dropTable('Podcasts');
  }
};
