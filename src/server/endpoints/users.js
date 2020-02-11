/* eslint-disable */

module.exports = (app) => {

  app.post('/users', (req, res) => {
    const mockFile = require('../../sagas/users/__mocks__/createUser.json');
    res.json(mockFile);
  });

  app.get('/users/my', (req, res) => {
    const mockFile = require('../../sagas/users/__mocks__/getMyUser.json');
    res.json(mockFile);
  });

  app.get('/users/:userId', (req, res) => {
    const mockFile = require('../../sagas/users/__mocks__/getUser.json');
    res.json(mockFile);
  });

  app.put('/users/:userId', (req, res) => {
    const mockFile = require('../../sagas/users/__mocks__/updateUser.json');
    res.json(mockFile);
  });

  app.delete('/users/:userId', (req, res) => {
    const mockFile = require('../../sagas/users/__mocks__/deleteUser.json');
    res.json(mockFile);
  });
}