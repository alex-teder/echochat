import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  wss.clients.forEach((client) => client.send("--USER CONNECTED--"));

  ws.on("message", (data) => {
    wss.clients.forEach((client) => {
      if (client !== ws) {
        client.send(data);
      }
    });
  });

  ws.on("close", () => {
    wss.clients.forEach((client) => client.send("--USER LEFT THE CHANNEL--"));
  });

  ws.on("error", console.error);
});
