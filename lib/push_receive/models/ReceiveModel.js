var _ = require("underscore"),
    util = require('util');

var DEFAULT = {
    unique_key: "",
    type: "",
    icon_url: "",
    subject: "",
    description: ""
}

function ReceiveModel(dataObject) {
    this.init(dataObject);
};

ReceiveModel.prototype = {
    init: function(dataObject) {
        _.extend(this, DEFAULT);
        _.extend(this, dataObject);
    }
};

module.exports = ReceiveModel;