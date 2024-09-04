const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { Pool } = require('pg');
const { schema, root } = require('./schema');
const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
  expiresIn: '1h',
});




const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect().then(() => {
  console.log('Connected to the database');
}).catch(err => console.error('Database connection error', err));

const app = express();

// GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Root resolver
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Unauthorized' });
        req.user = decoded;
        next();
      });
    } else {
      res.status(401).json({ message: 'No token provided' });
    }
};
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
  

app.listen(4000, () => console.log('Server running on http://localhost:4000/graphql'));
