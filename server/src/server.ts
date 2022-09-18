import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json([
    { id: 1, name: 'Jonathan' },
    { id: 2, name: 'Vinicius' },
    { id: 3, name: 'Thaise' },
  ]);
});

app.listen(3333, () => console.log('Server is running'));
