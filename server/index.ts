import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes/routes';

import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.get('/', (_, res: Response) => {
  res.send('Server working!');
});

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

export default app;
