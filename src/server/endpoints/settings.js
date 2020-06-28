/* eslint-disable */

module.exports = (app, latency) => {
    app.get('/settings', (req, res) => latency(() => {
      const mockFile = require('../../sagas/settings/__mocks__/getSettings.json');
      res.send(mockFile);
    }));
      
    app.put('/settings/privacy', (req, res) => latency(() => {
      const mockFile = require('../../sagas/settings/__mocks__/updatePrivacySettings.json');
      res.send(mockFile);
    }));
      
    app.put('/settings/notifications', (req, res) => latency(() => {
      const mockFile = require('../../sagas/settings/__mocks__/updateNotificationsSettings.json');
      res.send(mockFile);
    }));
      
    app.put('/settings/graphs', (req, res) => latency(() => {
      const mockFile = require('../../sagas/settings/__mocks__/editGraphsSettings.json');
      res.send(mockFile);
    }));
};