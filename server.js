const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('This is a rest API for pulling data from the database');
});
app.get('/suppliers', (req, res) => {
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' }
  ];
  res.json(posts);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
