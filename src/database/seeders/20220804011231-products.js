'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Products', [
      {
       name: "nutri sari",
       description: "Minuman yang segar dan bervitamin",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       name: "Coca cola",
       description: "Minuman bersoda",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       name: "Marimas",
       description: "Minuman dengan harga terjangkau",
       createdAt: new Date(),
       updatedAt: new Date()
     },
      {
       name: "teh botol",
       description: "Minuman asli dari perkebunan teh",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       name: "Nugget",
       description: "Terbuat dari bahan daging ayam",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       name: "Kripik kentang",
       description: "Rasanya gurih dan enak",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       name: "Permen Yupi",
       description: "Rasanya manis dan kenyal",
       createdAt: new Date(),
       updatedAt: new Date()
     },
      {
       name: "Kopi Torabika",
       description: "Kopinya semua kalangan",
       createdAt: new Date(),
       updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Products', null, {});
  }
};
