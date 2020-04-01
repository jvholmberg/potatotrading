/* eslint-disable */

module.exports = (app, latency) => {
  app.post('/auth', (req, res) => latency(() => {
    const mockFile = require('../../sagas/auth/__mocks__/getJwt.json');
    res.send(mockFile);
  }));
  
  app.post('/auth/password', (req, res) => latency(() => {
    const mockFile = require('../../sagas/auth/__mocks__/changePassword.json');
    res.send(mockFile);
  }));

  app.get('/auth/:refreshToken', (req, res) => latency(() => {
    const mockFile = require('../../sagas/auth/__mocks__/refreshJwt.json');
    res.send(mockFile);
  }));

  app.get('/auth', (req, res) => {
    const mockFile = require('../../sagas/auth/__mocks__/validateJwt.json');
    res.send(mockFile);
  });

  app.delete('/auth', (req, res) => latency(() => {
    const mockFile = require('../../sagas/auth/__mocks__/destroyJwt.json');
    res.send(mockFile);
  }));
};