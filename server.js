import { WebSocketServer } from "ws";

console.clear();

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("NEW CONNECTION");

  ws.on("message", (data) => {
    wss.clients.forEach((client) => {
      if (client !== ws) {
        client.send(data);
      }
    });
  });

  ws.on("close", () => console.log("USER LEFT"));
});
