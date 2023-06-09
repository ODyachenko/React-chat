const exppress = require('express');
const app = exppress();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

const rooms = new Map();

app.get('/rooms', (req, res) => {
  res.json(rooms);
});

io.on('connection', (socket) => {
  console.log('user connected:', socket.id);
});

server.listen(9999, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log('Server started!');
});
