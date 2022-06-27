'use strict';
require('dotenv').config();

const io = require('socket.io-client');
const host = `http://localhost:${process.env.PORT}`;
const { faker } = require('@faker-js/faker');


let ID = faker.datatype.uuid();
let pilot = faker.internet.userName();

const events_airline = io.connect(`${host}/airline`);
const events = io.connect(host);

setInterval(() => {
  let manager1 = `Manager: new flight with ID ${ID} have been scheduled`;
  console.log(manager1);
  events_airline.emit('new-flight');
  events.emit('new-flight');
}, 10000);

events.on('Arrived', manager2);
function manager2() {
  console.log(`Manager: we are greatly thankful for the amazing flight, ${pilot}`);
}