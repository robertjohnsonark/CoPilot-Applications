using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;

namespace SignalRChat.Hubs
{
    public class Message
    {
        public string Body { get; set; } = "";
        public int Length { get; set; } = 0;
    }

    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            System.Diagnostics.Debug.WriteLine($"{message} - {message.Length}");
            var json = JsonConvert.SerializeObject(message, Formatting.Indented);
            await Clients.All.SendAsync("ReceiveMessage", user, json);
        }
    }
}
