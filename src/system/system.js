'use strict';

const events = require("../events");
const { faker } = require('@faker-js/faker');
require('../pilot/pilot');

events.on('new-flight', flightDetails1);
events.on('took-off', flightDetails2);
events.on('Arrived', flightDetails3);


function flightDetails1() {
  let flightDetails01 = {
    Flight: {
      event: 'new-flight',
      time: faker.date.past(),
      Details: {
        airLine: 'Air Arabia Airlines',
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
        airLine: 'Air Arabia Airlines',
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
        airLine: 'Air Arabia Airlines',
        destination: faker.address.city(),
        pilot: faker.internet.userName(),
        flightID: faker.datatype.uuid(),
      },
    },
  };
  console.log(flightDetails03);
}