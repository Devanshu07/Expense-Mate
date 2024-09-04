const { getUserById, createUser } = require('../models/userModel');
const { createGroup } = require('../models/groupModel');
const { createExpense } = require('../models/expenseModel');

const root = {
  users: async () => { /* Fetch users from DB */ },
  createUser: async ({ username, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return createUser(username, email, hashedPassword);
  },
  createGroup: async ({ name, createdBy }) => {
    return createGroup(name, createdBy);
  },
  createExpense: async ({ groupId, amount, description, paidBy }) => {
    return createExpense(groupId, amount, description, paidBy);
  },
};

module.exports = root;
