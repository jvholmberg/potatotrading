/* eslint-disable */

module.exports = (app, latency) => {
  app.post('/auth', (req, res) => latency(() => {
    const mockFile = require('../../sagas/auth/__mocks__/getToken.json');
    res.send(mockFile);
  }));
  
  app.put('/auth/password', (req, res) => latency(() => {
    const mockFile = require('../../sagas/auth/__mocks__/changePassword.json');
    res.send(mockFile);
  }));

  app.get('/auth/:refreshToken', (req, res) => latency(() => {
    const mockFile = require('../../sagas/auth/__mocks__/refreshToken.json');
    res.send(mockFile);
  }));

  app.get('/auth', (req, res) => {
    const mockFile = require('../../sagas/auth/__mocks__/validateToken.json');
    res.send(mockFile);
  });

  app.delete('/auth', (req, res) => latency(() => {
    const mockFile = require('../../sagas/auth/__mocks__/destroyToken.json');
    res.send(mockFile);
  }));
};