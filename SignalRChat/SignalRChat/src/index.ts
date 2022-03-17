import "./css/main.css";
import * as signalR from "@microsoft/signalr";

class Message {
    Body: string;
    Length: number;
}

const divMessages: HTMLDivElement = document.querySelector("#divMessages");
const tbMessage: HTMLInputElement = document.querySelector("#tbMessage");
const btnSend: HTMLButtonElement = document.querySelector("#btnSend");
const username = new Date().getTime();

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/hub")
    .build();

connection.start().catch(err => document.write(err));

connection.on("messageReceived", (username: string, message: any) => {
    let messageObject = JSON.parse(message);

    console.log("messageReceived: " + messageObject.Body);

    let messageContainer = document.createElement("div");

    messageContainer.innerHTML =
        `<div class="message-author">${username}</div><div>${messageObject.Body}</div>`;

    divMessages.appendChild(messageContainer);
    divMessages.scrollTop = divMessages.scrollHeight;
});

tbMessage.addEventListener("keyup", (e: KeyboardEvent) => {
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
        .then(() => tbMessage.value = "");
}
