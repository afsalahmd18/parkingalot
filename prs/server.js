require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/srm_parking';

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/areas', require('./routes/areas'));
app.use('/api/reservations', require('./routes/reservations'));
app.use('/api/qr', require('./routes/qr'));
app.use('/api/feedback', require('./routes/feedback'));

// simple health
app.get('/api/health', (req, res) => res.json({ ok: true, ts: Date.now() }));

io.on('connection', (socket) => {
  console.log('socket connected', socket.id);
  socket.on('disconnect', () => console.log('socket disconnected', socket.id));
});

// expose io to routes
app.set('io', io);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
