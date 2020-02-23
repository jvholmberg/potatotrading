/* eslint-disable */

module.exports = (app, latency) => {
  app.post('/users/auth', (req, res) => latency(() => {
    const mockFile = require('../../sagas/auth/__mocks__/getJwt.json');
    res.send(mockFile);
  }));

  app.get('/users/auth/:refreshToken', (req, res) => latency(() => {
    const mockFile = require('../../sagas/auth/__mocks__/refreshJwt.json');
    res.send(mockFile);
  }));

  app.get('/users/auth', (req, res) => {
    const mockFile = require('../../sagas/auth/__mocks__/validateJwt.json');
    res.send(mockFile);
  });

  app.delete('/users/auth', (req, res) => latency(() => {
    const mockFile = require('../../sagas/auth/__mocks__/destroyJwt.json');
    res.send(mockFile);
  }));
};