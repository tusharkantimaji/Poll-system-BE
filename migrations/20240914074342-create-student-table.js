/* eslint-disable no-console */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'Students',
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
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          isKickedOut: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
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
      await queryInterface.dropTable('Students', { transaction });

      transaction.commit();

      return Promise.resolve();
    } catch (error) {
      console.error(error);

      await transaction.rollback();

      return Promise.reject(error);
    }
  },
};
