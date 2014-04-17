var SocketManager = require("socket-manager");

exports = module.exports;

exports.push = function(req, res) {
    var data = req.body;

    var socket = SocketManager.getSocket(data.uniqueId);

    if(socket != null) {
        socket.emit("receivePushMessage", {
            icon: data.icon,
            subject: data.subject,
            description: data.description,
            url : data.url
        });
    };

    res.send(JSON.stringify({result:"success"}));
};