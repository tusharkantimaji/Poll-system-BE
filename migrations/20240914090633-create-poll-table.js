/* eslint-disable no-console */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'Polls',
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
          question: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          options: {
            type: Sequelize.JSONB,
            allowNull: false,
          },
          timeLimit: {
            type: Sequelize.INTEGER,
            allowNull: 60,
          },
          isActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true,
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
      await queryInterface.dropTable('Polls', { transaction });

      transaction.commit();

      return Promise.resolve();
    } catch (error) {
      console.error(error);

      await transaction.rollback();

      return Promise.reject(error);
    }
  },
};
