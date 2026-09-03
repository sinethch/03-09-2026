const express = require('express');
const cors = require('cors');
const productRoutes = require('./modules/products/product.routes');
const { errorHandler } = require('./middleware/error.middleware');

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/products', productRoutes);

app.use(errorHandler);

module.exports = app;
