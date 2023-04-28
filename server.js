const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('This is a rest API for pulling data from the database');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow any origin to access the resource
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Set the allowed headers
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Set the allowed HTTP methods
  next();
});

app.get('/suppliers', (req, res) => {
  const posts = [
    { id: 1, name: 'Gilbert', phone: '1234567890', email: 'ngadugilbert18@gmail.com', address: 'Kampala' },
    { id: 2, name: 'John', phone: '1234567890', email: 'ngadugilbert18@gmail.com', address: 'Kampala' },
    { id: 3, name: 'Benjamin', phone: '1234567890', email: 'ngadugilbert18@gmail.com', address: 'Kampala' },
    { id: 4, name: 'Frank', phone: '1234567890', email: 'ngadugilbert18@gmail.com', address: 'Kampala' },
    { id: 5, name: 'James', phone: '1234567890', email: 'ngadugilbert18@gmail.com', address: 'Kampala' },
    
  ];
  res.json(posts);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
