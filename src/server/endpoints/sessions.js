/* eslint-disable */

module.exports = (app, latency) => {
  app.post('/sessions', (req, res) => latency(() => {
    const mockFile = require('../../sagas/sessions/__mocks__/createSession.json');
    res.send(mockFile);
  }));

  app.get('/sessions', (req, res) => latency(() => {
    const mockFile = require('../../sagas/sessions/__mocks__/getSessions.json');
    res.send(mockFile);
  }));

  app.get('/sessions/types', (req, res) => latency(() => {
    const mockFile = require('../../sagas/sessions/__mocks__/getSessionTypes.json');
    res.send(mockFile);
  }));
};