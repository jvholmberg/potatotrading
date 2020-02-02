/* eslint-disable */

module.exports = (app) => {

  app.post('/sessions', (req, res) => {
    const mockFile = require('../../sagas/sessions/__mocks__/createSession.json');
    res.json(mockFile);
  });

  app.get('/sessions', (req, res) => {
    const mockFile = require('../../sagas/sessions/__mocks__/getSessions.json');
    res.json(mockFile);
  });

  app.get('/sessions/types', (req, res) => {
    const mockFile = require('../../sagas/sessions/__mocks__/getSessionTypes.json');
    res.json(mockFile);
  });
}