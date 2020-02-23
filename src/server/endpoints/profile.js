/* eslint-disable */

module.exports = (app, latency) => {
  app.get('/users/:userId/profile', (req, res) => latency(() => {
    const mockFile = require('../../sagas/profile/__mocks__/getProfile.json');
    res.send(mockFile);
  }));

  app.put('/users/:userId/profile', (req, res) => latency(() => {
    const mockFile = require('../../sagas/profile/__mocks__/updateProfile.json');
    res.send(mockFile);
  }));
};