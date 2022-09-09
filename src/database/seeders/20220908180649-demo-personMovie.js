'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Person_Movie', [{
      person_id: 1,
      movie_id: 1,
      actor: 1,
      director: 0,
      producer: 0
    },
    {
      person_id: 2,
      movie_id: 2,
      actor: 0,
      director: 0,
      producer: 1
    },
    {
      person_id: 3,
      movie_id: 1,
      actor: 0,
      director: 0,
      producer: 1
    },
    {
      person_id: 2,
      movie_id: 3,
      actor: 1,
      director: 0,
      producer: 0
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Person_Movie', null, {});
  }
};
