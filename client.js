import WebSocket from "ws";
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();

const ws = new WebSocket("ws:127.0.0.1:8080");

ws.on("open", () => {
  rl.on("line", (input) => {
    ws.send(input);
    process.stdout.moveCursor(0, -1);
    process.stdout.clearLine();
    console.log("You:", input);
  });

  ws.on("message", (data) => {
    console.log("Received:", data.toString());
  });

  ws.on("close", () => {
    console.log("--WEB SOCKET CLOSED--");
    process.exit(0);
  });
});
