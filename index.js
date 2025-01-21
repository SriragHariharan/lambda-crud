const express = require('express');
const serverlessExpress = require('@vendia/serverless-express');

const app = express();
app.use(express.json());

// In-memory data store (for demonstration)
let items = [];
let idCounter = 1;

// Create a new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  const newItem = { id: idCounter++, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Read a single item by ID
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// Update an item by ID
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const itemIndex = items.findIndex(i => i.id === parseInt(id, 10));
  if (itemIndex === -1) return res.status(404).json({ error: 'Item not found' });

  items[itemIndex] = { id: parseInt(id, 10), name, description };
  res.json(items[itemIndex]);
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex(i => i.id === parseInt(id, 10));
  if (itemIndex === -1) return res.status(404).json({ error: 'Item not found' });

  items.splice(itemIndex, 1);
  res.status(204).send();
});

// Export the app to be used with serverless-express
module.exports.handler = serverlessExpress({ app });
