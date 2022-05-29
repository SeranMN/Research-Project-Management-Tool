const route = require('express').Router()
const groupController = require('../controller/group.controller');

module.exports = function () {
    route.post('/add', groupController.addGroup);
    route.get('/count/:year', groupController.countGroups);
    return route
}