'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {
      username: "baseem",
      password: "abcd",
      createdAt: '2017-11-23 00:00:57',
      updatedAt: '2017-11-23 01:00:57'
    }], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('users', null, {});
  }
};