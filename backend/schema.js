const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    users: [User]
    expenses: [Expense]
  }

  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Expense {
    id: ID!
    amount: Float!
    description: String!
    createdBy: User!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createExpense(amount: Float!, description: String!, createdBy: ID!): Expense
  }
`);

const root = {
  users: async () => { /* Fetch users from DB */ },
  expenses: async () => { /* Fetch expenses from DB */ },
  createUser: async ({ username, email, password }) => { /* Create user */ },
  createExpense: async ({ amount, description, createdBy }) => { /* Create expense */ },
};

module.exports = { schema, root };
