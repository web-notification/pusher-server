var ReceiveModel = require("../models/ReceiveModel");

exports = module.exports;

exports.push = function(req, res) {
    var receiveData = new ReceiveModel(req.body);

    console.log(receiveData);

    res.send(JSON.stringify(receiveData));
};