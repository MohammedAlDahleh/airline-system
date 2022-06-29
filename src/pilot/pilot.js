"use strict";
require("dotenv").config();
const io = require("socket.io-client");
let PORT = process.env.PORT;
let host = `http://localhost:${PORT}`;
let pioletConnection = io.connect(`${host}/airline`);
let pioletConnectionBase = io.connect(`${host}`);

console.log(`piolt listining on ${PORT}`);

pioletConnectionBase.emit("get_all");

pioletConnectionBase.on("new-flight", arriveHandler);
function arriveHandler(payload) {
  payload.events = "arrived";
  console.log(` Pilot: flight with ID ${payload.Details.flightID} has arrived`);
  pioletConnectionBase.emit("flightArrived", payload);
}
pioletConnectionBase.on("flight", (payload) => {
  console.log("piolt base")
  // console.log(payload) 
  console.log(`Pilot:Sorry i didn't catch this flight ID ${payload.payload.Details.flightID}`  );
  pioletConnectionBase.emit("delete",payload)
});
pioletConnection.on("took-off", tookOffHandler);
function tookOffHandler(payload) {
  payload.event = "took-off";
  console.log(` Pilot: flight with ID ${payload.Details.flightID} took-off`);
}