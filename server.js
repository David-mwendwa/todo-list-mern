import dotev from 'dotenv';
dotev.config();
import express from 'express';
const app = express();

import connectDB from './db/connectDB.js';

import todoRouter from './routes/todoRoutes.js';

// middlewares
app.use(express.json());

// routes
app.use('/api/v1/todos', todoRouter);

// connection
const port = process.env.PORT || 5000;
(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
})();
