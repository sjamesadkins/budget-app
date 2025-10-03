import express from 'express';

const app = express ();
const port = 4000;

app.get('/health', (req, res) => {
  res.send('{ "status": "ok" }')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

