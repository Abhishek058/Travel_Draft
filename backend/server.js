import express from 'express';
import postsRouter from './routes/posts.js';
import connectDB from './config/db.js';
import cors from 'cors';
import compression from 'compression';
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

connectDB();

app.use('/api/posts', postsRouter);

app.get('/', (req, res) => {
  res.send('Backend accessible ');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
