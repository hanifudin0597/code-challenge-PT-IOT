'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
       name: "super admin",
       email:"admin123@gmail.com",
       password: "admin123",
       role_id:1,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       name: "user123",
       email:"user123@gmail.com",
       password: "user123",
       role_id:2,
       createdAt: new Date(),
       updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
