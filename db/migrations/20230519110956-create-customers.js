'use strict';

const { CUSTOMER_TABLE } = require('../models/customer.model')
const { USER_TABLE } = require('../models/user.model')
const { DataTypes, Sequelize } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name',
      },
      phone: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field:'created_at',
        defaultValue: Sequelize.NOW,
      },
      userId:{
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: USER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete:'CASCADE'
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE)
  }
};
