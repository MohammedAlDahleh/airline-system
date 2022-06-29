'use strict';
require('dotenv').config();
const io = require('socket.io-client');
let PORT =process.env.PORT
let host = `http://localhost:${PORT}/`;


const { v4: uuidv4 } = require('uuid');
const {faker} = require('@faker-js/faker');

const managerConnection = io.connect(host);

console.log(`manager listing on port ${PORT}`);

setInterval(() => {
    let pioletName = faker.name.findName();
let destination=faker.address.cityName();


    let flight=
    {
        events:"new-flight",
        time: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        Details:{
            airLine: 'Amman Airlines',
            flightID:uuidv4(),
            pioletName:pioletName,
            destination:destination
        },        
    }
    console.log(`Manager: new flight with ID ${flight.Details.flightID} have been scheduled`);
    console.log(`Manager: we’re greatly thankful for the amazing flight, ${flight.Details.pioletName}`)
    managerConnection.emit("new-flight",flight);
    
},10000)