/* eslint-disable no-console */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'Answers',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          pollId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: {
                tableName: 'Polls',
              },
              key: 'id',
            },
          },
          studentId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: {
                tableName: 'Students',
              },
              key: 'id',
            },
          },
          answer: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
        },
        { transaction },
      );

      transaction.commit();
      return Promise.resolve(true);
    } catch (error) {
      console.error(error);
      await transaction.rollback();
      return Promise.reject(error);
    }
  },

  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('Answers', { transaction });

      transaction.commit();

      return Promise.resolve();
    } catch (error) {
      console.error(error);

      await transaction.rollback();

      return Promise.reject(error);
    }
  },
};
