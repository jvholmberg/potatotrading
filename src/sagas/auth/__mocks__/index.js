/* eslint-disable */

module.exports = (app) => {

  app.post('/users/auth', (req, res) => {
    const mockFile = require('./getJwt.json');
    res.json(mockFile);
  });

  app.get('/users/auth/:refreshToken', (req, res) => {
    const mockFile = require('./refreshJwt.json');
    res.json(mockFile);
  });

  app.get('/users/auth', (req, res) => {
    const mockFile = require('./validateJwt.json');
    res.json(mockFile);
  });

  app.delete('/users/auth', (req, res) => {
    const mockFile = require('./destroyJwt.json');
    res.json(mockFile);
  });
}