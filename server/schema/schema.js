const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Group {
    id: ID!
    name: String!
    createdBy: User!
  }

  type Expense {
    id: ID!
    groupId: ID!
    amount: Float!
    description: String
    paidBy: User!
    createdAt: String!
  }

  type Query {
    users: [User]
    groups: [Group]
    expenses: [Expense]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createGroup(name: String!, createdBy: ID!): Group
    createExpense(groupId: ID!, amount: Float!, description: String, paidBy: ID!): Expense
  }
`);

module.exports = schema;
