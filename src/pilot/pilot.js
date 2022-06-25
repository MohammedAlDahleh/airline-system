'use strict';

const events = require('../events');
const { faker } = require('@faker-js/faker');
require('../system/system');

let ID = faker.datatype.uuid();

events.on('new-flight', pilot);
function pilot() {
  setTimeout(() => {
    let tookOff = `Pilot: flight with ID ${ID} took-off`;
    console.log(tookOff);
    events.emit('took-off', tookOff);
  }, 4000);

  setTimeout(() => {
    let arrived = `Pilot: flight with ID ${ID} has arrived`;
    console.log(arrived);
    events.emit('Arrived', arrived);
  }, 7000);

}