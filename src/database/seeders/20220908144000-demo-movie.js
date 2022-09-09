'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Movies', [{
      title: 'Memento',
      year: '2010-10-04 00:00:00'
    }, {
      title: 'The Big Lebowski',
      year: '2010-10-04 00:00:00'
    },
    {
      title: 'Stalins death',
      year: '2010-10-04 00:00:00'
    },
    {
      title: 'Inception',
      year: '2010-10-04 00:00:00'
    },
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});

  }
};
