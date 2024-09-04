const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const root = require('./resolvers/root');
const { Server } = require('ws');

const wss = new Server({ noServer: true });

app.use(express.json());
app.use('/api/auth', authRoutes);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));  

  const sequelize = require('./config/db'); // Adjust the path as needed
  const User = require('./models/userModel')
  const Group = require('./models/group');
  const Expense = require('./models/expense');
  const ExpenseSplit = require('./models/expense_split');
  const Transaction = require('./models/transaction');
  
  sequelize.sync({ force: true }) // Use force: true only in development to reset tables
    .then(() => {
      console.log('Database & tables created!');
    })
    .catch(err => console.log(err));
  

// app.listen(4000, () => {
//   console.log('Server running on http://localhost:4000');
// });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    // Broadcast message to all connected clients
    wss.clients.forEach(client => {
      if (client.readyState === ws.OPEN) {
        client.send(message);
      }
    });
  });
});

const server = app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});
