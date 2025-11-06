import express from 'express';
import authRoutes from "./routes/auth.js";

const app = express ();
const port = 4000;

app.use(express.json());
app.use("/auth", authRoutes);

app.get('/health', (req, res) => {
  res.send('{ "status": "ok" }')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

