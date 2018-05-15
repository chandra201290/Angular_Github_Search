//server.js
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/Angular_Github_Search'));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/Angular_Github_Search/index.html'));
});
app.listen(process.env.PORT || 8080);
