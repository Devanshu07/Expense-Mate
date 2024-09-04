const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as needed

const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  payer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // References 'Users' table
      key: 'id',
    },
  },
  payee_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // References 'Users' table
      key: 'id',
    },
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  group_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Groups', // References 'Groups' table
      key: 'id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'transactions',
  timestamps: false,
});

module.exports = Transaction;
