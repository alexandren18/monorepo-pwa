const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({
    ok: true,
    msg: 'Hello Bootcamp API!'
  });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
