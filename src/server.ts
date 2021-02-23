import dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';
import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json())
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
