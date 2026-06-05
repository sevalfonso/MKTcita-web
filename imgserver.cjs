const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.end(); return; }
  if (req.method === 'POST') {
    let body = '';
    req.on('data', d => body += d);
    req.on('end', () => {
      const base64 = body.replace(/^data:image\/png;base64,/, '');
      fs.writeFileSync('public/app-screenshot.png', Buffer.from(base64, 'base64'));
      console.log('SAVED', Buffer.from(base64,'base64').length, 'bytes');
      res.end('ok');
      server.close();
    });
  }
});
server.listen(7788, () => console.log('LISTENING 7788'));
