'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('finals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      from: {
        type: Sequelize.STRING,
        references:{
          model:'place',
          key:'from'
        }
      },
      to: {
        type: Sequelize.STRING,
        references:{
          model:'place',
          key:'to'
        }
      },
      route1: {
        type: Sequelize.STRING,
        references:{
          model:'place',
          key:'route1'
        }
      },
      route2: {
        type: Sequelize.STRING,
        references:{
          model:'place',
          key:'route2'
        }
      },
      time: {
        type: Sequelize.INTEGER,
        references:{
          model:'place',
          key:'time'
        }
      },
      driver: {
        type: Sequelize.STRING,
        references:{
          model:'drivers',
          key:'username'
        }
      },
      vehicle: {
        type: Sequelize.STRING,
        references:{
          model:'vehicles',
          key:'model'
        }
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('finals');
  }
};