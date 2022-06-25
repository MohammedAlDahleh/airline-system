'use strict';

const events = require('./events')
const { faker } = require('@faker-js/faker');

require('./pilot/pilot');
require('./system/system');

let ID = faker.datatype.uuid();
let pilot = faker.internet.userName();

setInterval(() => {
  let manager1 = `Manager: new flight with ID ${ID} have been scheduled`;
  console.log(manager1);
  events.emit('new-flight', manager1);
}, 10000);

events.on('Arrived', manager2);
function manager2() {
  console.log(`Manager: we are greatly thankful for the amazing flight, ${pilot}`);
  console.log('**********************************************');
}