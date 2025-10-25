import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
