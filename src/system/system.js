'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3030;
const ioServer = require('socket.io')(PORT);
const { faker } = require('@faker-js/faker');

const tookOff = ioServer.of('/airline');

tookOff.on('connection', (socket) => {
  socket.on('new-flight', () => {
    tookOff.emit('new-flight');
  });
  socket.on('took-off', flightDetails2);
});

ioServer.on('connection', (socket) => {
  socket.on('new-flight', () => {
    flightDetails1();
    ioServer.emit('new-flight');
  });
  socket.on('Arrived', flightDetails3);
  socket.on('Arrived', () => {
    ioServer.emit('Arrived');
  });
});

function flightDetails1() {
  let flightDetails01 = {
    Flight: {
      event: 'new-flight',
      time: faker.date.past(),
      Details: {
        airLine: 'Qatar Airways',
        destination: faker.address.city(),
        pilot: faker.internet.userName(),
        flightID: faker.datatype.uuid(),
      },
    },
  };
  console.log(flightDetails01);
}
function flightDetails2() {
  let flightDetails02 = {
    Flight: {
      event: 'took_off',
      time: faker.date.past(),
      Details: {
        airLine: 'Qatar Airways',
        destination: faker.address.city(),
        pilot: faker.internet.userName(),
        flightID: faker.datatype.uuid(),
      },
    },
  };
  console.log(flightDetails02);
}
function flightDetails3() {
  let flightDetails03 = {
    Flight: {
      event: 'arrived',
      time: faker.date.past(),
      Details: {
        airLine: 'Qatar Airways',
        destination: faker.address.city(),
        pilot: faker.internet.userName(),
        flightID: faker.datatype.uuid(),
      },
    },
  };
  console.log(flightDetails03);
}