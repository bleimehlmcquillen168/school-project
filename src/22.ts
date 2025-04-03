const express = require('express');
const app = express();

app.get('/data', (req, res) => {
  const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
