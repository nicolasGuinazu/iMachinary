'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('People', [{
      name: 'Guy',
      last_name: 'Pearce',
      age: 54
    },
    {
      name: 'Steve',
      last_name: 'Buscemi',
      age: 64
    },
    {
      name: 'Cristopher',
      last_name: 'Nolan',
      age: 52
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
