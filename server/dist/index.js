import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.get('/', (_, res) => {
  res.send('Server working!');
});
app.use('/', routes);
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
export default app;
