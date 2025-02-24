const http = require('http');
const app = require('./app');

// Server
const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port, () => console.log(`Server running on port ${port}`));
