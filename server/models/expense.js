const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path as needed

const Expense = sequelize.define('Expense', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  group_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Groups', // References 'Groups' table
      key: 'id',
    },
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  paid_by: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // References 'Users' table
      key: 'id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'expenses',
  timestamps: false,
});

module.exports = Expense;
