import WebSocket from "ws";

const ws = new WebSocket("ws:127.0.0.1:8080");

ws.on("error", console.error);

// ws.on("open", () => {
//   ws.send("message from client");
// });

ws.on("message", (data) => {
  console.log(data.toString());
});

ws.on("close", () => {
  console.log("--WEB SOCKET CLOSED--");
  process.exit();
});

process.stdin.on("data", (data) => {
  ws.send(data);
});
