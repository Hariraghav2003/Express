const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const marked = require("marked");
const path = require('path')
const app = express();
const PORT = 3002;
// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// In-memory data store (acting as a database)
let items = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' }
];

// Helper function to find an item by ID
const findItem = (id) => items.find(item => item.id === parseInt(id));

app.get('/', (req, res) => {
  const readmePath = path.join(__dirname, 'README.intermediate.md'); // Adjust path if README is elsewhere

  fs.readFile(readmePath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Could not load README file');

    const html = marked.parse(data);
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Project README</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; max-width: 900px; margin: auto; }
          pre, code { background: #f4f4f4; padding: 5px; border-radius: 5px; }
          h1, h2, h3 { color: #2c3e50; }
        </style>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `);
  });
});

// CREATE - Add a new item
app.post('/items', (req, res) => {
    const { name, description } = req.body;
    const newItem = {
        id: items.length ? items[items.length - 1].id + 1 : 1, 
        name,
        description
    };
    items.push(newItem);
    res.status(201).json({ message: 'Item created successfully', item: newItem });
});

// READ  all 
app.get('/items', (req, res) => {
    res.json({ items });
});

// READ 
app.get('/items/:id', (req, res) => {
    const item = findItem(req.params.id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ item });
});

// UPDATE 
app.put('/items/:id', (req, res) => {
    const item = findItem(req.params.id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    const { name, description } = req.body;
    item.name = name ||  item.name;
    item.description = description ||  item.description;
    res.json({ message: 'Item updated successfully', item });
});

// DELETE 
app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(item => item.id === parseInt(req.params.id));
    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    const removedItem = items.splice(itemIndex, 1);
    res.json({ message: 'Item deleted successfully', item: removedItem });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
