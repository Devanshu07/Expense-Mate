const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path as needed

const Group = sequelize.define('Group', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_by: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // References 'Users' table
      key: 'id',
    },
  },
}, {
  tableName: 'groups',
  timestamps: false,
});

module.exports = Group;
