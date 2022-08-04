'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
       name:"admin",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       name:"user",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       name:"nonactive",
       createdAt: new Date(),
       updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Roles', null, {});
  }
};
