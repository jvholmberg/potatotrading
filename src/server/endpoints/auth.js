/* eslint-disable */

module.exports = (app) => {

  app.post('/users/auth', (req, res) => {
    const mockFile = require('../../sagas/auth/__mocks__/getJwt.json');
    res.json(mockFile);
  });

  app.get('/users/auth/:refreshToken', (req, res) => {
    const mockFile = require('../../sagas/auth/__mocks__/refreshJwt.json');
    res.json(mockFile);
  });

  app.get('/users/auth', (req, res) => {
    const mockFile = require('../../sagas/auth/__mocks__/validateJwt.json');
    res.json(mockFile);
  });

  app.delete('/users/auth', (req, res) => {
    const mockFile = require('../../sagas/auth/__mocks__/destroyJwt.json');
    res.json(mockFile);
  });
}