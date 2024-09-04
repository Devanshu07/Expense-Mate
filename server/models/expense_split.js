const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path as needed

const ExpenseSplit = sequelize.define('ExpenseSplit', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  expense_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Expenses', // References 'Expenses' table
      key: 'id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // References 'Users' table
      key: 'id',
    },
  },
  amount_owed: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'expense_splits',
  timestamps: false,
});

module.exports = ExpenseSplit;
