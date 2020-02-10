/* eslint-disable */

module.exports = (app) => {

  app.get('/users/:userId/profile', (req, res) => {
    const mockFile = require('../../sagas/profile/__mocks__/getProfile.json');
    res.json(mockFile);
  });

  app.put('/users/:userId/profile', (req, res) => {
    const mockFile = require('../../sagas/profile/__mocks__/updateProfile.json');
    res.json(mockFile);
  });
}