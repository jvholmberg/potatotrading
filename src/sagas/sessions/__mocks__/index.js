/* eslint-disable */

module.exports = (app) => {

  app.post('/sessions', (req, res) => {
    const mockFile = require('./createSession.json');
    res.json(mockFile);
  });

  app.get('/sessions', (req, res) => {
    const mockFile = require('./getSessions.json');
    res.json(mockFile);
  });

  app.get('/sessions/types', (req, res) => {
    const mockFile = require('./getSessionTypes.json');
    res.json(mockFile);
  });
}