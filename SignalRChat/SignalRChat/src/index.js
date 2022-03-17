"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/main.css");
var signalR = require("@microsoft/signalr");
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
var divMessages = document.querySelector("#divMessages");
var tbMessage = document.querySelector("#tbMessage");
var btnSend = document.querySelector("#btnSend");
var username = new Date().getTime();
var connection = new signalR.HubConnectionBuilder()
    .withUrl("/hub")
    .build();
connection.start().catch(function (err) { return document.write(err); });
connection.on("messageReceived", function (username, message) {
    var messageObject = JSON.parse(message);
    console.log("messageReceived: " + messageObject.Body);
    var messageContainer = document.createElement("div");
    messageContainer.innerHTML =
        "<div class=\"message-author\">".concat(username, "</div><div>").concat(messageObject.Body, "</div>");
    divMessages.appendChild(messageContainer);
    divMessages.scrollTop = divMessages.scrollHeight;
});
tbMessage.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        send();
    }
});
btnSend.addEventListener("click", send);
//function send() {
//    connection.send("newMessage", username, tbMessage.value)
//        .then(() => tbMessage.value = "");
//}
function send() {
    var msg = new Message();
    msg.Body = tbMessage.value;
    msg.Length = tbMessage.value.length;
    connection.send("newMessage", username, msg)
        .then(function () { return tbMessage.value = ""; });
}
